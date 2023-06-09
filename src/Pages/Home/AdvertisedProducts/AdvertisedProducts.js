import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FaSearch } from "react-icons/fa";
import AdvertisedCard from "./AdvertisedCard";
const AdvertisedProducts = () => {
  const { data: advertisedItems = [] } = useQuery({
    queryKey: ["advertised"],
    queryFn: async () => {
      const res = await fetch(
        " http://localhost:5000/products"
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    
    <div className="bg-[#F2F3F7] py-5">
      <div className="mx-5 md:w-10/12 md:mx-auto ">
        <div className="flex flex-col md:flex-row mt-8 justify-between mb-5">
          <div>
            <h2 className="text-2xl mt-5 text-center md:text-left text-[#222222] font-semibold">
              Recent Advertizes
            </h2>
            <p className="text-center text-gray-400 mb-8">
              Hare Are Recent Advertizes Published By Verified User
            </p>
          </div>
          <div className="flex relative  rounded-xl items-center">
            <input
              type="text"
              className="bg-white  border h-10 px-5 w-96  rounded-3xl text-sm focus:outline-none "
            />
            <FaSearch className="absolute right-3 text-[#FF6801]" />
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {advertisedItems.map((product) => (
               <AdvertisedCard
                 key={product._id}
                product={product}
               ></AdvertisedCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdvertisedProducts;
