import React from 'react';
import { Input, MyGrid } from 'ui';
import { useRouter } from 'next/router';


export interface Address {
    preferred: boolean;
    address1: string;
    cityVillage: string;
    stateProvince: string;
    country: string;
    postalCode: string;
}

export interface Name {
    givenName: string;
    middleName: string;
    familyName: string;
    preferred: boolean;
    prefix: string;
}

export interface Person {
    names: Name[];
    gender: string;
    age: number;
    birthDate: string;
    birthDateEstimated: boolean;
    birthTime: string;
    dead: boolean;
    addresses: Address[];
}

export default function CreatePerson () {
    const router = useRouter();
    const  hospitalName  = router.query.hospitalName;
    const [person, setPerson] = React.useState<Person>({
        names: [
            {
                givenName: "",
                middleName: "",
                familyName: "",
                preferred: true,
                prefix: ""
            }
        ],
        gender: "",
        age: 0,
        birthDate: "",
        birthDateEstimated: false,
        birthTime: "",
        dead: false,
        addresses: [
            {
                preferred: true,
                address1: "",
                cityVillage: "",
                stateProvince: "",
                country: "",
                postalCode: ""
            }
        ],

    });

    const handleAllChange = (e:any) => {
        const { name, value } = e.target;
        setPerson((prev) => ({
            ...prev,
            [name]:  value,
        }));
    }
  const  handleNameChanges = (e:any) => {
        const { name, value } = e.target;
        setPerson((prev) => ({
            ...prev,
            names: [
                {
                    ...prev.names[0],
                    [name]: value,
                }
            ]
        }));
    }

    const handleAddressChanges = (e:any) => {
        const { name, value } = e.target;
        setPerson((prev) => ({
            ...prev,
            addresses: [
                {
                    ...prev.addresses[0],
                    [name]: value,
                }
            ]
        }));
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const data = {
            locationName: hospitalName,
            person: person,
        }
       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accountmanager/create`, {
            method: "POST",
            body: JSON.stringify(data),
        });
        if (response.status === 200) {
            router.push(`/profile/${hospitalName as string}`);
        } 
         else {
            const error = await response.json();
            alert(error.error);
         }
        // Handle form submission here
}

    return(
        <div className="mt-10 relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <h1 className="block dark:text-gray-100 text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"  >Person Onboarding</h1>
            <form onSubmit={handleSubmit} className="max-w-screen-lg mt-8 mb-2 w-full">
                <div className="flex flex-col gap-6 mb-1">
                    <MyGrid columns={2}>
                        <Input
                            label="Given Name"
                            value="givenName"
                            type="text"
                            changeHandler={
                                handleNameChanges
                            }
                        />
                        <Input
                            label="Middle Name"
                            value="middleName"
                            type="text"
                            changeHandler={
                                handleNameChanges
                            }
                        />
                        {/* Add more form fields here */}
                    </MyGrid>
                    
                    <MyGrid columns={2}>
                        <Input
                            label="Family Name"
                            value="familyName"
                            type="text"
                            changeHandler={
                                handleNameChanges
                            }
                        />
                        <Input
                            label="Prefix"
                            value="prefix"
                            type="text"
                            changeHandler={
                                handleNameChanges
                            }
                        />
                        {/* Add more form fields here */}
                        </MyGrid>

                        <MyGrid columns={2}>
                            <Input
                            type="datetime-local"
                            label="Birth Date"
                            value="birthDate"
                            changeHandler={(e:any) => {
                                const { name, value } = e.target;
                                 const time = value.split('T')[1];
                                    const date = value.split('T')[0];
                                    setPerson((prev) => ({
                                        ...prev,
                                        birthDate: date,
                                        birthTime: time,
                                    }));
                            }}
                            />
                            <Input
                            label="Age"
                            value="age"
                            type="number"
                            changeHandler={handleAllChange}
                            />
                            </MyGrid>
                            <MyGrid columns={2}>
                            <Input
    label="Postal Code"
    value="postalCode"
    type="text"
    changeHandler={handleAddressChanges}
        />
        <Input
    label="Gender"
    value="gender"
    type="text"
    changeHandler={handleAllChange}
        />
                                </MyGrid>
                            <MyGrid columns={2}>
<Input
    label="Street"
    value="street"
    type="text"
    changeHandler={handleAddressChanges}
/>
<Input
    label="City"
    value="cityVillage"
    type="text"
    changeHandler={handleAddressChanges}
/>
</MyGrid>
<MyGrid columns={2}>
<Input
    label="Address"
    value="address1"
    type="text"
    changeHandler={handleAddressChanges}
/>

<Input
    label="State"
    value="stateProvince"
    type="text"
    changeHandler={handleAddressChanges}
/>
</MyGrid>

                            


                    <button className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
