import React  from "react";
import { useGetItemQuery } from "../../features/Item/itemApi";

import './Item.css';
import { Link } from "react-router-dom";

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
   content = <p className="text-center font-bold text-2xl mt-20">No Product Found !!!</p>
  }
  if(!isLoading && !isError && item?.length > 0){
   content = <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-3 ml-8  p-10">
      
   {item?.map((product) => (
   <div>
 <div class="card5">

<div class="card-header5">
    <h3>{product.name}</h3>
    <p>New on Trend</p>
    <span>New</span>
</div>

<div class="card-img5">
     <img src={product.photo} alt="..." / > 
    <i class="bx bx-heart"></i>
</div>

<div class="card-details5">
    <div class="price5">
        <p>Price</p>
        <strong>${product.price}</strong>
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
  <Link to={`/items/${product._id}`}>
 <button className='bg-primary text-white font-bold'>Buy Now</button>
  </Link>
    
</div>

</div>
 </div>
 ))} 
</div>
  }
  return content;

};

export default Item;
