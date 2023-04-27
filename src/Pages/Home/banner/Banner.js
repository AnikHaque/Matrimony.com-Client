import React, { Fragment,useRef } from 'react';

import { Link, useNavigate } from "react-router-dom";
import './Banner.css'
const Banner = () => {
  const navigate = useNavigate()
 
  return (
    <Fragment>
      <section  className="bg-[url('https://img1.picmix.com/output/stamp/normal/9/9/4/3/1503499_8efaf.gif')] h-[calc(95vh-90px)] flex items-center">
   <div className='banner-bg container'>
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2'>
    <div >
<div className="  ml-16 mt-20">
  <div className="max-w-lg">
    <h1 className="mb-5 text-5xl font-bold text-[#be2bac]">Together is a wonderful place to be</h1>
    <p className="mb-5 text-black">Come, let’s be a comfortable couple and take care of each other! How glad we shall be, that we have somebody we are fond of always, to talk to and sit with... Come, let’s be a comfortable couple and take care of each other! How glad we shall be, that we have somebody we are fond of always, to talk to and sit with...</p>
    <button className="btn btn-shared text-white">Get Started</button>
  </div>
</div>
<div>
      
      </div>
</div>
<div className=''>
<img src='https://images.pexels.com/photos/1779414/pexels-photo-1779414.jpeg?auto=compress&cs=tinysrgb&w=800' className='w-full banner-img-bg rounded-xl'></img>
</div>

    </div>
   </div>
   </section>
   </Fragment>
  );
};

export default Banner;
