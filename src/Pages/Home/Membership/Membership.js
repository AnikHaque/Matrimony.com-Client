import React, { Fragment, useState } from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import './Membership.css'

import { useForm} from 'react-hook-form';
import { usePostMembershipMutation } from '../../../features/membership/membershipApi';
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { themeContext } from '../../../Context';
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
   const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div data-aos="fade-right"  data-aos-duration="1000">
      <div class="wrapper">
    <div class="table basic" style={{ color: darkMode ? "black" : "" }}>
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
      
      <Button onClick={handleOpen} variant="gradient" className='bg-blue-400 text-white pl-24 text-sm pr-24 pt-4 rounded-full pb-4'>
        Purchase
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody divider>
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
          <label className='mb-2' htmlFor='category'>
           Address
          </label>
          <input className='bg-blue-100  h-10' type='text' placeholder='Basic / Premium / Ultimate ?' id='category' {...register("address")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='category'>
            Phone Number
          </label>
          <input className='bg-blue-100  h-10' type='number' placeholder='Basic / Premium / Ultimate ?' id='category' {...register("phone")} />
        </div>
 
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='salaryRange'>
            Price
          </label>
          <input className='bg-blue-100  h-10' type='text' id='price' {...register("price")} />
        </div>
 
        <div className='flex justify-end items-center w-full mt-3'>
          <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1 bg-blue-400 text-white pl-4 pr-4 pt-2 pb-2"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" className='text-black font-bold bg-blue-400 btn' color="green" onClick={handleOpen} type='submit'>
            <span>Purchase</span>
          </Button>
        </DialogFooter>
        </div>
      </form>
        </DialogBody>  
      </Dialog>
    </div>
    <div class="table premium " style={{ color: darkMode ? "black" : "" }}>
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
       <Button onClick={handleOpen} variant="gradient" className='bg-blue-400 text-white pl-24 text-sm pr-24 pt-4 rounded-full pb-4'>
        Purchase
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody divider>
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
          <label className='mb-2' htmlFor='category'>
           Address
          </label>
          <input className='bg-blue-100  h-10' type='text' placeholder='Basic / Premium / Ultimate ?' id='category' {...register("address")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='category'>
            Phone Number
          </label>
          <input className='bg-blue-100  h-10' type='number' placeholder='Basic / Premium / Ultimate ?' id='category' {...register("phone")} />
        </div>
 
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='salaryRange'>
            Price
          </label>
          <input className='bg-blue-100  h-10' type='text' id='price' {...register("price")} />
        </div>
 
        <div className='flex justify-end items-center w-full mt-3'>
          <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1 bg-blue-400 text-white pl-4 pr-4 pt-2 pb-2"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" className='text-black font-bold bg-blue-400 btn' color="green" onClick={handleOpen} type='submit'>
            <span>Purchase</span>
          </Button>
        </DialogFooter>
        </div>
      </form>
        </DialogBody>  
      </Dialog>
    </div>
    <div class="table ultimate" style={{ color: darkMode ? "black" : "" }}>
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
      <Button onClick={handleOpen} variant="gradient" className='bg-blue-400 text-white pl-24 text-sm pr-24 pt-4 rounded-full pb-4'>
        Purchase
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody divider>
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
          <label className='mb-2' htmlFor='category'>
           Address
          </label>
          <input className='bg-blue-100  h-10' type='text' placeholder='Basic / Premium / Ultimate ?' id='category' {...register("address")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='category'>
            Phone Number
          </label>
          <input className='bg-blue-100  h-10' type='number' placeholder='Basic / Premium / Ultimate ?' id='category' {...register("phone")} />
        </div>
 
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='salaryRange'>
            Price
          </label>
          <input className='bg-blue-100  h-10' type='text' id='price' {...register("price")} />
        </div>
 
        <div className='flex justify-end items-center w-full mt-3'>
          <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1 bg-blue-400 text-white pl-4 pr-4 pt-2 pb-2"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" className='text-black font-bold bg-blue-400 btn' color="green" onClick={handleOpen} type='submit'>
            <span>Purchase</span>
          </Button>
        </DialogFooter>
        </div>
      </form>
        </DialogBody>  
      </Dialog>
    </div>
  </div>
    </div>
  )
}

export default Membership