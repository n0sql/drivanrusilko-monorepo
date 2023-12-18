
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
    const {locationName, person} = JSON.parse(req.body)
    const serverConfig  = await prisma.serverConfig.findUnique({where: {hospitalName: locationName}})
     if ( serverConfig?.username && serverConfig?.password && serverConfig?.locationUuid)
     {
        const myheaders = await openmrsSessionManager.initializeSession({username:serverConfig.username, password:serverConfig.password, baseUrl: serverConfig.basePath});
        if (myheaders)
        {
          const newPerson = await userManager.createPerson(person, myheaders, serverConfig.basePath);
          console.log(newPerson, "newPerson");
          if(newPerson)
          {
            const password = generate({ length: 10, numbers: true });
            const newUserData = {
                username:user?.name as string,
                person: newPerson.uuid,
                password: password,                                                    
                roles: ["8d94f852-c2cc-11de-8d13-0010c6dffd0f","8d94f280-c2cc-11de-8d13-0010c6dffd0f"], 
            }
            const myheaders2 = await openmrsSessionManager.initializeSession({username:serverConfig.username, password:serverConfig.password, baseUrl: serverConfig.basePath});
           if(myheaders2)
           {
            const newUser = await userManager.createUserFromPerson(newUserData, myheaders2, serverConfig.basePath);
            console.log(newUser, "newUser");
            if(newUser)
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
                    password: password
                  }});

                if(userServerConfig)
                {
                    res.status(200).json({userServerConfig: userServerConfig});
                }
            }

            res.status(400).json({error: 'Could not create user'})
           }
           res.status(400).json({error: 'Could not create user'})
          }
     }
     
     res.status(400).json({error: 'Could not create user or provider'})
  }


  }