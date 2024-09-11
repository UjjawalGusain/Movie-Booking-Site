import React from "react"
import Navbar from "./components/Navbar/Navbar"
import MovieDisplay from "./components/MovieDisplay/MovieDisplay"
import DisplayTiming from "./components/DisplayTiming/DisplayTiming"
function App() {

  return (
    <>
      <div className="w-screen h-screen bg-[#202124]">
        <Navbar />
        <MovieDisplay />
        <DisplayTiming />
      </div>
    </>
  )
}

export default App
