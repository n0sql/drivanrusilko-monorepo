import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/db";
import { systemSettingsManager, openmrsSessionManager } from "fhirr4";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {

   
     const serverData = JSON.parse(req.body)
     console.log(serverData)
     try {
      const serverConfig  = await prisma.serverConfig.findUnique({where: {hospitalName: serverData.hospitalName}})
      
     if (serverConfig?.basePath && serverConfig?.hospitalName)
     {
        res.status(200).json({serverConfig: serverConfig})

     }
     else {
      const user = await prisma.user.findUnique({where: {email: serverData.email}})
        
      if (!user) {
         res.status(400).json({error: 'No user found'})
      }
      const newServerConfig = await prisma.serverConfig.create({data: {
         hospitalName: serverData.hospitalName,
         providerName: serverData.providerName,
         basePath: serverData.basePath,
         createdBy: {
             connect: {
                 id: user?.id as string
             }
         }
     }});
     const session = await openmrsSessionManager.initializeSession({username:"admin", password:"Admin123", baseUrl:serverData.basePath});
     if (session) {
      const config = {
         name: serverData.hospitalName,
         description: serverData.hospitalName,
         implementationId: serverData.hospitalName + "implementation",
         passphrase: serverData.hospitalName + "_passphrase",
      }
      await systemSettingsManager.updateImplementationConfig(session, serverData.basePath, config);
      await systemSettingsManager.updateApiSettings(session, serverData.basePath);
   }
        res.status(200).json({serverConfig: newServerConfig})
     }
     } catch (error) {
         console.log(error)
         res.status(400).json({error: error})
     }
  }