import type { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React from "react";
import getServerSession from "../../lib/getServerSession";



export default function UserProfile ({userProfile}: InferGetServerSidePropsType<typeof getServerSideProps>){
    const router = useRouter();
    const { name } = router.query;
    if (userProfile)
     return(
     <div className="overflow-hidden w-[80vw]">
<h1>{name}</h1>
     </div>
        );
    return (
        <div>
            <h1>Loading...</h1>
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
    const userProfileResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accountmanager/get/${hospitalName}`, {method: "GET"});
    if (userProfileResponse.status !== 200) {
      return {
        redirect: {
          destination: `/profile/create/${hospitalName}`,
          permanent: false,
        },
      };
    }
    const  userProfile = await userProfileResponse.json();
    if (!(userProfile)) {
      return {
        redirect: {
          destination: `/profile/create/${hospitalName}`,
          permanent: false,
        },
      };
    }
        return {
            props: {
                userProfile: userProfile,
            },
        };
}