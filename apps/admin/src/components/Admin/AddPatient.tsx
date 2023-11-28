import React from "react";
import NewPatientForm1 from "./NewPatientForm1";
import NewPatientForm2 from "./NewPatientForm2";
const AddPatient = () => {
  const [step, setStep] = React.useState(1);

  return (
    <div className="p-4 md:ml-64 h-auto pt-20 ">
      <h1 className="text-3xl ml-24 font-semibold text-secondary mb-8 dark:text-white">
        New Patient
      </h1>
      <ol className="items-center mx-auto max-w-6xl  space-y-4 sm:flex sm:space-x-12 sm:space-y-0 ">
        <li
          className="flex items-center text-[#cc835c] dark:text-blue-500 space-x-2.5 cursor-pointer"
          onClick={() => setStep(1)}
        >
          <span>
            <h3
              className={`font-medium leading-tight
         ${step === 1 ? "text-[#cc835c] underline" : "text-gray-500 dark:text-gray-400"}
      `}
            >
              Important
            </h3>
          </span>
        </li>
        <li
          className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 cursor-pointer active:text-blue-600"
          onClick={() => setStep(2)}
        >
          <span>
            <h3
              className={`font-medium leading-tight
         ${step === 2 ? "text-[#cc835c] underline" : "text-gray-500 dark:text-gray-400"}
      `}
            >
              Demographics
            </h3>
          </span>
        </li>
      </ol>

      {step === 1 && <NewPatientForm1 />}

      {step === 2 && <NewPatientForm2 />}
    </div>
  );
};

export default AddPatient;
