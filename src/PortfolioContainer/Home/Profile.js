import React from "react";
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaGooglePlusSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import Typical from "react-typical";
// import { BrowserRouter,Routes,Link } from "react-router-dom";
import "./Profile.css";
import { Button } from "react-bootstrap";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="col-icon">
              <a href="https://www.facebook.com/Chakpa">
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

          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello! I 'm <span className="highlighted-text">SonamChakpa</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer",
                    1000,
                    "MERN Stack Developer",
                    1000,
                    "React/React Native",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                <h3> You are never to old to learn.</h3>
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="button primary-btn"> Hire Me</button>
            <a href="resume.pdf" download="chakpa's resume.pdf">
              <button className=" button highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-pucture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
