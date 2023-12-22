
import {
  BriefcaseIcon,

} from "../";

import{ AsideNavItem} from "./AsideNavItem";
const Aside2 = ({ router }: any) => {
  const navItems = ["Schedule", "Patients", "Clinics", "Labs", "Billing"];
  const navItemIconNames = [
    "CalendarDaysIcon",
    "UserGroupIcon",
    "BanknotesIcon",
    "BuildingOffice2Icon",
    "BeakerIcon",
  ];
  const navSubmenuItems = [
    ["Appointments"],
    ["PatientList", "New Patient"],
    ["View All", "New Clinic"],
    ["View All", "New Lab"],
    ["Invoices", "Payments", "Expenses"],
  ];
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-[50]">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <button
              type="button"
              data-drawer-target="drawer-navigation"
              data-drawer-toggle="drawer-navigation"
              aria-controls="drawer-navigation"
              className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="sr-only">Toggle sidebar</span>
            </button>
            <a
              href="https://drivan.d3gmqotpidrz95.amplifyapp.com/"
              className="flex items-center justify-between mr-4"
            >
              <img src="/drivanlogo.svg" className="mr-3 h-8" alt="logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Drivanrusilko
              </span>
            </a>
          </div>
        </div>
      </nav>
      {/* Sidebar */}
      <aside
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 backdrop-opacity-0 transition-transform -translate-x-full     border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidenav"
        id="drawer-navigation"
        tabIndex={-1}
        data-drawer-backdrop="false"
      >
        <div className="overflow-y-auto  py-5 px-3 h-full bg-white dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => {
                  router.push("/admin/dashboard");
                }}
                className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <BriefcaseIcon className="w-6 h-6  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ml-3">Overview</span>
              </button>
            </li>

            {navItems.map((item: string, itemIndex) => {
              return (
                <li key={itemIndex}>
                  {" "}
                  <AsideNavItem
                    navItemIndex={itemIndex}
                    router={router}
                    navItemIcon={navItemIconNames[itemIndex]}
                    navItem={item}
                    navSubmenuItems={navSubmenuItems[itemIndex]}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export {Aside2}
