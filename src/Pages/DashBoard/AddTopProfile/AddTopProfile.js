import React, { useContext } from "react";
import { useFieldArray,useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FiTrash } from "react-icons/fi";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { Toast } from "react-toastify";
import { usePostTopProfileMutation } from "../../../features/topProfile/topProfileApi";

const AddTopProfile = () => {
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
 
  const [  postTopProfile, {isLoading, isError} ] = usePostTopProfileMutation()

  const handleTopProfile = (data) => {
   
   console.log(data);
   
  postTopProfile(data)
    if(data){
      toast("Added Top Profile Successfully");
      reset();
    }
  };

  return (
    <div className="">
      
      <form
        onSubmit={handleSubmit(handleTopProfile)}
        className="shadow-lg p-10 rounded-2xl  gap-3 w-[85%] justify-between ml-[13%] bg-blue-100"
      >

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

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
            <span className="label-text text-xl">Designation</span>
          </label>
          <input
            {...register("designation")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
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
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Office Address</span>
          </label>
          <input
            {...register("ofcaddress")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Facebook ID</span>
          </label>
          <input
            {...register("facebook")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Twitter ID</span>
          </label>
          <input
            {...register("twitter")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Instagram ID</span>
          </label>
          <input
            {...register("instagram")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Youtube Link</span>
          </label>
          <input
            {...register("youtube")}
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
              {siblingsFields.map((item, index) => {
                return (
                  <div key={item.key} className='flex items-center gap-3 mb-5'>
                    <input
                      className='!w-full'
                      type='text'
                      {...register(`siblings[${index}]`)}
                    />
                    <button
                      type='button'
                      onClick={() => siblingsRemove(index)}
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
                onClick={() => siblingsAppend("")}
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
            <span className="label-text text-xl">Are you open minded?</span>
          </label>
          <select
            {...register("minded")}
            className="select select-bordered w-full max-w-lg"
          >
            <option disabled>No</option>
            <option>No</option>
            <option>Yes</option>
            
          </select>
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Do you like travelling ?</span>
          </label>
          <select
            {...register("travelling")}
            className="select select-bordered w-full max-w-lg"
          >
            <option disabled>No</option>
            <option>No</option>
            <option>Yes</option>
            
          </select>
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Do you drink ?</span>
          </label>
          <select
            {...register("drink")}
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
            className="textarea  md:w-[320px] lg:w-[1060px] h-[150px] textarea-bordered"
            placeholder="Bio"
          ></textarea>
        </div>
        </div>
        <br></br>
        <button
          className="btn lg:btn-success btn-primary"
          type="submit"
        >
          Submit Profile
        </button>
      </form>
     
    </div>
  );
};

export default AddTopProfile;
