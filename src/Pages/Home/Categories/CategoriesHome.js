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
if(isLoading && !isError){
  content =<div class="h-20 mt-12 mb-12  flex items-center justify-center">
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e8605269321565.5ba1e199ba5a8.gif" className="w-52"></img>
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
