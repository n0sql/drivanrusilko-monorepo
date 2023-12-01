import React from "react";
import {BetterPagination, ClinicDelete} from "ui";
import ClinicEditor from "./ClinicEditor";
import { PlusIcon } from "@heroicons/react/24/outline";


const SomeTable3 = ({ treatments, router }: any) => {
  const onSubmitHandler = (data: any) => {
    console.log(data);
  };

  console.log(treatments);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(treatments.length / itemsPerPage);
  var paginatedCategories =
    totalPages > 1
      ? treatments.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      : treatments;

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
                    {["Clinic", "treatments", "Patients", "Edit", "Add treatment", "Delete"].map(
                      (item, index) => (
                        <th key={index} scope="col" className="px-4 py-3">
                          {item}
                        </th>
                      ),
                    )}
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
                          {item?.name}
                        </th>
                        <td className="px-4 py-3">{item?.categories?.length}</td>
                        <td className="px-4 py-3">
                          {item?.categories?.reduce((acc: number, category: any) => {
                            return acc + category.patients.length;
                          }, 0)}
                        </td>
                        <td className="px-4 py-3">
                          <button
                            type="button"
                            id="updateClinicButton"
                            data-te-toggle="modal"
                            data-te-target={`#drawer-update-${item.id}`}
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-secondary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <svg>
                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                <path
                                  fill-rule="evenodd"
                                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </svg>
                            Update
                          </button>
                          <ClinicEditor clinic={item} onSubmit={onSubmitHandler} />
                        </td>

                        <td className="px-4 py-3 ">
                          <button
                            onClick={() => {
                              router.push(`/admin/clinic/categories-builder/${item.name}`);
                            }}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-secondary rounded-lg hover:bg-secondary focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                          >
                            <PlusIcon
                              className="w-4 h-4 mr-2 stroke-[5px] text-white"
                              aria-hidden="true"
                            />
                            add item
                          </button>
                        </td>
                        <td className="px-4 py-3 ">
                          <button
                            type="button"
                            id={`deleteProductButton-${item.id}`}
                            data-te-toggle="modal"
                            data-te-target={`#drawer-delete-${item.id}`}
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            Delete item
                          </button>
                          <ClinicDelete clinic={item} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <BetterPagination
              data={treatments}
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

export default SomeTable3;
