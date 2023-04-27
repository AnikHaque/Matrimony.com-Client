import React from "react";
import AdvertisedProducts from "../AdvertisedProducts/AdvertisedProducts";
import Banner from "../banner/Banner";
import Categories from "../Categories/Categories";
import Products from "../../Products/Products";
import FindSoleMate from "../FindSoleMate/FindSoleMate";
import MeetNewPeople from "../MeetNewPeople/MeetNewPeople";
import Anexecutive from "../anexecutive/Anexecutive";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <AdvertisedProducts></AdvertisedProducts>
      {/* <FindSoleMate></FindSoleMate> */}
      {/* <MeetNewPeople></MeetNewPeople> */}
      <Anexecutive></Anexecutive>
    </div>
  );
};

export default Home;
