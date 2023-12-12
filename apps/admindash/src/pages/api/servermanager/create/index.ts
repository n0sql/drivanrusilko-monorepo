import { PrismaClient } from 'database'

import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();
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
         user: {
             connect: {
                 id: user?.id as string
             }
         }
     
     }});
        res.status(200).json({serverConfig: newServerConfig})
     }
     } catch (error) {
         console.log(error)
         res.status(400).json({error: error})
     }
  }