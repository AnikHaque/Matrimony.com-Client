import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import KaziCard from "./KaziCard";
// import BookNowModal from "../BookNowModal/BookNowModal";
// import ProductCard from "./ProductCard";
import './Kazi.css'
import { useGetKaziQuery } from "../../features/kazi/kaziApi";
import KaziLoader from "../../ui/KaziLoader";
import Loader from "../../ui/Loader";
import { Error } from "../../ui/Error";
const Kazi = () => {
  // const kazi = useLoaderData();
  const {data:kazi, isLoading,isError, isSuccess} = useGetKaziQuery();
 
  
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
   <img src={product.photo} alt="" class="profile-img1" />
 </div>

 <div class="text-data1">
   <span class="name1">{product.name}</span>
   <span class="job1">{product.location}</span>
 </div>



 <div class="buttons1">
 <Link to={`/kazi/${product?._id}`}>

 <button class="button1">View Profile</button>

</Link>
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
{/* <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-3 ml-8  p-10">
      
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
 </div> */}
};

export default Kazi;
