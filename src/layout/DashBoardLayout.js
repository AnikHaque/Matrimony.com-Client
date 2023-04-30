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
        <input type="checkbox" id="menu-toggle6" />
    <div class="sidebar6">
        <div class="side-header6">
            <h3>M<span>arriage.com</span></h3>
        </div>
        
        <div class="side-content6">
<div class="profile6">
                <div class="profile-img6 bg-img6"></div>
                <h4>Anik Haque</h4>
                <small>Software Engineer</small>
            </div>
            <div class="side-menu6">
                {
                    isSeller &&
                
                <ul>
                    <li>
                       <Link to="/dashboard/test" class="active6">
                            <span class="las la-home">
                            </span>
                            <small>Dashboard</small>
                        </Link>
                    </li>
                    <li>
                       <Link to='' class="active6 mt-[-40px]">
                            <span class="las la-user-alt">
                            <i class="fa-solid fa-user text-white text-xs"></i>
                            </span>
                            <small>Profile</small>
                        </Link>
                    </li>
                    <li>
                    <Link to='/dashboard/addproduct' class="active6 mt-[-40px]">
                            <span class="las la-user-alt">
                            <i class="fa-solid fa-user text-white text-xs"></i>
                            </span>
                            <small>Add Profile</small>
                        </Link>
                    </li>
                    <li>
                    <Link to='/' class="active6 mt-[-40px]">
                            <span class="las la-user-alt">
                            <i class="fa-solid fa-user text-white text-xs"></i>
                            </span>
                            <small>Add Kazi</small>
                        </Link>
                    </li>
                    <li>
                    <Link to='/' class="active6 mt-[-40px]">
                            <span class="las la-user-alt">
                            <i class="fa-solid fa-user text-white text-xs"></i>
                            </span>
                            <small>Add Lawyer</small>
                        </Link>
                    </li>
                    <li>
                    <Link to='/' class="active6 mt-[-40px]">
                            <span class="las la-user-alt">
                            <i class="fa-solid fa-user text-white text-xs"></i>
                            </span>
                            <small>Add Agent</small>
                        </Link>
                    </li>
                    <li>
                    <Link to='/' class="active6 mt-[-40px]">
                            <span class="las la-user-alt">
                            <i class="fa-solid fa-user text-white text-xs"></i>
                            </span>
                            <small>Add Product</small>
                        </Link>
                    </li>
                    <li>
                    <Link to='/' class="active6 mt-[-40px]">
                            <span class="las la-user-alt">
                            <i class="fa-solid fa-user text-white text-xs"></i>
                            </span>
                            <small>All Users</small>
                        </Link>
                    </li>
                    <li>
                    <Link to='/' class="active6 mt-[-40px]">
                            <span class="las la-user-alt">
                            <i class="fa-solid fa-user text-white text-xs"></i>
                            </span>
                            <small>All Kazi's</small>
                        </Link>
                    </li>
                    <li>
                    <Link to='/' class="active6 mt-[-40px]">
                            <span class="las la-user-alt">
                            <i class="fa-solid fa-user text-white text-xs"></i>
                            </span>
                            <small>All Lawyer's</small>
                        </Link>
                    </li>
                    <li>
                    <Link to='/' class="active6 mt-[-40px]">
                            <span class="las la-user-alt">
                            <i class="fa-solid fa-user text-white text-xs"></i>
                            </span>
                            <small>All Agent's</small>
                        </Link>
                    </li>
                    <li>
                    <Link to='/' class="active6 mt-[-40px]">
                            <span class="las la-user-alt">
                            <i class="fa-solid fa-user text-white text-xs"></i>
                            </span>
                            <small>All Profile's</small>
                        </Link>
                    </li>
                    <li>
                    <Link to='/' class="active6 mt-[-40px]">
                            <span class="las la-user-alt">
                            <i class="fa-solid fa-user text-white text-xs"></i>
                            </span>
                            <small>All Product's</small>
                        </Link>
                    </li>

                </ul>
}
            </div>
        </div>
    </div>
    
    {/* <div class="main-content6">
        
        <header>
            <div class="header-content6">
                <label for="menu-toggle6">
                    <span class="las la-bars"></span>
                </label>
                
                <div class="header-menu6">
                    <label for="">
                        <span class="las la-search"></span>
                    </label>
                    
                    <div class="notify-icon6">
                        <span class="las la-envelope"></span>
                        <span class="notify6">4</span>
                    </div>
                    
                    <div class="notify-icon6">
                        <span class="las la-bell"></span>
                        <span class="notify6">3</span>
                    </div>
                    
                    <div class="user6">
                        <div class="bg-img6"></div>
                        
                        <span class="las la-power-off"></span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </header>
        
        
        <main>
            
            <div class="page-header6">
                <h1>Dashboard</h1>
                <small>Home / Dashboard</small>
            </div>
            
            <div class="page-content6">
            
                <div class="analytics6">

                    <div class="card6">
                        <div class="card-head6">
                            <h2>107,200</h2>
                            <span class="las la-user-friends"></span>
                        </div>
                        <div class="card-progress6">
                            <small>User activity this month</small>
                            <div class="card-indicator6">
                                <div class="indicator one6"></div>
                            </div>
                        </div>
                    </div>

                    <div class="card6">
                        <div class="card-head6">
                            <h2>340,230</h2>
                            <span class="las la-eye"></span>
                        </div>
                        <div class="card-progress6">
                            <small>Page views</small>
                            <div class="card-indicator6">
                                <div class="indicator6 two"></div>
                            </div>
                        </div>
                    </div>

                    <div class="card6">
                        <div class="card-head6">
                            <h2>$653,200</h2>
                            <span class="las la-shopping-cart"></span>
                        </div>
                        <div class="card-progress6">
                            <small>Monthly revenue growth</small>
                            <div class="card-indicator6">
                                <div class="indicator6 three"></div>
                            </div>
                        </div>
                    </div>

                    <div class="card6">
                        <div class="card-head6">
                            <h2>47,500</h2>
                            <span class="las la-envelope"></span>
                        </div>
                        <div class="card-progress6">
                            <small>New E-mails received</small>
                            <div class="card-indicator6">
                                <div class="indicator6 four"></div>
                            </div>
                        </div>
                    </div>

                </div>


                <div class="records6 table-responsive6">

                    <div class="record-header6">
                        <div class="add6">
                            <span>Entries</span>
                            <select name="" id="">
                                <option value="">ID</option>
                            </select>
                            <button>Add record</button>
                        </div>

                        <div class="browse6">
                           <input type="search" placeholder="Search" class="record-search6" />
                            <select name="" id="">
                                <option value="">Status</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th><span class="las la-sort"></span> CLIENT</th>
                                    <th><span class="las la-sort"></span> TOTAL</th>
                                    <th><span class="las la-sort"></span> ISSUED DATE</th>
                                    <th><span class="las la-sort"></span> BALANCE</th>
                                    <th><span class="las la-sort"></span> ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client6">
                                           <div class="client-img6 bg-img6"></div>
                                            <div class="client-info6">
                                                <h4>Andrew Bruno</h4>
                                                <small>bruno@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $3171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        -$205
                                    </td>
                                    <td>
                                        <div class="actions6">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client6">
                                           <div class="client-img6 bg-img6"></div>
                                            <div class="client-info6">
                                                <h4>Exty Bruno</h4>
                                                <small>exty@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $3171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        -$205
                                    </td>
                                    <td>
                                        <div class="actions6">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client6">
                                           <div class="client-img6 bg-img6"></div>
                                            <div class="client-info6">
                                                <h4>Exty Bruno</h4>
                                                <small>exty@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $2171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        <span class="paid6">Paid</span>
                                    </td>
                                    <td>
                                        <div class="actions6">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client6">
                                           <div class="client-img6 bg-img6"></div>
                                            <div class="client-info6">
                                                <h4>Andrew Bruno</h4>
                                                <small>bruno@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $3171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        -$205
                                    </td>
                                    <td>
                                        <div class="actions6">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client6">
                                           <div class="client-img6 bg-img6"></div>
                                            <div class="client-info6">
                                                <h4>Exty Bruno</h4>
                                                <small>exty@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $3171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        <span class="paid6">Paid</span>
                                    </td>
                                    <td>
                                        <div class="actions6">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client6">
                                           <div class="client-img6 bg-img6"></div>
                                            <div class="client-info">
                                                <h4>Exty Bruno</h4>
                                                <small>exty@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $2171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        <span class="paid6">Paid</span>
                                    </td>
                                    <td>
                                        <div class="actions6">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client6">
                                           <div class="client-img6 bg-img6"></div>
                                            <div class="client-info6">
                                                <h4>Andrew Bruno</h4>
                                                <small>bruno@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $3171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        -$205
                                    </td>
                                    <td>
                                        <div class="action6">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client6">
                                           <div class="client-img6 bg-img6"></div>
                                            <div class="client-info6">
                                                <h4>Exty Bruno</h4>
                                                <small>exty@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $3171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        -$205
                                    </td>
                                    <td>
                                        <div class="actions6">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>#5033</td>
                                    <td>
                                        <div class="client6">
                                           <div class="client-img6 bg-img6"></div>
                                            <div class="client-info6">
                                                <h4>Exty Bruno</h4>
                                                <small>exty@crossover.org</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $2171
                                    </td>
                                    <td>
                                        19 April, 2022
                                    </td>
                                    <td>
                                        <span class="paid6">Paid</span>
                                    </td>
                                    <td>
                                        <div class="actions6">
                                            <span class="lab la-telegram-plane"></span>
                                            <span class="las la-eye"></span>
                                            <span class="las la-ellipsis-v"></span>
                                        </div>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>

                </div>
            
            </div>
            
        </main>
        
    </div> */}
    </div>
     
      {/* <DashBoardDrawer></DashBoardDrawer> */}
      {/* <Outlet></Outlet> */}
    </div>
  );
};

export default DashBoardLayout;
