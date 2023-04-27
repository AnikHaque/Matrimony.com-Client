import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import "../../../assets/css/footer.css";

import flower from "../../../assets/images/footer/flower01.png";
import icon from "../../../assets/images/footer/icon.png";
import rightShape from "../../../assets/images/footer/right-shape.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    
     
      <div className="newslater-section z-50">
        <div className="footer-container z-50">
          <div className="flex mb-[50px] justify-center">
            <div className="w-[800px]">
              <div className="newslater-container">
                <div className="newslater-wrapper">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-links">
          <div>
            <div>
              <hr className="hr" />
            </div>
          </div>
          <div className="grid  lg:grid-cols-3 md:grid-cols-2">
            <div className=" relative flex justify-center ">
              <div className="link-wrapper one">
                <h4 className="text-[24px] mb-[9px] uppercase font-normal text-[#fff]">
                  Our Information
                </h4>
                <ul className="f-solial-links">
                  <li className="py-[5px]">
                    <Link className="footer-link" to="/about">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      About Us
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/contact">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      Contact Us
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      Customer Reviews
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/our-teams">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      Our Teams
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      Business License
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" relative flex justify-center ">
              <div className="link-wrapper three">
                <h4 className="text-[24px] mb-[9px] uppercase font-normal text-[#fff]">
                  help center
                </h4>
                <ul className="f-solial-links">
                  <li className="py-[5px]">
                    <Link to="/">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      Help centre
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      FAQ
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>
                      Quick Start Guide
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>
                      Tutorials
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>
                      Associate Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" relative flex justify-center ">
              <div className="link-wrapper four">
                <h4 className="text-[24px] mb-[9px] uppercase font-normal text-[#fff]">
                  legal
                </h4>
                <ul className="f-solial-links">
                  <li className="py-[5px]">
                    <Link to="/privacy-policy">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      Privacy policy
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      End User Agreements
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      Refund Policy
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      Cookie policy
                    </Link>
                  </li>
                  <li className="py-[5px]">
                    <Link to="/">
                      <i className="fas text-[16px] mr-[5px] fa-angle-double-right"></i>{" "}
                      Report abuse
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrapper ">
          <div>
            <div>
              <hr className="hr2" />
            </div>
          </div>
          <div className="flex md:justify-between justify-center md:flex-row flex-col  items-center">
            <div>
              <div className="copyr-text">
                <span className="text-[#fff]">
                  Copyright © 2023.All Rights Reserved By
                </span>
                <a
                  className="ml-1 text-[#ffca28]"
                  href="/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  marriage.com
                </a>
              </div>
             
            </div>
            <div>
              <ul className="footer-social-links flex  ">
                <li>
                  <a
                    href="https://www.facebook.com/shongsharibd"
                    target="blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="http://instagram.com/shongshari_" target="blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="http://localhost:3000/" target="blank">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
