import React from "react"
import HomePage from "../../components/homepage/home-page"
import type { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import getServerSession from "../../lib/getServerSession"
import { useSession } from "next-auth/react";
export default function MyPage() {
    const {data: session, status} = useSession();
if(session){
    console.log(session, "session");
}
    return(
  <div>
    <HomePage/>
    </div>
   )
}

export const  getServerSideProps: GetServerSideProps = async (context:GetServerSidePropsContext) => {
  const session = await getServerSession(context.req, context.res);
  if (!(session)) {
    return {
       props:{}
    };
  }
  return {
    redirect: {
      destination: "/server-config",
      permanent: false,
    }
  }
}