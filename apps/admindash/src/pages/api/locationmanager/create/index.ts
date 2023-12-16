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
        const myheaders = await openmrsSessionManager.initializeSession({username:serverConfig.username, password:serverConfig.password, baseUrl: serverConfig.basePath})
        if (myheaders)
        {
          
            const newLocation = await locationManager.createParentLocation(myheaders, location, location.name, serverConfig.basePath);
            console.log(newLocation)
            if (newLocation) {
                await prisma.serverConfig.update({where: {hospitalName: location.name}, data: {
                    locationUuid: newLocation.uuid,
                    locationTag: newLocation.tags[0].uuid,
                    childLocations: {
                        createMany:{
                            data: newLocation.childLocations.map((childLocation: any)=>({
                                name: childLocation.display,
                                uuid: childLocation.uuid,
                                serverConfig: {
                                    connect: {
                                        parentLocationName: location.name
                                    }
                                }
                            }))
                  }
                    }
                
                }}).catch((err)=>console.log(err)).finally(async ()=>{
                    await prisma.$disconnect()
                })
                res.status(200).json({location: newLocation})
            } 
            else {
                res.status(400).json({error: 'Could not create location'})
            }   
        }

     }
     res.status(400).json({error: 'Could not create location'})
  }