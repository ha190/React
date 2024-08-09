/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import img1 from "../../assets/image/poert1.png";
import img2 from "../../assets/image/port2.png";
import img3 from "../../assets/image/port3.png";

export default function Portifolio() {
  const images = [img1, img2, img3, img2, img3, img1];
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
    setSelectedImage(null);
  };
  return (
    <>
      <h1 className="text-4xl text-slate-800 font-extrabold text-center uppercase mt-5 ">Portifolio</h1>
      <h2 className="py-5"><i className="fa-solid fa-star text-slate-800 "></i></h2>
      <div className="flex justify-center items-center flex-wrap p-7">
        {images.map((ele, index) => (
          <div key={index} className="w-1/3 p-5 relative">
            <div className="relative " onClick={() => handleImageClick(ele)}>
              <img src={ele} alt="" className="w-full rounded-md" />
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-emerald-500 opacity-0 hover:opacity-90 duration-[800ms]  rounded-md flex justify-center items-center">
              
                  <i className="fa-solid fa-plus text-white text-8xl"></i>
                
              </div>
            </div>
          </div>
        ))}
      </div>
      {open && (
        <div
          className="fixed top-0 bottom-0 right-0 left-0 bg-emerald-400 bg-opacity-30 inset-0"
          onMouseUp={close}
        >
          <div className="flex justify-center items-center opacity-100">
            <img src={selectedImage} alt="" className="w-1/2 my-28" />
          </div>
        </div>
      )}
    </>

  );
}
