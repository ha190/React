/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
export default function Nav() {
const [isOpen,setisOPen]=useState(false)

function handleisOpen(){
  setisOPen(!isOpen)
}
  return (
    <section className={`py-6 bg-slate-800 text-white`}>
<div className='container'>
  <nav className='flex flex-wrap justify-between items-center px-10 py-4'>
    <div className='text-2xl font-bold'>
      <h1>START FRAMEWORK</h1>
    </div>
    <button className='sm:hidden ' onClick={handleisOpen}>
      <i className='fa-solid fa-bars text-white font-bold text-2xl'></i>
    </button>
    <div className={`sm:flex gap-3 hidden ${isOpen? "w-dvw":"hidden"}`} > 
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <NavLink to='/portifolio'>Portifolio</NavLink>
    </div>
  </nav>
</div>
    </section>
  )
}
