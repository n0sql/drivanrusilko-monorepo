import { Input } from "ui";
import React from "react";
import type { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import getServerSession from "../../../lib/getServerSession"




export default function ServerDetailsUpdatePage  ({serverConfig}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [serverDetails, setServerDetails] = React.useState<any>({...serverConfig});
    const [initialServerDetails] = React.useState<any>({...serverConfig});
    
    const handleAllChange = (e:any) => {
        const { name, value } = e.target;
        setServerDetails((prev:any) => ({
          ...prev,
            [name]: name === "basePath" ? value.replace(/\/$/, "") : value,
        }));
      }
  const handleUpdateSubmit = async (e:any) => {
    e.preventDefault();
    if (serverDetails.basePath === "" || serverDetails.hospitalName === "") {
        alert("Please fill all fields");
        return;
      }
      if (serverDetails.basePath.includes(" ")) {
        alert("Base Path cannot contain spaces");
        return;
      }
    const changedValues = Object.keys(serverDetails).reduce((acc, key) => {
        if (serverDetails[key] !== initialServerDetails[key]) {
          acc[key] = serverDetails[key];
        }
        return acc;
      }, {});

    const data = {
      serverConfig: changedValues,
      id: serverDetails.id,
    }

    const res = await fetch("/api/servermanager/update", {
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
          })
          return;
      }
      alert("Server details updated successfully");
      setServerDetails({
        basePath: "",
        hospitalName: "",
        email: "",
        providerName: "",
    })
  }

      return (
        <div>
            <form onSubmit={handleUpdateSubmit}>
                <Input
                    label="Base Path"
                    value="basePath"
                    type="text"
                    defaultValue={serverDetails.basePath}
                    changeHandler={handleAllChange}
                />
                <Input
                    label="Hospital Name"
                    value="hospitalName"
                    type="text"
                    defaultValue={serverDetails.hospitalName}
                    changeHandler={handleAllChange}
                />
                <Input
                    label="Email"
                    value="email"
                    type="text"
                    defaultValue={serverDetails.email}
                    changeHandler={handleAllChange}
                />
                <Input
                    label="Provider Name"
                    type="text"
                    value="providerName"
                    defaultValue={serverDetails.providerName}
                    changeHandler={handleAllChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
      )




}

export const getServerSideProps: GetServerSideProps = async (context:GetServerSidePropsContext) => {
    const hospitalName = context.params?.hospitalName;
    const session = await getServerSession(context.req, context.res);
    if (!session) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    const serverConfigsResponse  = await fetch("/api/servermanager/get", {method:"GET"});
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

    const serverConfig = serverConfigs.serverConfig.find((config:any) => config.hospitalName === hospitalName);
    if (!serverConfig) {
      return {
        redirect: {
          destination: "/server-config/create",
          permanent: false,
        },
      };
    }
    return {
      props: {
        serverConfig: serverConfig,
      },
    };
   
}