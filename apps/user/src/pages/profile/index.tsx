
import EditPatient from "../../components/Admin/EditPatient"
import React from "react";


export default function Profile() {

  const [showDrawer, setShowDrawer] = React.useState<boolean>(false);


  // if isVisible() is false, ensure that showDrawer is false



  const closeDrawer = () => {
    setShowDrawer(false);
  };

  const openDrawer = () => {
    setShowDrawer(true);
  };

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };
  return (
    <div className="">
      <div className="mx-auto max-w-2xl  px-4 py-12 sm:px-6 sm:py-12 lg:max-w-4xl lg:px-8">
        <div className="px-4 sm:px-0">
          <h3 className=" font-semibold leading-7 text-gray-900">Profile Information</h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Account Details</p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100 space-y-8">
            <div className="shadow rounded rounded-xl  bg-white pr-4 pt-4">
              <div
                className="
            flex justify-end
            "
              >
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-secondary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                  onClick={openDrawer}
                >
                  Edit
                </button>
              </div>
              <div className="px-8 pb-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 ">
                <dt className="text-sm leading-6 text-gray-900">Full name</dt>
                <dd className="mt-1 text-sm font-bold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Margot Foster
                </dd>
                <dt className="text-sm  leading-6 text-gray-900">Email</dt>
                <dd className="mt-1 text-sm font-bold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  someEmail@gmail.com
                </dd>
                <dt className="text-sm  leading-6 text-gray-900">Phone</dt>
                <dd className="mt-1 text-sm font-bold leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  07176637637
                </dd>
                <dt className="text-sm  leading-6 text-gray-900">Birthday</dt>
                <dd className="mt-1 text-sm leading-6 font-bold text-gray-700 sm:col-span-2 sm:mt-0">
                  2008 January 31
                </dd>
              </div>
            </div>
            <div className="px-4 sm:px-0">
              <h3 className=" font-semibold leading-7 text-gray-900">Payment Method</h3>
            </div>
            <div className="px-8 shadow py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 rounded rounded-xl bg-white">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                <div className="flex flex-col">
                  <span className="text-sm leading-6 text-gray-900"> DefaultCard</span>
                  <span className="text-xs text-gray-400">**** **** **** 4242</span>
                </div>
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <button className="bg-secondary text-white rounded px-2 py-1 lg:float-right">
                  Update Payment Method
                </button>
              </dd>
            </div>

            <div className="px-4 sm:px-0">
              <h3 className=" font-semibold leading-7 text-gray-900">Shipping Address</h3>
            </div>
            <div className="px-8 shadow py-6 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-4 rounded rounded-xl bg-white">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                <div className="flex flex-col">
                  <span className="text-sm leading-6 text-gray-900">
                    {" "}
                    Update your shipping address in your <em>subscriptions page.</em>
                  </span>
                </div>
              </dt>
            </div>

            <div className="px-4 sm:px-0">
              <h3 className=" font-semibold leading-7 text-gray-900">Password</h3>
            </div>
            <div className="px-8 shadow py-6 grid-cols-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-4 rounded rounded-xl bg-white">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                <div className="flex flex-col">
                  <span className="text-sm leading-6 text-gray-900"> Current password</span>
                  <span className="text-xs text-gray-400">••••••••••••</span>
                </div>
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <button className="bg-secondary text-white rounded px-2 py-1 lg:float-right">
                  Change Password
                </button>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div
        id="edit-patient"
        className="fixed inset-0 z-[1055]  overflow-hidden -translate-y-full"
        aria-modal="true"
        tabIndex={-1}
        role="dialog"
        data-te-modal-init
      >
        <EditPatient closeDrawer={closeDrawer} />
      </div>
    </div>
  );
}
