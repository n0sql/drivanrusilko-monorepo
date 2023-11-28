import React from "react";
import Selectele from "./Selectele";
import Inputele from "./Inputele";

const NewPatientForm2 = () => {
  return (
    <form
      action="#"
      className="max-w-2xl ml-64 mt-5 bg-gray-50 shadow shadow-lg border rounded-lg px-3 py-3"
    >
      <h3 className="mb-6 font-medium leading-none text-gray-900 dark:text-white ">
        Patient Demographics
      </h3>
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <Inputele
          data={{ name: "SSN", label: "Patient SSN", type: "text" }}
          handleChange={(e: any) => console.log(e.target.value)}
        />
        <Inputele
          data={{ name: "dob", label: "Date of Birth", type: "date" }}
          handleChange={(e: any) => console.log(e.target.value)}
        />
        <Selectele
          data={{
            name: "sex",
            label: "Sex",
            options: ["Male", "Female", "Other", "Unknown", "Decline to Specify"],
          }}
          handleChange={(e: any) => console.log(e.target.value)}
        />
        <Selectele
          data={{
            name: "sexual-orientation",
            label: "Sexual Orientation",
            options: [
              "Lesbian or Gay",
              "Other",
              "Heterosexual",
              "Unknown",
              "Choose not to Disclose",
            ],
          }}
          handleChange={(e: any) => console.log(e.target.value)}
        />

        <Selectele
          data={{
            name: "race",
            label: "Race",
            options: [
              "American Indian or Alaska Native",
              "Asian",
              "Black or African American",
              "Native Hawaiian or Other Pacific Islander",
              "White",
              "Other",
              "Unknown",
              "Decline to Specify",
            ],
          }}
          handleChange={(e: any) => console.log(e.target.value)}
        />
        <Inputele
          data={{ name: "street-address", label: "Street Address", type: "text" }}
          handleChange={(e: any) => console.log(e.target.value)}
        />
        <Inputele
          data={{ name: "city", label: "City", type: "text" }}
          handleChange={(e: any) => console.log(e.target.value)}
        />
        <Inputele
          data={{ name: "state", label: "State", type: "text" }}
          handleChange={(e: any) => console.log(e.target.value)}
        />
        <Inputele
          data={{ name: "zip-code", label: "Zip Code", type: "text" }}
          handleChange={(e: any) => console.log(e.target.value)}
        />
        <Inputele
          data={{ name: "country", label: "Country", type: "text" }}
          handleChange={(e: any) => console.log(e.target.value)}
        />
        <Inputele
          data={{ name: "county-code", label: "County Code", type: "text" }}
          handleChange={(e: any) => console.log(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="text-[#cc835c] py-2.5 w-32 mx-auto mb-4 mt-4  items-center hover:text-white border border-[#cc835c] hover:bg-[#cc835c] focus:ring-4 focus:outline-none focus:ring-[#cc835c] font-medium rounded-lg text-sm  text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 capitalize dark:focus:ring-blue-900"
      >
        Save
      </button>
    </form>
  );
};

export default NewPatientForm2;
