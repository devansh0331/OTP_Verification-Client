import React from "react";
import { Button } from "@material-tailwind/react";
import Illustration from "../assets/illustration1.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="w-screen flex flex-col md:flex-row items-center justify-evenly h-screen bg-gray-900">
      <div className="w-full md:w-3/5 h-3/5 md:flex:1  rounded-xl p-2 md:p-5 ">
        <h1 className="text-xl text-center md:text-left text-white">
          Welcome to the
        </h1>
        <h1 className="text-4xl md:text-5xl text-center md:text-left font-bold text-red-600">
          OTP Verification
        </h1>
        <h1 className="text-xl text-justify md:text-left text-white mt-5">
          Want to implement Email Verification using OTPs. Here is the solution
          for you. See the demo, enter your Email, recieve an OTP in real-time
          and verify it. Docs available for the setup of your real-time project.
        </h1>
        <div className="w-full flex flex-col md:flex-row items-center justify-evenly md:justify-start text-xl mt-3">
          <button className="w-full md:w-1/5 bg-red-600 text-white px-5 py-1 rounded-md hover:bg-red-900">
            Read Docs
          </button>
          <button
            onClick={() => navigate("/demo")}
            className="w-full md:w-1/5 text-red-600 px-5 py-1 mt-5 md:mt-0 md:ml-5 border border-red-600 rounded-md hover:border-white hover:text-white"
          >
            Demo
          </button>
        </div>
      </div>
      <img src={Illustration} alt="" className="h-auto  md:flex-1 " />
    </div>
  );
}

export default Home;
