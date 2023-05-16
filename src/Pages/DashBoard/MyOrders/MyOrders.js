import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
const MyOrders = () => {
  const { user } = useContext(AuthContext);
  console.log(user)
  const url = ` https://matrimony-com-server-anikhaque.vercel.app/membership?email=${user?.email}`;
  const { data: membership = [] } = useQuery({
    queryKey: ["membership", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {});
      const data = await res.json();
      return data;
    },
  });
  console.log(membership);
  return (
    <div>
      <h1 className="font-bold text-2xl mt-12 mb-4 text-center">My Membership Bookings:-</h1>
      <div className="overflow-x-auto">
        <table className="table w-[70%] mx-auto">
          <thead>
            <tr>
              <th>S/L No</th>
              <th>Image</th>
              <th>Member Name</th>
              <th>Membership Category</th>
              <th>Membership Price</th>
              <th>Payment Status</th>
              <th>Membership Price</th>
              <th>Payment Status</th>
           
            </tr>
          </thead>
          <tbody>
            {membership?.map((bookedItem, i) => (
              <>
                <tr key={bookedItem._id}>
                  <th>{i + 1}</th>
                  <td>{user.photoURL}</td>
                  <td>{bookedItem.name}</td>
                  <td>{bookedItem.category}</td>
                  <td>{bookedItem.price}</td>
                  <td>{bookedItem.category}</td>
                  <td>{bookedItem.price}</td>
                  
                  {/* <td>
                    {bookedItem.resalePrice && !bookedItem.paid && (
                      <Link
                        to={`/dashboard/payment/${bookedItem._id}`}
                        className="btn btn-primary btn-sm"
                      >
                        Pay
                      </Link>
                    )}
                    {bookedItem.resalePrice && bookedItem.paid && (
                      <span className="text-primary font-bold">Paid</span>
                    )}
                  </td> */}
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
