import React from 'react';
import { FaFacebookSquare,FaYoutubeSquare, FaGooglePlusSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
// import { BrowserRouter,Routes,Link } from "react-router-dom";


function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-paret">
        <div className="profile-details">
            <div className="colz">
                <a href="#">
                   <FaFacebookSquare className="fa fa-facebook-square"></FaFacebookSquare>                    
                </a>
                <a href="#">
                    <FaGooglePlusSquare className="fa fa-google-plus-square"></FaGooglePlusSquare>
                </a>
                <a href="#">
                    <FaInstagramSquare className="fa fa-instagram"></FaInstagramSquare>
                </a>
                <a href="#">
                    <FaYoutubeSquare className="fa fa-youtube-square"></FaYoutubeSquare>
                </a>
                <a href="#">
                    <FaTwitterSquare className="fa fa-twitter"></FaTwitterSquare>
                </a>
            </div>
        </div>
      </div> 
    </div>
  )
}

export default Profile;
