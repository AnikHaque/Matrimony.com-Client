import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetLawyerByIdQuery } from '../../features/lawyer/lawyerApi'

const LawyerDetails = () => {
    const {id} = useParams();
    const {data, isLoading, isError} = useGetLawyerByIdQuery(id);
    const {name, designation, img, experience,casesolved, Speciality,price, gender, location,overview } = data || {}
  return (
    <div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-[30px] container mx-auto p-3 px-6 ">
        <div className="text-d">
          <div className="w-[300px] h-[300px]">
            <img
              src={data?.img}
              className="flex-shrink-0 rounded-md ml-20  h-[96%] w-[100%] mx-14 object-cover"
            ></img>
          </div>

          <h1 className="font-bold text-primary ml-20  text-3xl">
        position
          </h1>
          <ul className="list-t">
            <li className="text-t ml-20">
              <b>Designation:</b> position
            </li>
            <li className="text-t ml-20">
              <b>specialization Area:</b> name
            </li>
            <li className="text-t ml-20">
              <b>Department:</b> name
            </li>
            <li className="text-t ml-20">
              <b>Hospital:</b> name
            </li>
            <li className="text-t ml-20">
              <b>Location:</b> name
            </li>
           
           
          </ul>
        </div>
        <div className="mt-[30px] md:mt-0">
          <div>
            <h1 className="font-bold text-2xl text-blue-700">
              Education Qualification:
            </h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
          <br></br>
          <div>
            <h1 className="font-bold text-2xl text-blue-700">
              Training Programme/ Workshop Attended:
            </h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
          <br></br>
          <div>
            <h1 className="font-bold text-2xl text-blue-700">
              Books Authored/Research Papers published
            </h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <br></br>
            <br></br>
            <br></br>

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