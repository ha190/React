/* eslint-disable no-unused-vars */
import React from 'react'
import style from "./About.module.css"
import logo from "../../assets/image/avataaars.png";
export default function Home() {
  return<>
  <div className="w-full h-lvh bg-[#1abc9c] flex justify-center items-center flex-col">
        <div className='container mx-auto flex justify-center items-center flex-col'>
          <div>
          <img src={logo} alt="" className='w-full h-full'/>
          </div>
        <h1 className="font-bold text-center text-white uppercase text-4xl py-4">
          start framework
        </h1>

        <h2 className={style.HeadingAbout}><i className="fa-solid fa-star text-white "></i></h2>
          <p className="px-8 text-white text-center pt-4"> 
          Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
  
  </>
}
