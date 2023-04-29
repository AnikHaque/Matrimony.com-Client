import React, { useContext, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";
import { getAuth, sendEmailVerification } from "firebase/auth";
import { toast } from "react-hot-toast";

const SignUp = () => {

  function onChange(value) {
  console.log("Captcha value:", value);
}
  const { createUser, googleSignIn, updateUser, user } =
    useContext(AuthContext);
    const auth = getAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signUpError, setSignUPError] = useState("");
  const navigate = useNavigate();
  const [registeredUserEmail, setRegisteredUserEmail] = useState("");
  const [token] = useToken(registeredUserEmail);
  if (token) {
    navigate("/login");
  }
  //   console.log(user?.displayName);

  const handleRegisterform = (data) => {
    console.log(data);
    console.log(data.userName);
    console.log(data.type);

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          displayName: data.userName,
        };
        console.log(userInfo);
        verifyEmail();

        // update user info
        updateUser(userInfo)
          .then(() => {
            saveRegisteredUser(data.userName, data.email, data.type);
          })
          .catch((error) => console.error(error));
      })
      .catch((err) => console.error(err));
  };

// Email Verification 
const verifyEmail = () => {
  sendEmailVerification(auth.currentUser)
  .then(() => {
   toast("Check Email for Verification")
  });
}

  //   function to save registered users data
  const saveRegisteredUser = (name, email, role) => {
    const registeredUser = { name, email, role };
    fetch(" http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(registeredUser),
    })
      .then((res) => res.json())
      .then((data) => {
        // registeredUserToken(email);
        setRegisteredUserEmail(email);
        console.log(data);
      });
  };

  //   jwt token for registered user
  //   const registeredUserToken = (email) => {
  //     fetch(` http://localhost:5000/JWT?email=${email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.accessToken) {
  //           localStorage.setItem("accessToken", data.accessToken);
  //         }
  //       });
  //   };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user.displayName, user.email);
        const role = "Buyer";
        saveRegisteredUser(user.displayName, user.email, role);
      })
      .catch((error) => console.error(error));
  };
  return (
    // <div className="h-[800px] flex justify-center items-center">
    //   <div className="w-96 p-7 bg-slate-500">
    //     <h2 className="text-xl text-center">Register</h2>
    //     <form onSubmit={handleSubmit(handleRegisterform)}>
    //       <div className="form-control  w-full max-w-xs">
    //         <label className="label">
    //           {" "}
    //           <span className="label-text">User Name</span>
    //         </label>
    //         <input
    //           type="text"
    //           {...register("userName", {})}
    //           className="input input-bordered w-full  max-w-xs"
    //         />
    //         {errors.email && (
    //           <p className="text-red-600">{errors.email?.message}</p>
    //         )}
    //       </div>
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
    //           <span className="label-text ">Account Type</span>
    //         </label>
    //         <select
    //           {...register("type", {})}
    //           className="select w-full bg-white max-w-xs"
    //         >
    //           <option>Select Your Account Type</option>
    //           <option>Seller</option>
    //           <option>Buyer</option>
    //           <option>Admin</option>
    //         </select>
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
    //         value="Register"
    //         type="submit"
    //       />
    //       <div>
    //         {signUpError && <p className="text-red-600">{signUpError}</p>}
    //       </div>
    //     </form>
    //     <p>
    //       Already have an account?{" "}
    //       <Link className="text-blue-700 font-semibold" to="/login">
    //         Log In
    //       </Link>
    //     </p>
    //     <div className="divider">OR</div>
    //     <button
    //       onClick={handleGoogleSignIn}
    //       className="btn btn-outline  text-white w-full"
    //     >
    //       CONTINUE WITH GOOGLE
    //     </button>
    //   </div>
    // </div>
    <div>
    <div className="grid grid-cols-1 lg:grid-cols-2">
<div>
  <img src="https://png.pngtree.com/png-vector/20220526/ourmid/pngtree-online-registration-or-sign-up-login-for-account-on-smartphone-app-png-image_4740863.png" className="w-full mt-4"></img>
</div>
<div>
<div class="main_div mt-4 ml-20 mb-4">
    <div class="title">Register Form</div>
    <div class="social_icons">
      <a href="#"><i class="fab fa-facebook-f"></i> <span>Facebook</span></a>
      <Link onClick={handleGoogleSignIn}><i class="fa-brands fa-google"></i><span>Google</span></Link>
    </div>
    <form onSubmit={handleSubmit(handleRegisterform)}>
           <div className="form-control  w-full max-w-xs">
            <input
              type="text"
              {...register("userName", {})}
             className="input input-bordered w-full  max-w-xs mb-2"
             placeholder="User Name"
             />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control  w-full max-w-xs">
            <input
               type="text"
              {...register("email", {
                required: "Email Address is required",
              })}
              placeholder="Email Address"
               className="input input-bordered w-full mb-2 max-w-xs"
             />
            {errors.email && (
               <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
           <div className="form-control w-full max-w-xs">
           
             <input
               type="password"
               {...register("password", {
                required: "Password is required",
                 minLength: {
                   value: 6,
                   message: "Password must be 6 characters or longer",
                 },
               })}
               placeholder="Password"
              className="input input-bordered w-full  max-w-xs"
             />
            
            <select
               {...register("type", {})}
               className="select w-full bg-white max-w-xs"
             >
               <option>Select Your Account Type</option>
            <option>Seller</option>
               <option>Buyer</option>
               <option>Admin</option>
             </select>
            
             {errors.password && (
               <p className="text-red-600">{errors.password?.message}</p>
             )}
           </div>

           <div>
           <ReCAPTCHA
    sitekey="6LcbIsklAAAAAKbYZrySlY59OCj3e3gjP4lj7YC9
"
    onChange={onChange}
  />,
           </div>
          
           <input
             className="btn btn-primary w-full"
             value="Register"
             type="submit"
           />
           <div class="option_div">
        <div class="check_box">
          <input type="checkbox" />
          <span>Remember me</span>
        </div>
        <div class="forget_div">
          <a href="#">Forgot password?</a>
        </div>
      </div>
           <div>
             {signUpError && <p className="text-red-600">{signUpError}</p>}
           </div>
           <div class="sign_up">
        Already an member? <Link to="/login"><a>Login now</a></Link>
      </div>
         </form>
  </div>
</div>
    </div>
  </div>
  );
};

export default SignUp;
