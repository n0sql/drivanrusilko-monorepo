import React from "react";

const EditPatient = ({ closeDrawer }: any) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [dobs, setDob] = React.useState<string>("");
  return (
    <section className=" max-w-6xl mx-auto   mt-20">
      <div className=" mx-auto w-full   bg-white dark:bg-gray-900 rounded rounded-lg ">
        <div className="flex border-b-2 py-2 px-4 items-center  bg-gray-100 mb-4  rounded-t-lg ">
          <h2 id="drawer-top-label" className=" text-xl font-bold text-gray-900 dark:text-white ">
            Edit Profile Info
          </h2>
          <button
            type="button"
            aria-label="Close"
            onClick={() => {
              closeDrawer();
            }}
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
        <form method="POST" className="px-4 ">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 items-start">
            <div className="sm:col-span-1">
              <label
                htmlFor="fullName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#cc835c] focus:border-[#cc835c] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#cc835c] focus:border-[#cc835c] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="email"
                required
              />
            </div>

            <div className="w-full">
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#cc835c] focus:border-[#cc835c] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="dob" className="block text-gray-700 text-sm font-bold mb-2">
                Birthday
              </label>
              <input
                type="datetime-local"
                name="dob"
                id="dob"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#cc835c] focus:border-[#cc835c] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
          </div>

          <div className="flex items-center">
            <button
              type="submit"
              className="text-[#cc835c] py-2.5 w-32 mx-auto mb-4 mt-4  items-center hover:text-white border border-[#cc835c] hover:bg-[#cc835c] focus:ring-4 focus:outline-none focus:ring-[#cc835c] font-medium rounded-lg text-sm  text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 capitalize dark:focus:ring-blue-900"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditPatient;
