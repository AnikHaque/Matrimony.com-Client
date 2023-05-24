import React from 'react'
import PostSide from '../PostSide/PostSide'
import ProfileCard from '../ProfileCard/ProfileCard'
import ProfileLeft from '../ProfileLeft/ProfileLeft'
import RightSide from '../RightSide/RightSide'
import './MainProfile.css'
import NavBar from '../../SharedPages/NavBar/NavBar'
const MainProfile = () => {
  return (
    <div>
        <NavBar></NavBar>
        <br></br>
    <div className="Profile">
        <ProfileLeft/>

        <div className="Profile-center">
            <ProfileCard/>
            <PostSide/>
        </div>

        <RightSide/>
    </div>
    </div>
  )
}

export default MainProfile