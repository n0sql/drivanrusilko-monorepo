import React from "react";

const CategoryDelete = ({ category }: any) => {
  return (
    <div
      className="fixed inset-0 z-[1055] hidden overflow-hidden"
      id={`category-delete-${category.id}`}
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
              Delete Lab Category
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
          <h3 id="drawer-title" className="text-lg leading-6 font-medium text-gray-900 text-center">
            Are you sure you want to delete {category.name}?
          </h3>
          <div className="text-center mt-5 flex flex-col gap-y-6">
            <button
              data-te-modal-dismiss
              type="submit"
              className="bg-[#cc835c] text-white   mx-auto px-8 py-2 hover:bg-[#cc835c] cursor-pointer"
            >
              Delete
            </button>
            <button
              className="bg-[#cc835c] text-white   mx-auto px-8 py-2 hover:bg-[#cc835c] cursor-pointer"
              data-te-modal-dismiss
              type="button"
              aria-label="Close"
            >
              {" "}
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDelete;
