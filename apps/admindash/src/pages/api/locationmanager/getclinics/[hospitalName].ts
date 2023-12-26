import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/db";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const hospitalName  = req.query.hospitalName;
     const serverConfig  = await prisma.serverConfig.findUnique({
        where: {hospitalName: hospitalName as string},
        include: {childLocations: true}
    })
     if (serverConfig?.locationUuid)
    {
         res.status(200).json({clinics: serverConfig.childLocations});
      
  }
  else  
  {
    res.status(301).redirect("/server-config");
}
}