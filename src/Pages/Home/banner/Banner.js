import React, { Fragment,useRef } from 'react';

import { Link, useNavigate } from "react-router-dom";

import './Banner.css'
import { useContext } from 'react';
import { themeContext } from '../../../Context';
const Banner = () => {
  const navigate = useNavigate()
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
<div>
  <section className="bg-gray-100 text-gray-800 lg:mt-[-50px] bg-[url('https://img1.picmix.com/output/stamp/normal/9/9/4/3/1503499_8efaf.gif')]">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl text-[#be2bac]">Together is a <br></br>wonderful place to be
			</h1>
			<p className="mt-6 mb-8 text-md sm:mb-12">Come, let’s be a comfortable couple and take care of each other! How glad we shall be, that we have somebody we are fond of always, to talk to and sit with... Come, let’s be a comfortable couple and take care of each other! How glad we shall be, that we have somebody we are fond of always, to talk to and sit with.
				
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 btn-shared text-white text-lg font-semibold rounded bg-rose-600 text-gray-50">Get Started</a>
				<a rel="noopener noreferrer" href="#" className="px-8  py-3 text-lg font-semibold border rounded border-gray-800">Sign Up</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://images.pexels.com/photos/1779414/pexels-photo-1779414.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 w-full lg:mt-32 rounded-lg" />
		</div>
	</div>
</section>
</div>
  );
};

export default Banner;
