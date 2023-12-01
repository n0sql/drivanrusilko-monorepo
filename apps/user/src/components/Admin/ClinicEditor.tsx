import React, { useState, useEffect } from "react";


function ClinicEditor({ onSubmit, clinic }: any) {
  const [clinicname, setName] = useState(clinic.name);
  const [description, setDescription] = useState(clinic.description);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!clinicname || !description) {
      alert("Please fill out all fields");
      return;
    }
    onSubmit({ clinicname, description });
  }

  useEffect(() => {
    console.log(clinicname, description);
  }, [clinicname, description]);

  return (
    <div
      className="fixed inset-0 z-[1055] hidden overflow-hidden mt-32"
      id={`drawer-update-${clinic.id}`}
      aria-labelledby="drawer-title"
      aria-modal="true"
      tabIndex={-1}
      role="dialog"
      data-te-modal-init
    >
      <div
        className="relative mx-auto p-4 w-full max-w-2xl h-full md:h-auto"
        data-te-modal-dialog-ref
      >
        <div className="relative p-4  bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3
              id="drawer-title"
              className="text-lg leading-6 font-medium text-gray-900 text-center"
            >
              Edit Clinic
            </h3>
            <button
              type="button"
              aria-label="Close"
              data-te-modal-dismiss
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <h3
              id="drawer-title"
              className="text-lg leading-6 font-medium text-gray-900 text-center"
            >
              Clinic Editor
            </h3>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Clinic Name</label>{" "}
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#cc835c] focus:border-[#cc835c] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                name="name"
                id="treatmentname"
                value={clinicname}
                onChange={(e) => setName(e.target.value)}
                placeholder="Treatment Name"
                type="text"
              />
            </div>
            <textarea
              placeholder="Description"
              rows={7}
              className="block p-2.5 w-full focus:ring-[#cc835c] focus:border-[#cc835c] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-30"
              id="exampleFormControlTextarea1"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className="text-center mt-5 flex">
              {" "}
              <button
                type="submit"
                className="text-[#cc835c] inline-flex items-center hover:text-white border border-[#cc835c] hover:bg-[#cc835c] focus:ring-4 focus:outline-none focus:ring-[#cc835c] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-900"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClinicEditor;
