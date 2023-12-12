import { PrismaClient } from 'database'
import type { NextApiRequest, NextApiResponse } from "next";
import { openmrsSessionManager,  locationManager} from 'fhirr4';

const prisma = new PrismaClient();
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const { locationName} = JSON.parse(req.body)
     const serverConfig  = await prisma.serverConfig.findUnique({where: {hospitalName: locationName}})
     
     if (serverConfig?.basePath && serverConfig?.hospitalName)
     {
        const myheaders = await openmrsSessionManager.initializeSession({username:serverConfig.username, password:serverConfig.password, baseUrl: serverConfig.basePath})
        if (myheaders)
        {
          
            const location = await locationManager.checkParentLocation(myheaders,  locationName, serverConfig.basePath);

            if (location) {
                res.status(200).json({location: location})
            }
            else {
                res.status(301).redirect('/admin/createparentlocation')
            }
     }
     res.status(301).redirect('/server-onboarding')
  }
  }