import React from 'react'

import './Membership.css'

import { useForm } from 'react-hook-form';
import { usePostMembershipMutation } from '../../../features/membership/membershipApi';
const Membership = () => {
  const { handleSubmit, register, control } = useForm();
  const [  postMembership, {isLoading, isError} ] = usePostMembershipMutation();

  const onSubmit = (data) => {
    postMembership(data);
    console.log(data);
  };

  return (
    <div>
      <div class="wrapper">
    <div class="table basic">
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <span class="text">$</span>
            <span class="price">29</span>
          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">
        <li>
          <span class="list-name">One Selected Template</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">100% Responsive Design</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Credit Remove Permission</span>
          <span class="icon cross"><i class="fas fa-times"></i></span>
        </li>
        <li>
          <span class="list-name">Lifetime Template Updates</span>
          <span class="icon cross"><i class="fas fa-times"></i></span>
        </li>
      </ul>
      {/* The button to open modal */}
      <div class="btn"><button><label htmlFor="my-modal-3">open modal</label></button></div>     
    </div>
    {/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <form
        className='bg-secondary/20 shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className='w-full text-2xl text-primary mb-5'>
          Add a new position
        </h1>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='position'>
            Position
          </label>
          <input type='text' id='position' {...register("position")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='img'>
            Image
          </label>
          <input type='text' id='img' {...register("img")} />
        </div>
        
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='experience'>
            Experience
          </label>
          <input type='text' id='experience' {...register("experience")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='workLevel'>
            Work Level
          </label>
          <input type='text' id='workLevel' {...register("workLevel")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='employmentType'>
            Employment Type
          </label>
          <input
            type='text'
            id='employmentType'
            {...register("employmentType")}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='salaryRange'>
            Salary Range
          </label>
          <input type='text' id='salaryRange' {...register("salaryRange")} />
        </div>
        <div className='flex flex-col w-full'>
          <label className='mb-2' htmlFor='location'>
            Location
          </label>
          <input type='text' id='location' {...register("location")} />
        </div>
        <hr className='w-full mt-2 bg-black' />
        <div className='flex flex-col w-full'>
          <label className='mb-2' htmlFor='overview'>
            Overview
          </label>
          <textarea rows={8} {...register("overview")} id='overview' />
        </div>   
        <div className='flex justify-end items-center w-full mt-3'>
          <button className='btn' type='submit'>
            Submit
          </button>
        </div>
      </form>
  </div>
</div>
    <div class="table premium">
      <div class="ribbon"><span>Recommend</span></div>
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <span class="text">$</span>
            <span class="price">59</span>
          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">
        <li>
          <span class="list-name">Five Existing Templates</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">100% Responsive Design</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Credit Remove Permission</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Lifetime Template Updates</span>
          <span class="icon cross"><i class="fas fa-times"></i></span>
        </li>
      </ul>
      <div class="btn"><button>Purchase</button></div>
    </div>
    <div class="table ultimate">
      <div class="price-section">
        <div class="price-area">
          <div class="inner-area">
            <span class="text">$</span>
            <span class="price">99</span>
          </div>
        </div>
      </div>
      <div class="package-name"></div>
      <ul class="features">
        <li>
          <span class="list-name">All Existing Templates</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">100% Responsive Design</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Credit Remove Permission</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
        <li>
          <span class="list-name">Lifetime Template Updates</span>
          <span class="icon check"><i class="fas fa-check"></i></span>
        </li>
      </ul>
      <div class="btn"><button>Purchase</button></div>
    </div>
  </div>
    </div>
  )
}

export default Membership