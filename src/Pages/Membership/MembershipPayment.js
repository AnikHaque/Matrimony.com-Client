import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import './MyMembership.css'
 const MembershipPayment = () => {
  const {id} = useParams();
  const bookingMembership = useLoaderData();
  console.log(bookingMembership);
  return (
    <div>
    <div class="containerMyMembership ml-20 mt-[-40px]">

    <form action="">

        <div class="row">

            <div class="col">

                <h3 class="title">billing address</h3>

                <div class="inputBox">
                    <span>full name :</span>
                    <input type="text" placeholder="john deo" defaultValue={bookingMembership?.name} />
                </div>
                <div class="inputBox">
                    <span>email :</span>
                    <input type="email" placeholder="example@example.com" defaultValue={bookingMembership?.email} />
                </div>
                <div class="inputBox">
                    <span>address :</span>
                    <input type="text" placeholder="room - street - locality" defaultValue={bookingMembership?.address} />
                </div>
                <div class="inputBox">
                    <span>Mobile Number :</span>
                    <input type="number" placeholder="mumbai" defaultValue={bookingMembership?.phone}/>
                </div>

                <div class="flex">
                    <div class="inputBox">
                        <span>state :</span>
                        <input type="text" placeholder="india" />
                    </div>
                    <div class="inputBox">
                        <span>zip code :</span>
                        <input type="text" placeholder="123 456" />
                    </div>
                </div>

            </div>

            <div class="col">

                <h3 class="title">payment</h3>

                <div class="inputBox">
                    <span>cards accepted :</span>
                    <img src="https://i.ibb.co/NmRwHb2/card-img.png" alt="" />
                </div>
                <div class="inputBox">
                    <span>Payable Amount :</span>
                    <input type="number" placeholder="mr. john deo" defaultValue={bookingMembership?.price} /> 
                </div>
                <div class="inputBox">
                    <span>credit card number :</span>
                    <input type="number" placeholder="1111-2222-3333-4444" />
                </div>
                <div class="inputBox">
                    <span>exp month :</span>
                    <input type="text" placeholder="january" />
                </div>

                <div class="flex">
                    <div class="inputBox">
                        <span>exp year :</span>
                        <input type="number" placeholder="2022" />
                    </div>
                    <div class="inputBox">
                        <span>CVV :</span>
                        <input type="text" placeholder="1234" />
                    </div>
                </div>

            </div>
    
        </div>

        <input type="submit" value="proceed to checkout" class="submit-btn" />

    </form>

</div>    
    </div>
  )
}
export default MembershipPayment