import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { FiTrash } from "react-icons/fi";
import { usePostAgentMutation } from "../../../features/agent/agentApi";
import { usePostLawyerMutation } from "../../../features/lawyer/lawyerApi";

const AddLawyer = () => {
  const { handleSubmit, register, control } = useForm();
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

  const [ postLawyer, {isLoading, isError} ] = usePostLawyerMutation();

  const onSubmit = (data) => {
    console.log(data);
    postLawyer(data);
    
  };

  return (
    <div className='flex justify-center items-center overflow-auto p-10'>
      <form
        className='bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 w-[85%] justify-between ml-[13%]'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className='w-full text-2xl text-primary mb-5'>
          Add a new position
        </h1>
        <div className='flex flex-col w-full max-w-xs'>
          <input className="h-10" type='text' id='name' {...register("name")} placeholder="Lawyer Name" />
        </div>
        <br></br>
        <br></br>
        <div className='flex flex-col w-full max-w-xs'>
          <input className="h-10" type='text' id='designation' {...register("designation")} placeholder="Designation" />
        </div>
        
        <div className='flex flex-col w-full max-w-xs'>
         
          <input className="h-10" type='text' id='img' {...register("img")} placeholder="Lawyer Image" />
        </div>
        
        <div className='flex flex-col w-full max-w-xs'>
          <input className="h-10" type='text' id='experience' {...register("experience")} placeholder="Lawyer Experience" />
        </div>
        <br></br>
        <br></br>
        <div className='flex flex-col w-full max-w-xs'>
          <input className="h-10" type='number' id='casesolved' {...register("casesolved")} placeholder="Cases Solved" />
        </div>
       
        <div className='flex flex-col w-full max-w-xs'>
          <input className="h-10" type='text' id='speciality' {...register("Speciality")} placeholder="Add Speciality" />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          
          <input className="h-10" type='number' id='price' {...register("price")} placeholder="Amount Per Case" />
        </div>
       
        <div className='flex flex-col w-full max-w-xs'>
         
          <input className="h-10" type='text' id='gender' {...register("gender")} placeholder="Gender" />
        </div>
       
        <div className='flex flex-col w-full max-w-xs'>
         
          <input className="h-10" type='text' id='location' {...register("location")} placeholder="Location" />
        </div>
        <hr className='w-full mt-2 bg-black' />
        <div className='flex flex-col w-full'>
          <label className='mb-2' htmlFor='overview'>
            Overview
          </label>
          <textarea rows={8} {...register("overview")} id='overview' />
        </div>
        <hr className='w-full mt-2 bg-black' />
        <div className='flex flex-col w-full h-20'>
          <label className='mb-2' htmlFor='education'>
            Educational Details
          </label>
          <textarea rows={8} {...register("education")} id='education' />
        </div>
        <hr className='w-full mt-2 bg-black' />
        <div className='flex flex-col w-full h-20'>
          <label className='mb-2' htmlFor='overview'>
            Degree Details
          </label>
          <textarea rows={8} {...register("degree")} id='degree' />
        </div>
        
        <div className='flex flex-col w-full'>
          <label className='mb-2'>Awards</label>
          <div>
            <div>
              {reqFields.map((item, index) => {
                return (
                  <div key={item.key} className=' mb-5 flex items-center gap-3'>
                    <input
                      className='!w-full'
                      type='text'
                      {...register(`requirements[${index}]`)}
                    />
                    <button
                      type='button'
                      onClick={() => reqRemove(index)}
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
                onClick={() => reqAppend("")}
                className='btn'
              >
                Add
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

export default AddLawyer;

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
