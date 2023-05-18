import React from 'react'

import './Membership.css'

import { useForm} from 'react-hook-form';
import { usePostMembershipMutation } from '../../../features/membership/membershipApi';
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
const Membership = () => {
  const navigate = useNavigate()
  const { handleSubmit, register, control,reset } = useForm();
  const [  postMembership, {isLoading, isError} ] = usePostMembershipMutation();

  const onSubmit = (data) => {
    postMembership(data);
   if(data){
    toast("Membership Addition successful")
    reset()
    
   }
  };
 
  return (
    <div data-aos="fade-right"  data-aos-duration="1000">
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
      <div class="btn"><button><label htmlFor="my-modal-3">Purchase</label></button></div>     
    </div>
    {/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <form
        className=' shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className='w-full text-2xl text-primary mb-5'>
          Add a Membership Purchase !
        </h1>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='name'>
            Name
          </label>
          <input className='bg-blue-100  h-10'  type='text' id='name' {...register("name")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='email'>
           Email
          </label>
          <input className='bg-blue-100  h-10' type='text' id='email' {...register("email")} />
        </div>
        
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='category'>
            Category
          </label>
          <input className='bg-blue-100  h-10' type='text' placeholder='Basic / Premium / Ultimate ?' id='category' {...register("category")} />
        </div>
 
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='salaryRange'>
            Price
          </label>
          <input className='bg-blue-100  h-10' type='text' id='price' {...register("price")} />
        </div>
 
        <div className='flex justify-end items-center w-full mt-3'>
          <button className='btn btn-secondary' type='submit'>
         Purchase
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