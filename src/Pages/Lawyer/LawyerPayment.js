import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetLawyerByIdQuery } from '../../features/lawyer/lawyerApi'
import NavBar from '../SharedPages/NavBar/NavBar';

const LawyerPayment = () => {
    const {id} = useParams();
    const {data, isLoading, isError} = useGetLawyerByIdQuery(id);
    const {name, designation, img, experience,casesolved, Speciality,price, gender, location, overview, education, degree } = data || {}
  return (
    <div>
      <NavBar></NavBar>
        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 ml-20'>
<div>
  <Link to='/'>
  <img src='https://sslcommerz.com/wp-content/uploads/2021/06/Payment-Brands.jpg'></img>
  </Link>
  
</div>
        </div>
    </div>
  )
}

export default LawyerPayment