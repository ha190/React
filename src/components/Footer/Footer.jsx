/* eslint-disable no-unused-vars */
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="flex justify-center items-center flex-col w-ful mt-8">
        <div className="flex justify-evenly items-center flex-row gap-6 bg-slate-700 w-full p-10">
          <div className="text-white text-center p-10 "><h4 className="font-bold text-xl">LOCATION</h4> 
          <p>2215 John Daniel Drive Clark,</p>
          <p> MO 65243</p>
          </div>
          <div className="p-10 bg-slate-700">
            <h3 className="text-white font-bold text-xl">AROUND THE WEB</h3>
            <i className="fa-brands fa-facebook rounded-full text-white text-center fa-x border p-1 mx-1 ms-5"></i>
            <i className="fa-brands fa-linkedin rounded-full text-white text-center fa-x border p-1 mx-1 "></i>
            <i className="fa-solid fa-globe rounded-full text-white text-center fa-x border p-1 mx-1 "></i>
            <i className="fa-brands fa-twitter rounded-full text-white text-center fa-x border p-1 mx-1 "></i>
          </div>
          <div className="text-white text-center p-10 ">
            <h4 className="font-bold text-xl"> ABOUT FREELANCER </h4>
           <p className="px-10"> Freelance is a free to use, licensed Bootstrap
            theme created by Route</p>
          </div>
        </div>
        <div className="bg-slate-950 w-full p-4">
          <p className="text-center bg-slate-950 text-white font-bold">
            Copyright © Your Website 2021
          </p>
        </div>
      </div>
    </>
  );
}
