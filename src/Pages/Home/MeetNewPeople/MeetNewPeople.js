import React from "react";
import meetNewPeople from "../../../assets/css/MeetNewPeople.module.css";
import birdShape from "../../../assets/images/birdShape.png";
import MeetNewPeopleCard from "./MeetNewPeopleCard";
import MeetNewPeopleData from "./MeetNewPeopleData";
const MeetNewPeople = () => {
    return (
        <>
            <section className={meetNewPeople.howItWorkSection}>
                <img
                    className={meetNewPeople.shape1}
                    src="https://shonshari.vercel.app/static/media/circle-shape.74c8d5f17fd43a586383.png"
                    alt="Not Available"
                />
                <img className={meetNewPeople.shape2} src={birdShape} alt="Not Available" />
                <div className={meetNewPeople.MeetNewPeopleContainer}>
                    <div className="flex justify-center">
                        <div className="w-[50%] mx-auto">
                            <div className="content">
                                <div className="mb-[40px] text-center">
                                    <h6 className="text-[#ff317b] mb-[30px] text-[24px] font-bold">Meet Your Perfect Life Partner Today!</h6>
                                    <h2 className="text-[#ff317b] text-[25px] font-medium mb-[11px]">How Does It Work?</h2>
                                    <p className="text-[#3b368c] text-[20px] mb-[16px]">You’re just 3 steps away from a great Match</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 w-full ">
                        {MeetNewPeopleData.map(data => (
                            <MeetNewPeopleCard key={data._id} data={data} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default MeetNewPeople;
