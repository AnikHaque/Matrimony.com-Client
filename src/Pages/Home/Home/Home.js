import React from "react";
import AdvertisedProducts from "../AdvertisedProducts/AdvertisedProducts";
import Banner from "../banner/Banner";
import Categories from "../Categories/Categories";
import Products from "../../Products/Products";
import FindSoleMate from "../FindSoleMate/FindSoleMate";
import MeetNewPeople from "../MeetNewPeople/MeetNewPeople";
import Anexecutive from "../anexecutive/Anexecutive";
import TopProfile from "../../TopProfile/TopProfile";
import Membership from "../Membership/Membership";
import NavBar from "../../SharedPages/NavBar/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Categories></Categories>
     <TopProfile></TopProfile>
      {/* <FindSoleMate></FindSoleMate> */}
      {/* <MeetNewPeople></MeetNewPeople> */}
      <Anexecutive></Anexecutive>
      <Membership></Membership>
    </div>
  );
};

export default Home;
