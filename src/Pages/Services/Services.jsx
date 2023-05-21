import React, { useContext } from "react";
import "./Services.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../assets/img/sidebar.png";
import Ecommerce from "../../assets/img/ecommerce.png";
import HOC from "../../assets/img/hoc.png";
import MusicApp from "../../assets/img/musicapp.png";
import { themeContext } from "../../Context";
const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Marriage</span>
      <span>Registry</span>

    
      
         <div className="grid lg:grid-cols-4 gap-4">
           <img src={Sidebar} alt="" />
     
          <img src={Ecommerce} alt="" />
        
          <img src={MusicApp} alt="" />
       
          <img src={HOC} alt="" />
           <img src={Sidebar} alt="" />
     
          <img src={Ecommerce} alt="" />
        
          <img src={MusicApp} alt="" />
       
          <img src={HOC} alt="" />
         </div>
       
     
    </div>
  );
};

export default Services;
