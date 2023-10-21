//Importing the necessary plugins
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ErrorBoundary from "../hooks/ErrorBoundary";
import "../Styles/ErrorPage.css";
import ErrorImg from "../img/image-removebg-preview (5).png";

function ErrorPage() {
  //Setting the states to false
  const [errorOccurred, setErrorOccurred] = useState(false);

  const throwError = () => {
    // Simulate an error by throwing an exception
    setErrorOccurred(true);
    console.error("An error occurred.");
  };
  document.body.classList.add("ErrorPage-background");

  return (
    //main error page
    <div className="Error_Body">
      <h2 className="Error_Head">Error Boundary Test Page</h2>
      <img className="ErrorImg" src={ErrorImg} alt="Logo"></img>

      {/* Buttons for the tests */}
      <div className="Triggers">
        <button className="Test_button" onClick={throwError}>
          Trigger Test Error
        </button>
        <Link className="Link_404" to="/nonexistent">
          Trigger 404 Page
        </Link>
      </div>
      {/* Home and view error containers */}
      <div className="Home_link">
        <ErrorBoundary>
          {errorOccurred ? (
            <Link className="ViewError" to="/errorBoundaryMessage">
              View Error Message
            </Link>
          ) : null}
        </ErrorBoundary>
        <Link className="Back" to="/">
          Back to Home Page
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
