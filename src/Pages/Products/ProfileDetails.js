import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const ProfileDetails = () => {


    const {id} = useParams();
    const profile = useLoaderData();
    console.log(profile)
  return (
    <div>
        <h1>Hello {id}</h1>
       
    </div>
  )
}

export default ProfileDetails