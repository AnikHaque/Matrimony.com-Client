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
import { ItemDetails } from "../../Pages/Item/ItemDetails";
import LawyerDetails from "../../Pages/Lawyer/LawyerDetails";
import PaymentSuccess from "../../Pages/Item/PaymentSuccess";
import  KaziDetails  from "../../Pages/kazi/KaziDetails";
import SocilaMedia from "../../Social_Media/SocilaMedia";
import Profile from "../../Pages/profile/Profile";
import AddTopProfile from "../../Pages/DashBoard/AddTopProfile/AddTopProfile";
import PaymentDone from "../../Pages/TopProfile/PaymentDone";
import Categories from "../../Pages/Home/Categories/Categories";
import PaymentKazi from "../../Pages/kazi/PaymentKazi";
import Blogs from "../../Pages/Home/Blogs/Blogs";
import MyMembership from "../../Pages/Membership/MyMembership";
import MembershipPayment from "../../Pages/Membership/MembershipPayment";
import Demo from "../../Pages/Demo/Demo";
import Hero from "../../Pages/Hero/Hero";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/login", element: <LogIn></LogIn> },
      { path: "/signup", element: <SignUp></SignUp> },
      { path: "/blog", element: <Blogs></Blogs> },
      { path: "/social", element:<SocilaMedia></SocilaMedia>},
      { path: "/categories", element:<Categories></Categories>},
      { path: "/demo", element:<Demo></Demo>},
    
    
     
      { 
        path: "/kazi", 
        element:<Kazi></Kazi> ,
      
      
      },
      {
        path: "/payment/success",
        element: <PaymentSuccess />
      },
      {
        path: "/payment/complete",
        element: <PaymentDone></PaymentDone>
      },
      {
        path: "/payment/done",
        element: <PaymentKazi></PaymentKazi>
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
    
      {
        path: "/items/:id",
        element: (
          
          <ProfileDetails></ProfileDetails>
          
        ),
        loader: ({ params }) =>
        fetch(` http://localhost:5000/item/${params.id}`),
       
      },
    

      {
        path: "/kazi/:id",
        element: (
          
   <Hero></Hero>
          
        ),
        loader: ({ params }) =>
        fetch(` http://localhost:5000/item/${params.id}`),
       
      },
      {
        path: "/lawyers/:id",
        element: (
          
         <LawyerDetails></LawyerDetails>
          
        ),
       
      },
      {
        path: "/topprofile/:id",
        element: (
          
         <Profile></Profile>
          
        ),
       
      },
    
    ],
  },
  {
    path: "/dashboard",
    element: (
     
        <DashBoardLayout></DashBoardLayout>
      
    ),
    children: [
      { path: "/dashboard", element: <DashBoard></DashBoard> },
      {
        path: "/dashboard/myorders",
        element: (
        <SellerRoute>
           <MyOrders></MyOrders>
        </SellerRoute>
           
     
        ),
      },
      {
        path: "/dashboard/mymembership",
        element: (
          <SellerRoute>
           <MyMembership></MyMembership>
          </SellerRoute>
        ),
      },
        {
        path: "/dashboard/membershipPayment/:id",
        element: (
          
         <MembershipPayment></MembershipPayment>
          
        ),
        loader: ({ params }) =>
        fetch(` http://localhost:5000/membership/${params.id}`),
       
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
        path: "/dashboard/addtopprofile",
        element: (
          <SellerRoute>
           <AddTopProfile></AddTopProfile>
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
          
            <Payment></Payment>
       
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },
    ],
  },
]);
