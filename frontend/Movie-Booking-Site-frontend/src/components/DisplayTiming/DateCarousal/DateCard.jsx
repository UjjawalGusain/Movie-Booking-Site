import React from 'react';

function DateCard({ isCurrent }) {
  return (
    <div className={`flex flex-col w-12 h-16 py-1 text-xs justify-center items-center rounded-2xl ${isCurrent ? "bg-blue-400" : "opacity-50 text-white"}`}>
      <div>Today</div>
      <div className='font-bold'>11</div>
      <div>Th</div>
    </div>
  );
}

export default DateCard;
