import React from "react";
import { LiaImdb } from "react-icons/lia";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function MovieDisplay({ movie_id }) {
  return (
    <div className="flex w-full px-20 py-10 gap-14 h-[70%]">
      <div className="flex justify-center items-center w-[45%] h-full bg-gradient-to-b from-blue-900 to-indigo-600 rounded-3xl shadow-lg">
        <img
          src={
            "https://cdn.traileraddict.com/content/20th-century-fox/avatar-way-of-water.jpg"
          }
          alt="Avatar Way of Water"
          className="w-full h-full rounded-3xl object-cover"
          style={{
            boxShadow: "0 0 20px 10px rgba(255, 255, 255, 0.15)", // Larger spread, subtle glow
          }}
        />
      </div>

      <div className="flex flex-col text-left gap-8">
        <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400 tracking-wide">
          {"Avatar: The Way of Water"}
        </div>

        <div className="flex">
          <div className="w-4/6 p-5">
            <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">
              <ul className="flex gap-5">
                <li className="text-sm tracking-wider text-gray-300 font-light bg-[#2d2d31e6] px-4 pt-0.5 pb-1 flex justify-center items-center rounded-2xl ">
                  Thriller/Mystery
                </li>
                <li className="text-sm tracking-wider text-gray-300 font-light bg-[#2d2d31e6] px-4 pt-0.5 pb-1 flex justify-center items-center rounded-2xl">
                  Fantasy
                </li>
                <li className="text-sm tracking-wider text-gray-300 font-light bg-[#2d2d31e6] px-4 pt-0.5 pb-1 flex justify-center items-center rounded-2xl">
                  Action
                </li>
                <li className="text-sm tracking-wider text-gray-300 font-light bg-[#2d2d31e6] px-4 pt-0.5 pb-1 flex justify-center items-center rounded-2xl">
                  Adventure
                </li>
              </ul>
              <ul className="flex gap-5 mt-4 mb-9">
                <li className="flex gap-2 font-normal text-sm justify-center items-center">
                  <div>
                    <LiaImdb className="text-yellow-500 size-7 rounded-md" />
                  </div>
                  <p>{"7.6/10"}</p>
                </li>

                <li className="flex gap-2 font-normal text-sm justify-center items-center">
                  <div className="w-10 h-3">
                    <img
                      src={
                        "1000_F_810793006_J9OKoH3gjL1r5vc9yjNGaveQSMvIWQEG.jpg"
                      }
                      alt={"icons8-censor-32.png"}
                      className="bg-yellow-200 rounded-md"
                    />
                  </div>
                  <p>{"13(18+)"}</p>
                </li>

                <li className="flex gap-2 font-normal text-sm justify-center items-center">
                  <div>
                    <MdAccessTimeFilled className="text-yellow-500 size-7" />
                  </div>
                  <p>{"3h 10m"}</p>
                </li>
              </ul>
              <p className="font-light mb-3">
                Jake Sully lives with his newfound family formed on the
                extrasolar moon Pandora. Once a familiar threat returns to
                finish what was previously started, Jake must work with Neytiri
                and the army of the Na'vi race to protect their home.
              </p>
              <p></p>
              <button className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-800 font-light ">
                READ MORE
              </button>
              <div className="mt-5 flex h-8 gap-8 noto-sans-light-text ">
                <div className="flex gap-2">
                  <button className="bg-blue-400 rounded-2xl text-black text-sm px-3 py-1">
                    WATCH TRAILER
                  </button>
                  <button className="w-8 h-8 bg-blue-400 text-black rounded-full flex justify-center items-center">
                    <FaPlay className="text-base" />
                  </button>
                </div>
                <button className="relative bg-[#202124] border-transparent border-2 rounded-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-blue-400 text-sm noto-sans-light-text px-3 py-1 flex items-center justify-center gap-3">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-white to-blue-400 px-3 py-1">
                    TO WATCHLIST
                  </span>
                  <FaPlus className="text-white font-light" />
                  <div className="absolute inset-0 rounded-2xl bg-clip-text border-2  bg-gradient-to-r from-blue-500 via-white to-blue-400 "></div>
                </button>
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col w-2/6 p-5 gap-10">
            <div className="flex flex-col w-11/12 noto-sans-regular-text">
              <hr className="border-gray-600 mb-1" />
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 tracking-widest font-normal mb-2">
                Director
              </p>
              <p className="text-sm tracking-wider text-slate-400 font-light">
                James Cameron
              </p>
            </div>

            <div className="flex flex-col w-11/12 noto-sans-regular-text">
              <hr className="border-gray-600 mb-1" />
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 tracking-widest font-normal mb-2">
                Writers
              </p>
              <p className="text-sm tracking-wider text-slate-400 font-light">
                Rick Jaffia | Rick Jaffa | Amanda Silver
              </p>
            </div>

            <div className="flex flex-col w-11/12 noto-sans-regular-text">
              <hr className="border-gray-600 mb-1" />
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 tracking-widest font-normal mb-2">
                Stars
              </p>
              <p className="text-sm tracking-wider text-slate-400 font-light">
                Zoe Saldana | Rick Jaffa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDisplay;
