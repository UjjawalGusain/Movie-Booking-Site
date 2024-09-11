import React from 'react'
import DateCarousal from './DateCarousal/DateCarousal'

function DisplayTiming() {
  return (
    <div className='flex w-full px-3 justify-center items-center'>
        <div className='flex rounded-2xl  items-center w-full h-24 bg-sky-200 bg-opacity-5 '>
            <DateCarousal />
        </div>
    </div>
  )
}

export default DisplayTiming
