import React, { useState, useEffect, useRef } from 'react';
import './ProfileDetails.css';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import NavBar from '../SharedPages/NavBar/NavBar';

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
  const data = [
    {
      label: "Highlights",
      value: "highlights",
      desc: `'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur vero asperiores quis animi explicabo accusamus nemo cupiditate harum pariatur! Provident sit tenetur totam mollitia consectetur nesciunt, recusandae obcaecati itaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur vero asperiores quis animi explicabo accusamus nemo cupiditate harum pariatur! Provident sit tenetur totam mollitia consectetur nesciunt, recusandae obcaecati itaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur vero asperiores quis animi explicabo accusamus nemo cupiditate harum pariatur! Provident sit tenetur totam mollitia consectetur nesciunt, recusandae obcaecati itaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur vero asperiores quis animi explicabo accusamus nemo cupiditate harum pariatur! Provident sit tenetur totam mollitia consectetur nesciunt, recusandae obcaecati itaque!',`,
    },
    {
      label: "Material",
      value: "material",
      desc: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    },
    {
      label: "Pro Tips",
      value: "pro tips",
      desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
    },
   
  ];

  const { user } = useContext(AuthContext);
  const {id} = useParams();
  // const {data} = useGetItemByIdQuery(id);
  // console.log(data);
  const shop = useLoaderData();
   const {name, price, discount} = shop;
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
      <NavBar></NavBar>
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
<label className="btn btn-secondary rounded-full">
  <Link to={`/shop/${shop?._id}`}>ADD TO CART</Link>
</label>
    
          </div>

        </div>
      </section>
     <Tabs value="html">
  <TabsHeader>
    {data.map(({ label, value }) => (
      <Tab key={value} value={value}>
      <b>{label}</b>
      </Tab>
    ))}
  </TabsHeader>
  <TabsBody>
    {data.map(({ value, desc }) => (
      <TabPanel key={value} value={value}>
        {desc}
      </TabPanel>
    ))}
  </TabsBody>
</Tabs>
    </React.Fragment>
  )
}

export default ProfileDetails