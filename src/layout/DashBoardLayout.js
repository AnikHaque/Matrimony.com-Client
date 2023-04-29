import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSeller from "../hooks/useSeller";
// import DashBoardDrawer from "../Pages/DashBoard/DashBoardDrawer/DashBoardDrawer";
import NavBar from "../Pages/SharedPages/NavBar/NavBar";
import "./DashBoardLayout.css";


const DashBoardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  return (
    <div>
      <div className="drawer drawer-mobile ">
        <input
          id="drawer-dashboard"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div class="container0">
        <div class="topbar0">
            <div class="logo0">
                <h2>Brand.</h2>
            </div>
            <div class="search0">
                <input type="text" name="search" placeholder="search here" />
                <label for="search"><i class="fas fa-search"></i></label>
            </div>
            <i class="fas fa-bell"></i>
            <div class="user0">
                <img src="img/user.png" alt="" className="dash-img" />
            </div>
        </div>
        <div class="sidebar0">
            <ul>
                <li>
                    <a href="#">
                        <i class="fas fa-th-large"></i>
                        <div>Dashboard</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-user-graduate"></i>
                        <div>Students</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-chalkboard-teacher"></i>
                        <div>Teachers</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-users"></i>
                        <div>Employees</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-chart-bar"></i>
                        <div>Analytics</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-hand-holding-usd"></i>
                        <div>Earnings</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-cog"></i>
                        <div>Settings</div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-question"></i>
                        <div>Help</div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="main0">
            <div class="cards0">
                <div class="card0">
                    <div class="card-content0">
                        <div class="number0">1217</div>
                        <div class="card-name0">Total User</div>
                    </div>
                    <div class="icon-box0">
                        <i class="fas fa-user-graduate"></i>
                    </div>
                </div>
                <div class="card0">
                    <div class="card-content0">
                        <div class="number0">42</div>
                        <div class="card-name0">Total Profile</div>
                    </div>
                    <div class="icon-box0">
                        <i class="fas fa-chalkboard-teacher"></i>
                    </div>
                </div>
                <div class="card0">
                    <div class="card-content0">
                        <div class="number0">68</div>
                        <div class="card-name0">Total Category</div>
                    </div>
                    <div class="icon-box0">
                        <i class="fas fa-users"></i>
                    </div>
                </div>
                <div class="card0">
                    <div class="card-content0">
                        <div class="number0">$4500</div>
                        <div class="card-name0">Total Payment</div>
                    </div>
                    <div class="icon-box0">
                        <i class="fas fa-dollar-sign"></i>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </div>
     
      {/* <DashBoardDrawer></DashBoardDrawer> */}
      {/* <Outlet></Outlet> */}
    </div>
  );
};

export default DashBoardLayout;
