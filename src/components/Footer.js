import React from "react";
import "../styles/Footer.css";
// import { GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';
import imglogo from "../asserts/Landscape without bg.png";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
export default function Footer() {
  // const {} = useLoadScript({
  //   googleMapsApiKey: ""
  // })

  return (
    <div className="footer">
      <div className="foot">
        <div className="comp1">
          <div className="map">maps</div>
        </div>
        <div className="comp2">
          <div className="contact">
           <h4>
            Contact us
            </h4> 
            <p>
              sy no 294 ,airport road mamidpally, balapur mandal rangareddy dist
            landmark : mamidpally, to, Jalpally Rd, Hyderabad, Telangana 500005
              </p>
          </div>
          <div className="call">
            <br />
            <h4>

            Call
            </h4>
            <p>
            090007 79444

            </p>
            </div>
        </div>
        <div className="comp3">
          <div className="navs">
            <NavLink to="/" className="nvlns">
              Home
            </NavLink>
            <NavLink to="venues" className="nvlns">
              About
            </NavLink>
            <NavLink to="service" className="nvlns">
              Services and Facilities
            </NavLink>
            <NavLink to="gallery" className="nvlns">
              Gallery
            </NavLink>
            <NavLink to="contact" className="nvlns">
              Contact us
            </NavLink>
          </div>
        </div>
        <div className="comp4">
          <div>
            <button className="icons">
              <FaFacebook size={25} />
            </button>
            <button className="icons">
              <FaInstagram size={25} />
            </button>
            <button className="icons">
              <FaTwitter size={25}/>
            </button>
          </div>
          <img src={imglogo} alt="" className="imglo" />
        </div>
      </div>
      <div className="line" />
      <div className="copyright">
        <p>Copyright © PADMAJA PALM GROVES. All rights reserved.</p>
      </div>
    </div>
  );
}
