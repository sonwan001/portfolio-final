import React from 'react';
import { FaFacebookSquare,FaYoutubeSquare, FaGooglePlusSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { BrowserRouter,Routes,Link } from "react-router-dom";


function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-paret">
        <div className="profile-details">
            <div className="colz">
                <Link to="#">
                   <FaFacebookSquare className="fa fa-facebook-square"></FaFacebookSquare>                    
                </Link>
                <Link to="#">
                    <FaGooglePlusSquare className="fa fa-google-plus-square"></FaGooglePlusSquare>
                </Link>
                <Link to="#">
                    <FaInstagramSquare className="fa fa-instagram"></FaInstagramSquare>
                </Link>
                <Link to="#">
                    <FaYoutubeSquare className="fa fa-youtube-square"></FaYoutubeSquare>
                </Link>
                <Link to="#">
                    <FaTwitterSquare className="fa fa-twitter"></FaTwitterSquare>
                </Link>
            </div>
        </div>
      </div> 
    </div>
  )
}

export default Profile;
