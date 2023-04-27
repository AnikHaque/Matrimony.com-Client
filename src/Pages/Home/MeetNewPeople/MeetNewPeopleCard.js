import React from "react";
import { Link } from "react-router-dom";
import meetNewPeople from "../../../assets/css/MeetNewPeople.module.css";

const MeetNewPeopleCard = ({ data }) => {
    return (
        <>
            <div>
                <div className={`${meetNewPeople.singleWorkBox} mx-auto`}>
                    <div className={meetNewPeople.icon}>
                        <img src={data.img} alt="Not Available" />
                        <div className={meetNewPeople.number}>{data.number}</div>
                    </div>
                    <h4 className={meetNewPeople.title}>{data.title}</h4>

                    <Link to="/login">
                        <button className={meetNewPeople.customButton}>Join Now !</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MeetNewPeopleCard;
