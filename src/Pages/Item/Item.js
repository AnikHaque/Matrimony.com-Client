import React, { useState, useEffect } from "react";
import { useGetItemQuery } from "../../features/Item/itemApi";
import './Item.css';
import { Link } from "react-router-dom";
import NavBar from "../SharedPages/NavBar/NavBar";

const Item = () => {
  const { data: item, isLoading, isError, isSuccess } = useGetItemQuery();
  const [filteredItems, setFilteredItems] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    if (!isLoading && !isError && item) {
      setFilteredItems(item); // Initialize filteredItems with all items initially
    }
  }, [isLoading, isError, item]);

  const filterItems = (minPrice, maxPrice) => {
    const filtered = item.filter((product) => {
      return product.price >= minPrice && product.price <= maxPrice;
    });
    setFilteredItems(filtered);
  };

  let content = null;

  if (isLoading && !isError) {
    content = (
      <div className="h-20 mt-12 mb-12 flex items-center justify-center">
        <img src="https://cutewallpaper.org/24/loading-gif-png/loading-3c604-animated-22dff-gif-5a929-download-74076-vector.gif" className="w-72 mt-12" alt="Loading" />
      </div>
    );
  }

  if (!isLoading && isError) {
    content = <p>There was an error retrieving the data.</p>;
  }

  if (!isLoading && !isError && (filteredItems.length === 0)) {
    content = <p className="text-center font-bold text-2xl mt-20">No Product Found !!!</p>;
  } else {
    content = (
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 ml-8 p-10">
        {filteredItems.map((product) => (
          <div key={product._id}>
          <div>
 <div class="card5">

<div class="card-header5">
    <h3>{product.name}</h3>
    <p>New on Trend</p>
    <span>New</span>
</div>

<div class="card-img5">
     <img src={product.photo} alt="..." / > 
    <i class="bx bx-heart"></i>
</div>

<div class="card-details5">
    <div class="price5">
        <p>Price</p>
        <strong>${product.price}</strong>
    </div>
    <div class="colors5">
        <div class="selected5">
            <i class="bx bx-check"></i>
        </div>
        <div>
            <i class="bx bx-check"></i>
        </div>
        <div>
            <i class="bx bx-check"></i>
        </div>
    </div>
</div>

<div class="card-sizes5">
    <span class="selected5">38</span>
    <span>39</span>
    <span>40</span>
    <span>41</span>
    <span>42</span>
    <span>43</span>
</div>

<div class="card-footer5">
  <Link to={`/items/${product._id}`}>
 <button className='bg-primary text-white font-bold'>Buy Now</button>
  </Link>
    
</div>

</div>
 </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-72">
        <fieldset className="w-full space-y-1 text-gray-800">
	<label for="price" className="block text-sm font-medium">Total price</label>
	<div className="flex">
		<input type="number" onChange={(e) => setMinPrice(Number(e.target.value))} placeholder="Minimum Price" className="flex flex-1 text-right border sm:text-sm rounded-l-md focus:ring-inset border-gray-300 text-gray-800 bg-gray-100 focus:ring-rose-600 h-12" />
		<span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-r-md bg-gray-300">€</span>
	</div>
</fieldset>
<fieldset className="w-full space-y-1 text-gray-800">
	<label for="price" className="block text-sm font-medium">Total price</label>
	<div className="flex">
		<input type="number" onChange={(e) => setMaxPrice(Number(e.target.value))} placeholder="Maximum Price" className="flex flex-1 text-right border sm:text-sm rounded-l-md focus:ring-inset border-gray-300 text-gray-800 bg-gray-100 focus:ring-rose-600 h-12" />
		<span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-r-md bg-gray-300">€</span>
	</div>
  
</fieldset>
<button onClick={() => filterItems(minPrice, maxPrice)} className="bg-green-700 text-white h-10 w-32 mt-7 rounded-xl">Apply Filter</button>
      </div>
      
      {content}
    </div>
  );
};

export default Item;
