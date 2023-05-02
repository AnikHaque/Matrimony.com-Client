import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { GrDocumentPdf } from 'react-icons/gr';
import Pdf from "react-to-pdf";
const ViewModal = ({ bookProduct, setBookProduct }) => {
  const { user,email } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const { name, resalePrice, id, img } = bookProduct;
  console.log(bookProduct);
  const handleModal = (event) => {
    event.preventDefault();
    const form = event.target;
    
    const name = form.name.value;
  
  }
  const ref = React.createRef();
  return (
    <div className="">
    <input type="checkbox" id="view-modal" className="modal-toggle" />
    <div className="modal">
    
      <div className="modal-box relative">
        <label
          htmlFor="view-modal"
          className="btn btn-sm  btn-circle absolute right-2 top-2"
        >
          ✕
        </label>
        <form
          onSubmit={handleModal}
          className="grid grid-cols-1 gap-3 text-black p-5"
        >
          <h1 className="font-bold text-center text-xl">Bio Details</h1>
          <img src={img} className="w-[100px] h-[100px] rounded-full mx-auto"></img>
          <input
            type="text"
            name="name"
            value={name}
            disabled
            placeholder="Item Name"
            
            className="input w-full text-primary font-bold bg-blue-100"
          />
          
     {/* The button to open modal */}
<label htmlFor="my-modal-3" className="btn btn-primary">Personal Details</label>
<label htmlFor="my-modal-3" className="btn btn-secondary">Family Details</label>
<label htmlFor="my-modal-3" className="btn btn-success">Professional Details</label>
<label htmlFor="my-modal-3" className="btn btn-warning">Educational Details</label>
<label htmlFor="my-modal-3" className="btn btn-black">Other Details</label>





{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <Pdf targetRef={ref} filename="profile.pdf">
                {({ toPdf }) => <button onClick={toPdf} className="flex items-center mx-auto block p-3 text-center rounded-xl text-white bg-red-500 hover:bg-red-600">Download<GrDocumentPdf /></button>}
            </Pdf>
            <br></br>
          <div ref={ref}>
            <div className="grid drid-cols-1 lg:grid-cols-2">
<p>Name:</p>
<p>{user?.displayName}</p>
            </div>
            <div className="grid drid-cols-1 lg:grid-cols-2">
<p>Email:</p>
<p>{user?.email}</p>
            </div>
            <div className="grid drid-cols-1 lg:grid-cols-2">
<p>Email:</p>
<p>{user?.email}</p>
            </div>
            <div className="grid drid-cols-1 lg:grid-cols-2">
<p>Email:</p>
<p>{user?.email}</p>
            </div>
            <div className="grid drid-cols-1 lg:grid-cols-2">
<p>Email:</p>
<p>{user?.email}</p>
            </div>
            <div className="grid drid-cols-1 lg:grid-cols-2">
<p>Email:</p>
<p>{user?.email}</p>
            </div>
            <div className="grid drid-cols-1 lg:grid-cols-2">
<p>Email:</p>
<p>{user?.email}</p>
            </div>
            <div className="grid drid-cols-1 lg:grid-cols-2">
<p>Email:</p>
<p>{user?.email}</p>
            </div>
            <div className="grid drid-cols-1 lg:grid-cols-2">
<p>Email:</p>
<p>{user?.email}</p>
            </div>
            <div className="grid drid-cols-1 lg:grid-cols-2">
<p>Email:</p>
<p>{user?.email}</p>
            </div>
            <div className="grid drid-cols-1 lg:grid-cols-2">
<p>Email:</p>
<p>{user?.email}</p>
            </div>
            <div className="grid drid-cols-1 lg:grid-cols-2">
<p>Email:</p>
<p>{user?.email}</p>
            </div>
            <div className="grid drid-cols-1 lg:grid-cols-2">
<p>Email:</p>
<p>{user?.email}</p>
            </div>
            <div className="grid drid-cols-1 lg:grid-cols-2">
<p>Email:</p>
<p>{user?.email}</p>
            </div>
            <div className="grid drid-cols-1 lg:grid-cols-2">
<p>Email:</p>
<p>{user?.email}</p>
            </div>
            <div className="grid drid-cols-1 lg:grid-cols-2">
<p>Email:</p>
<p>{user?.email}</p>
            </div>
            <div className="grid drid-cols-1 lg:grid-cols-2">
<p>Email:</p>
<p>{user?.email}</p>
            </div>
            <div className="grid drid-cols-1 lg:grid-cols-2">
<p>Email:</p>
<p>{user?.email}</p>
            </div>
            <div className="grid drid-cols-1 lg:grid-cols-2">
<p>Email:</p>
<p>{user?.email}</p>
            </div>

          </div>
  </div>
</div>
        </form>
      </div>
    </div>
  </div>

  );
};

export default ViewModal;
