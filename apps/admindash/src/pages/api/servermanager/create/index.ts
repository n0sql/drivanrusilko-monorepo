import { PrismaClient } from 'database'

import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {

   
     const serverData = JSON.parse(req.body)
     const serverConfig  = await prisma.serverConfig.findUnique({where: {hospitalName: serverData.hospitalName}})

     if (serverConfig?.basePath && serverConfig?.hospitalName)
     {
        res.status(200).json({serverConfig: serverConfig})

     }
     else {
      
        const newServerConfig = await prisma.serverConfig.create({data: serverData});
        res.status(200).json({serverConfig: newServerConfig})
     }
  }