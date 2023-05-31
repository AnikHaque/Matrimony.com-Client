import React, { useContext } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { useGetItemByIdQuery } from '../../features/Item/itemApi';
import NavBar from '../SharedPages/NavBar/NavBar';
import { usePostBookedMutation } from '../../features/bookeditems/bookApi';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';

export const ItemDetails = () => {
  const { user } = useContext(AuthContext);
    const {id} = useParams();
   const shop = useLoaderData();
   const {photo,name, price, discount} = shop;
   const { handleSubmit, register, control } = useForm();

  const [ bookitem, {isLoading, isError} ] = usePostBookedMutation();

  const handlePlaceOrder = (event,data) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const customer = user.displayName;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const address = form.address.value;
    const price = form.price.value;
    const currency = form.currency.value;

    const order = {
      service:shop._id,
      name,
      price,
      customer,
      email,
      phone,
      address,
      currency
    };

    fetch("http://localhost:5000/bookshop", {
      method: "POST",
      headers: {
        "content-type": "application/json",
       
      },
      body: JSON.stringify(order)
    })
      .then((res) => res.json())
      .then((data) => {
    window.location.replace(data.url);
      })
      .catch((er) => console.error(er));
  };

  
  return (
    <div>
      <NavBar></NavBar>
   <section>
  <h1 class="sr-only">Checkout</h1>

  <div class="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
    <div class="bg-gray-50 py-12 md:py-24">
      <div class="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
        <div class="flex items-center gap-4">
          <span class="h-10 w-10 rounded-full bg-blue-700"></span>

          <h2 class="font-medium text-gray-900">Checkout Details : -</h2>
        </div>

        <div>
          <p class="text-2xl font-medium tracking-tight text-gray-900">
            ${price}
          </p>

          <p class="mt-1 text-sm text-gray-600">For the purchase of</p>
        </div>

        <div>
          <div class="flow-root">
            <ul class="-my-4 divide-y divide-gray-100">
              <li class="flex items-center gap-4 py-4">
                <img
                  src={photo}
                  alt=""
                  class="h-32 w-32 rounded object-cover"
                />

                <div>
                  <h3 class="text-lg font-bold text-gray-900">{name}</h3>

                  <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt class="inline">Size:</dt>
                      <dd class="inline">XXS</dd>
                    </div>

                    <div>
                      <dt class="inline">Color:</dt>
                      <dd class="inline">White</dd>
                    </div>
                  </dl>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white py-12 md:py-24">
      <div class="mx-auto max-w-lg px-4 lg:px-8">
         <form onSubmit={handlePlaceOrder} className="">
       
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-ghost w-full  input-bordered"
              defaultValue={name}
            />
            <input
              name="cusname"
              type="text"
              placeholder="Customer Name"
              className="input input-ghost w-full  input-bordered"
              defaultValue={user?.displayName}
            />
          
            <input
              name="phone"
              type="text"
              placeholder="Your Phone"
              className="input input-ghost w-full  input-bordered"
              required
            />
            <input
              name="email"
              type="text"
              placeholder="Your email"
              defaultValue={user?.email}
              className="input input-ghost w-full  input-bordered"
              readOnly
            />
          <select
            defaultValue="BDT"
            name="currency"
            className="select select-bordered max-w-xs"
          >
            <option value="BDT">BDT</option>
            <option value="USD">USD</option>
          </select>

          <input
            type="text"
            name="price"
            placeholder="Price"
            defaultValue={price}
            className="input input-ghost w-full  input-bordered"
          />
          </div>


          <textarea
            name="address"
            className="textarea textarea-bordered h-24 w-full my-5"
            placeholder="Your Address"
            required
          ></textarea>

          <input className="btn btn-secondary w-full" type="submit" value="Purchase" />
        </div>
      </form>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

