import React, { useState } from "react";
import Calendar from "react-calendar";
import "../../styles/CalendarOps.scss";
import "../../styles/CalendarCuriosity.scss";

export default function CalendarOps() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar">
      <p className="pCal">
        Select a date and discover like Mars as if you were there :
      </p>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className="pCal">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
    </div>
  );
}
