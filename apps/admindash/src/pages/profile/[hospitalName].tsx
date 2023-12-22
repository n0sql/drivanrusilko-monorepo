import type { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React from "react";
import getServerSession from "../../lib/getServerSession";



export default function UserProfile ({userProfile, userLocation}: InferGetServerSidePropsType<typeof getServerSideProps>){


    if (userProfile)
     return(
     <div className="">
 <div className="mx-auto w-screen  px-4 py-12 sm:px-6 sm:py-12 lg:max-screen lg:px-8">
        <div className="px-4 sm:px-0">
          <h3 className=" font-semibold leading-7 text-gray-900">Profile Information</h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Account Details</p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100 space-y-8">
            <div className="shadow rounded rounded-xl  bg-white pr-4 pt-4">
              <div
                className="
            flex justify-end
            "
              >
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-secondary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                  
                >
                  Edit
                </button>
              </div>
              <div className="px-8 pb-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 ">
                <dt className="text-sm leading-6 text-gray-900">Full name</dt>
                <dd className="mt-1 text-sm font-bold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Margot Foster
                </dd>
                <dt className="text-sm  leading-6 text-gray-900">Email</dt>
                <dd className="mt-1 text-sm font-bold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  someEmail@gmail.com
                </dd>
                <dt className="text-sm  leading-6 text-gray-900">Phone</dt>
                <dd className="mt-1 text-sm font-bold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  07176637637
                </dd>
                <dt className="text-sm  leading-6 text-gray-900">Birthday</dt>
                <dd className="mt-1 text-sm leading-6 font-bold text-gray-700 sm:col-span-2 sm:mt-0">
                  2008 January 31
                </dd>
              </div>
            </div>
            <div className="px-4 sm:px-0">
              <h3 className=" font-semibold leading-7 text-gray-900">Payment Method</h3>
            </div>
            <div className="px-8 shadow py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 rounded rounded-xl bg-white">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                <div className="flex flex-col">
                  <span className="text-sm leading-6 text-gray-900"> DefaultCard</span>
                  <span className="text-xs text-gray-400">**** **** **** 4242</span>
                </div>
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <button className="bg-secondary text-white rounded px-2 py-1 lg:float-right">
                  Update Payment Method
                </button>
              </dd>
            </div>

            <div className="px-4 sm:px-0">
              <h3 className=" font-semibold leading-7 text-gray-900">Shipping Address</h3>
            </div>
            <div className="px-8 shadow py-6 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-4 rounded rounded-xl bg-white">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                <div className="flex flex-col">
                  <span className="text-sm leading-6 text-gray-900">
                    {" "}
                    Update your shipping address in your <em>subscriptions page.</em>
                  </span>
                </div>
              </dt>
            </div>

            <div className="px-4 sm:px-0">
              <h3 className=" font-semibold leading-7 text-gray-900">Password</h3>
            </div>
            <div className="px-8 shadow py-6 grid-cols-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 rounded rounded-xl bg-white">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                <div className="flex flex-col">
                  <span className="text-sm leading-6 text-gray-900"> Current password</span>
                  <span className="text-xs text-gray-400">••••••••••••</span>
                </div>
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <button className="bg-secondary text-white rounded px-2 py-1 lg:float-right">
                  Change Password
                </button>
              </dd>
            </div>
          </dl>
        </div>
      </div>
<p></p>
     </div>
        );
    return (
        <div>
            <h1>Loading...</h1>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context:GetServerSidePropsContext) => {
  const hospitalName = context.query.hospitalName as string;
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
  const  userLocation = await userLocationResponse.json();
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