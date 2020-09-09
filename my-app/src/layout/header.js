import React from "react";
import "./header.css";

function Header() {
    return (
<header className="App-header">
  <section className="coloured-section" id="navbar">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-xl navbar-dark">
        <a className="navbar-brand" href="">
          Website
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className=" collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#footer">
                {" "}
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                {" "}
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cta">
                {" "}
                Download
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</header>
    )
  }
  
export {Header};