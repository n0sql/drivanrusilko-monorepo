import type { NextApiRequest, NextApiResponse } from "next";
import { openmrsSessionManager,  userManager} from 'fhirr4';
import { generate } from 'generate-password';
import getServerSession from '../../../../lib/getServerSession';
import prisma from "../../../../lib/db";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const session = await getServerSession(req, res);
    if (!(session)) {
        res.status(401).json({error: 'Not authorized'})
    }
    const user = await prisma.user.findUnique({where: {email: session?.user?.email as string}})
    if (!user) {
        res.status(401).json({error: 'Not authorized'})
    }
    const {locationName, person} = JSON.parse(req.body);
    if (!locationName || !person) {
        res.status(400).json({error: 'Missing data'})
    };

    const serverConfig  = await prisma.serverConfig.findUnique({where: {hospitalName: locationName}});
     if (serverConfig?.locationUuid)
     {
        const myheaders = await openmrsSessionManager.initializeSession({username:serverConfig.username, password:serverConfig.password, baseUrl: serverConfig.basePath});
        if (!myheaders)
        {
            res.status(400).json({error: 'Could not initialize session'});
        }
        else
        {
          const newPerson = await userManager.createPerson(person, myheaders, serverConfig.basePath);
          if (!newPerson) {
            res.status(400).json({error: 'Could not create person'});
          }
          else
          {
            const password = generate({ length: 10, numbers: true, uppercase: true, lowercase: true, symbols: false });
            const newUserData = {
                username:user?.name as string,
                person: newPerson.uuid,
                password: password,                                                    
            }
            const myheaders2 = await openmrsSessionManager.initializeSession({username:serverConfig.username, password:serverConfig.password, baseUrl: serverConfig.basePath});
           if(myheaders2)
           {
              const newUser = await userManager.createUserFromPerson(newUserData, myheaders2, serverConfig.basePath);
              if(newUser)
              {
                
                const newProvider = await userManager.createProvider(newPerson.uuid as string, myheaders2, serverConfig.basePath);
                if(newProvider)
                {
                  const userServerConfig = await prisma.userServerConfig.create({
                    data: {
                      user: {
                        connect: {
                          id: user?.id
                        }}, 
                      serverConfig: {
                        connect: {
                          id: serverConfig.id
                        }},
                      username: newUser.username,
                      locationUUID: serverConfig.locationUuid,
                      userUUID: newUser.uuid as string,
                      password: password,
                      personUUID: newPerson.uuid as string,
                      providerUUID: newProvider.uuid as string,
                    }});

                  if(userServerConfig)
                  {
                      res.status(200).json({userServerConfig: userServerConfig});
                  }
                  else{
                    res.status(200).json({warning: 'Could not create user server config'});
                  }
                }
                else{
                  res.status(200).json({warning: 'Could not create provider'});
                }
              }
              else{
                res.status(400).json({error: 'Could not create user'});
              }
           }
            else {
           res.status(400).json({error: 'Could not initialize session  for user creation'});
            }
          }
         
       }
     
     } 
    else 
     {
      res.status(400).json({error: 'No server config found'});
     }
}