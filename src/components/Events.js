import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { RRule, RRuleSet, rrulestr } from 'rrule'
import moment from 'moment'
/*
// Create a rule:
const rule = new RRule({
  freq: RRule.WEEKLY,  // repeate weekly, possible freq [DAILY, WEEKLY, MONTHLY, ]
  interval: 7,
  byweekday: [RRule.TR],
  dtstart: new Date(Date.UTC(2022, 1, 20)),
  until: new Date(Date.UTC(2022, 5, 5))
})
*/ 

const localizer = momentLocalizer(moment)
const myEventsList = [
  { start: new Date("4/16/22"), end: new Date("4/18/22"), title: "Chess Tournament" },
  { start: new Date("4/22/22"), end: new Date("4/22/22"), title: "Emily Folwer Chess Night" },
  { start: new Date("4/14/22"), end: new Date("4/14/22"), title: "Practice" },
  { start: new Date("4/21/22"), end: new Date("4/21/22"), title: "Practice" },
  { start: new Date("4/28/22"), end: new Date("4/28/22"), title: "Practice" },
  { start: new Date("5/5/22"), end: new Date("5/5/22"), title: "Practice" }
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