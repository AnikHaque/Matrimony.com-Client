import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { FiTrash } from "react-icons/fi";
import { usePostItemMutation } from "../../../features/Item/itemApi";


const AddItem = () => {
  const { handleSubmit, register, control } = useForm();

  const {
    fields: imagesFields,
    append: imagesAppend,
    remove: imagesRemove,
  } = useFieldArray({ control, name: "images" });


  const [ postItem, {isLoading, isError} ] = usePostItemMutation();

  const onSubmit = (data) => {
    console.log(data);
    postItem(data);
    
  };

  return (
    <div className='flex justify-center items-center overflow-auto p-10'>
      <form
        className='bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className='w-full text-2xl text-primary mb-5'>
          Add a new Product
        </h1>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='name'>
           Product Name
          </label>
          <input type='text' id='name' {...register("name")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='img'>
           Product Slug
          </label>
          <input type='text' id='img' {...register("slug")} />
        </div>
        
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='photo'>
            Photo
          </label>
          <input type='text' id='photo' {...register("photo")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='category'>
          Category
          </label>
          <input type='text' id='category' {...register("category")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='brand'>
            Brand
          </label>
          <input type='text' id='brand' {...register("brand")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='price'>
           price
          </label>
          <input type='number' id='price' {...register("price")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='discount'>
           Discount
          </label>
          <input type='number' id='discount' {...register("discount")} />
        </div>
      

        <hr className='w-full mt-2 bg-black' />
        <div className='flex flex-col w-full'>
          <label className='mb-2' htmlFor='desc'>
            Overview
          </label>
          <textarea rows={8} {...register("desc")} id='desc' />
        </div>
        <div className='flex flex-col w-full'>
          <label className='mb-2'>More images</label>
          <div>
            <div>
              {imagesFields.map((item, index) => {
                return (
                  <div key={item.key} className='flex items-center gap-3 mb-5'>
                    <input
                      className='!w-full'
                      type='text'
                      {...register(`images[${index}]`)}
                    />
                    <button
                      type='button'
                      onClick={() => imagesRemove(index)}
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
                onClick={() => imagesAppend("")}
                className='btn btn-primary'
              >
                More Images
              </button>
            </div>
          </div>
        </div>


        <div className='flex justify-end items-center w-full mt-3'>
          <button className='btn' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;

// Position name
// Company name
// Experience
// Work Level
// Salary Range
// Employment Type
// Location
// Overview
// Responsibilities
// Requirements
// Skills
