import React, { useContext } from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import certificate from '../../assets/certificate.png'
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { useGetKaziByIdQuery } from "../../features/kazi/kaziApi";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";
import NavBar from "../SharedPages/NavBar/NavBar";
const Hero = () => {
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
    <div>
      <NavBar></NavBar>
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText text-2xl   mt-12 ml-8" variants={fadeIn("right", "tween", 0.2, 1)}>
        If you get married,
            <br />
      you want to be very married.
          </motion.span>
             <motion.span className="secondaryText text-4xl mr-12 mt-8" variants={fadeIn("left", "tween", 0.4, 1)}>
           I'm Your Kazi
            <br />
         <b className="text-5xl text-secondary">{name}</b>
        
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src={photo} className="w-[40%] ml-28 rounded-fill rounded-md mt-14" alt="" />
        </motion.div>

        <a className={css.email} href="mailto:zainkeepscode@gmail.com">
        Member Since <b>{memberYear}</b>
        </a>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText"><b className="text-7xl">{experience}</b></div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src={certificate} alt="" />
            <span>CERTIFIED PROFESSIONAL</span>
            <span>KAZI FROM <b className="text-primary">{location}</b></span>
          </motion.div>
        </div>
      </motion.div>
    </section>

         <label htmlFor="my-modal-3" className="btn btn-secondary w-[20%] ml-14 rounded-full mt-8">Book Appointment</label>

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
  );
};

export default Hero;
