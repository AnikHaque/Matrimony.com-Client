// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import BookNowModal from "../../BookNowModal/BookNowModal";
import './Categories.css';
const CategoryCard = ({ category }) => {
  const { _id, name } = category;
  console.log(category);
  const handleCard = () => {
    console.log(_id);
  };
  return (
    <div>
      <Link to={`products/${_id}`}>
        <div onClick={handleCard} className="card w-96  bg-[#E5E8E8] " data-aos="zoom-out-up" data-aos-duration="2000">
          <div className="card-body">
            <div className="card-actions ">
             
            </div>
            <div className="flex">
               <img src="https://cdn2.vectorstock.com/i/1000x1000/63/21/wedding-bride-avatar-cartoon-vector-24926321.jpg" className="w-14 rounded-md"></img>
                <h1 className=" text-[#be2bac] text-center text-3xl font-bold ml-8">{name}</h1>
            </div>
           
              
            
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;