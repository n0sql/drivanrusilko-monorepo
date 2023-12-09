import React, { useState, useEffect } from "react";

const Calendar = ({ month_names, days, themes, events }: any) => {
  const [openEventModal, setOpenEventModal] = useState(false);

  const [today, setToday] = useState(new Date());
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const [no_of_days, setNoOfDays] = useState<number[]>([]);
  const [blankdays, setBlankDays] = useState<number[]>([]);
  const isToday = (date: number | undefined) => {
    const today = new Date();
    const d = new Date(year, month, date);
    return today.toDateString() === d.toDateString() ? true : false;
  };

  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const showEventModal = (date: number) => {
    setOpenEventModal(true);
    setSelectedDate(date);
  };

  const closeEventModal = () => {
    setOpenEventModal(false);
  };

  const getNoOfDays = () => {
    const daysInMonth = new Date(year, month, 0).getDate();
    // find where to start calendar day of week
    const dayOfWeek = new Date(year, month).getDay();
    // find where to end calendar day of week
    const blankdaysArray: number[] = [];
    for (let i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i);
    }
    const daysArray: number[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    setBlankDays(blankdaysArray);
    setNoOfDays(daysArray);
  };

  useEffect(() => {
    getNoOfDays();
  }, [month, year]);

  return (
    <main className="p-4 md:ml-64 h-auto pt-20">
      <div className="container py-2 px-2">
        <div className="bg-white rounded-lg shadow lg:overflow-hidden  max-w-screen">
          <div className="flex items-center justify-between py-2 px-6">
            <div>
              <span className="text-lg font-bold text-gray-800">{month_names[month]}</span>
              <span className="ml-1 text-lg text-gray-600 font-normal">{year}</span>
            </div>
            <div className="border rounded-lg px-1  ">
              <button
                type="button"
                className={`leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center
                ${month === 0 ? "cursor-not-allowed opacity-25" : ""}
                `}
                disabled={month === 0 ? true : false}
                onClick={() => {
                  setMonth((month - 1 + 12) % 12);
                  getNoOfDays();
                }}
              >
                <svg
                  className="h-5 w-5 text-gray-500 inline-flex leading-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div className="border-r inline-flex h-6"></div>
              <button
                type="button"
                className={`leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center
                  ${month === 11 ? "cursor-not-allowed opacity-25" : ""}
                `}
                disabled={month === 11 ? true : false}
                onClick={() => {
                  setMonth((month + 1) % 12);
                  getNoOfDays();
                }}
              >
                <svg
                  className="h-5 w-5 text-gray-500 inline-flex leading-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="lg:-mx-1 mx-3 lg:-mb-1">
            <div className="flex lg:flex-nowrap flex-wrap w-full gap-x-1 justify-between">
              {days.map(
                (
                  day:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined,
                  tindex: React.Key | null | undefined,
                ) => {
                  return (
                    <div key={tindex} className="lg:px-2 py-2 lg:w-[14.26%]">
                      <div className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">
                        {day}
                      </div>
                    </div>
                  );
                },
              )}
            </div>

            <div className="flex flex-wrap lg:border-t lg:border-l ">
              {blankdays.map((blankday, nindex) => {
                return (
                  <div
                    key={nindex}
                    className=" lg:px-4 lg:pt-2 border-r p-1 border-b relative lg:w-[14.26%]  w-[20%] lg:h-[120px]"
                  >
                    <div className="text-sm">&nbsp;</div>
                  </div>
                );
              })}
              {no_of_days.map((date, windex) => {
                return (
                  <div
                    key={windex}
                    className={`lg:px-4 lg:pt-2 border-r p-1 border-b relative lg:w-[14.26%]  w-[20%] lg:h-[120px]`}
                  >
                    <div
                      onClick={() => showEventModal(date)}
                      className={`inline-flex w-6 h-6 items-center justify-center cursor-pointer text-center leading-none rounded-full transition ease-in-out duration-100 ${
                        isToday(date) ? "bg-blue-500 text-white" : "text-gray-700"
                      }`}
                    >
                      {date}
                    </div>
                    <div className="lg:h-[60px]  w-auto    overflow-y-auto mt-1">
                      {events
                        .filter(
                          (event: { event_date: string | number | Date }) =>
                            new Date(event.event_date).toDateString() ===
                            new Date(year, month + 1, date).toDateString(),
                        )
                        .map(
                          (
                            event: {
                              event_theme: string;
                              event_date: string | number | Date;
                              event_title:
                                | string
                                | number
                                | boolean
                                | React.ReactFragment
                                | React.ReactPortal
                                | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                                | null
                                | undefined;
                            },
                            jindex: React.Key | null | undefined,
                          ) => (
                            <div
                              key={jindex}
                              className={`px-2 py-1 text-gray-500 font-bold text-sm 
          ${event.event_theme === "blue" ? "border-l-4 border-blue-500" : ""}
            ${event.event_theme === "red" ? "border-l-4 border-red-500" : ""}
            ${event.event_theme === "yellow" ? "border-l-4 border-yellow-500" : ""}
            ${event.event_theme === "green" ? "border-l-4 border-green-500" : ""}
            ${event.event_theme === "purple" ? "border-l-4 border-purple-500" : ""}
          `}
                            >
                              <p className="text-sm truncate leading-tight">{event.event_title}</p>
                            </div>
                          ),
                        )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Calendar;
