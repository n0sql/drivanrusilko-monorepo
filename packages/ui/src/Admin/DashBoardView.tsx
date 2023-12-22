
import { ArrowUpIcon } from "../";
const DashBoardView = () => {
  return (
    <main className="p-4  h-auto"> 
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      <div className="border rounded rounded-lg  dark:border-gray-600 mb-4">
        <section className="bg-white dark:bg-gray-900 rounded rounded-lg shadow">
          <div className="grid max-w-screen-xl px-4 py-2 mx-auto lg:gap-3 xl:gap-0 lg:py-3 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Welcome
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Manage your Practice from Here
              </p>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex h-48">
              <img src="/stethoscope.jpg" className="w-full" alt="mockup" />
            </div>
          </div>
        </section>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600">
          <div className="items-center justify-between h-full bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="w-full ">
              <h2 className="text-lg m-0 font-normal text-gray-500 dark:text-gray-400">
                Active Patients
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
          </div>
        </div>
        <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600">
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
          </div>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600">
          <div className="items-center justify-between h-full bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="w-full ">
              <h2 className="text-lg m-0 font-normal text-gray-500 dark:text-gray-400">
                Lab Orders
              </h2>
              <span className="text-3xl font-bold leading-none text-gray-900 sm:text-4xl dark:text-white">
                30
              </span>
              <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                  <ArrowUpIcon className="w-3 h-3 mr-1 stroke-[3px]" />
                  12.5%
                </span>
                <span>Since last Month</span>
              </p>
            </div>
          </div>
        </div>
        <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600">
          <div className="items-center justify-between h-full bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="w-full ">
              <h2 className="text-lg m-0 font-normal text-gray-500 dark:text-gray-400">
                Appointments
              </h2>
              <span className="text-3xl font-bold leading-none text-gray-900 sm:text-4xl dark:text-white">
                1
              </span>
              <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                  <ArrowUpIcon className="w-3 h-3 mr-1 stroke-[3px]" />
                  12.5%
                </span>
                <span>Since last Month</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72">
          New Appointments
        </div>
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
        <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
      </div>
    </main>
  );
};

export {DashBoardView};
