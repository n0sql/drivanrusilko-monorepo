import { PrismaClient } from 'database'
import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();
export default async function handler( 
    req: NextApiRequest,
    res: NextApiResponse
  ) {


try {
   const serverConfig  = await prisma.serverConfig.findMany({
      include:{
         childLocations: true
      }
   });
   if (serverConfig && serverConfig?.length > 0){

         res.status(200).json({serverConfig: serverConfig})
      }
   else {
      res.status(400).json({error: 'No server config found'})
   }
} catch (error) {
   res.status(400).json({error: 'No server config found'})
}
}