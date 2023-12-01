import React from "react";

const ScheduleAppointment = ({ closeModal, showDrawer }: any) => {
  const [appointment, setAppointment] = React.useState<any>({
    patient: "",
    location: "",
    timeFrom: "",
    timeTo: "",
    status: "",
    color: "#cc835c",
    notes: "",
    reason: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(appointment);
  }

  const statuses = [
    "Scheduled",
    "Confirmed",
    "Arrived",
    "In Session",
    "Complete",
    "Cancelled",
    "Not Confirmed",
    "Rescheduled",
    "No Show",
  ];

  return (
    <section className=" max-w-6xl mx-auto   mt-20 ">
      <div className=" mx-auto w-full   bg-white dark:bg-gray-900 rounded rounded-lg ">
        <div className="flex border-b-2 py-2 px-4 items-center  bg-gray-100 mb-4  rounded-t-lg ">
          <h2 id="drawer-top-label" className=" text-xl font-bold text-gray-900 dark:text-white ">
            Schedule Appointment
          </h2>
          <button
            type="button"
            aria-label="Close"
            onClick={closeModal}
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
        <form method="POST" className="px-4 " onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 items-start">
            <div className="sm:col-span-1">
              <label
                htmlFor="patient"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Patient
              </label>
              <input
                type="text"
                name="patient"
                id="patient"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#cc835c] focus:border-[#cc835c] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Patient Name"
                required
                onChange={(e) => {
                  setAppointment({ ...appointment, patient: e.target.value });
                }}
              />
            </div>

            <div className="sm:col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                Location
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#cc835c] focus:border-[#cc835c] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                id="location"
                name="location"
                onChange={(e) => {
                  setAppointment({ ...appointment, location: e.target.value });
                }}
              >
                <option className="active:bg-[#cc835c]" value="">
                  Select a location
                </option>

                <option value="Office">Office</option>
              </select>
            </div>

            <div className="w-full">
              <label htmlFor="timeFrom" className="block text-gray-700 text-sm font-bold mb-2">
                Start Time
              </label>
              <input
                type="datetime-local"
                name="timeFrom"
                id="timeFrom"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#cc835c] focus:border-[#cc835c] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
                onChange={(e) => {
                  const utcTime = new Date(e.target.value).toISOString();
                  setAppointment({ ...appointment, timeFrom: utcTime });
                }}
              />
            </div>
            <div className="w-full">
              <label htmlFor="timeTo" className="block text-gray-700 text-sm font-bold mb-2">
                End Time
              </label>
              <input
                type="datetime-local"
                name="timeTo"
                id="timeTo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#cc835c] focus:border-[#cc835c] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                onChange={(e) => {
                  const utcTime = new Date(e.target.value).toISOString();
                  setAppointment({ ...appointment, timeTo: utcTime });
                }}
                required
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                Status
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#cc835c] focus:border-[#cc835c] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                id="status"
                name="status"
                onChange={(e) => {
                  setAppointment({ ...appointment, status: e.target.value });
                }}
              >
                <option className="active:bg-[#cc835c]" value="">
                  Select a status
                </option>

                {statuses.map((status, index) => (
                  <option key={index} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full flex  flex-col">
              <label htmlFor="color" className="block text-gray-700 text-sm font-bold mb-2">
                Color
              </label>
              <input
                type="color"
                name="color"
                id="color"
                value={appointment.color}
                onChange={(e) => {
                  setAppointment({ ...appointment, color: e.target.value });
                }}
                className="bg-gray-50 border w-full border-gray-300 text-sm "
                required
              />
            </div>

            <div className="w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reason">
                Reason
              </label>
              <textarea
                rows={8}
                className="block p-2.5 w-full focus:ring-[#cc835c] focus:border-[#cc835c] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                id="reason"
                name="reason"
                placeholder="Your reason here"
                onChange={(e) => {
                  setAppointment({ ...appointment, reason: e.target.value });
                }}
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="notes"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="notes"
                rows={8}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#cc835c] focus:border-[#cc835c]  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your notes here"
                onChange={(e) => {
                  setAppointment({ ...appointment, notes: e.target.value });
                }}
              ></textarea>
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

export default ScheduleAppointment;
