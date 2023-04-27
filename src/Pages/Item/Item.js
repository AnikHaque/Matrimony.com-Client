import React  from "react";
import { useGetItemQuery } from "../../features/Item/itemApi";

import './Item.css';

const Item = () => {
  const {data:item, isLoading,isError, isSuccess} = useGetItemQuery();
  
  let content = null;
  if(isLoading){
    content = <p>Loading</p>
  }
  if(!isLoading && isError){
    content = <p>There is an error occured</p>
  }
  if(!isLoading && !isError && item?.length === 0){
   content = <p>No Kazi Found !!!</p>
  }
  if(!isLoading && !isError && item?.length > 0){
   content = <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-3 ml-8  p-10">
      
   {item?.map((product) => (
   <div>
 <div class="card5">

<div class="card-header5">
    <h3>Nike</h3>
    <p>Running sneakers</p>
    <span>New</span>
</div>

<div class="card-img5">
     <img src={product.img} alt="..." / > 
    <i class="bx bx-heart"></i>
</div>

<div class="card-details5">
    <div class="price5">
        <p>Price</p>
        <strong>$169.00</strong>
    </div>
    <div class="colors5">
        <div class="selected5">
            <i class="bx bx-check"></i>
        </div>
        <div>
            <i class="bx bx-check"></i>
        </div>
        <div>
            <i class="bx bx-check"></i>
        </div>
    </div>
</div>

<div class="card-sizes5">
    <span class="selected5">38</span>
    <span>39</span>
    <span>40</span>
    <span>41</span>
    <span>42</span>
    <span>43</span>
</div>

<div class="card-footer5">
    <button>Buy now</button>
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

export default Item;
