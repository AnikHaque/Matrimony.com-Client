import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const BookTopProfile = ({ bookProfile, setBookProfile }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const { name, resalePrice, id, img } = bookProfile;
  console.log(bookProfile);
  const handleModal = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;

    const modalInfo = {
      id: id,
      name: name,
     
    };

    console.log(modalInfo);
    fetch(" http://localhost:5000/choice", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(modalInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Successfully added to choicelist");
         
        }
        console.log(data);
      });

    setBookProfile(null);
  };

  return (
    <div className="">
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form
            onSubmit={handleModal}
            className="grid grid-cols-1 gap-3 text-black p-5"
          >
            Do you want this profile  added as choiced profile?????
            <input
              type="text"
              name="name"
              value={name}
              disabled
              placeholder="Item Name"
              
              className="input w-full text-primary font-bold bg-blue-100"
            />
            
            <input className="btn btn-primary w-40 text-white font-bold" type="submit" value="Yes Of Course !!!" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookTopProfile;
