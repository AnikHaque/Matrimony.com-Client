import React, { useState } from "react";

// import BookNowModal from "../BookNowModal/BookNowModal";
// import ProductCard from "./ProductCard";
import './Agent.css'
import { useGetKaziQuery } from "../../features/kazi/kaziApi";
import KaziLoader from "../../ui/KaziLoader";
import { useGetagentQuery } from "../../features/agent/agentApi";
const Agent = () => {
  // const kazi = useLoaderData();
  const {data:agent, isLoading,isError, isSuccess} = useGetagentQuery();
  
  let content = null;
  if(isLoading){
    content = <p>Loading</p>
  }
  if(!isLoading && isError){
    content = <p>There is an error occured</p>
  }
  if(!isLoading && !isError && agent?.length === 0){
   content = <p>No Kazi Found !!!</p>
  }
  if(!isLoading && !isError && agent?.length > 0){
   content = <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-3 ml-8  p-10">
      
   {agent?.map((product) => (
   <div>
<section className="section-1">
    
    <div class="swiper mySwiper container2">
      <div class="swiper-wrapper content2">

        <div class="swiper-slide card2">
          <div class="card-content2">
            {
                product.img ? <div class="image2">
                <img src={product.img} className="w-40 h-40 rounded-xl border border-black" alt="" />
                </div>
                :
                <div class="image2">
            <img src="https://www.pinkvilla.com/files/shahrukhkhan_femaleactorsdebut_hd.jpg" className="w-40 rounded-md border border-black" alt="" />
            </div>
            }
            

            <div class="media-icons2">
              <i class="fab fa-facebook text-white text-xl"></i>
              <i class="fab fa-twitter text-white text-xl"></i>
              <i class="fab fa-github text-white text-xl"></i>
            </div>

            <div class="name-profession2">
              <span class="name2">{product.position}</span>
              <span class="profession2">{product.employmentType}</span>
            </div>

            <div class="rating2">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </div>

            <div class="button2">
              <button class="aboutMe2">About Me</button>
              <button class="hireMe2">Book Me</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
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

export default Agent;
