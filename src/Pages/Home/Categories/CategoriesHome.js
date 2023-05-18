import React from "react";
import { useQuery } from "@tanstack/react-query";
import CategoryCard from "../CategoryCard/CategoryCard";
import NavBar from "../../SharedPages/NavBar/NavBar";
import { useGetCategoriesQuery } from "../../../features/categories/categoriesApi";
import Loader from "../../../ui/Loader";
import { Error } from "../../../ui/Error";
import './Categories.css'
const CategoriesHome = () => {
  const {data:categories, isLoading,isError} = useGetCategoriesQuery();
 
  
  let content = null;
if(isLoading){
  content = <div class="loader bbbb">
      <div class="circles">
        <span class="circle"></span>
        <span class="circle1"></span>
        <span class="circle2"></span>
        <span class="circle3"></span>
        <span class="circle4"></span>
      </div>
      <span class="text">Loading ...</span>
    </div>
}
  if(!isLoading && isError){
    content = <p>There is an error occured</p>
  }
  if(!isLoading && !isError && categories?.length === 0){
    content = <div className="lg:max-w-lg ml-[310px]"><Error></Error></div>
  }
  if(!isLoading && !isError && categories?.length > 0){
    content = <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ml-8 my-8">
        {categories.map((category) => (
          <CategoryCard
            key={category.category_id}
            category={category}
          ></CategoryCard>
        ))}
      </div>
  }

  return (
    <div>
      <h1 className="text-4xl mt-4 font-semibold text-center">
        Browse By Category
      </h1>
      {content}
    </div>
  );
};

export default CategoriesHome;
