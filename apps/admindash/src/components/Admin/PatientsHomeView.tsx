import React from "react";

import { PlusSmallIcon } from "@heroicons/react/24/solid";
import SomeTable5 from "./PatientTable";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
const PatientsHomeView = ({ router }: any) => {
  return (
    <main className="p-4 md:ml-64 h-auto pt-20">
      <h1 className="text-2xl font-semibold text-gray-900">Manage Patients</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="shadow-sm bg-white border-gray-300 rounded-lg  dark:border-gray-600 ">
          <div className="items-center justify-between h-full bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="w-full ">
              <h2 className="text-lg m-0 font-normal text-gray-500 dark:text-gray-400">
                New Patients
              </h2>
              <span className="text-3xl font-bold leading-none text-gray-900 sm:text-4xl dark:text-white">
                2,340
              </span>
              <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                  <ArrowUpIcon className="w-3 h-3 mr-1 stroke-[3px]" />
                  12.5%
                </span>
                <span>Since last Month</span>
              </p>
            </div>
            <div className="w-full" id="new-products-chart"></div>
          </div>
        </div>

        <div className=" shadow rounded-lg border-gray-300 dark:border-gray-600 ">
          <div className="items-center justify-between h-full bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="w-full">
              <h2 className="text-lg m-0 font-normal text-gray-500 dark:text-gray-400">Active</h2>
              <span className="text-2xl font-bold leading-none text-gray-900 sm:text-4xl dark:text-white">
                2,340
              </span>
              <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                  <ArrowUpIcon className="w-3 h-3 mr-1 stroke-[3px]" />
                  3,4%
                </span>
                <span>Since last month</span>
              </p>
            </div>
            <div className="w-full" id="week-signups-chart"></div>
          </div>
        </div>
        <div className=" shadow rounded-lg border-gray-300 dark:border-gray-600 ">
          <div className="items-center justify-between h-full bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="w-full">
              <h2 className="text-lg m-0 font-normal text-gray-500 dark:text-gray-400">Inactive</h2>
              <span className="text-2xl font-bold leading-none text-gray-900 sm:text-4xl dark:text-white">
                340
              </span>
              <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                  <ArrowUpIcon className="w-3 h-3 mr-1 stroke-[3px]" />
                  3,4%
                </span>
                <span>Since last month</span>
              </p>
            </div>
            <div className="w-full" id="week-signups-chart"></div>
          </div>
        </div>
        <div
          onClick={() => {
            router.push(`/admin/patients/add-patient`, undefined, { shallow: true });
          }}
          className="border-2 cursor-pointer border-dashed rounded-lg border-gray-300 dark:border-gray-600 flex justify-center"
        >
          <span className=" w-full pt-12 pl-3 text-lg font-bold text-gray-500">New Patient</span>
          <PlusSmallIcon className="h-full font-bold text-gray-500" />
        </div>
      </div>
      <div className="  mb-4">
        <SomeTable5 patients={[]} />
      </div>
    </main>
  );
};

export default PatientsHomeView;
