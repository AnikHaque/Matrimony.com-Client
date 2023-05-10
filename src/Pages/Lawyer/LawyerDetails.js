import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetLawyerByIdQuery } from '../../features/lawyer/lawyerApi'
import NavBar from '../SharedPages/NavBar/NavBar';

const LawyerDetails = () => {
    const {id} = useParams();
    const {data, isLoading, isError} = useGetLawyerByIdQuery(id);
    const {name, designation, img, experience,casesolved, Speciality,price, gender, location, overview, education, degree } = data || {}
  return (
    <div>
      <NavBar></NavBar>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-[30px] container mx-auto p-3  ">
        <div className="text-d">
          <div className="w-[300px] h-[300px]">
            <img
              src={img}
              className="flex-shrink-0 rounded-md ml-20 h-[96%] w-[100%] mx-14 object-cover"
            ></img>
          </div>

          <h1 className="font-bold text-primary ml-20  text-3xl">
        {name}
          </h1>
          <ul className="list-t">
            <li className="text-t ml-20 text-lg mb-1">
              <b>Designation:</b> {designation}
            </li>
            <li className="text-t ml-20 text-lg mb-1">
              <b>Experience:</b> {experience} Years +
            </li>
            <li className="text-t ml-20 text-lg mb-1">
              <b>Speciality:</b> {Speciality}
            </li>
            <li className="text-t ml-20 text-lg mb-1">
              <b>Total Cases Solved:</b> {casesolved} +
            </li>
            <li className="text-t ml-20 text-lg mb-1">
              <b>Amount Per Cse:</b> {price} Bdt/-
            </li>
            <li className="text-t ml-20 text-lg">
              <b>Location:</b> {location}
            </li>
          </ul>

        </div>
        <div className="mt-[30px] md:mt-0">
          <div>
            <h1 className="font-bold text-2xl text-blue-700">
              Short Description:
            </h1>
            <p>{overview}</p>
          </div>
          <br></br>
          <div>
            <h1 className="font-bold text-2xl text-blue-700">
              Education Qualification:
            </h1>
            <p>{education}</p>
          </div>
          <br></br>
          <div>
            <h1 className="font-bold text-2xl text-blue-700">
              Degree Details:
            </h1>
            <p>{degree}</p>
          </div>
          <br></br>
          <div>
            <Link to={`/lawyer/${data?._id}`}>
              <button className="btn btn-primary">Book Appointment</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LawyerDetails