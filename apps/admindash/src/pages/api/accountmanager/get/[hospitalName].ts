import {NextApiRequest, NextApiResponse} from 'next';
import { openmrsSessionManager, userManager } from 'fhirr4';
import prisma from "../../../../lib/db";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {

try {

    const hospitalName =  req.query.hospitalName;
    const email = JSON.parse(req.body).email;
    const serverConfig = await prisma.serverConfig.findUnique({where: {hospitalName: hospitalName as string}})
      if(serverConfig?.locationUuid)
      {
          const user = await prisma.user.findUnique({where: {email: email as string}})
          if(user)
          {
              const userServerConfig = await prisma.userServerConfig.findFirst({where: {userId: user.id, serverConfigId: serverConfig.id}});
              
              if(userServerConfig)
              {
                    const myheaders = await openmrsSessionManager.initializeSession({username:userServerConfig.username, password:userServerConfig.password, baseUrl: serverConfig.basePath});
                    if (myheaders)
                    {

                        const openmrsuser = await userManager.searchUserByUuid(userServerConfig.userUUID, myheaders, serverConfig.basePath);
                        if(openmrsuser)
                        { 
                            res.status(200).json({user: openmrsuser});
                            
                        }
                        else {
                            res.status(400).json({error: 'No user found'});
                            
                        }
                    }
                    else {
                        res.status(400).json({error: 'Could not initialize session'});
                        
                    }
                  
              }
              else {
                  res.status(400).json({error: 'No user server config found'})
              }
          } 
      }
      else {
          res.status(400).json({error: 'No location uuid found please create a location first'})
      }
    
} catch (error) {
    res.status(400).json({error: error})
} 
}
