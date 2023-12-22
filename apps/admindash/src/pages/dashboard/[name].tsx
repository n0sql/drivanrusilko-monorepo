import type { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import getServerSession from "../../lib/getServerSession"
import { DashBoardView } from "ui";


export default function LocationDashboard ({userProfile, userLocation}: InferGetServerSidePropsType<typeof getServerSideProps>){
    if (userProfile && userLocation)
     return(
     <div className="overflow-hidden w-[80vw]">
<DashBoardView />
     </div>
     ) 
 }

export const getServerSideProps: GetServerSideProps = async (context:GetServerSidePropsContext) => {
    const hospitalName = context.query.name as string;
    const session = await getServerSession(context.req, context.res);
   
    if (!(session)) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
    const userLocationResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/locationmanager/get/${hospitalName}`, {method: "GET"});
    if (userLocationResponse.status !== 200) {
      return {
        redirect: {
          destination: `/server-config/location/create/${hospitalName}`,
          permanent: false,
        },
      };
    }
    const userLocation = await userLocationResponse.json();
    if (!(userLocation)) {
      return {
        redirect: {
          destination: `/server-config/location/create/${hospitalName}`,
          permanent: false,
        },
      };
    }
    const userProfileResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accountmanager/get/${hospitalName}`, {method: "POST", body: JSON.stringify({email: session.user.email})});

    if (userProfileResponse.status !== 200) {
      return {
        redirect: {
          destination: `/profile/create/${hospitalName}`,
          permanent: false,
        },
      };
    }
    const userProfile = await userProfileResponse.json();
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
                userLocation: userLocation,
            },
        };
}