//Importing the necessary links

import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Welcome.css";
import LogoImage from "../img/counters_app-app_icon_tw.png";
import FootOne from "../img/footer 2.png";
import FootTwo from "../img/footer-3.png";
import FootThree from "../img/footer 1.png";
import ImageDesign from "../img/b3t60ea8rf3bag64utlk2ipj8c.png";

function Welcome() {
  //Adding a dark background
  document.body.classList.add("welcome-background");

  return (
    //The main body of the welcome page
    <div className="Welcomebody">
      <div className="header">
        <div className="background_Design">
          <img className="background_Design_One" src={ImageDesign} alt=""></img>
        </div>
        <h2 className="WelcomeHead">Welcome to the count app</h2>
      </div>
      <div className="Logo">
        <img className="Logo_img" src={LogoImage} alt="Logo" />
      </div>
      {/* The buttons for the start app and test errors */}
      <div className="Buttons">
        <Link className="CountButton" to="/counter">
          Start App
        </Link>
        <Link className="ErrorButton" to="/ErrorPage">
          Test Error
        </Link>
      </div>
      {/* Images in the background at the footer level */}
      <div className="FootDesigns">
        <img src={FootOne} className="FootOne" alt=""></img>
        <img src={FootTwo} className="FootTwo" alt=""></img>
        <img src={FootThree} className="FootThree" alt=""></img>
      </div>
    </div>
  );
}

export default Welcome;
