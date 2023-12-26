import type { NextApiRequest, NextApiResponse } from "next";
import { openmrsSessionManager,  locationManager} from 'fhirr4';
import prisma from "../../../../lib/db";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    
    const hospitalName  = req.query.hospitalName;
    const location = JSON.parse(req.body);
    const serverConfig  = await prisma.serverConfig.findUnique({where: {hospitalName: hospitalName as string}});
     
     if (serverConfig?.locationUuid)
     {
        const myheaders = await openmrsSessionManager.initializeSession({username:serverConfig.username, password:serverConfig.password, baseUrl: serverConfig.basePath});

        if(!myheaders)
        {
            res.status(400).json({error: 'Could not initialize session'});
        }
        else
        {
            const newLocation = await locationManager.createChildLocation(serverConfig.locationUuid as string, location, location.name, serverConfig.basePath);
            if (newLocation) {
                await prisma.serverConfig.update({where: {hospitalName: serverConfig.hospitalName}, 
                    data: {
                    childLocations: {
                        create:{
                            name: newLocation.name,
                            uuid: newLocation.uuid
                        }
                    }
                }}).catch((err)=>console.log(err)).finally(async ()=>{
                    await prisma.$disconnect();
                })
                res.status(200).json({location: newLocation});
            } 
            else {
                res.status(400).json({error: 'Could not create location'});
            }   
        }
       

     }
     else {
     res.status(400).json({error: 'Could not create location'})
     };
  }

  