import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookNowModal from "../BookNowModal/BookNowModal";
import ProductCard from "./ProductCard";

import ViewModal from "../BookNowModal/ViewModal";
const Products = () => {
  const [bookProduct, setBookProduct] = useState({});
  const products = useLoaderData();
  console.log(products);
 
  return (
    <div >
    
            
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 ml-8 mt-10 mb-10 p-10">
      
          
            {products?.map((product) => (
        <ProductCard
          key={product._id}
          setBookProduct={setBookProduct}
          product={product}
        ></ProductCard>
      ))}
      
           
    
      {bookProduct && (
        <BookNowModal
          setBookProduct={setBookProduct}
          bookProduct={bookProduct}
        ></BookNowModal>
      )}
      {bookProduct && (
        <ViewModal
          setBookProduct={setBookProduct}
          bookProduct={bookProduct}
        ></ViewModal>
      )}
    </div>
    </div>
   
  );
};

export default Products;
