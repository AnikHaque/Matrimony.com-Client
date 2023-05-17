import React, { useContext } from "react";
import { useFieldArray,useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FiTrash } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { usePostJobMutation } from "../../../features/product/productApi";
import { Toast } from "react-toastify";
import './AddProduct.css'
const AddProduct = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const {
    fields: resFields,
    append: resAppend,
    remove: resRemove,
  } = useFieldArray({ control, name: "responsibilities" });
  const {
    fields: siblingsFields,
    append: siblingsAppend,
    remove: siblingsRemove,
  } = useFieldArray({ control, name: "siblings" });
  const {
    fields: reqFields,
    append: reqAppend,
    remove: reqRemove,
  } = useFieldArray({ control, name: "requirements" });
  const { user } = useContext(AuthContext);
  console.log(user.email)

  const navigate = useNavigate();
  const { data: brandnames = [] } = useQuery({
    queryKey: ["productbrandname"],
    queryFn: async () => {
      const res = await fetch(
        " https://matrimony-com-server-anikhaque.vercel.app/productbrandname"
      );
      const data = await res.json();
      return data;
    },
  });
  const [  postJob, {isLoading, isError} ] = usePostJobMutation();
  const handleProductData = (data) => {
   
   console.log(data);
   
    postJob(data);
    if(data){
      toast("Added Profile Successfully");
      reset();
    }
  };

  return (
  <div>
   <div class="container">
    <div class="title">Registration</div>
    <div class="content">
      <form  onSubmit={handleSubmit(handleProductData)}>
        <div class="user-details">
          <div class="input-box">
            <span class="details">Full Name</span>
            <select
            {...register("id")}
            className="select select-bordered w-full max-w-lg defa"
          >
            <option disabled>Select Brand Name</option>
            {brandnames.map((brandname) => (
              <option value={brandname._id} key={brandname._id}>
                {brandname.name}
              </option>
            ))}
          </select>
          </div>
          <div class="input-box">
            <span class="details">Username</span>
            <input  {...register("name")} type="text" placeholder="Enter your username" required />
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" placeholder="Enter your email" required />
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" required />
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="text" placeholder="Enter your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
        </div>
       
        <div class="button">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  </div>

  </div>
  );
};

export default AddProduct;
