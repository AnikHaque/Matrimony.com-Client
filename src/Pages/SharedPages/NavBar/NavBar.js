import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import blackLogo from "../../../assets/images/Logo/logoBlack.png";
import blog from "../../../assets/images/NavIcons/Blog.svg";
import findPartner from "../../../assets/images/NavIcons/Find-Your-Partner.svg";
import login from "../../../assets/images/NavIcons/Profile-Login-Icon.svg";
import loginavator from '../../../assets/images/loginavator.png';
import shop from "../../../assets/images/Logo/Shop.svg";
import kazi from "../../../assets/images/NavIcons/Profile-Login-Icon.svg";
import home from "../../../assets/images/Logo/online.svg";
import categories from "../../../assets/images/Logo/Membership.svg";

import NavBarCSS from './NavBar.css';
import Toggle from "../../Toggle/Toggle";
import { themeContext } from "../../../Context";


import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  PowerIcon,
  InboxArrowDownIcon,
  UserCircleIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";



const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [language, setLanguage] = useState(true);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  console.log(user);
  const banglaHandler = () => {
    setLanguage(false);
};
const englishHandler = () => {
    setLanguage(true);
};
  const allMenu = [
    {
        id: 1,
        to: "/home",
        icon: home,
        tooltip: "Home"
       
    },
    { id: 2, to: "/categories", icon:categories, tooltip: "Categories" },
    { id: 7, to: "/kazi", icon: kazi, tooltip: "Kazi" },
    { id: 5, to: '/shop', icon: shop, tooltip: "Shop" },
    { id: 6, to: "/lawyer", icon: kazi, tooltip: "Lawyer" },
    { id: 3, to: "/blog", icon: blog, tooltip: "Blog" },

    { id: 8, to: "/agent", icon: kazi, tooltip: "Agent" },
    { id: 8, to: "/social", icon: kazi, tooltip: "Social Media" },
    { id: 9, to: "/dashboard", icon: kazi, tooltip: "Dashboard" },
];
 


  return (
    <>
    <header style={{ background: darkMode ? "black" : "", color: darkMode ? "white" : "black" }}
        className={`${"bg-white"}  sticky hidden lg:block top-0 lg:h-[100px] z-50 shadow-md body-font ${
            NavBarCSS.navbar
        }`}
    >
        <div className=" lg:max-w-[1000px]  xl:max-w-[1200px] mx-auto flex flex-wrap  flex-col md:flex-row items-center">
            <Link to="/" className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
                <img src='https://i.ibb.co/k39vrmS/360-F-67501304-O7r-Jqt-Brb-N3-NTA1-RO5g34c5-Ki-Er-LMl-Da-removebg-preview.png' className="w-24 mb-4" alt="Not Available" />
            </Link>
            <nav className="md:mr-auto md:ml-4 md:py-0 md:pl-8  pb-4 	flex flex-wrap items-center text-base justify-center">
                {allMenu.map(menu => (
                    <div key={menu.id}>
                        <NavLink to={menu.to} className={({ isActive }) => (isActive ? "" : `${NavBarCSS.hasTooltip}`)}>
                            <div style={{ marginLeft: "20px",fontWeight:"600" }} className="flex flex-col pb-8 items-center">
                                <img
                                    className="hover:rotate-[360deg] duration-[2000ms] w-[50px] h-[75px]"
                                    src={menu.icon}
                                    alt="Not Available"
                                />
                                <h1 className=" mt-[-20px]">{menu.tooltip}</h1>
                               
                            </div>
                        </NavLink>
                    </div>
                ))}
            </nav>
            <div>
               
                <ul className={"flex justify-end items-center gap-2 h-32 mt-[-20px] "}>
                  
                  
                   {!user && <ul>
                      <Link to="/login">
                      <li className={`relative cursor-pointer ${NavBarCSS.engDropdown}`}>
                            <div className="">
                                <img className="w-[55px]" src={login} alt="Not Available" />
                                <h1 className="font-semibold mt-[-8px] ml-[10px] ">Login</h1>
                                
                            </div>
                           
                        </li>
                      </Link>
                        
                    </ul>
                    }
               
                   {user && <ul>
                     <Menu>
                      
      <MenuHandler>
     
        <Avatar
          variant="circular"
          alt="candice wu"
          className="cursor-pointer rounded-full w-20"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          
        />

     </MenuHandler>
       
      <MenuList className="mt-6">
        <MenuItem className="flex items-center gap-2">
          <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            My Profile
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <Cog6ToothIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
           Account Setting
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <InboxArrowDownIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            Join Chat
          </Typography>
        </MenuItem>
        
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2 ">
          <PowerIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            <Link onClick={logOut}>
              Sign Out
            </Link>
          
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
                     <Menu>
                       
      <MenuHandler>
     
        <Avatar
        data-aos="fade-up"
          variant="circular"
          alt="candice wu"
          className="cursor-pointer w-6 mt-12 ml-[-38px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSagGtZYzIq39vilDMeajWylZ0Xtfw_Ak6JeA&usqp=CAU"
          
        />

     </MenuHandler>
       
      <MenuList className="mt-6">
        <MenuItem className="flex items-center gap-2">
          <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            My Profile
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <Cog6ToothIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
           Account Setting
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <InboxArrowDownIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            Join Chat
          </Typography>
        </MenuItem>
        
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2 ">
          <PowerIcon strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            <Link onClick={logOut}>
              Sign Out
            </Link>
          
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
                    </ul>
                    }
                   
                    
                </ul>
            </div>
        </div>
    </header>
   
</>
  );
};

export default NavBar;
