import React, { useContext } from "react";

import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className=" border text-gray-200 bg-gradient-to-r from-[#f22876] to-[#942dd9] ... lg:p-20 m-10 w-3/4 mx-auto rounded-3xl border-none ml-56 mt-8">
      <div>
        <div className="card">

              <Link to='/'>
              <button className="btn btn-primary text-white font-bold rounded-md ">Edit Profile</button></Link>

          <div className="flex justify-between lg:mb-[-65px] lg:mt-[55px]">
            <div>
             
            </div>
            <div>
            
            </div>
          </div>
          
          <div className="grid grid-cols-1 p-10 md:grid-cols-4 bg-white mt-12 rounded-md">
            <div className="col-span-1 flex justify-center">
              {user ? (
                <img className=" w-40 h-40 m-5 rounded-xl" src={user?.photoURL} alt="Album" />
              ) : (
                <img
                  className=" w-40 h-40 m-5 rounded-full"
                  src="https://png.pngitem.com/pimgs/s/44-446384_north-carolina-tar-heels-duke-blue-devils.png"
                  alt="Album"
                />
              )}
            </div>

            <div className=" mt-10 mx-5 col-span-3">
              <div className="flex justify-between">
                <div>

              


                    <p className="text-start font-bold text-small mb-2 text-gray-700">
                      ID : <span className="  my-10"> WBC-{user?._id?.slice(16, -1)}</span>
                      {/* Slice from 16 to last character */}
                    </p>
                  

                  
                  <div>
                  
                      <p className="text-start font-bold mb-2 text-gray-700">
                        Name : <span className="font-bold">{user?.displayName}</span>
                      </p>
                  </div>
                </div> 
              </div>
              <div>
                {user?.email ? (
                  <>
                    <p className="text-start  font-bold mb-2 text-gray-700">
                      Email : <span className="font-bold">{user?.email}</span>
                    </p>
                    <div className="grid grid-cols-12">
                      {user?.role && (
                        <p className="text-start col-span-10 font-serif font-semibold flex text-gray-700">Role : {user?.role}</p>
                      )}
                    </div>
                  </>
                ) : (
                  <p className="text-start mb-2 text-gray-700">
                    Email : <span className="font-bold">guest@gmail.com</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MyProfile;
