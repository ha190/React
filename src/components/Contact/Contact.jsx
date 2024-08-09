/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import style from "./contact.module.css";
export default function Contact() {
  const [isFocus, setisFocus] = useState({
    name: false,
    age: false,
    email: false,
    password: false,
  });
  const [value, setValue] = useState({
      name: '',
      age: '',
      email: '',
      password: '',
    });
  

  function handleisFocus(e) {
    const { name, value } = e.target;
    setValue((prevValue) => ({...prevValue,[name]: value,}));
    setisFocus((prevState) => ({...prevState,[e.target.name]: true,}));
  }

  return (
    <div className='bg-white w-[1024px] container mx-auto mt-6'>
      <h1 className="text-4xl text-slate-900 font-extrabold my-3 uppercase text-center">
        contact section
      </h1>
      <h2 className={style.contactHeading}>
        <i className="fa-solid fa-star text-slate-900 "></i>
      </h2>
      <form action="">
      <div className="w-full flex flex-col container mx-auto">
      <div className="relative mb-10">
        <label
          htmlFor="name"
          className={`${style.label} ${isFocus.name && value.name ? style.labelUP : ""}`}
        >
          Name
        </label>
        <input
          type="text"
          className="w-full shadow-md block bg-white my-2 px-2 py-1 text-slate-950"
          name="name"
          placeholder="userName"
          onInput={(e) => handleisFocus(e, "name")}
          value={value.name}
        />
      </div>
      <div className="relative mb-10">
        <label
          htmlFor="age"
          className={`${style.label} ${isFocus.age && value.age ? style.labelUP : ""}`}
        >
          Age
        </label>
        <input
          type="number"
          className="w-full shadow-md block bg-white my-2 px-2 py-1 text-slate-950"
          name="age"
          placeholder="useAge"
          onInput={(e) => handleisFocus(e, "age")}
          value={value.age}
        />
      </div>
      <div className="relative mb-10">
        <label
          htmlFor="email"
          className={`${style.label} ${isFocus.email && value.email ? style.labelUP : ""}`}
        >
          Email
        </label>
        <input
          type="email"
          className="w-full shadow-md block bg-white my-2 px-2 py-1 text-slate-950"
          name="email"
          placeholder="userEmail"
          onInput={(e) => handleisFocus(e, "email")}
          value={value.email}
        />
      </div>
      <div className="relative mb-10">
        <label
          htmlFor="password"
          className={`${style.label} ${isFocus.password && value.password ? style.labelUP : ""}`}
        >
          Password
        </label>
        <input
          type="password"
          className="w-full shadow-md block bg-white my-2 px-2 py-1 text-slate-950"
          name="password"
          placeholder="userPassword"
          onInput={(e) => handleisFocus(e, "password")}
          value={value.password}
        />
      </div>
      <button onClick={(e)=>e.preventDefault()} className=' rounded-md bg-emerald-500 p-3 focus:border-emerald-500 w-2/12 text-white'>Send Message</button>

      </div>
      </form>
  </div> 
  );
}
