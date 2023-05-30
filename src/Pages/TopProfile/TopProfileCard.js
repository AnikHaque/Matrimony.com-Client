import React from "react";

import { Link} from "react-router-dom";
import {  usePostChoiceMutation } from "../../features/choicelist/choiceListApi";
import { useForm } from "react-hook-form";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  StarIcon,
  HeartIcon,
  WifiIcon,
  HomeIcon,
  TvIcon,
  FireIcon,
} from "@heroicons/react/24/solid";
import './TopProfile.css'
const TopProfileCard = ({ product,setBookProfile }) => {
    const { } = useForm();
  const {
    _id,
   name,
   img,
   presentlocation
  } = product;

 

  const [postChoice] = usePostChoiceMutation();
 
  const onSubmit = (data) => {
    console.log(data);
    postChoice(data);
    console.log(data)
  };
  return (
    <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="1500"
     data-aos-duration="1500">
{/*       
      <div class="wrapper00 ">
    <div class="img-area">
      <div class="inner-area">
        <img src={img} alt="" />
      </div>
    </div>
    <div class="icon arrow"><i class="fas fa-arrow-left"></i></div>
    <div class="icon dots"><i class="fas fa-ellipsis-v"></i></div>
    <div class="name">{name}</div>
    <div class="about">{presentlocation}</div>
    <div class="social-icons">
      <a href="#" class="fb"><i class="fab fa-facebook-f"></i></a>
      <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
      <a href="#" class="insta"><i class="fab fa-instagram"></i></a>
      <a href="#" class="yt"><i class="fab fa-youtube"></i></a>
    </div>
    <div class="buttons">
   
      <button> <label
        onClick={() => setBookProfile(product)}
         htmlFor="booking-modal"
         className=""
       >
         ChoiceList
       </label>
       </button>
      <Link to={`/topprofile/${_id}`}><button>View</button></Link>
    </div>
   
  </div> */}
   <Card className="mt-6 w-96 ml-[-30px]">
      <CardHeader className="relative">
        <img src={img} alt="" layout="fill" className="w-full h-72 pl-4 pr-4 pt-4 pb-4 rounded-md" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by walk
          and near to &quot;Naviglio&quot; where you can enjoy the main night life
          in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className="btn btn-primary text-white font-bold pl-6 pr-6 mr-16">ChoiceList</Button>
        <Button className="btn btn-primary text-white font-bold pl-6 pr-6">View Details</Button>
       
      </CardFooter>
    </Card>
    
    </div>
  );
};

export default TopProfileCard;
