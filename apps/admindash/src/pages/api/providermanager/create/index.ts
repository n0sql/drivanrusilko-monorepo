import { PrismaClient } from 'database'
import type { NextApiRequest, NextApiResponse } from "next";
import { openmrsSessionManager,  userManager} from 'fhirr4';

const prisma = new PrismaClient();
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {

    const {locationName, person, user} = JSON.parse(req.body)
    const serverConfig  = await prisma.serverConfig.findUnique({where: {hospitalName: locationName}})
     if ( serverConfig?.username && serverConfig?.password)
     {
        const credentials = await openmrsSessionManager.initializeSession({username: serverConfig.username, password:serverConfig.password});
        if (credentials)
        {
          const newPerson = await userManager.createPerson(person, credentials.token, credentials.sessionId)
          if(newPerson)
          {
            const newUserData = {
                name: newPerson.givenName,
                username:user.name,
                description: "main administrator",
                password: user.password,
                roles: [{"name": "Provider", "description": "main api account", "inheritedRoles":["8d94f852-c2cc-11de-8d13-0010c6dffd0f","8d94f280-c2cc-11de-8d13-0010c6dffd0f"]}],  
            }
            const newUser = await userManager.createUserFromPerson(newPerson, newUserData, serverConfig.username, serverConfig.password)
            if(newUser)
            {
                res.status(200).send({provider: newUser})
            }
          }

     }
     res.status(302).redirect('/serverconfig')
  }

  }