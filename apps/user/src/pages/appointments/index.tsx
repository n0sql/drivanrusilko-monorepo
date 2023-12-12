import React from "react";

const Appointments = () => {
  return (
    <div className="max-w-3xl mx-auto mt-24">
      <div className="flex justify-start">
        <h1 className="text-3xl font-bold text-secondary mb-8 dark:text-white">Appointments</h1>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center rounded rounded-xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
          <span className="text-xl text-center text-secondary mb-8 dark:text-white">
            You have no scheduled appointments
          </span>

          <button
            data-te-offcanvas-toggle
            data-te-target="#offcanvasTreatment"
            aria-controls="offcanvasTreatment"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="px-4 py-2 bg-primary rounded-full text-white  lg:w-48  text-center w-full mb-6"
          >
            Find my treatment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
