import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaSearch } from "react-icons/fa";
import TopProfileCard from "./TopProfileCard";
import BookTopProfile from "../BookNowModal/BookTopProfile";
import { useGetTopProfileQuery } from "../../features/topProfile/topProfileApi";

const TopProfile = () => {
   const {data: topProfile , isLoading, isError } = useGetTopProfileQuery()
    const [bookProfile, setBookProfile] = useState({})
    let content = null;

   if(isLoading && !isError){
content = <div class="h-20 mt-12 mb-12  flex items-center justify-center">
<img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700" className="w-48"></img>
</div>
   }
   if(!isLoading && isError){
content = <div>
 <p>There is an error occured</p>
</div>
   }
   if(!isLoading && !isError && topProfile?.length === 0){
content = <div>
 <p>No Data Found</p>
</div>
   }
   if(!isLoading && !isError && topProfile?.length > 0){
content =  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {topProfile?.slice(0,6).map((product) => (
               <TopProfileCard
                 key={product._id}
                product={product}
                setBookProfile={setBookProfile}
               ></TopProfileCard>
          
            ))}
            {bookProfile && (
        <BookTopProfile
          setBookProfile={setBookProfile}
          bookProfile={bookProfile}
        ></BookTopProfile>
      )}
        </div>
   }
  
  return (
    
    <div className="bg-[#F2F3F7] py-5">
      <div className="mx-5 md:w-10/12 md:mx-auto ">
        <div className="flex flex-col md:flex-row mt-8 justify-between mb-5">
          <div>
            <h2 className="text-2xl mt-5 text-center md:text-left text-[#222222] font-semibold">
              Recent Top Profile
            </h2>
            <p className="text-center text-gray-400 mb-8">
              Hare Are Recent Top Profiles Published By Admin
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
       {content}
      </div>
    </div>
  );
};

export default TopProfile;
