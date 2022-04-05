import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'



const localizer = momentLocalizer(moment)
const myEventsList = [
  { start: new Date("4/16/22"), end: new Date("4/18/22"), title: "Chess Tournament" }
];
const Events = () => {
  return (
    <div class="bg-white h-section snap-start" id="events">
        <div class="px-11 pt-11">
          <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 660 }}
          />
        </div>
    </div>
  )
}

export default Events 