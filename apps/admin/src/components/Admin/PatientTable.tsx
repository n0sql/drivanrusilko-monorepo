import React from "react";
import EditLabCategory from "./EditLabCategory";
import LabCategoryDelete from "./LabCategoryDelete";
import { Dropdown, DropdownOptions, DropdownTriggerType } from "flowbite";
import BetterPagination from "./BetterPagination";
import ClinicEditor from "./ClinicEditor";
import { PlusIcon } from "@heroicons/react/24/outline";
import ClinicDelete from "./ClinicDelete";
import CategoryDelete from "./CategoryDelete";

const SomeTable5 = ({ patients }: any) => {
  const onSubmitHandler = (data: any) => {
    console.log(data);
  };

  console.log(patients);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(patients.length / itemsPerPage);
  var paginatedCategories =
    totalPages > 1
      ? patients.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      : patients;

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 ">
        <div className="mx-auto max-w-screen-4xl ">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#cc835c] focus:border-[#cc835c] block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Search"
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"></div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {[
                      "First Name",
                      " Last Name",
                      "Phone Number",
                      "Email",
                      "Last Visit",
                      "Next Visit",
                    ].map((item, index) => (
                      <th key={index} scope="col" className="px-4 py-3">
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paginatedCategories.map((item: any, index: number) => {
                    return (
                      <tr key={index} className="border-b dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item?.firstName}
                        </th>
                        <td className="px-4 py-3">{item?.lastName}</td>
                        <td className="px-4 py-3">{item?.phoneNumber}</td>
                        <td className="px-4 py-3">{item?.email}</td>
                        <td className="px-4 py-3">{item?.lastVisit}</td>
                        <td className="px-4 py-3">{item?.nextVisit}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <BetterPagination
              data={patients}
              paginatedCategories={paginatedCategories}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SomeTable5;
