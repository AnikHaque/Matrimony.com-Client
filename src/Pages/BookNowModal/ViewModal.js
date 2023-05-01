import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { GrDocumentPdf } from 'react-icons/gr';
import Pdf from "react-to-pdf";
const ViewModal = ({ bookProduct, setBookProduct }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const { name, resalePrice, id, img } = bookProduct;
  console.log(bookProduct);
  const handleModal = (event) => {
    event.preventDefault();
    const form = event.target;
    const Username = form.Username.value;
    const email = form.email.value;
    const name = form.name.value;
    const resalePrice = form.resalePrice.value;
    const Phone = form.Phone.value;
    const meetingLocation = form.MeetingLocation.value;
    const modalInfo = {
      id: id,

      userName: Username,
      email: email,
      name: name,
      resalePrice: resalePrice,
      Phone: Phone,
      meetingLocation: meetingLocation,
      img: img,
    };

    console.log(modalInfo);
    fetch(" http://localhost:5000/bookeditems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(modalInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Successfully Booked");
          navigate("/dashboard/myorders");
        }
        console.log(data);
      });

    setBookProduct(null);
  };

  const ref = React.createRef();
  return (
    <div className="">
      <input type="checkbox" id="view-modal" className="modal-toggle" />
      <div className="modal w-full bg-white">
        <div className="">
          <label
            htmlFor="view-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex justify-center items-center">
          <img src={img} className=" h-40 mt-[-150px] w-40 rounded-full"></img>
          </div>

          <h3 className="text-lg text-center">{name}</h3>
          <p className="font-bold text-md text-center">Short Description :</p>
          <p className="text-center ml-20 mr-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
</p>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
<div className="mt-8">
<label htmlFor="my-modal-5" className="bg-primary text-white w-full pl-32 pr-32 text-xl pt-4 pb-4 rounded-md m-1 font-bold border-black">Personal Details</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box h-full rounded-md">
  <Pdf targetRef={ref} filename="Course-details.pdf">
                {({ toPdf }) => <button onClick={toPdf} className="flex items-center mx-auto block p-3 text-center rounded-xl text-white bg-red-500 hover:bg-red-600">Download<GrDocumentPdf /></button>}
            </Pdf>
  <label
            htmlFor="my-modal-5"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
    <div className="grid grid-cols-2 lg:grid-cols-2 mt-10" ref={ref}>
      <b className="mb-2">Name:</b>
      <p>{user.displayName}</p>
      <b className="mb-2">Email:</b>
      <p>{user.email}</p>
      <b className="mb-2">Age:</b>
      <p>26</p>
      <b className="mb-2">Nationality:</b>
      <p>Bangladeshi</p>
      <b className="mb-2">Name:</b>
      <p>{user.displayName}</p>
      <b className="mb-2">Email:</b>
      <p>{user.email}</p>
      <b className="mb-2">Age:</b>
      <p>26</p>
      <b className="mb-2">Nationality:</b>
      <p>Bangladeshi</p>
      <b className="mb-2">Color:</b>
      <p>White</p>
      <b className="mb-2">Date of Birth:</b>
      <p>{user.email}</p>
      <b className="mb-2">Age:</b>
      <p>26</p>
      <b className="mb-2">Nationality:</b>
      <p>Bangladeshi</p>
      <b className="mb-2">Name:</b>
      <p>{user.displayName}</p>
      <b className="mb-2">Email:</b>
      <p>{user.email}</p>
      <b className="mb-2">Age:</b>
      <p>26</p>
      <b className="mb-2">Nationality:</b>
      <p>Bangladeshi</p>
      
    </div>
   
  </div>
</div>
</div>

<div className=" mt-8">
<label htmlFor="my-modal-5" className="bg-primary text-white w-full pl-32 pr-32 text-xl pt-4 pb-4 rounded-md m-1 font-bold border-black">Family Details</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box h-full rounded-md">
  <label
            htmlFor="my-modal-5"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
    <div className="grid grid-cols-2 lg:grid-cols-2 mt-10">
      <b className="mb-2">Name:</b>
      <p>{user.displayName}</p>
      <b className="mb-2">Email:</b>
      <p>{user.email}</p>
      <b className="mb-2">Age:</b>
      <p>26</p>
      <b className="mb-2">Nationality:</b>
      <p>Bangladeshi</p>
      <b className="mb-2">Name:</b>
      <p>{user.displayName}</p>
      <b className="mb-2">Email:</b>
      <p>{user.email}</p>
      <b className="mb-2">Age:</b>
      <p>26</p>
      <b className="mb-2">Nationality:</b>
      <p>Bangladeshi</p>
      <b className="mb-2">Color:</b>
      <p>White</p>
      <b className="mb-2">Date of Birth:</b>
      <p>{user.email}</p>
      <b className="mb-2">Age:</b>
      <p>26</p>
      <b className="mb-2">Nationality:</b>
      <p>Bangladeshi</p>
      <b className="mb-2">Name:</b>
      <p>{user.displayName}</p>
      <b className="mb-2">Email:</b>
      <p>{user.email}</p>
      <b className="mb-2">Age:</b>
      <p>26</p>
      <b className="mb-2">Nationality:</b>
      <p>Bangladeshi</p>
      
    </div>
   
  </div>
</div>
</div>
<div className="mt-8">
<label htmlFor="my-modal-5" className="bg-primary text-white w-full pl-28 pr-28 text-xl pt-4 pb-4 rounded-md font-bold border-black">Professional Details</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box h-full rounded-md">
  <label
            htmlFor="my-modal-5"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
    <div className="grid grid-cols-2 lg:grid-cols-2 mt-10">
      <b className="mb-2">Name:</b>
      <p>{user.displayName}</p>
      <b className="mb-2">Email:</b>
      <p>{user.email}</p>
      <b className="mb-2">Age:</b>
      <p>26</p>
      <b className="mb-2">Nationality:</b>
      <p>Bangladeshi</p>
      <b className="mb-2">Name:</b>
      <p>{user.displayName}</p>
      <b className="mb-2">Email:</b>
      <p>{user.email}</p>
      <b className="mb-2">Age:</b>
      <p>26</p>
      <b className="mb-2">Nationality:</b>
      <p>Bangladeshi</p>
      <b className="mb-2">Color:</b>
      <p>White</p>
      <b className="mb-2">Date of Birth:</b>
      <p>{user.email}</p>
      <b className="mb-2">Age:</b>
      <p>26</p>
      <b className="mb-2">Nationality:</b>
      <p>Bangladeshi</p>
      <b className="mb-2">Name:</b>
      <p>{user.displayName}</p>
      <b className="mb-2">Email:</b>
      <p>{user.email}</p>
      <b className="mb-2">Age:</b>
      <p>26</p>
      <b className="mb-2">Nationality:</b>
      <p>Bangladeshi</p>
      
    </div>
   
  </div>
</div>
</div>
<div className="mt-8">
<label htmlFor="my-modal-5" className="bg-primary text-white w-full pl-28 pr-28 text-xl pt-4 pb-4 rounded-md m-1 font-bold border-black">Educational Details</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box h-full rounded-md">
  <label
            htmlFor="my-modal-5"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
    <div className="grid grid-cols-2 lg:grid-cols-2 mt-10">
      <b className="mb-2">Name:</b>
      <p>{user.displayName}</p>
      <b className="mb-2">Email:</b>
      <p>{user.email}</p>
      <b className="mb-2">Age:</b>
      <p>26</p>
      <b className="mb-2">Nationality:</b>
      <p>Bangladeshi</p>
      <b className="mb-2">Name:</b>
      <p>{user.displayName}</p>
      <b className="mb-2">Email:</b>
      <p>{user.email}</p>
      <b className="mb-2">Age:</b>
      <p>26</p>
      <b className="mb-2">Nationality:</b>
      <p>Bangladeshi</p>
      <b className="mb-2">Color:</b>
      <p>White</p>
      <b className="mb-2">Date of Birth:</b>
      <p>{user.email}</p>
      <b className="mb-2">Age:</b>
      <p>26</p>
      <b className="mb-2">Nationality:</b>
      <p>Bangladeshi</p>
      <b className="mb-2">Name:</b>
      <p>{user.displayName}</p>
      <b className="mb-2">Email:</b>
      <p>{user.email}</p>
      <b className="mb-2">Age:</b>
      <p>26</p>
      <b className="mb-2">Nationality:</b>
      <p>Bangladeshi</p>
      
    </div>
   
  </div>
</div>
</div>

<div className="my-8">
<label htmlFor="my-modal-5" className="bg-primary text-white w-full pl-32 pr-32 text-xl pt-4 pb-4 rounded-md m-1 font-bold border-black">Other Details</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box h-full rounded-md">
  <label
            htmlFor="my-modal-5"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
    <div className="grid grid-cols-2 lg:grid-cols-2 mt-10">
      <b className="mb-2">Name:</b>
      <p>{user.displayName}</p>
      <b className="mb-2">Email:</b>
      <p>{user.email}</p>
      <b className="mb-2">Age:</b>
      <p>26</p>
      <b className="mb-2">Nationality:</b>
      <p>Bangladeshi</p>
      <b className="mb-2">Name:</b>
      <p>{user.displayName}</p>
      <b className="mb-2">Email:</b>
      <p>{user.email}</p>
      <b className="mb-2">Age:</b>
      <p>26</p>
      <b className="mb-2">Nationality:</b>
      <p>Bangladeshi</p>
      <b className="mb-2">Color:</b>
      <p>White</p>
      <b className="mb-2">Date of Birth:</b>
      <p>{user.email}</p>
      <b className="mb-2">Age:</b>
      <p>26</p>
      <b className="mb-2">Nationality:</b>
      <p>Bangladeshi</p>
      <b className="mb-2">Name:</b>
      <p>{user.displayName}</p>
      <b className="mb-2">Email:</b>
      <p>{user.email}</p>
      <b className="mb-2">Age:</b>
      <p>26</p>
      <b className="mb-2">Nationality:</b>
      <p>Bangladeshi</p>
      
    </div> 
  </div>
</div>
</div>
</div>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
