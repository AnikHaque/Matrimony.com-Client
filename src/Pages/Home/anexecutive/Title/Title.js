import React from "react";
import "../../../../assets/css/title.css";

const Title = ({ titleText }) => {
    return (
        <div className="text-left">
            <h1 className=" text-2xl leading-9 font-george font-semibold">{titleText}</h1>
            <h1 className="half-border my-1"> </h1>
        </div>
    );
};

export default Title;
