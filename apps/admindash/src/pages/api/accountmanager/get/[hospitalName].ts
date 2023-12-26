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
          const user = await prisma.user.findUnique({
            where: {email: email as string},
            include: {userserverConfigs: true}
          });
          if (!user) {
            res.status(400).json({error: 'No user found'})
          }
         else
          {
              const userServerConfig = user.userserverConfigs.find((userServerConfig) => userServerConfig.serverConfigId === serverConfig.id);
               if (!userServerConfig) {
                res.status(400).json({error: 'No user server config found'})
                }
              else
              {
                    const myheaders = await openmrsSessionManager.initializeSession({username:userServerConfig.username, password:userServerConfig.password, baseUrl: serverConfig.basePath});
                     if (!myheaders)
                    {
                        res.status(400).json({error: 'Could not initialize session'});
                    }
                    else
                    {

                        const openmrsuser = await userManager.searchUserByUuid(userServerConfig.userUUID, myheaders, serverConfig.basePath);
                        if(openmrsuser)
                        {
                            const provider = userServerConfig.providerUUID ? userServerConfig.providerUUID :  null;
                             if(!provider)
                             {
                                    const newProvider = await userManager.createProvider(openmrsuser.person.uuid as string, myheaders, serverConfig.basePath);
                                    await prisma.userServerConfig.update({where: {id: userServerConfig.id}, data: {providerUUID: newProvider.uuid as string, personUUID: openmrsuser.person.uuid as string}})
                             }

                            res.status(200).json({user: openmrsuser});
                            
                        }
                        else {
                            res.status(400).json({error: 'No user found'});
                            
                        }
                    }
                    
                  
              }
              
          } 
            
      }
      else  
      {
        res.status(400).json({error: 'No server config found'});
    }
    
} catch (error) {
    res.status(400).json({error: error})
} 
}
