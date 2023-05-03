import React from "react";
import { Link } from "react-router-dom";
import './Blog.css'
const Blog = () => {
  return (
  <div>
     <div class="blog-card">
         <input type="radio" name="select" id="tap-1" checked />
         <input type="radio" name="select" id="tap-2" />
         <input type="radio" name="select" id="tap-3" />
         <input type="checkbox" id="imgTap" />
         <div class="sliders">
            <label for="tap-1" class="tap tap-1"></label>
            <label for="tap-2" class="tap tap-2"></label>
            <label for="tap-3" class="tap tap-3"></label>
         </div>
         <div class="inner-part">
            <label for="imgTap" class="img">
            <img class="https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/service-v1-2.jpg" src="#" />
            </label>
            <div class="content content-1">
               <span>26 December 2017</span>
               <div class="title">
                  Lorem Ipsum Dolor
               </div>
               <div class="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo animi atque aliquid pariatur voluptatem numquam, quisquam. Neque est voluptates doloribus!
               </div>
               <button>Read more</button>
            </div>
         </div>
         <div class="inner-part">
            <label for="imgTap" class="img">
            <img class="https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/service-v1-2.jpg" src="#" />
            </label>
            <div class="content content-2">
               <span>26 December 2018</span>
               <div class="title">
                  Lorem Ipsum Dolor
               </div>
               <div class="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum eos ut consectetur numquam ullam fuga animi laudantium nobis rem molestias.
               </div>
               <button>Read more</button>
            </div>
         </div>
         <div class="inner-part">
            <label for="imgTap" class="img">
            <img class="https://fastwpdemo.com/newwp/ambons/wp-content/uploads/2022/02/service-v1-2.jpg" src="#" />
            </label>
            <div class="content content-3">
               <span>26 December 2019</span>
               <div class="title">
                  Lorem Ipsum Dolor
               </div>
               <div class="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod excepturi nemo commodi sint eum ipsam odit atque aliquam officia impedit.
               </div>
               <button>Read more</button>
            </div>
         </div>
      </div>
  </div>
  );
};

export default Blog;
