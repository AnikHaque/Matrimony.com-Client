import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";

import './Login.css';
const LogIn = () => {
  const { logIn } = useContext(AuthContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [loginError, setLoginError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const [token] = useToken(loginUserEmail);
  const from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }
  const handleLoginform = (data) => {
    console.log(data);
    console.log(data);
    setLoginError("");
    logIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        setLoginUserEmail(data.email);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  return (
    // <div className="h-[800px] flex justify-center items-center">
    //   <div className="w-96 p-7 bg-slate-500">
    //     <h2 className="text-xl text-center">Login</h2>
    //     <form onSubmit={handleSubmit(handleLoginform)}>
    //       <div className="form-control  w-full max-w-xs">
    //         <label className="label">
    //           {" "}
    //           <span className="label-text">Email</span>
    //         </label>
    //         <input
    //           type="text"
    //           {...register("email", {
    //             required: "Email Address is required",
    //           })}
    //           className="input input-bordered w-full  max-w-xs"
    //         />
    //         {errors.email && (
    //           <p className="text-red-600">{errors.email?.message}</p>
    //         )}
    //       </div>
    //       <div className="form-control w-full max-w-xs">
    //         <label className="label">
    //           {" "}
    //           <span className="label-text">Password</span>
    //         </label>
    //         <input
    //           type="password"
    //           {...register("password", {
    //             required: "Password is required",
    //             minLength: {
    //               value: 6,
    //               message: "Password must be 6 characters or longer",
    //             },
    //           })}
    //           className="input input-bordered w-full  max-w-xs"
    //         />

    //         <label className="label">
    //           {" "}
    //           <span className="label-text">Forget Password?</span>
    //         </label>
    //         {errors.password && (
    //           <p className="text-red-600">{errors.password?.message}</p>
    //         )}
    //       </div>
    //       <input
    //         className="btn btn-primary w-full"
    //         value="Login"
    //         type="submit"
    //       />
    //       <div>
    //         {loginError && <p className="text-red-600">{loginError}</p>}
    //       </div>
    //     </form>
    //     <p>
    //       Don't have an account?{" "}
    //       <Link className="text-blue-700 font-semibold" to="/signup">
    //         Register
    //       </Link>
    //     </p>
    //   </div>
    // </div>
  <div>
    <div className="grid grid-cols-1 lg:grid-cols-2">
<div>
  <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="></img>
</div>
<div>
<div class="main_div mt-14 ml-20 mb-4">
    <div class="title">Login Form</div>
    <div class="social_icons">
      <a href="#"><i class="fab fa-facebook-f"></i> <span>Facebook</span></a>
       <Link><i class="fa-brands fa-google"></i><span>Google</span></Link>
    </div>
    <form onSubmit={handleSubmit(handleLoginform)}>
      <div class="input_box">
        <input type="text"  placeholder="Email Address"
               {...register("email", {
                required: "Email Address is required",
               
               })} required />
        <div class="icon"><i class="fas fa-user"></i></div>
      </div>
      <div class="input_box">
        <input type="password" placeholder="Password" required  {...register("password", {
                required: "Password is required",
                 minLength: {
                  value: 6,
                   message: "Password must be 6 characters or longer",
                 },
               })} />
        <div class="icon"><i class="fas fa-lock"></i></div>
      </div>
      <div class="option_div">
        <div class="check_box">
          <input type="checkbox" />
          <span>Remember me</span>
        </div>
        <div class="forget_div">
          <a href="#">Forgot password?</a>
        </div>
      </div>
      <div class="input_box button">
        <input type="submit" value="Login" />
      </div>
      {loginError && <p className="text-red-600">{loginError}</p>}
      <div class="sign_up">
        Not a member? <Link to="/signup"><a>Signup now</a></Link>
      </div>
    </form>
  </div>
</div>
    </div>
  </div>
  
  );
};

export default LogIn;
