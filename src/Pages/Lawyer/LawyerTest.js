import React, { useContext } from "react";
import { CartContext } from "./Cart";
import { useGetLawyerByIdQuery } from "../../features/lawyer/lawyerApi";

const LawyerTest = () => {
const {id} = useParams();
    const {data, isLoading, isError} = useGetLawyerByIdQuery(id);
    const {name, designation, img, experience,casesolved, Speciality,price, gender, location, overview, education, degree } = data || {}

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="iamge" />
        </div>

        <div className="title">
          <h2>{name}</h2>
          <p>{overview}</p>
        </div>

        <div className="price">
          <h3>{price}₹</h3>
        </div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}></i>
        </div>
      </div>

      <hr />
    </>
  );
};

export default LawyerTest ;