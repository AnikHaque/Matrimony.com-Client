import React, { useContext } from "react";
import "./Hero.css";
import Vector1 from "../../assets/img/Vector1.png";

import Vector2 from "../../assets/img/Vector2.png";
import boy from "../../assets/img/boy.png";
import glassesimoji from "../../assets/img/glassesimoji.png";
import thumbup from "../../assets/img/thumbup.png";
import crown from "../../assets/img/crown.png";

import Github from "../../assets/img/github.png";
import LinkedIn from "../../assets/img/linkedin.png";
import Instagram from "../../assets/img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { useGetKaziByIdQuery, useGetRelatedkaziQuery } from "../../features/kazi/kaziApi";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import NavBar from "../SharedPages/NavBar/NavBar";
import Works from "../Works/Works";
import Header from "../Header/Header";
import Experience from "../Experience/Experience"
import Services from "../Services/Services"
const Hero = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

   const { user } = useContext(AuthContext);
    const {id} = useParams();
    const {data, isLoading, isError} = useGetKaziByIdQuery(id);
    const {_id,
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
      description } = data || {}

      const {
        data: relatedVideos,
       
    } = useGetRelatedkaziQuery({ id, gender });
    console.log(relatedVideos)
    

const handlePlaceOrder = (event,data) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const customer = user.displayName;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const address = form.address.value;
    const price = form.price.value;
    const currency = form.currency.value;

    const order = {
      service:_id,
      name,
      price,
      customer,
      email,
      phone,
      address,
      currency
    };

    fetch("http://localhost:5000/bookKaziprofile", {
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
    <div style={{ background: darkMode ? "black" : "" }} >
      <NavBar></NavBar>
       <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span className=""><b className="text-secondary">{name}</b></span>
          <span className="">
            <p className="text-black text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </span>
        </div>
       <label htmlFor="my-modal-3" className="btn btn-secondary w-[70%] ml-14 rounded-full mt-8">Book Appointment</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
   <div>
      <form onSubmit={handlePlaceOrder} className="">
       
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-ghost w-full  input-bordered"
              defaultValue={user?.displayName}
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
              defaultValue={user?.email}
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
            type="text"
            name="price"
            placeholder="Price"
           defaultValue={price}
            className="input input-ghost w-full  input-bordered"
          />
          </div>


          <textarea
            name="address"
            className="textarea textarea-bordered h-24 w-full my-5"
            placeholder="Your Address"
            required
          ></textarea>

          <input className="btn btn-secondary w-full" type="submit" value="Pay For Appointment" />
        </div>
      </form>
    </div>
  </div>
</div>
       
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={photo} alt="" className="w-64 h-64 mt-10 ml-[-58px] rounded-xl" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1={experience} text2="Experience" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Member Since" text2={memberYear} />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
    <br></br>
    <br></br>
    <Experience></Experience>
    <Works></Works>
    <Services></Services>
    </div>
   
  );
};

export default Hero;