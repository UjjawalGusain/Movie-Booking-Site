import React from "react";
import { IoMenu } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
function Navbar() {
  return (
    <div className="flex w-screen justify-center items-center p-3 text-white ">
      <div className="w-11/12 h-16 px-3 rounded-2xl gap-5 flex justify-evenly items-center relative">

        <div className="shadow-sm shadow-slate-50 absolute w-full h-full bg-sky-200 opacity-5 rounded-xl"></div>

        <div className="flex h-full w-1/4 gap-6 px-6 ">
          <div className="h-full flex justify-center items-center">
            <IoMenu className="text-3xl" />
          </div>
          <div className="w-3/5 flex justify-center items-center">
            <img
              src="cinefiles-high-resolution-logo-black-transparent.svg"
              alt="My SVG"
              className="w-44 h-28"
            />
          </div>
        </div>
        
        <div className="w-2/4 flex justify-center items-center text-gray-300">
          <ul className="flex w-full gap-10 justify-center items-center">
            <li>
              <button>Current Sessions</button>
            </li>
            <li>
              <button>Coming Soon!</button>
            </li>
            <li>
              <button>IMax</button>
            </li>
            <li>
              <button>3D</button>
            </li>
          </ul>
        </div>

        <div className="w-1/4 flex gap-9 items-center justify-center text-gray-300">
          <button
            name="location"
            className="flex justify-center items-center gap-2"
          >
            <IoLocation />
            NY, Ocean Mall
          </button>
          <button
            name="login"
            className="flex justify-center items-center gap-2"
          >
            <IoMdPerson />
            Log In
          </button>
        </div>

        
      </div>
    </div>
  );
}

export default Navbar;
