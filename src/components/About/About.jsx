/* eslint-disable no-unused-vars */
import React from "react";
import style from "./About.module.css"
export default function About() {
  return (
    <>
      <div className="w-full h-lvh bg-[#1abc9c] flex justify-center items-center flex-col">
        <div className='container p-52'>
        <h1 className="font-bold text-center text-white uppercase text-4xl">
          about component
        </h1>

        <h2 className={style.HeadingAbout}><i className="fa-solid fa-star text-white "></i></h2>
        <div className="flex justify-around flex-row p-8 text-left gap-7 text-white">
          <p className="px-8"> 
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="px-8">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
