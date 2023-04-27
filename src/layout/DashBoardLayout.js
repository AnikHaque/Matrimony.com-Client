import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSeller from "../hooks/useSeller";
// import DashBoardDrawer from "../Pages/DashBoard/DashBoardDrawer/DashBoardDrawer";
import NavBar from "../Pages/SharedPages/NavBar/NavBar";
import './DashBoardLayout.css';

const DashBoardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  return (
    <div>
      <NavBar></NavBar>
      <div className="drawer drawer-mobile ">
        <input
          id="drawer-dashboard"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
       <ul className="menu w-72    text-base-content">
       <div class="container9">
       
       <div class="sidebar9">
       
          {isSeller &&  <ul className="pt-8">
               <li>
               <img className="w-full rounded-full" src={user.photoURL} alt="Not Available" />
               </li>
               <li>
                   <a href="#">
                       <i class="fas fa-th-large"></i>
                       <div>Dashboard</div>
                   </a>
               </li>
               <li>
               <Link to='/dashboard/addproduct'>
                       <i class="fas fa-th-large"></i>
                       <div>Add a Profile</div>
                   </Link>
               </li>
               <li>
               <Link to='/dashboard/addkazi'>
                       <i class="fas fa-th-large"></i>
                       <div>Add a Kazi</div>
                   </Link>
               </li>
               <li>
               <Link to='/dashboard/addagent'>
                       <i class="fas fa-th-large"></i>
                       <div>Add an Agent</div>
                   </Link>
               </li>
               <li>
               <Link to='/dashboard/addlawyer'>
                       <i class="fas fa-th-large"></i>
                       <div>Add a Lawyer</div>
                   </Link>
               </li>
               <li>
               <Link to='/dashboard/additem'>
                       <i class="fas fa-th-large"></i>
                       <div>Add a Product</div>
                   </Link>
               </li>
               <li>
               <Link to='/dashboard/allsellers'>
                       <i class="fas fa-th-large"></i>
                       <div>All Sellers</div>
                   </Link>
               </li>
               <li>
               <Link to='/dashboard/allbuyers'>
                       <i class="fas fa-th-large"></i>
                       <div>All Buyers</div>
                   </Link>
               </li>
           </ul>}
           {
            isBuyer &&  <ul className="pt-8">
            <li>
            <img className="w-full rounded-full" src={user.photoURL} alt="Not Available" />
            </li>
            <li>
                <a href="#">
                    <i class="fas fa-th-large"></i>
                    <div>Dashboard</div>
                </a>
            </li>
            <li>
            <Link to='/dashboard/myorders'>
                    <i class="fas fa-th-large"></i>
                    <div>My Orders</div>
                </Link>
           </li>
        </ul>
           }
       </div>
       {/* <div class="main9">
           <div class="cards9">
               <div class="card9">
                   <div class="card-content9">
                       <div class="number9">1217</div>
                       <div class="card-name9">Students</div>
                   </div>
                   <div class="icon-box9">
                       <i class="fas fa-user-graduate"></i>
                   </div>
               </div>
               <div class="card9">
                   <div class="card-content9">
                       <div class="number9">42</div>
                       <div class="card-name9">Teachers</div>
                   </div>
                   <div class="icon-box9">
                       <i class="fas fa-chalkboard-teacher"></i>
                   </div>
               </div>
               <div class="card9">
                   <div class="card-content9">
                       <div class="number9">68</div>
                       <div class="card-name9">Employees</div>
                   </div>
                   <div class="icon-box9">
                       <i class="fas fa-users"></i>
                   </div>
               </div>
               <div class="card9">
                   <div class="card-content9">
                       <div class="number9">$4500</div>
                       <div class="card-name9">Earnings</div>
                   </div>
                   <div class="icon-box9">
                       <i class="fas fa-dollar-sign"></i>
                   </div>
               </div>
           </div>
          
       </div> */}
   </div>
       </ul>
    </div>
     
      {/* <DashBoardDrawer></DashBoardDrawer> */}
      {/* <Outlet></Outlet> */}
    </div>
  );
};

export default DashBoardLayout;
