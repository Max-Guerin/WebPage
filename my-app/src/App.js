import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-app">
        <header className="App-header">
          <section id="title"></section>
          <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
            <a class="navbar-brand" href="">
              Website
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class=" collaps navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="">
                    {" "}
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    {" "}
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    {" "}
                    Download
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          </header>

          {/*-- Title */}
        <div className="main-body">
          <div>
            <h1>Meet new and interesting dogs nearby.</h1>
            <button type="button">Download</button>
            <button type="button">Download</button>
          </div>
          <div>
            <img src="./images/iphone6.png" alt="iphone-mockup" />
          </div>
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

          {/*-- <h2 class="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
            <img class="testimonial-image" src="images/lady-img.jpg" alt="lady-profile">
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
