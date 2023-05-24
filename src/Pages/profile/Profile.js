import React, { useEffect, useState } from 'react'
import img1 from '../../assets/images/auth/img/img_1.avif'
import img2 from '../../assets/images/auth/img/img_2.avif'
import img3 from '../../assets/images/auth/img/img_3.avif'
import img4 from '../../assets/images/auth/img/img_4.avif'
import img5 from '../../assets/images/auth/img/img_5.avif'
import img6 from '../../assets/images/auth/img/img_6.avif'
import './Profile.css';
import { AuthContext } from '../../context/AuthProvider/AuthProvider'
import { useContext } from 'react'
import NavBar from '../SharedPages/NavBar/NavBar'
import { useLoaderData, useParams } from 'react-router-dom'
import { useGetTopProfileByIdQuery } from '../../features/topProfile/topProfileApi'

const Profile = () => {
  const { user } = useContext(AuthContext);
  const {id} = useParams();
const {data} = useGetTopProfileByIdQuery(id);
 const {_id, name, designation, email, img, description, phone, presentlocation, age} = data || {}

 const handlePlaceOrder = (event,data) => {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const customer = user.displayName;
  const email = user?.email || "unregistered";
  const phone = form.phone.value;
  const address = form.address.value;
  const age = form.age.value;
  const currency = form.currency.value;

  const order = {
    service:_id,
    name,
    age,
    customer,
    email,
    phone,
    address,
    currency
  };

  fetch("https://matrimony-com-server-anikhaque.vercel.app/booktopprofile", {
    method: "POST",
    headers: {
      "content-type": "application/json",
     
    },
    body: JSON.stringify(order)
  })
    .then((res) => res.json())
    .then((data) => {
  window.location.replace(data.url);
    })
    .catch((er) => console.error(er));
};
  
  return (
   <div>
    <NavBar></NavBar>
     <div class="header__wrapper mt-16">
      <div class="cols__container mt-32">
        <div class="left__col">
          <div class="img__container">
            <img src={img} alt="Anna Smith" />
            <span></span>
          </div>
          <h2>{name}</h2>
          <p>{designation}</p>
          <p>{email}</p>

          <ul class="about ul">
            <li><span>4,073</span>Followers</li>
            <li><span>322</span>Following</li>
            <li><span>200,543</span>Attraction</li>
          </ul>

          <div class="content">
            <p>
             {description}
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
            {/* The button to open modal */}
<label htmlFor="my-modal-3" className="btn btn-primary">Take Appointment</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold text-center">Please Pay first for Appointment !!!!</h3>
    <form onSubmit={handlePlaceOrder} className="">
       
       <div>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
           <input
             name="name"
             type="text"
             placeholder="Name"
             className="input input-ghost w-full  input-bordered"
        defaultValue={user.displayName}
           />
           <input
             name="cusname"
             type="text"
             placeholder="Customer Name"
             className="input input-ghost w-full  input-bordered"
             defaultValue={name}
           />
         
           <input
             name="phone"
             type="text"
             placeholder="Your Phone"
             className="input input-ghost w-full  input-bordered"
             defaultValue={phone}
             required
           />
           <input
             name="email"
             type="text"
             placeholder="Your email"
          defaultValue={email}
             className="input input-ghost w-full  input-bordered"
             readOnly
           />
         <select
           defaultValue="BDT"
           name="currency"
           className="select select-bordered max-w-xs"
         >
           <option value="BDT">BDT</option>
           <option value="USD">USD</option>
         </select>

         <input
           type="number"
           name="age"
           placeholder="Type 1500 Taka to pay"
           className="input input-ghost w-full  input-bordered"
           defaultValue={age}
         />
         </div>


         <textarea
           name="address"
           className="textarea textarea-bordered h-24 w-full my-5"
           placeholder="Your Address"
           defaultValue={presentlocation}
           required
         ></textarea>

         <input className="btn btn-secondary w-full" type="submit" value="Confirm Payment for Appointment" />
       </div>
     </form>
  </div>
</div>
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
