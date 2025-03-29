import React from "react";
import flatArrow from "../assets/fiat-arrow.png";

const Home = () => {
  return (
    <>
      <main className="w-full h-screen bg-black flex justify-center items-center flex-col gap-4 md:gap-7 px-4 md:px-8">
        <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center">
          welcome to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 font-bold text-xl md:text-6xl">
            bharat education hub
          </span>
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-[90%] md:max-w-[80%] lg:max-w-[60%] text-center">
          hey, welcome tonour website our goal is to make eduaction affordable
          to every citizen of our country come and lets join our journey or
          start learning.
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-purple-500 text-white text-base md:text-lg lg:text-xl font-semibold p-3 md:p-4 rounded-full hover:from-purple-500 hover:to-blue-600 transition-all duration-600 transform hover:scale-110 shadow-lg flex justify-center items-center gap-2">
          Get Started
          <img src={flatArrow} alt="Arrow icon" className="w-4 md:w-5 lg:w-6" />
        </button>
      </main>
    </>
  );
};

export default Home;
