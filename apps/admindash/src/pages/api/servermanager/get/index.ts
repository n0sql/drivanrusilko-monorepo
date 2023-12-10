import { PrismaClient } from 'database'
import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {

   const {hospitalName} = JSON.parse(req.body)
   const serverConfig  = await prisma.serverConfig.findUnique({where: {hospitalName: hospitalName}})
   if (serverConfig?.basePath && serverConfig?.hospitalName)
     {
        res.status(200).json({serverConfig: serverConfig})

     }
     res.status(302).redirect('/admin/createserverconfig')
  }