import React from "react";

function NotFound() {
  //Removing the dark backgrounds that applies to selected pages
  document.body.classList.remove("welcome-background");
  document.body.classList.remove("counter-background");
  document.body.classList.remove("ErrorPage-background");
  //The 404 content
  return <h2>404 - Not Found</h2>;
}

export default NotFound;
