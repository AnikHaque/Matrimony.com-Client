
<form onSubmit={handleSubmit(onSubmit)}>
<div className=" border p-5 bg-white  text-sm overflow-hidden hover:border  hover:shadow-xl">
  <div className="relative">
    <div className="bg-gray-50 p-5  overflow-hidden">
      <img
        src={img}
        alt=""
        className=" lg:max-w-sm h-72 rounded-md hover:scale-110 transition-all duration-500"
      />
    </div>
    
     
    
  </div>
  <div className="mt-3 text-gray-400">
    <h3 className="font-semibold text-xl text-gray-600 hover:text-[#FF6801]">
      <Link to='/'>{name}</Link>
    </h3>
    <div className="flex justify-between items-center">
      <p className="text-lg font-semibold text-red-400 mt-1">
        <span title="Resale Price">TK {resalePrice}</span>
        <span
          title="Ordinal Price"
          className="text-sm text-gray-400 line-through ml-1"
        >
          TK {originalPrice}
        </span>
      </p>
      <p>
        {/* <span className="flex items-center gap-1">
          <FaCalendar className="text-gray-300" />{" "}
          {createdAt.slice(0, 10)}
        </span> */}
      </p>
    </div>

    {/* <p className="flex justify-between mt-1">
      <span className="flex items-center gap-1">
        <FaMapMarkerAlt className="text-gray-300" />
        {location}
      </span>

      <span className="flex items-center gap-1">
        <FaClock className="text-gray-300" />
        {useDuration} Years Used
      </span>
    </p> */}
    <p className="flex justify-between mt-1">
      <span className="flex items-center gap-1 ">
        by
        <span className=" flex font-medium gap-1 items-center">
          {sellerName}
        </span>
      </span>
    </p>
    <div className="flex justify-between items-center mt-4">
      <p className="flex gap-1 border p-2     hover:bg-[#FF6801] hover:text-white items-center"
      >
        
          <FaHeart className="text-xl" />
         
          <label
        onClick={() => setBookProduct(product)}
         htmlFor="booking-modal"
         className=""
       >
        Add to ChoiceList
       </label>
      </p>
      <button
        // onClick={() => {
        //   if (role !== "buyers") {
        //     notify("Your Are Not Buyers", "info");
        //     return;
        //   }

        //   setShowModal(true);
        // }}
        className="bg-primary hover:bg-gray-700 text-white p-2 "
      >
        Book Now
      </button>
    </div>
  </div>
</div>
</form>