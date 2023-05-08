import React from "react";
import './Kazi.css';
const KaziCard = (props) => {
  const {
    _id,
  name,
  gender,
  price,
  photo,
  phone,
  location,
  memberYear,
nidimg,
experience,
registry,
review,
religion,
description
  } = props.product;
 
  return (
   

    <div class="profile-card">
      <div class="image">
      <h1>{_id}</h1>
      </div>

      <div class="text-data">
        <span class="name">CodingLab</span>
        <span class="job">YouTuber & Blogger</span>
      </div>

      <div class="media-buttons">
        <a href="#" style="background: #4267b2" class="link">
          <i class="bx bxl-facebook"></i>
        </a>
        <a href="#" style="background: #1da1f2" class="link">
          <i class="bx bxl-twitter"></i>
        </a>
        <a href="#" style="background: #e1306c" class="link">
          <i class="bx bxl-instagram"></i>
        </a>
        <a href="#" style="background: #ff0000" class="link">
          <i class="bx bxl-youtube"></i>
        </a>
      </div>

      <div class="buttons">
        <button class="button">Subscribe</button>
        <button class="button">Message</button>
      </div>

      <div class="analytics">
        <div class="data">
          <i class="bx bx-heart"></i>
          <span class="number">60k</span>
        </div>
        <div class="data">
          <i class="bx bx-message-rounded"></i>
          <span class="number">20k</span>
        </div>
        <div class="data">
          <i class="bx bx-share"></i>
          <span class="number">12k</span>
        </div>
      </div>
    </div>
  );
};

export default KaziCard;
