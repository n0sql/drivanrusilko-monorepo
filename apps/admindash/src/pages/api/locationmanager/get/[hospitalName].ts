import type { NextApiRequest, NextApiResponse } from "next";
import { openmrsSessionManager,  locationManager} from 'fhirr4';
import prisma from "../../../../lib/db";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const hospitalName  = req.query.hospitalName;
     const serverConfig  = await prisma.serverConfig.findUnique({where: {hospitalName: hospitalName as string}})
     if (serverConfig?.locationUuid)
     {
        const myheaders = await openmrsSessionManager.initializeSession({username:serverConfig.username, password:serverConfig.password, baseUrl: serverConfig.basePath})
        if (myheaders)
        {
            const location = await locationManager.checkParentLocation(myheaders, hospitalName as string, serverConfig.basePath);
            if (location) {
              console.log(location)
                res.status(200).json({location: location});
               
            }
            else {
                res.status(400).json({error: 'Could not find location'});
            }
     }
     res.status(400).json({error: 'Could not find location'});
  }  else {
    res.status(400).json({error: 'Please create a location first'});
  }
  }