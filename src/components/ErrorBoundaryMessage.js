import React from "react";

function ErrorBoundaryMessagePage() {
  //This is removing the dark background that applies to other pages
  document.body.classList.remove("welcome-background");
  document.body.classList.remove("counter-background");
  document.body.classList.remove("ErrorPage-background");
  return (
    //The error message for the triggered error
    <div>
      <h2>Error Boundary Message Page</h2>
      <p>An error occurred.</p>
    </div>
  );
}

export default ErrorBoundaryMessagePage;
