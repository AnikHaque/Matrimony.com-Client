import React from "react";
import { useQuery } from "@tanstack/react-query";
import CategoryCard from "../CategoryCard/CategoryCard";
import NavBar from "../../SharedPages/NavBar/NavBar";

const Categories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch(" http://localhost:5000/categories").then((res) =>
        res.json()
      ),
  });
  return (
    <div>
      <NavBar></NavBar>
      <h1 className="text-4xl mt-4 font-semibold text-center">
        Browse By Category
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ml-8 my-8">
        {categories.map((category) => (
          <CategoryCard
            key={category.category_id}
            category={category}
          ></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
