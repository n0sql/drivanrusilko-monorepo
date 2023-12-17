import type { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import getServerSession from "../../lib/getServerSession"
import { PrismaClient } from "database";


export default function ServerConfig({serverConfig, role, user}: InferGetServerSidePropsType<typeof getServerSideProps>){
  const handleLinkUser = async (serverConfig:any, user:any) => {
    const data = {
      serverConfig: serverConfig,
      id: user.id,
    }
    const res = await fetch("/api/servermanager/update", {
      method: "POST",
      body: JSON.stringify(data),
    });

     if (res.status !== 200){
          alert("Something went wrong, please try again");
          return;
      }
      alert("Server details updated successfully");
  }
   if (serverConfig && role && user)
    return(
    <div className="mt-24 overflow-hidden">
<h1>Here are the Hospitals that {role === "owner" ? "you own" : role === "member" ? "you are a member of" : "are available"}</h1>
    
    <ol>
      {serverConfig.map((serverConfig:any) => {
        return <li className="flex gap-x-3" key={serverConfig.id}><h1>{user.name}</h1> <p>{serverConfig.hospitalName} </p> <p>{serverConfig.id}</p> <Link href={`/dashboard/${serverConfig.hospitalName}`}>Select</Link>{
            role === "none" && <button 
            onClick={() => handleLinkUser(serverConfig, user)}
            >Join</button>
        }</li>
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
    
    const prisma = new PrismaClient();
     const user = await prisma.user.findUnique({ where: { email: session.user.email as string } });
      await prisma.$disconnect();
      if (!user)
      {
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
  
      const serverConfigOwner = serverConfigs.serverConfig.filter((config:any) => config.userId === user.id);
      if (!serverConfigOwner) {
       const serverConfigMember = serverConfigs.serverConfig.filter((config:any) => config.users.includes(user?.id));
        if (serverConfigMember) {
          return {
            props: {
                        serverConfig: serverConfigMember,
                        role: "member",
                        user: user
            }
          };
        } 
          return {
            props:{
              serverConfig: serverConfigs,
              role: "none",
              user: user
            }
          };
      }
    return {
       props: {
                serverConfig: serverConfigOwner,
                role: "owner",
                user: user
       }
    };
}