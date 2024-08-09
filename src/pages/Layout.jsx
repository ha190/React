/* eslint-disable no-unused-vars */
import React from 'react'
import Nav from './../components/Nav/Nav';
import Footer from './../components/Footer/Footer';
import {Outlet} from "react-router-dom"
export default function Layout() {
  return (
    <>
    <Nav/>
    <div className='container mx-auto'>
      <Outlet/>
    </div>
    <Footer/>
    </>

  )
}
