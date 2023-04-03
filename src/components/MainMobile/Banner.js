import React, { useState, useRef, useEffect } from 'react';
import Mobile from '../../images/skylinemobile.jpg';



const Banner2 = () => {

  return (
    <div className="container mb-52">
      <img src={Mobile} alt="" className="absolute object-cover w-screen h-screen brightness-50" />
      <div className="box">
        <div class="title ">
          <span className="block"></span>
          <h1 className="">
            Brennan Skinner<span></span>
          </h1>
        </div>

        <div className="role">
          <div className="block"></div>
         
          <p className="pr-5 text-red-600">FULL-STACK</p>
          <p className="text-white">DEVELOPER</p>
        </div>
      </div>
    </div>
  );
}

export default Banner2