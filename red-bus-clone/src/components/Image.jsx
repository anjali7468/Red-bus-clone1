import React from "react";
import Details from "./Details";
// import "../styles/App.css";
import "../App.css";

export const Image = () => {
  return (
    <>
    <div className="both-image">
      <div id="image">
        <img src="https://seeklogo.com/images/R/redbus-logo-13648C0E43-seeklogo.com.png" alt="" />
      </div>
      {/* <div><img src="https://s3.eu-central-1.amazonaws.com/static.obilet.com/images/web/bus-loading-color.gif" alt="" /></div> */}
    </div>
      <Details />
    </>
  );
};