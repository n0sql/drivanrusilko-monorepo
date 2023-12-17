import type { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import getServerSession from "../../lib/getServerSession"
import { PrismaClient } from "database";
import { DashBoardView } from "ui";


export default function LocationDashboard ({hospitalConfig}: InferGetServerSidePropsType<typeof getServerSideProps>){
    if (hospitalConfig)
     return(
     <div className="overflow-hidden w-[80vw]">
<DashBoardView />
     </div>
     ) 
 }

export const getServerSideProps: GetServerSideProps = async (context:GetServerSidePropsContext) => {

    const hospitalName = context.query.name as string;
    const session = await getServerSession(context.req, context.res);
    if (!session) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    const allhospitalConfigResponse  = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/servermanager/get`, {method: "GET"});
    if (allhospitalConfigResponse.status !== 200) {
      return {
        redirect: {
          destination: "/server-config/create",
          permanent: false,
        },
      };
    }
    const allhospitalConfig = await allhospitalConfigResponse.json();
    if (allhospitalConfig.serverConfig.length === 0) {
      return {
        redirect: {
          destination: "/server-config/create",
          permanent: false,
        },
      };
    }
      const hospitalConfig = allhospitalConfig.serverConfig.find((config:any) => config.hospitalName === hospitalName);
        if (!hospitalConfig) {
            return {
            redirect: {
                destination: `/server-config/location/create/${hospitalName}`, //`/server-config/create?hospitalName=${hospitalName}
                permanent: false,
            },
            };
        }
        if((!hospitalConfig.locationUuid)  || (!hospitalConfig.locationTag))
        {
            return {
                redirect: {
                    destination: `/server-config/location/create/${hospitalName}`, //`/server-config/create?hospitalName=${hospitalName}
                    permanent: false,
                },
                };
        }
        return {
            props: {
                hospitalConfig: hospitalConfig,
            },
        };
        
}
    
    