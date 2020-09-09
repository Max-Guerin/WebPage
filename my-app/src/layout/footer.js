import React from "react";

import "./footer.css";

function Footer() {
    return (
        <footer id="footer">
        <p>
          <i class="fab fa-twitter ft-icon"></i>{" "}
          <i class="fab fa-facebook-f ft-icon"></i>{" "}
          <i class="fab fa-instagram-square ft-icon"></i>{" "}
          <i class="fas fa-envelope ft-icon"></i>
        </p>
        <p>© Copyright 2018 TinDog</p>
      </footer>
        )
    }
    
  export {Footer};