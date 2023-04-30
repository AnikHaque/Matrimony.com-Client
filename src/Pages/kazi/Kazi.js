// mormal import 
import React, { useState } from "react";

// configuration 
import { useGetKaziQuery } from "../../features/kazi/kaziApi";

// components 
import KaziLoader from "../../ui/KaziLoader";
import Loader from "../../ui/Loader";
import { Error } from "../../ui/Error";

// custom css 
import './Kazi.css';

const Kazi = () => {

  // redux data load 
  const {data:kazi, isLoading,isError, isSuccess} = useGetKaziQuery();
  
  // decide what to do 
  let content = null;

  if(isLoading){
    content = <div className="ml-[450px] w-72"><Loader></Loader></div>
  }

  if(!isLoading && isError){
    content = <p>There is an error occured</p>
  }
  
  if(!isLoading && !isError && kazi?.length === 0){
    content = <div className="lg:max-w-lg ml-[310px]"><Error></Error></div>
  }

  if(!isLoading && !isError && kazi?.length > 0){
   content = <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-3 ml-8  p-10">
      
   {kazi?.map((product) => (
   <div>
 <div class="profile-card1 mb-8">
 <div class="image1">
   <img src={product.img} alt="" class="profile-img1" />
 </div>

 <div class="text-data1">
   <span class="name1">{product.name}</span>
   <span class="job1">YouTuber & Blogger</span>
 </div>



 <div class="buttons1">
   <button class="button1">View Profile</button>
   <button class="button1">Book Now</button>
 </div>

 <div class="analytics1">
   <div class="data1">
     <i class="bx bx-heart"></i>
     <span class="number1">60k</span>
   </div>
   <div class="data1">
     <i class="bx bx-message-rounded"></i>
     <span class="number">20k</span>
   </div>
   <div class="data1">
     <i class="bx bx-share"></i>
     <span class="number1">12k</span>
   </div>
 </div>
</div>
 </div>
 ))} 
</div>

  }
  return content;

};

export default Kazi;
