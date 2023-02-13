import React from "react";
// import "../styles/App.css";
import "../App.css";

export default function Details() {
  return (
    <div id="details">
      <div id="social-media">Follows to  social media for more info about Redbus........   </div>
      <div id="heading">
        {/* <p>About redBus</p>
        <p>Info</p>
        <p></p> */}
         
         <div><a rel="nofollow" class="soc-links" target="_blank" href="https://www.facebook.com/redBusglobal"><img class="social-logo" src="https://st.redbus.in/Images/rdc/Group%2077.svg"/></a></div>
         <div><a rel="nofollow" class="soc-links" target="_blank" href="https://www.instagram.com/accounts/login/?next=/redbusglobal/"><img class="social-logo" src="https://st.redbus.in/Images/rdc/Group%2079.svg"/></a></div>
         <div><a rel="nofollow" class="soc-links" target="_blank" href="https://twitter.com/redBus_sg"><img class="social-logo" src="https://st.redbus.in/Images/rdc/Group%2078.svg"/></a></div>
          
      </div>
      <div id="footer-text">2021 ibibogroup All rights reserved</div>
      <div id="png">
       {/* <a href="https://www.redbus.com" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Redbus_logo.jpg/1200px-Redbus_logo.jpg" alt="" /></a> */}
      </div>
    </div>
  );
}