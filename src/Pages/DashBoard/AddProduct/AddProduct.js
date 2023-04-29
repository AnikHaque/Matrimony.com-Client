import React, { useContext } from "react";
import { useFieldArray,useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FiTrash } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { usePostJobMutation } from "../../../features/product/productApi";
import { Toast } from "react-toastify";

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
    fields: skillFields,
    append: skillAppend,
    remove: skillRemove,
  } = useFieldArray({ control, name: "skills" });
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
        " https://matrimony-anik-anikhaque.vercel.app/productbrandname"
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
    <div className="ml-56 mr-40 mt-12">
      <h1 className="text-xl font-semibold text-green-900">Add a Profile !!!</h1>
      <form
        onSubmit={handleSubmit(handleProductData)}
        className="px-20 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 p-4 bg-blue-100"
      >
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Category</span>
          </label>
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
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Profile Name</span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Age</span>
          </label>
          <input
            {...register("age")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Email</span>
          </label>
          <input
            {...register("email")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">No of Siblings</span>
          </label>
          <select
            {...register("Siblings")}
            className="select select-bordered w-full max-w-lg"
          >
            <option disabled>Select Condition</option>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Mobile Number</span>
          </label>
          <input
            {...register("phone")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Present Address</span>
          </label>
          <input
            {...register("presentlocation")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Permanent Address</span>
          </label>
          <input
            {...register("permanentlocation")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Date of Birth</span>
          </label>
          <input
            {...register("birth")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Father Name</span>
          </label>
          <input
            {...register("fathername")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Father Age</span>
          </label>
          <input
            {...register("fatherage")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Father Ocupation</span>
          </label>
          <input
            {...register("fatherocupation")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Father Image</span>
          </label>
          <input
            {...register("fatherimage")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Mother Name</span>
          </label>
          <input
            {...register("mothername")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Mother Occupation</span>
          </label>
          <input
            {...register("motheroccupation")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Mother Image</span>
          </label>
          <input
            {...register("motherimage")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Mother Age</span>
          </label>
          <input
            {...register("motherage")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className='flex flex-col w-full'>
          <label className='mb-2'>Siblings Info</label>
          <div>
            <div>
              {skillFields.map((item, index) => {
                return (
                  <div key={item.key} className='flex items-center gap-3 mb-5'>
                    <input
                      className='!w-full'
                      type='text'
                      {...register(`skills[${index}]`)}
                    />
                    <button
                      type='button'
                      onClick={() => skillRemove(index)}
                      className='grid place-items-center rounded-full flex-shrink-0 bg-red-500/20 border border-red-500 h-11 w-11 group transition-all hover:bg-red-500'
                    >
                      <FiTrash
                        className='text-red-500 group-hover:text-white transition-all'
                        size='20'
                      />
                    </button>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                type='button'
                onClick={() => skillAppend("")}
                className='btn bg-white'
              >
                Add Siblings Information
              </button>
            </div>
          </div>
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Your Nationality</span>
          </label>
          <input
            {...register("Nationality")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Blood Group</span>
          </label>
          <input
            {...register("bloodgroup")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Height</span>
          </label>
          <input
            {...register("height")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Weight</span>
          </label>
          <input
            {...register("weight")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Skin Tone</span>
          </label>
          <input
            {...register("skintone")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Hair color</span>
          </label>
          <input
            {...register("haircolor")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Image</span>
          </label>
          <input
            {...register("img")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Your Hobby</span>
          </label>
          <input
            {...register("hobby")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">NID Number</span>
          </label>
          <input
            {...register("nid")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">NID Picture</span>
          </label>
          <input
            {...register("nidimg")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Do You Smoke ?</span>
          </label>
          <select
            {...register("smoke")}
            className="select select-bordered w-full max-w-lg"
          >
            <option disabled>No</option>
            <option>No</option>
            <option>Yes</option>
            
          </select>
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Are you Foody ?</span>
          </label>
          <select
            {...register("foody")}
            className="select select-bordered w-full max-w-lg"
          >
            <option disabled>No</option>
            <option>No</option>
            <option>Yes</option>
            
          </select>
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Short Description</span>
          </label>
          <textarea
            {...register("description")}
            className="textarea  md:w-[320px] lg:w-[560px] h-[150px] textarea-bordered"
            placeholder="Bio"
          ></textarea>
        </div>
        
        <button
          className="btn lg:btn-wide btn-primary  mt-52 ml-72"
          type="submit"
        >
          Submit Profile
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
