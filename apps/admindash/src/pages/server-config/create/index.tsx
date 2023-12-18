import { Input } from "ui";
import React from "react";
import { useSiteWideContext } from "../../../context";
import type { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import getServerSession from "../../../lib/getServerSession"
import {useRouter} from "next/router";

 interface ServerDetails {
    basePath: string;
    hospitalName: string;
    email: string;
    providerName: string;
}

const ServerDetailsForm = ({email, providerName}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter();
    const {response} = useSiteWideContext();
    const [serverDetails, setServerDetails] = React.useState<ServerDetails>({
        basePath: "",
        hospitalName: "",
        email:  email ? email : "",
        providerName: providerName ? providerName : "",
    })
    const handleAllChange = (e:any) => {
        const { name, value } = e.target;
        setServerDetails((prev) => ({
          ...prev,
            [name]: name === "basePath" ? value.replace(/\/$/, "") : value,
        }));
      }



    const handleSubmit = async (e:any) => {
        e.preventDefault();
        if (serverDetails.basePath === "" || serverDetails.hospitalName === "") {
          alert("Please fill all fields");
          return;
        }
        if (serverDetails.basePath.includes(" ")) {
          alert("Base Path cannot contain spaces");
          return;
        }
      const data = {
        basePath: serverDetails.basePath,
        hospitalName: serverDetails.hospitalName,
       email: serverDetails.email ? serverDetails.email : email,
        providerName: serverDetails.providerName ? serverDetails.providerName : providerName,
      }

      const res = await fetch("/api/servermanager/create", {
        method: "POST",
        body: JSON.stringify(data),
      });

       if (res.status !== 200){     
            alert("Something went wrong, please try again");
            setServerDetails({
                basePath: "",
                hospitalName: "",
                email: "",
                providerName: "",
            });
        }
        router.push("/server-config");
    }


    return (
        <div className="mx-auto">
        <h4 className="text-left  text-primary font-bold mb-2">Server Details</h4>
        <form className="flex flex-col justify-between gap-y-4" onSubmit={handleSubmit}>
            {
                response && <p className="text-red-500">{response}</p>   

            }
        <div className="relative text-center ">
            <Input value="hospitalName" type="text"  label="Hospital Name" changeHandler={handleAllChange}/>
            </div>
        <div className="relative text-center ">
            <Input value="basePath" type="text"  label="Server Url" changeHandler={handleAllChange}/>
            </div>
            <div className=" form-submit">
            <input
                type="submit"
                className="btn bg-black dark:bg-white dark:text-gray-950 w-full text-gray-100 lg:w-96 w-72 rounded-full py-2 cursor-pointer"
                value="Save"
            />
            </div>
        </form>
        </div>
    );

}


export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const session = await getServerSession(context.req, context.res);
    if (!session) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }
    return {
        props: {
            email: session.user.email,
            providerName: session.user.name,
        },
    };

};

export default ServerDetailsForm;