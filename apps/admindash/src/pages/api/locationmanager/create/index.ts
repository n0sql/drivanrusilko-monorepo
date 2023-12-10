import { PrismaClient } from 'database'
import type { NextApiRequest, NextApiResponse } from "next";
import { openmrsSessionManager,  locationManager} from 'fhirr4';
const prisma = new PrismaClient();
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const {location} = JSON.parse(req.body)
     const serverConfig  = await prisma.serverConfig.findUnique({where: {hospitalName: location.name}})
   
     
     if (serverConfig?.basePath && serverConfig?.hospitalName)
     {
        const credentials = await openmrsSessionManager.initializeSession({username:serverConfig.username, password:serverConfig.password})
        if (credentials)
        {
          
            
            const newLocation = await locationManager.createParentLocation(credentials.token, credentials.sessionId, location, location.name);
            if (newLocation) {
                await prisma.serverConfig.update({where: {hospitalName: location.name}, data: {
                    locationUuid: newLocation.uuid,
                    locationTag: newLocation.tags[0].uuid,
                    childLocations: {
                        create: newLocation.childLocations.map((childLocation: any) => {
                            return {
                                name: childLocation.display,
                                uuid: childLocation.uuid,
                                parentLocationName: newLocation.name,
                            }
                        })
                    }
                
                }})
                res.status(200).json({location: newLocation})
            } 
            else {
                res.status(400).json({error: 'Could not create location'})
            }   
        }

     }
     res.status(302).redirect('/admin/createserverconfig')
  }