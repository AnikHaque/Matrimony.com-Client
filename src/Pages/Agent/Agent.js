import React, { useState } from "react";


// custom css 
import './Agent.css'

// components import 
import { useGetagentQuery } from "../../features/agent/agentApi";
import NavBar from "../SharedPages/NavBar/NavBar";

const Agent = () => {
  const ref = React.createRef();
//  fetch from redux 
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
  return (
    <div>
      <NavBar></NavBar>
      {content}
    </div>
  );
};

export default Agent;
