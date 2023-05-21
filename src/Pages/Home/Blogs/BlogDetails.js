import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";

import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import NavBar from "../../SharedPages/NavBar/NavBar";

const BlogDetails = () => {

  const { user } = useContext(AuthContext);



  // console.log(detailsData.data);
  return (
    <div>
        <NavBar></NavBar>
      <div className=" w-full max-w-screen-xl px-5 py-24 mx-auto lg:px-32">
        <div className="flex flex-col w-full mx-auto mb-2 prose text-left prose-md">
          <div className="mb-5 border-b border-gray-200">
            <div className="flex justify-between items-baseline -mt-2">
              <div className="flex ">
                <div className="avatar">
                  <div className="w-12 mr-5 rounded-full ring ring-[#1AA3D0] dark:ring-[#00A99D] ring-offset-base-100 ring-offset-2">
                    <img src='https://i.ibb.co/wJxs9fQ/event-1-jpg.webp' alt="" />
                  </div>
                </div>
                <div>
                  <p className="font-bold ">Anik Haque</p>
                  <p className="font-bold text-[#1AA3D0] ">Admin</p>
                </div>
              </div>
              <h5 className="flex font-bold text-[#1AA3D0] dark:text-[#00A99D]">
                <span className="mx-1">12:28 pm</span>
                <span className="mx-1">21st May 2023</span>
              </h5>
            </div>
          </div>
          <h1 id="title" className="text-4xl  font-bold ">
            It may be our eternal hope, that with whom
          </h1>

          <p className="mt-5 text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
</p>
          <Link to={"/blog"}>
            <button className="px-12  mt-10 py-3 border-black bg-[#1AA3D0] dark:bg-[#00A99D] rounded-full text-white">
              Go back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;