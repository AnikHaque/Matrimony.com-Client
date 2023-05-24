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
  <div className="addprofilemain">
   <div class="containermainprofile">
    <div class="title">Add a Profile</div>
    <div class="content">
      <form className="formprofile" onSubmit={handleSubmit(handleProductData)}>
        <div class="user-details">
          <div class="input-box">
            <span class="details">Category</span>
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
            <span class="details">Name</span>
            <input  {...register("name")} type="text" placeholder="Enter your name"   />
          </div>
          <div class="input-box">
            <span class="details">Age</span>
            <input  {...register("age")} type="number" placeholder="Enter your age"   />
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input {...register("email")} type="text" placeholder="Enter your email"   />
          </div>
          <div class="input-box">
            <span class="details">Designation</span>
            <input {...register("designation")} type="text" placeholder="Designation"   />
          </div>
          <div class="input-box">
            <span class="details">Gender</span>
            <select
            {...register("gender")}
            className="select select-bordered w-full max-w-lg"
          >
            <option disabled>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
        
          </select>
          </div>
          <div class="input-box">
            <span  class="details">Office Address</span>
            <input {...register("ofcaddress")} type="text" placeholder="N/A"   />
          </div>
          <div class="input-box">
            <span  class="details">Appointment Amount</span>
            <input {...register("resalePrice")} type="number" placeholder="N/A"    />
          </div>
          <div class="input-box">
            <span class="details">Facebook ID</span>
            <input  {...register("facebook")} type="text" placeholder="N/A"   />
          </div>
          <div class="input-box">
            <span class="details">Twitter ID</span>
            <input  {...register("twitter")} type="text" placeholder="N/A"   />
          </div>
          <div class="input-box">
            <span class="details">Instagram ID</span>
            <input   {...register("instagram")} type="text" placeholder="N/A"   />
          </div>
          <div class="input-box">
            <span class="details">Youtube Link</span>
            <input  {...register("youtube")} type="text" placeholder="N/A"   />
          </div>
          <div class="input-box">
            <span class="details">No of Siblings</span>
            <select
            {...register("Siblings")}
            className="select select-bordered w-full max-w-lg"
          >
            <option disabled>Select Siblings</option>
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
          <div class="input-box">
            <span class="details">Phone No</span>
            <input  {...register("phone")} type="number" placeholder="Enter your phone number"   />
          </div>
          <div class="input-box">
            <span class="details">Present Address</span>
            <input {...register("presentlocation")} type="text" placeholder="Present Address"   />
          </div>
          <div class="input-box">
            <span class="details">Permanent Address</span>
            <input  {...register("permanentlocation")} type="text" placeholder="Permanent Address"   />
          </div>
          <div class="input-box">
            <span class="details">Date of birth</span>
            <input {...register("birth")} type="date" placeholder=""   />
          </div>
          <div class="input-box">
            <span class="details">Father Name</span>
            <input {...register("fathername")} type="text" placeholder="Father Name"   />
          </div>
          <div class="input-box">
            <span class="details">Father Age</span>
            <input {...register("fatherage")} type="number" placeholder="Father Age"   />
          </div>
          <div class="input-box">
            <span class="details">Father Occupation</span>
            <input {...register("fatherocupation")} type="text" placeholder="Father Occupation"   />
          </div>
          <div class="input-box">
            <span class="details">Father Image</span>
            <input {...register("fatherimage")} type="text" placeholder="Father Image"   />
          </div>
          <div class="input-box">
            <span class="details">Mother Name</span>
            <input {...register("mothername")} type="text" placeholder="Mother Name"   />
          </div>
          <div class="input-box">
            <span class="details">Mother Occupation</span>
            <input  {...register("motheroccupation")} type="text" placeholder="Mother Occupation"   />
          </div>
          <div class="input-box">
            <span class="details">Mother Image</span>
            <input {...register("motherimage")} type="text" placeholder="Mother Image"   />
          </div>
          <div class="input-box">
            <span class="details">Mother Age</span>
            <input {...register("motherage")} type="number" placeholder="Mother Age"   />
          </div>
          <div class="input-box">
            <span class="details">Add Siblings Info</span>
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
          <div class="input-box">
            <span class="details">Your Nationality</span>
            <input  {...register("Nationality")} type="text" placeholder="Nationality"   />
          </div>
          <div class="input-box">
            <span class="details">Blood Group</span>
            <input {...register("bloodgroup")} type="text" placeholder="Blood Group"   />
          </div>
          <div class="input-box">
            <span class="details">Height</span>
            <input {...register("height")} type="text" placeholder="Height"   />
          </div>
          <div class="input-box">
            <span class="details">Weight</span>
            <input  {...register("weight")} type="text" placeholder="Weight"   />
          </div>
          <div class="input-box">
            <span class="details">Skin Tone</span>
            <input {...register("skintone")} type="text" placeholder="Skin Tone"   />
          </div>
          <div class="input-box">
            <span class="details">Hair Color</span>
            <input {...register("haircolor")} type="text" placeholder="Hair Color"   />
          </div>
          <div class="input-box">
            <span class="details">Your Image</span>
            <input {...register("img")} type="text" placeholder="Photo"   />
          </div>
          <div class="input-box">
            <span class="details">Your Religion</span>
            <input {...register("religion")} type="text" placeholder="Religion"   />
          </div>
          <div class="input-box">
            <span class="details">Your Hobby</span>
            <input  {...register("hobby")} type="text" placeholder="Hobby"   />
          </div>
          <div class="input-box">
            <span class="details">NID Number</span>
            <input {...register("nid")} type="text" placeholder="Nid"   />
          </div>
          <div class="input-box">
            <span class="details">NID Picture</span>
            <input {...register("nidimg")} type="text" placeholder="Nid Picture"   />
          </div>
          <div class="input-box">
            <span class="details">Do you smoke ?</span>
             <select
            {...register("smoke")}
            className="select select-bordered w-full max-w-lg"
          >
            <option disabled>No</option>
            <option>No</option>
            <option>Yes</option>
            
          </select>
          </div>
          <div class="input-box">
            <span class="details">Is your father alive ?</span>
             <select
            {...register("fatheralive")}
            className="select select-bordered w-full max-w-lg"
          >
            <option disabled>No</option>
            <option>No</option>
            <option>Yes</option>
            
          </select>
          </div>
          <div class="input-box">
            <span class="details">Is your mother alive ?</span>
             <select
            {...register("motheralive")}
            className="select select-bordered w-full max-w-lg"
          >
            <option disabled>No</option>
            <option>No</option>
            <option>Yes</option>
            
          </select>
          </div>
          <div class="input-box">
            <span class="details">Are your Introvert ?</span>
             <select
            {...register("introvert")}
            className="select select-bordered w-full max-w-lg"
          >
            <option disabled>No</option>
            <option>No</option>
            <option>Yes</option>
            
          </select>
          </div>
          <div class="input-box">
            <span class="details">Are your open minded ?</span>
             <select
            {...register("openminded")}
            className="select select-bordered w-full max-w-lg"
          >
            <option disabled>No</option>
            <option>No</option>
            <option>Yes</option>
            
          </select>
          </div>
          <div class="input-box">
            <span class="details">Are your foody ?</span>
             <select
            {...register("foody")}
            className="select select-bordered w-full max-w-lg"
          >
            <option disabled>No</option>
            <option>No</option>
            <option>Yes</option>
            
          </select>
          </div>
          <div class="input-box">
            <span class="details">Do you like travelling ?</span>
             <select
            {...register("travelling")}
            className="select select-bordered w-full max-w-lg"
          >
            <option disabled>No</option>
            <option>No</option>
            <option>Yes</option>
            
          </select>
          </div>
         
          <div class="input-box">
            <span class="details">Short Description</span>
            <textarea
            {...register("description")}
            className="textarea  md:w-[320px] lg:w-[700px] h-[150px] textarea-bordered"
            placeholder="Bio"
          ></textarea>
          </div>
        </div>
       
        <div class="button w-[20%]">
          <input type="submit" value="Submit Profile"  />
        </div>
      </form>
    </div>
  </div>

  </div>
  );
};

export default AddProduct;
