import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import './MyMembership.css';
import { Link } from 'react-router-dom';

const MyMembership = () => {
     const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch(`https://matrimony-com-server-anikhaque.vercel.app/membership?email=${user.email}`)
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [])
    return (
        <div className='bg-mymembership'>
        <div className=' text-dark pt-5 pb-5 '>
            <h1 className="font-bold mt-2 text-center mb-5 text-white text-xl">My Membership  : {foods.length}</h1>
        <div className="service-container  pt-4 pb-4">
          <div className="container">
         
       <div className="overflow-x-auto flex justify-center items-center">
       <table className="table w-full ml-52">
         {/* head */}
         <thead>
           <tr className=''>
            
             <th className=''>Name</th>
             <th>Email</th>
             <th>Category</th>
             <th>Price</th>
             <th className=''>Status</th>
             <th>Payment</th>
           </tr>
         </thead>
         <tbody className=''>
        {foods.map((pd, index) => (
          
           <>
           <tr>
          
             <td>{pd.name}</td>
             <td>{pd.email}</td>
             <td>{pd.category}</td>
             <td>{pd.price}</td>
             <td>false</td>
             <td>
              <Link
                        to={`/dashboard/membershipPayment/${pd._id}`}
                        className=""
                      >
                       <button className=' bg-green-700 pt-2 pb-2 pl-4 pr-4 rounded-md text-white font-semibold'>Pay</button>
                      </Link>
               
             </td>
           </tr>  
           </>
           ))}
         </tbody>
       </table>
     </div>




</div>
</div>
</div>
</div>
    );
};

export default MyMembership;