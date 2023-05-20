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
    <div className='paymentprofilebody'>
   <div class="containerpayment">
        <h1 className='font-bold text-lg'>Confirm Your Payment</h1>
        <div class="">
            <div class="">
              
                <div class="">
                    <input type="text" placeholder="Type here" className="input inputpayment w-full max-w-xs bg-blue-100 mr-4" defaultValue={userName} />
                   
                    <input type="text" placeholder="Type here" className="input inputpayment w-full max-w-xs bg-blue-100" defaultValue={email}  />
                </div>
                
            </div>
            
        </div>
        <div class="second-row">
            <div class="card-number">
                <h3>Card Number</h3>
                 <div className="">
        
        <Elements stripe={stripePromise}>
          <CheckoutForm bookedData={bookedData}></CheckoutForm>
        </Elements>
      </div>
            </div>
        </div>
   
    </div>
      
    </div>
  );
};

export default Payment;