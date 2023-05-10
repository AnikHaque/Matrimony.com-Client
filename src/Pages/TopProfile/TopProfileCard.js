import React from "react";
import {
  FaCalendar,
  FaCheckCircle,
  FaClock,
  FaHeart,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetChoiceQuery, usePostChoiceMutation } from "../../features/choicelist/choiceListApi";
import { useForm } from "react-hook-form";

import './TopProfile.css'
const TopProfileCard = ({ product,setBookProduct }) => {
    const { handleSubmit, register, control } = useForm();
  const {
    img,
    location,
    name,
    originalPrice,
    resalePrice,
    sellerName,
    usedYear,
  } = product;

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
        <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
      </div>
    </div>
    <div class="icon arrow"><i class="fas fa-arrow-left"></i></div>
    <div class="icon dots"><i class="fas fa-ellipsis-v"></i></div>
    <div class="name">CodingNepal</div>
    <div class="about">Designer & Developer</div>
    <div class="social-icons">
      <a href="#" class="fb"><i class="fab fa-facebook-f"></i></a>
      <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
      <a href="#" class="insta"><i class="fab fa-instagram"></i></a>
      <a href="#" class="yt"><i class="fab fa-youtube"></i></a>
    </div>
    <div class="buttons">
      <button>Message</button>
      <button>Subscribe</button>
    </div>
   
  </div>
    
    </div>
  );
};

export default TopProfileCard;
