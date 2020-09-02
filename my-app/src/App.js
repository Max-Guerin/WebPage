import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-app">
        <header className="App-header">
          <section id="navbar">
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

              <div
                className=" collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      {" "}
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      {" "}
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
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

        {/*-- Title */}
        <div className="main-body">
          <section id="title">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <h1>Meet new and interesting dogs nearby.</h1>
                <button type="button" className="btn btn-lg btn-dark dl-button"><i class="fab fa-apple"></i> Download</button>
                <button type="button" className="btn btn-lg btn-outline-light dl-button"><i class="fab fa-google-play"></i> Download</button>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <img className="rotated title-img" src="./images/iphone6.png" alt="iphone-mockup" />
                </div>
              </div>
            </div>
            </div>
          </section>
          <section />

          {/*-- Features */}

          <section id="features">
            <h3>Easy to use.</h3>
            <p>So easy to use, even your dog could do it.</p>

            <h3>Elite Clientele</h3>
            <p>We have all the dogs, the greatest dogs.</p>

            <h3>Guaranteed to work.</h3>
            <p>Find the love of your dog's life or your money back.</p>
          </section>

          {/*-- Testimonials */}

          <section id="testimonials">
            <h2>
              I no longer have to sniff other dogs for love. I've found the
              hottest Corgi on TinDog. Woof.
            </h2>
            <img src="./images/dog-img.jpg" alt="dog-profile" />
            <em>Pebbles, New York</em>
          </section>

          {/*-- <h2 className="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
            <img className="testimonial-image" src="images/lady-img.jpg" alt="lady-profile">
            <em>Beverly, Illinois</em> */}

          {/*-- Press */}

          <section id="press">
            <img src="./images/techcrunch.png" alt="tc-logo" />
            <img src="./images/tnw.png" alt="tnw-logo" />
            <img src="./images/bizinsider.png" alt="biz-insider-logo" />
            <img src="./images/mashable.png" alt="mashable-logo" />
          </section>

          {/* Pricing */}

          <section id="pricing">
            <h2>A Plan for Every Dog's Needs</h2>
            <p>Simple and affordable price plans for your and your dog.</p>

            <h3>Chihuahua</h3>
            <h2>Free</h2>
            <p>5 Matches Per Day</p>
            <p>10 Messages Per Day</p>
            <p>Unlimited App Usage</p>
            <button type="button">Sign Up</button>

            <h3>Labrador</h3>
            <h2>$49 / mo</h2>
            <p>Unlimited Matches</p>
            <p>Unlimited Messages</p>
            <p>Unlimited App Usage</p>
            <button type="button">Sign Up</button>

            <h3>Mastiff</h3>
            <h2>$99 / mo</h2>
            <p>Pirority Listing</p>
            <p>Unlimited Matches</p>
            <p>Unlimited Messages</p>
            <p>Unlimited App Usage</p>
            <button type="button">Sign Up</button>
          </section>

          {/* Call to Action */}

          <section id="cta">
            <h3>Find the True Love of Your Dog's Life Today.</h3>
            <button type="button">Download</button>
            <button type="button">Download</button>
          </section>
        </div>
        {/* Footer */}

        <footer id="footer">
          <p>© Copyright 2018 TinDog</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
