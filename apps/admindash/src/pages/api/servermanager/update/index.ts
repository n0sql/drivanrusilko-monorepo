import { PrismaClient } from 'database'
import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {

     
     const{serverConfig, id} = JSON.parse(req.body)
     if (!id) {
        res.status(400).json({error: 'No id found'})
     }

     try {

      const updatedServerConfig = await prisma.serverConfig.update(
            {
                where: {id: id},
            data: {...serverConfig 
        }}
      );

      if (updatedServerConfig) {
         res.status(200).json({serverConfig: updatedServerConfig})
      }
        else {
             res.status(400).json({error: 'No server config found'})
        }

     
    }
     catch (error) {
         console.log(error)
         res.status(400).json({error: error})
     }
     
  }