import type { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import getServerSession from "../../lib/getServerSession"



export default function ServerConfig({serverConfigs,  user}: InferGetServerSidePropsType<typeof getServerSideProps>){

    
   if (serverConfigs &&  user)
    return(
    <div className="mt-24 overflow-hidden">
<h1>Here are the Hospitals that are available</h1>
    <ol>
      {serverConfigs.serverConfig?.map((serverConfig:any) => {
        return <li className="flex gap-x-3" key={serverConfig.id}><h1>{user.name}</h1> <p>{serverConfig.hospitalName} </p> <p>{serverConfig.id}</p> <Link href={`/dashboard/${serverConfig.hospitalName}`}>Select</Link></li>
      })}
    </ol>
</div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context:GetServerSidePropsContext) => {
    const session = await getServerSession(context.req, context.res);
    if (!session) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
    
      const serverConfigsResponse  = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/servermanager/get`, {method: "GET"}); //`http://localhost:3000/api/server-configs
      if (serverConfigsResponse.status !== 200) {
        return {
          redirect: {
            destination: "/server-config/create",
            permanent: false,
          },
        };
      }
      const serverConfigs = await serverConfigsResponse.json();
      if (serverConfigs.serverConfig.length === 0) {
        return {
          redirect: {
            destination: "/server-config/create",
            permanent: false,
          },
        };
      }
  
      
    return {
       props: {
                serverConfigs: serverConfigs,
                user: session.user,
       }
    };
}