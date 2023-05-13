import React, { useEffect, useState } from 'react'
import img1 from '../../assets/images/auth/img/img_1.avif'
import img2 from '../../assets/images/auth/img/img_2.avif'
import img3 from '../../assets/images/auth/img/img_3.avif'
import img4 from '../../assets/images/auth/img/img_4.avif'
import img5 from '../../assets/images/auth/img/img_5.avif'
import img6 from '../../assets/images/auth/img/img_6.avif'
import img7 from '../../assets/images/auth/img/user.jpeg'
import './Profile.css';
import { AuthContext } from '../../context/AuthProvider/AuthProvider'
import { useContext } from 'react'
import NavBar from '../SharedPages/NavBar/NavBar'
import { useLoaderData, useParams } from 'react-router-dom'

const Profile = () => {
  const {  user } = useContext(AuthContext);
  const {id} = useParams();
  const [food,setFood] = useState({})
     useEffect(()=>{
         fetch(`http://localhost:5000/products/${id}`)
       .then(res=>res.json())
        .then(data=>console.log(data))

     },[])
  
  return (
   <div>
    <NavBar></NavBar>
     <div class="header__wrapper mt-16">
      <div class="cols__container mt-32">
        <div class="left__col">
          <div class="img__container">
            <img src={img7} alt="Anna Smith" />
            <span></span>
          </div>
          <h2>Anna Smith{id}</h2>
          <p>UX/UI Designer</p>
          <p>anna@example.com</p>

          <ul class="about ul">
            <li><span>4,073</span>Followers</li>
            <li><span>322</span>Following</li>
            <li><span>200,543</span>Attraction</li>
          </ul>

          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam
              erat volutpat. Morbi imperdiet, mauris ac auctor dictum, nisl
              ligula egestas nulla.
            </p>

            <ul className='ul'>
              <li><i class="fab fa-twitter"></i></li>
              <i class="fab fa-pinterest"></i>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-dribbble"></i>
            </ul>
          </div>
        </div>
        <div class="right__col">
          <nav>
            <ul className='ul'>
              <li><a href="">photos</a></li>
              <li><a href="">galleries</a></li>
              <li><a href="">groups</a></li>
              <li><a href="">about</a></li>
            </ul>
            <button>Follow</button>
          </nav>

          <div class="photos">
            <img src={img1} alt="Photo" />
            <img src={img2} alt="Photo" />
            <img src={img3} alt="Photo" />
            <img src={img4} alt="Photo" />
            <img src={img5} alt="Photo" />
            <img src={img6} alt="Photo" />
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Profile;
