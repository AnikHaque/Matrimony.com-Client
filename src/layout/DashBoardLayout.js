import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSeller from "../hooks/useSeller";
// import DashBoardDrawer from "../Pages/DashBoard/DashBoardDrawer/DashBoardDrawer";
import NavBar from "../Pages/SharedPages/NavBar/NavBar";

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
        <div className="drawer-side">
          <label htmlFor="drawer-dashboard" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {isBuyer && (
              <>
                <li>
                  <Link to="/dashboard/myorders">My Orders</Link>
                </li>
              </>
            )}

            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/addproduct">Add a profile</Link>
                </li>
                <li>
                  <Link to="/dashboard/addkazi">Add a Kazi</Link>
                </li>
                <li>
                  <Link to="/dashboard/addagent">Add an agent</Link>
                </li>
                <li>
                  <Link to="/dashboard/addlawyer">Add a Lawyer</Link>
                </li>
                <li>
                  <Link to="/dashboard/additem">Add an Item</Link>
                </li>
                <li>
                  <Link to="/dashboard/myproduct">My Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/allsellers">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/allbuyers">All Buyers</Link>
                </li>
              </>
            )}

            {/* {isAdmin && (
              <>
                {" "}
                <li>
                  <Link to="/dashboard/allsellers">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/allbuyers">All Buyers</Link>
                </li>
              </>
            )} */}
          </ul>
        </div>
      </div>
      {/* <DashBoardDrawer></DashBoardDrawer> */}
      {/* <Outlet></Outlet> */}
    </div>
  );
};

export default DashBoardLayout;
