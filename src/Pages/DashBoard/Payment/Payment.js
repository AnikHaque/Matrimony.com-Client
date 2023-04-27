import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";

import CheckoutForm from "./CheckoutForm";
import Loading from "../../Loading/Loading";
import './Payment.css';
const stripePromise = loadStripe('pk_test_51KrL8sH9U1rucFvVxdtUNWHMaDPPIT6mfxHqfV3OQ6U0yofozFclZc1gmS3VbwMGTwBluXRI3biFxPikM7eJ7dU0004eYdGiJq');

const Payment = () => {
  const bookedData = useLoaderData();
  const navigation = useNavigation();
  console.log(bookedData);
  const { img,userName, name, email, resalePrice, Phone, meetingLocation } =
    bookedData;
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <div>
      {/* <h1>Payment</h1>
      <div className="text-xl font-semibold bg-orange-300 p-4 w-1/2">
        <h1>Customer Name : {userName} </h1>
        <p>Phone :{Phone} </p>
        <p>Email : {email} </p>
        <p>Location : {meetingLocation} </p>
        <p>Ordered Item : {name} </p>
        <p>Price : {resalePrice} </p>
        
      </div> */}
 <section class="container3 ml-40">

      <div class="card3">
        <div class="image3">
          <img src={img} alt="" />
        </div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </section>
      <div className="w-96 ml-40 ">
        <Elements stripe={stripePromise}>
          <CheckoutForm bookedData={bookedData}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;