import React from "react";
import DateCard from "./DateCard";
import { useState, useEffect } from "react";
import date from "date-and-time";

function DateCarousal() {

  useEffect(() => {
    const current_date = new Date();
    const d = date.format(current_date, "DD");
    const day = date.format(current_date, "ddd");
    const month = date.format(current_date, "MMM");

    // setCurrentDate(date);
    // setCurrentDay(day);

    console.log(d);
    console.log(day);
    console.log(month);
    
  }, []);

  return (
    <div className="flex justify-center items-center">
      <p className="text-blue-300 noto-sans-light-text">Date</p>
      <DateCard isCurrent={true} />
    </div>
  );
}

export default DateCarousal;
