
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import {
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  BanknotesIcon,
  BeakerIcon,
} from "@heroicons/react/24/solid";
const AsideNavItem = ({
  navItem,
  router,
  navSubmenuItems,
  navItemIndex,
  navItemIcon,
}: {
  navItem: string;
  navSubmenuItems: string[];
  navItemIndex: number;
  navItemIcon: string;
  router: any;
}) => {
  return (
    <div>
      <button
        type="button"
        className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        aria-controls={`dropdown-pages-${navItemIndex}`}
        data-collapse-toggle={`dropdown-pages-${navItemIndex}`}
      >
        {navItem === "Schedule" ? (
          <CalendarDaysIcon className="flex-shrink-0 w-5 h-5 mr-2 text-gray-400 transition duration-75 group-hover:text-gray-500 dark:group-hover:text-gray-300" />
        ) : navItem === "Billing" ? (
          <BanknotesIcon className="flex-shrink-0 w-5 h-5 mr-2 text-gray-400 transition duration-75 group-hover:text-gray-500 dark:group-hover:text-gray-300" />
        ) : navItem === "Patients" ? (
          <UserGroupIcon className="flex-shrink-0 w-5 h-5 mr-2 text-gray-400 transition duration-75 group-hover:text-gray-500 dark:group-hover:text-gray-300" />
        ) : navItem === "Labs" ? (
          <BeakerIcon className="flex-shrink-0 w-5 h-5 mr-2 text-gray-400 transition duration-75 group-hover:text-gray-500 dark:group-hover:text-gray-300" />
        ) : navItem === "Clinics" ? (
          <ClipboardDocumentCheckIcon className="flex-shrink-0 w-5 h-5 mr-2 text-gray-400 transition duration-75 group-hover:text-gray-500 dark:group-hover:text-gray-300" />
        ) : null}
        <span className="flex-1 ml-3 text-left whitespace-nowrap">{navItem}</span>
        <ChevronDownIcon className="flex-shrink-0 w-3  ml-2 stroke-2 text-black transition duration-75 group-hover:text-gray-500 dark:group-hover:text-gray-300" />
      </button>
      <ul id={`dropdown-pages-${navItemIndex}`} className="hidden py-2 space-y-2">
        {navSubmenuItems?.map((navSubmenuItem, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => {
                  if (navSubmenuItem === "View All") {
                    router.push(`/admin/${navItem.toLowerCase()}`, undefined, { shallow: true });
                  } else if (navSubmenuItem === "New Clinic") {
                    router.push(`/admin/clinic/clinic-builder`, undefined, { shallow: true });
                  } else if (navSubmenuItem === "New Lab") {
                    router.push(`/admin/labs/add-lab`, undefined, { shallow: true });
                  } else if (navSubmenuItem === "New Patient") {
                    router.push(`/admin/patients/add-patient`, undefined, { shallow: true });
                  } else if (navSubmenuItem === "PatientList") {
                    router.push(`/admin/patients`, undefined, { shallow: true });
                  } else {
                    router.push(`/admin/${navItem.toLowerCase()}/${navSubmenuItem.toLowerCase()}`);
                  }
                }}
                className="flex items-center p-2 pl-11 w-full  text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="flex-1 ml-3 text-left whitespace-nowrap">{navSubmenuItem}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export {AsideNavItem}
