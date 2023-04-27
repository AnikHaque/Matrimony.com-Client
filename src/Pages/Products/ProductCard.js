import React from "react";
import './Products.css';
import { Link } from "react-router-dom";
const ProductCard = ({ product, setBookProduct }) => {
  const {
    img,
    _id,
    location,
    name,
    originalPrice,
    resalePrice,
    sellerName,
    usedYear,
  } = product;
  console.log(product);
  return (
    // <div>
    //   <div className="card w-96 p-10 bg-white text-black shadow-xl">
    //     <figure>
    //       <img style={{ height: "250px" }} src={img} alt="Shoes" />
    //     </figure>
    //     <div className="card-body">
    //       <h2 className="card-title text-blue-800">{name}</h2>
    //       <p className="text-black">
    //         <span className="font-semibold text-black">Location:</span>{" "}
    //         {location}
    //       </p>
    //       <p>
    //         <span className="font-semibold">Resale Price</span> : Tk{" "}
    //         {resalePrice}
    //       </p>
    //       <p>
    //         <span className="font-semibold">Original Price</span> : Tk{" "}
    //         {originalPrice}
    //       </p>
    //       <p>
    //         <span className="font-semibold">Used</span> : {usedYear}{" "}
    //       </p>
    //       <p className="text-xl font-semibold">Seller Name : {sellerName}</p>
    //       <div className="card-actions justify-end">
    //         {/* <button className="btn "></button> */}
    //         <label
    //           onClick={() => setBookProduct(product)}
    //           htmlFor="booking-modal"
    //           className="btn btn-primary"
    //         >
    //           Book Now
    //         </label>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
       <section class="main">
  <div class="profile-card">
    <div class="image">
      <img src={img} alt="" class="profile-pic" />
    </div>
    <div class="data">
      <h2>{name}</h2>
      <span>Developer & Designer</span>
    </div>
    <div class="row">
      <div class="info">
        <h3>Following</h3>
        <span>120</span>
      </div>
      <div class="info">
        <h3>Followers</h3>
        <span>5000</span>
      </div>
      <div class="info">
        <h3>Posts</h3>
        <span>209</span>
      </div>
    </div>
    <div class="buttons">
      <label
              onClick={() => setBookProduct(product)}
               htmlFor="booking-modal"
               className="btn btn-primary"
             >
              Appointment
             </label>
             <Link to={`profile/${_id}`}
              // onClick={() => setBookProduct(product)}
               htmlFor="view-modal"
               className="btn btn-primary"
               product ={product}
             >
              View More
             </Link>
      
    </div>
  </div>
</section>
    </div>
  );
};

export default ProductCard;
