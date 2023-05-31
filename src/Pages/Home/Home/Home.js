import React, { useContext } from "react";
import Banner from "../banner/Banner";
import Anexecutive from "../anexecutive/Anexecutive";
import TopProfile from "../../TopProfile/TopProfile";
import Membership from "../Membership/Membership";
import NavBar from "../../SharedPages/NavBar/NavBar";
import Blogs from "../Blogs/Blogs";
import CategoriesHome from "../Categories/CategoriesHome";
import { themeContext } from "../../../Context";
import Faq from "../../Faq/Faq";

const Home = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{ background: darkMode ? "black" : "", color: darkMode ? "white" : "black" }}>
      <NavBar></NavBar>
      <Banner></Banner>
    <CategoriesHome></CategoriesHome>
   
     <TopProfile></TopProfile>
      {/* <FindSoleMate></FindSoleMate> */}
      {/* <MeetNewPeople></MeetNewPeople> */}
      <Anexecutive></Anexecutive>
      <Membership></Membership>
      <Faq></Faq>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
