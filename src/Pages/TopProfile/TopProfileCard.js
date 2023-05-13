import React from "react";
import {
  FaCalendar,
  FaCheckCircle,
  FaClock,
  FaHeart,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { useGetChoiceQuery, usePostChoiceMutation } from "../../features/choicelist/choiceListApi";
import { useForm } from "react-hook-form";

import './TopProfile.css'
const TopProfileCard = ({ product,setBookProduct }) => {
    const { handleSubmit, register, control } = useForm();
  const {
    _id,
   name,
   img,
   presentlocation
  } = product;

  const products = useLoaderData();

  const [postChoice, {isLoading, isError}] = usePostChoiceMutation();
  const {data:choice} = useGetChoiceQuery()

  const onSubmit = (data) => {
    console.log(data);
    postChoice(data);
    console.log(data)
  };
  return (
    <div >
      
      <div class="wrapper00 ">
    <div class="img-area">
      <div class="inner-area">
        <img src={img} alt="" />
      </div>
    </div>
    <div class="icon arrow"><i class="fas fa-arrow-left"></i></div>
    <div class="icon dots"><i class="fas fa-ellipsis-v"></i></div>
    <div class="name">{name}</div>
    <div class="about">{presentlocation}</div>
    <div class="social-icons">
      <a href="#" class="fb"><i class="fab fa-facebook-f"></i></a>
      <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
      <a href="#" class="insta"><i class="fab fa-instagram"></i></a>
      <a href="#" class="yt"><i class="fab fa-youtube"></i></a>
    </div>
    <div class="buttons">
   
      <button> <label
        onClick={() => setBookProduct(product)}
         htmlFor="booking-modal"
         className=""
       >
         ChoiceList
       </label>
       </button>
      <Link to={`/topprofile/${_id}`}><button>View Profile</button></Link>
    </div>
   
  </div>
    
    </div>
  );
};

export default TopProfileCard;
