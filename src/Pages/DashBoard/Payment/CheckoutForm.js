import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import hug from '../../../assets/images/gif/hug-gif.gif'
import { Link, useNavigate } from "react-router-dom";
const CheckoutForm = ({ bookedData }) => {
  const { resalePrice, userName, email, _id } = bookedData;
  //   console.log(_id);
  const [cardError, setCardError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
const navigate = useNavigate()
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(" http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ resalePrice }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [resalePrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setPaymentProcessing(true);
    setPaymentSuccess("");
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      setPaymentProcessing(false);

      const paymentInfo = {
        resalePrice,
        transactionId: paymentIntent.id,
        email,
        bookingId: _id,
      };
      fetch(" http://localhost:5000/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(paymentInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setPaymentSuccess("Your payment is completed");
            setTransactionId(paymentIntent.id);
            toast.success("Payment Successful");
            navigate('/dashboard/myorders');
           
          }
          console.log(data);
        });
    }
    console.log(paymentIntent);
  };
  return (
    <>
      {" "}
      <form onSubmit={handleSubmit} className="">
       {
        !paymentSuccess && !cardError &&  <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
               
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
       }

        {
          paymentProcessing || !paymentSuccess && 
        
<button
          className="btn btn-shared text-white text-lg mt-8 mt-2 w-full"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Please Pay 
        </button>
        }
        
        <p className="text-red-400">{cardError}</p>
        {paymentSuccess && (
          <div >
            <div>  <p className="text-green-700 font-bold mb-4  ml-20 text-center ">{paymentSuccess}<i class="fa-solid fa-heart ml-2 text-red-400"></i></p></div>   
          </div>
         
        )}
        {paymentProcessing && (
          <div>
            <img src="https://cutewallpaper.org/21/loading-gif-transparent-background/Tag-For-Transparent-Spinner-Icon-Pehliseedhi-Suitable-.gif" className="ml-32 w-28"></img>
          </div>
        )}
      </form>
    </>
  );
};

export default CheckoutForm;