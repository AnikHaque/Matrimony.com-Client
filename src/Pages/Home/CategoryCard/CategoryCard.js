// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import BookNowModal from "../../BookNowModal/BookNowModal";
import './Categories.css';
const CategoryCard = ({ category }) => {
  const { _id, name } = category;
  console.log(category);
  const handleCard = () => {
    console.log(_id);
  };
  return (
    <div>
      <Link to={`products/${_id}`}>
        <section className="p-6 my-6 bg-gray-100 text-gray-800">
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-rose-600">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 text-gray-100">
					<path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
				</svg>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">{name}</p>
				
			</div>
		</div>
	</div>
</section>
      </Link>
    </div>
  );
};

export default CategoryCard;