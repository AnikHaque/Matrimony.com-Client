import React, { useState, useEffect, useRef } from 'react';
import './ProfileDetails.css';
import { useBookItemMutation, useGetItemByIdQuery } from '../../features/Item/itemApi';
import { useLoaderData, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { usePostBookedMutation } from '../../features/bookeditems/bookApi';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const product = { // Product Data
  id: 1,
  name: 'new macbook laptop',
  slug: 'new-luxury-laptop',
  photo: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  price: 1999,
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur vero asperiores quis animi explicabo accusamus nemo cupiditate harum pariatur! Provident sit tenetur totam mollitia consectetur nesciunt, recusandae obcaecati itaque!',
  images: [
    
    'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
 'https://www.pinkvilla.com/files/shahrukhkhan_femaleactorsdebut_hd.jpg'
  
    
  ],
  colors: ["#2287fa", "#f71b1b", "green"],
  infos: [
    
      'title', 
      'content'
    
    
  ],
  discount: 20,
  sold: 52,
  category: 'laptop',
  brand: 'apple'
}

const ProfileDetails = () => {
  const { user } = useContext(AuthContext);
  const {id} = useParams();
  // const {data} = useGetItemByIdQuery(id);
  // console.log(data);
  const shop = useLoaderData();
   const {_id,name, price, discount} = shop;
 
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
      service:_id,
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

  

  // const onSubmit = (data) => {
  // bookitem(data);
  // console.log(data)
  // if(data){
  //   toast("Booked Product Successfully");
  // }
  // }

  const [slideIndex, setSlideIndex] = useState(1);

  const [width, setWidth] = useState(0);
  const [start, setStart] = useState(0);
  const [change, setChange] = useState(9);

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const [infoTitle, setInfoTitle] = useState(product.infos[0].title);

  const slideRef = useRef();


  useEffect(() => {
    if(!slideRef.current) return;
    const scrollWidth = slideRef.current.scrollWidth;
    const childrenElementCount = slideRef.current.childElementCount;
    const width = scrollWidth / childrenElementCount;
    setWidth(width)
  }, [])

  function plusSlides(n) {
    setSlideIndex(prev => prev + n);
    slideShow(slideIndex + n);
  }

  function slideShow(n){
    if(n > product.images.length) { setSlideIndex(1) };
    if(n < 1) { setSlideIndex(product.images.length) };
  }

  // Drag
  function dragStart(e){
    setStart(e.clientX)
  } 

  function dragOver(e){
    let touch = e.clientX;
    setChange(start - touch);
  }

  function dragEnd(e){
    // drag left chang > 0
    // drag right chang < 0
    if(change > 0){
      slideRef.current.scrollLeft += width;
    }else{
      slideRef.current.scrollLeft -= width;
    }
  }

  useEffect(() => {
    if(!slideRef.current || !width) return;
    let numOfThumb = Math.round(slideRef.current.offsetWidth / width);
    slideRef.current.scrollLeft = slideIndex > numOfThumb ? (slideIndex - 1) * width : 0;
  }, [width, slideIndex]);

  

  return (
    <React.Fragment>
      <section className="product-details">
        <div className="product-page-img">
          <div className="big-images">
            {
              shop?.images.map((image, index) => (
                <div key={index} className="mySlides" 
                style={{display: (index + 1) === slideIndex ? "block" : "none"}}>
                  <div className="numbertext">{index + 1} / {shop?.images.length}</div>
                  <img src={image} alt="" />
                </div>
              ))
            }

            <a href="#!" className='prev' onClick={() => plusSlides(-1)}>&#10094;</a>
            <a href="#!" className='next' onClick={() => plusSlides(1)}>&#10095;</a>
          </div>
          
          <div className="slider-img" draggable={true} ref={slideRef}
          onDragStart={dragStart} onDragOver={dragOver} onDragEnd={dragEnd}>
            {
              shop?.images.map((image, index) => (
                <div key={index} className={`slider-box ${index + 1 === slideIndex ? 'active' : ''}`}
                onClick={() => setSlideIndex(index + 1)}>
                  <img src={image} alt="" />
                </div>
              ))
            }
          </div>
        </div>

        <div className="product-page-details">
          <strong>{shop?.name}</strong>

          <p className="product-category">
            {shop?.brand} - {shop?.category}
          </p>

          <p className="product-price">
            ${Math.round(shop?.price - shop?.price * shop?.discount / 100)} <del>{shop?.price}$</del>
          </p>
          
          <p className="small-desc">{shop?.desc.slice(0,500)}</p>

          <div className="product-options">
            <span>Colors</span>
            {
              product.colors.map(color => (
                <div key={color}>
                  <button style={{background: color}} 
                  className={color === selectedColor ? 'active' : ''}
                  onClick={() => setSelectedColor(color)} />
                </div>
              ))
            }
          </div>
          
          <div className="product-page-offer">
            <i className="fa-solid fa-tag" /> {product.discount}% Discount
          </div>

          <div className="product-sold">
            <img />
            <strong>{product.sold} <span>Products Sold.</span></strong>
          </div>

          <div className="cart-btns">
           {/* The button to open modal */}
<label htmlFor="my-modal-3" className="btn btn-secondary rounded-full">Add to Cart</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <div>
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
            
          </div>

        </div>
      </section>
      <div className='ml-24 mt-20'>
      <div className="dropdown mb-20">
  <label tabIndex={0} className="bg-black text-white font bold text-xl pt-4 pb-4 mb-10 pl-32 pr-32 m-1">Highlights</label>
  <p tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[1000px] mt-12">
   <p>A wedding sari is a traditional South Asian wedding dress, especially popular in South Indian states. The sari often consists of a combination of red and green, with golden brocade.


Traditional Indian Bride in Sari
Wedding saris are predominantly red, a colour associated with married women, although colours and colour combinations vary by region, caste, and religion; non-Brahmin women in Tamil Nadu wear a red-and-white checked sari as traditional wedding attire.[1] The Padmasali wedding sari is a white sari, dyed with turmeric.[1]
</p>
  </p>
</div>
      <div className="dropdown">
  <label tabIndex={0} className="bg-secondary text-white font bold text-xl pt-4 pb-4 pl-32 pr-32 m-1">Materials</label>
  <p tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[500px] mt-12">
   <p>A wedding sari is a traditional South Asian wedding dress, especially popular in South Indian states. The sari often consists of a combination of red and green, with golden brocade.


Traditional Indian Bride in Sari
Wedding saris are predominantly red, a colour associated with married women, although colours and colour combinations vary by region, caste, and religion; non-Brahmin women in Tamil Nadu wear a red-and-white checked sari as traditional wedding attire.[1] The Padmasali wedding sari is a white sari, dyed with turmeric.[1]
</p>
  </p>
</div>
      <div className="dropdown">
  <label tabIndex={0} className="bg-primary text-white font bold text-xl pt-4 pb-4 pl-32 pr-32 m-1">Pro Tips</label>
  <p tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[400px] mt-12">
   <p>A wedding sari is a traditional South Asian wedding dress, especially popular in South Indian states. The sari often consists of a combination of red and green, with golden brocade.


Traditional Indian Bride in Sari
Wedding saris are predominantly red, a colour associated with married women, although colours and colour combinations vary by region, caste, and religion; non-Brahmin women in Tamil Nadu wear a red-and-white checked sari as traditional wedding attire.[1] The Padmasali wedding sari is a white sari, dyed with turmeric.[1]
</p>
  </p>
</div>
      </div>
    </React.Fragment>
  )
}

export default ProfileDetails