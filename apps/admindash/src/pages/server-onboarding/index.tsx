import { Input } from "ui";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSiteWideContext } from "../../context";
// id String  @id @default(cuid())
// basePath String
// hospitalName String @unique
// userId String
// providerId String?
// providerName String?
// locationUuid String?
// locationTag String?
// childLocations ChildLocation[]
// username String @default("admin")
// password String @default("Admin123")
// user User @relation(fields: [userId], references: [id], onDelete: Cascade)

 interface ServerDetails {
    basePath: string;
    hospitalName: string;
    email: string;
    providerName: string; 
}

const ServerDetailsForm = () => {
    const {response} = useSiteWideContext();
    const { data: session, status } = useSession();
    const router = useRouter();
    const [serverDetails, setServerDetails] = React.useState<ServerDetails>({
        basePath: "",
        hospitalName: "",
        email: "",
        providerName: "",
    })
    const handleAllChange = (e:any) => {
        const { name, value } = e.target;
        setServerDetails((prev) => ({
          ...prev,
            [name]: name === "basePath" ? value.replace(/\/$/, "") : value,
        }));
      }
    React.useEffect(() => {
            fetch("/api/servermanager/get", {
                method: "GET"
            }).then((res) => {
            if (res.status === 200) {
                router.push("/location-onboarding", undefined, { shallow: true });
            }
            }).catch((err) => {
                console.log(err);
            });
          
    }, []);
    React.useEffect(() => {
        if(!session){
            router.push("/", undefined, { shallow: true });
        }
        else{
             setServerDetails((prev) => ({
                ...prev,
                email: session.user.email as string,
                providerName: session.user.name as string,
              }));
        }
    }, [session]);

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
       email: serverDetails.email ? serverDetails.email : session?.user.email as string,
        providerName: serverDetails.providerName ? serverDetails.providerName : session?.user.name as string,
      }

      const res = await fetch("/api/servermanager/create", {
        method: "POST",
        body: JSON.stringify(data),
      });

       if (res.status === 200){
        router.push("/location-onboarding", undefined, { shallow: true });
       }
        else {
            alert("Something went wrong, please try again");
            setServerDetails({
                basePath: "",
                hospitalName: "",
                email: "",
                providerName: "",
            });
        }
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

export default ServerDetailsForm;