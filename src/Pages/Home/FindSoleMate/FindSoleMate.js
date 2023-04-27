// Configuration
import React from "react";
import { Link } from "react-router-dom";

// Components
import soleMate from "../../../assets/images/HomeImage/soleMate.png";
import bgHeartShape from "../../../assets/images/HomeImage/heartshape.png";


// CSS file
import ScaleAnimationCSS from "../../../assets/css/ScaleAnimation.module.css";

const FindSoleMate = () => {
  return (
    <div className="bg-[#F8F8FF] pb-10">
      <div className="bg-[#5736cb] relative h-60 lg:h-72 overflow-hidden">
        <img
          className="absolute top-0"
          style={{
            animation: `${ScaleAnimationCSS.scaleAni} 5s linear infinite`,
          }}
          src={bgHeartShape}
          alt="Not Available"
        />
        <div className="h-60 lg:h-72 overflow-hidden w-5/6 md:w-11/12 lg:w-5/6 mx-auto flex flex-col md:flex-row items-center max-w-[1200px]">
          <div className="md:flex-1 my-auto z-10 md:bg-none rounded-md md:rounded-none bg-opacity-30 md:bg-opacity-0 py-2 md:py-0 px-2 md:px-0">
            <div>
              <h2 className="mb-2 lg:mb-4 text-3xl lg:text-4xl font-bold tracking-wide leading-8 md:leading-6 text-white">
                Best Ways to Find Your True Sole Mate
              </h2>
              <button className='btn btn-shared text-white px-5 pe-5 pt-2 mt-4 fw-bold pb-3'>Join Now</button>
            </div>
          </div>
          <div className="flex-1 absolute md:static -z-0 lg:mr-10">
            <img src={soleMate} alt="Not Available" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindSoleMate;
