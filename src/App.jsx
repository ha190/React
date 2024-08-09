 
/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Portifolio from "./components/Portifolio/Portifolio";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from './components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          index:true,
          element:<Home/>
        },{
          path:"/about",
          element:<About/>
        },{
          path:"/contact",
          element:<Contact/>
        },{
          path:"/portifolio",
          element:<Portifolio/>
        }

      ]
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
