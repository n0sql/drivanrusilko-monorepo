import React from "react";
import { useRouter } from "next/router";
import { Input, MyGrid } from "ui";

interface Location {
    name: string,
    address1: string,
    description: string,
    cityVillage: string,
    stateProvince: string,
    country: string,
    postalCode: string,
    latitude: string,
    longitude: string,
    countyDistrict: string,
}

const CreateLocation = () => {
    const router = useRouter();
    const locationname = router.query.hospitalName;
    console.log(locationname);
    const [location, setLocation] = React.useState<Location>({
        name:   locationname ? locationname.toString() : "",
        address1: "",
        description: "",
        cityVillage: "",
        stateProvince: "",
        country: "",
        postalCode: "",
        latitude: "",
        longitude: "",
        countyDistrict: "",
    })
    const handleAllChange = (e:any) => {
        const { name, value } = e.target;
        setLocation((prev) => ({
          ...prev,
            [name]:  value,
        }));
      }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        location.name = locationname as string;
        fetch("/api/locationmanager/create", {
            method: "POST",
            body: JSON.stringify(location),
        }).then((res) => {
            if (res.status === 200) {
                router.push("/provider", undefined, { shallow: true });
            }
        }).catch((err) => {
            console.log(err);
        });
    }
    return(
        <div className="mt-24 relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <h1 className="block dark:text-gray-100 text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"  >Location Onboarding</h1>
            <form onSubmit={handleSubmit} className="max-w-screen-lg mt-8 mb-2 w-full">
            <div className="flex flex-col gap-6 mb-1">
           <MyGrid columns={2}>     
           <Input
                    label="Name"
                    value="name"
                    defaultValue={locationname as string}
                    type="text"
                    changeHandler={handleAllChange}
                />
                <Input
                    label="Description"
                    value="description"
                    type="text"
                    changeHandler={handleAllChange}
                />
                </MyGrid>
                <MyGrid columns={2}>
                <Input
                    label="Address"
                    value="address1"
                    type="text"
                    changeHandler={handleAllChange}
                />
                <Input
                    label="City"
                    value="cityVillage"
                    type="text"
                    changeHandler={handleAllChange}
                />
                </MyGrid>
                <MyGrid columns={2}>
                <Input
                    label="State"
                    value="stateProvince"
                    type="text"
                    changeHandler={handleAllChange}
                />
                <Input
                    label="Country"
                    value="country"
                    type="text"
                    changeHandler={handleAllChange}
                />
                </MyGrid>
                <MyGrid columns={2}>
                <Input
                    label="Postal Code"
                    value="postalCode"
                    type="text"
                    changeHandler={handleAllChange}
                />
                <Input
                    label="Latitude"
                    value="latitude"
                    type="text"
                    changeHandler={handleAllChange}
                />
                </MyGrid>
                <MyGrid columns={2}>
                <Input
                    label="Longitude"
                    value="longitude"
                    type="text"
                    changeHandler={handleAllChange}
                />
                <Input
                    label="County"
                    value="countyDistrict"
                    type="text"
                    changeHandler={handleAllChange}
                />
                </MyGrid>
                <button className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="submit">Submit</button>
            </div>
            </form>
        </div>
    )
}







export default CreateLocation;