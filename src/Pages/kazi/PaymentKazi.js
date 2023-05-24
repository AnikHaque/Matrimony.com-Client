import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PaymentKazi = () => {
  const location = useLocation();

  console.log(location.search)
  const query = new URLSearchParams(location.search);

  const transactionId = query.get("transactionId");

  const [order, setOrder] = useState({});

  useEffect(() => {
    fetch(`https://matrimony-com-server-anikhaque.vercel.app/bookingKazi/by-transaction-id/${transactionId}`)
    .then(res => res.json())
    .then(data => setOrder(data));
  }, [transactionId])
  console.log(order)

  if(!order?._id){
    return (
      <div>
        No order found
      </div>
    )
  }
  return (
    <div>
      <div>
        <img src="https://media.tenor.com/tqeZK8EEp7kAAAAC/congratulations-greetings.gif" className="w-96 mx-auto mt-4"></img>
      </div>
      <h2 className="text-xl text-center text-[#2a9d8f] mt-4 font-bold">Successfully Paid.</h2>

<h2 className="text-center mt-4">Your Order Summary</h2>
      <div className="overflow-x-auto">
  <table className="table w-[1000px] mx-auto mt-8">
    <thead>
      <tr>
       
        <th>Name</th>
        <th>Price</th>
        <th>Shipping Address</th>
        <th>transactionId</th>
      </tr>
    </thead>
    <tbody>
      <tr>
     
        <td>{order.name}</td>
        <td>{order.price}</td>
        <td>{order.address}</td>
        <td>{transactionId}</td>
      </tr>
    </tbody>
   
  </table>
  <button className="btn btn-secondary rounded-full pl-8 pr-8 ml-48 mt-5 block print:hidden" onClick={() => window.print()}>Print</button>
  
</div>
    </div>
  );
};

export default PaymentKazi;