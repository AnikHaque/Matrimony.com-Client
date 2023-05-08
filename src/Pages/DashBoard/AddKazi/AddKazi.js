import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { usePostKaziMutation } from "../../../features/kazi/kaziApi";

const AddKazi = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  console.log(user.email)

  const navigate = useNavigate();
  const { data: brandnames = [] } = useQuery({
    queryKey: ["productbrandname"],
    queryFn: async () => {
      const res = await fetch(
        " http://localhost:5000/productbrandname"
      );
      const data = await res.json();
      return data;
    },
  });
  const [  postKazi, {isLoading, isError} ] = usePostKaziMutation();
  const handleProductData = (data) => {
   
    // console.log(dataInfo);
    // fetch(" http://localhost:5000/kazi", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(dataInfo),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.acknowledged) {
    //       toast.success("Successfully added");
    //       navigate("/dashboard/myproduct");
    //     }
    //   });

   postKazi(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleProductData)}
        className="shadow-lg p-10 rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-3 w-[85%] justify-between ml-[13%] bg-blue-100"
      >
      
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Name</span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Gender</span>
          </label>
          <input
            {...register("gender")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Amount Per Marriage</span>
          </label>
          <input
            {...register("price")}
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Kazi Photo</span>
          </label>
          <input
            {...register("photo")}
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Mobile Number</span>
          </label>
          <input
            {...register("phone")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Location</span>
          </label>
          <input
            {...register("location")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Member Since</span>
          </label>
          <input
            {...register("memberYear")}
            type="text"
            placeholder="Type Date & Year"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">NID Photo</span>
          </label>
          <input
            {...register("nidimg")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Experience</span>
          </label>
          <input
            {...register("experience")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Total Marriage Registry</span>
          </label>
          <input
            {...register("registry")}
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Total Review</span>
          </label>
          <input
            {...register("review")}
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Religion</span>
          </label>
          <input
            {...register("religion")}
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Description</span>
          </label>
          <textarea
            {...register("description")}
            className="textarea   lg:w-[1000px] h-[80px] textarea-bordered"
            placeholder="Details Of Kazi"
          ></textarea>
        </div>
  
        <button
          className="btn lg:btn-wide btn-secondary  mt-32"
          type="submit"
        >
          Add A Kazi
        </button>
      </form>
    </div>
  );
};

export default AddKazi;
