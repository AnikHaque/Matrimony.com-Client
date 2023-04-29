import { createBrowserRouter } from "react-router-dom";
import SellerRoute from "../../hooks/SellerRoute/SellerRoute";
import DashBoardLayout from "../../layout/DashBoardLayout";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/DashBoard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/DashBoard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/DashBoard/AllSellers/AllSellers";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import MyOrders from "../../Pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../../Pages/DashBoard/MyProducts/MyProducts";
import Payment from "../../Pages/DashBoard/Payment/Payment";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import Products from "../../Pages/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddKazi from "../../Pages/DashBoard/AddKazi/AddKazi";
import Kazi from "../../Pages/kazi/Kazi";
import AddAgent from "../../Pages/DashBoard/AddAgent/AddAgent";
import Agent from "../../Pages/Agent/Agent";
import AddLawyer from "../../Pages/DashBoard/AddLawyer/AddLawyer";
import Lawyer from "../../Pages/Lawyer/Lawyer";
import AddItem from "../../Pages/DashBoard/AddItem/AddItem";
import Item from "../../Pages/Item/Item";
import ProfileDetails from "../../Pages/Products/ProfileDetails";
import Test from "../../layout/Test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <LogIn></LogIn> },
      { path: "/signup", element: <SignUp></SignUp> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/profile", element: <ProfileDetails></ProfileDetails> },
      { 
        path: "/kazi", 
        element:<Kazi></Kazi> ,
      
      
      },
      { 
        path: "/agent", 
        element:<Agent></Agent> ,
      
      
      },
      { 
        path: "/lawyer", 
        element:<Lawyer></Lawyer> ,
      },
     
      { 
        path: "/shop", 
        element:<Item></Item> ,
      },
     
  
      
      {
        path: "/products/:id",
        element: (
          
            <Products></Products>
          
        ),
        loader: ({ params }) =>
          fetch(` http://localhost:5000/products/${params.id}`),
      },
    
      

    
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    children: [
      { path: "/dashboard", element: <DashBoard></DashBoard> },
      {
        path: "/dashboard/myorders",
        element: (
          <BuyerRoute>
            <MyOrders></MyOrders>
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <SellerRoute>
           <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/test",
        element: (
          <SellerRoute>
           <Test></Test>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/addagent",
        element: (
          <SellerRoute>
          <AddAgent></AddAgent>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/addlawyer",
        element: (
          <SellerRoute>
          <AddLawyer></AddLawyer>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/addkazi",
        element: (
          <SellerRoute>
            <AddKazi></AddKazi>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/additem",
        element: (
          <SellerRoute>
            <AddItem></AddItem>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myproduct",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/allsellers",
        element: (
          <SellerRoute>
            <AllSellers></AllSellers>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/allbuyers",
        element: (
          <SellerRoute>
            <AllBuyers></AllBuyers>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <BuyerRoute>
            <Payment></Payment>
          </BuyerRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },
    ],
  },
]);
