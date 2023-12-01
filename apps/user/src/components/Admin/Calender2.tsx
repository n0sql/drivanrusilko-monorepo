import React from "react";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
// import { Drawer } from "flowbite";
// import type { DrawerOptions, DrawerInterface } from "flowbite";

const Calender2 = ({ openDrawer }: any) => {
  const calendarEl = React.useRef(null);

  React.useEffect(() => {
    if (calendarEl.current !== null) {
      const calendar = new Calendar(calendarEl.current, {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
        initialView: "timeGridDay",
        events: [
          { id: "1", start: "2023-06-15T09:00:00", end: "2023-06-15T10:00:00", title: "event 1" },
          {
            id: "2",
            start: "2023-06-15T10:00:00",
            end: "2023-06-15T11:00:00",
            title: "event 2",

            classNames: ["bg-red-100", "text-red-500", "border-red-500"],
          },
        ],
        customButtons: {
          myCustomButton: {
            text: "+event",

            click: function () {
              openDrawer();
            },
          },
        },
        headerToolbar: {
          left: "myCustomButton,prev,next,today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        },
        editable: true,
        selectable: true,
        selectMirror: true,
        droppable: true,
        slotDuration: "00:15:00",
        slotLabelInterval: "01:00:00",
        eventDisplay: "block",
        displayEventTime: true,
        eventBackgroundColor: "#424241",
        eventTimeFormat: { hour: "numeric", minute: "2-digit", meridiem: "short" },
        allDaySlot: false,
        stickyHeaderDates: true,
        aspectRatio: 1.8,
        height: 750,
      });

      calendar?.render();
    }
  }, [calendarEl]);

  return (
    <main className="p-4 md:ml-64 h-auto pt-20">
      <div className="row">
        <div className="col-md-12">
          <div id="calend" ref={calendarEl}></div>
        </div>
      </div>
    </main>
  );
};

export default Calender2;
