import React from "react";

// import "./card.css";
function Card({ dogType, price, matches, messages, priority }) {
  return (
    <div className="pricing-column col-lg-4 col-md-6">
      <div class="card">
        <div class="card-header">
          <h3 className="dog-type">{dogType}</h3>
        </div>
        <div className="card-body">
          <h2 className="price-text">{price ? price : "Free"}</h2>
          {priority ? <p>Pirority Listing</p> : ""}
          <p>{matches} Matches Per Day</p>
          <p>{messages} Messages Per Day</p>
          <p>Unlimited App Usage</p>
        </div>
        <div className="card-footer">
          <div className="btn-layout">
            <button
              type="button"
              className="btn btn-outline-dark btn-lg btn-block"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Card };
