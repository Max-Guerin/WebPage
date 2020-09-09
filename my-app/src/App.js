import React from "react";
import "./App.css";
import { Header } from "./layout/header";
import { Footer } from "./layout/footer";
import { Card } from "./Card";
import { Card_example } from "./Card_example";

function App() {
  return (
    <div className="App">
      <div className="main-app">
        <Header />

        {/*-- Title */}
        <div className="main-body">
          <section className="coloured-section" id="title">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <h1 className="big-heading">
                    Meet new and interesting dogs nearby.
                  </h1>
                  <button
                    type="button"
                    className="btn btn-lg btn-dark dl-button"
                  >
                    <i className="fab fa-apple"></i> Download
                  </button>
                  <button
                    type="button"
                    className="btn btn-lg btn-outline-light dl-button"
                  >
                    <i className="fab fa-google-play"></i> Download
                  </button>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <img
                      className="rotated title-img"
                      src="./images/iphone6.png"
                      alt="iphone-mockup"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section />

          {/*-- Features */}

          <section className="white-section" id="features">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-4">
                  <i className="feature-icon fas fa-check-circle fa-5x"></i>
                  <h3 className="feature-title">Easy to use.</h3>
                  <p>So easy to use, even your dog could do it.</p>
                </div>

                <div className="col-lg-4">
                  <i className="feature-icon fas fa-bullseye fa-5x"></i>
                  <h3 className="feature-title">Elite Clientele</h3>
                  <p>We have all the dogs, the greatest dogs.</p>
                </div>

                <div className="col-lg-4">
                  <i className="feature-icon fas fa-heart fa-5x"></i>
                  <h3 className="feature-title">Guaranteed to work.</h3>
                  <p>Find the love of your dog's life or your money back.</p>
                </div>
              </div>
            </div>
          </section>

          {/*-- Testimonials */}

          <section className="coloured-section" id="testimonials">
            <div
              id="testimonial-carousel"
              className="carousel slide"
              data-interval="false"
            >
              <div className="carousel-inner">
                <div className="carousel-item active testimonial-text">
                  <h2 className="test-text">
                    I no longer have to sniff other dogs for love. I've found
                    the hottest Corgi on TinDog. Woof.
                  </h2>
                  <img
                    className="test-img"
                    src="./images/dog-img.jpg"
                    alt="dog-profile"
                  />
                  <em>Pebbles, New York</em>
                </div>
                <div className="carousel-item testimonial-text">
                  <h2 className="test-text">
                    My dog used to be so lonely, but with TinDog's help, they've
                    found the love of their life. I think.
                  </h2>
                  <img
                    className="test-img"
                    src="images/lady-img.jpg"
                    alt="lady-profile"
                  />
                  <em>Beverly, Illinois</em>
                </div>
              </div>
              <a
                className=" test-control carousel-control-prev"
                href="#testimonial-carousel"
                role="button"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </a>
              <a
                className=" test-control carousel-control-next"
                href="#testimonial-carousel"
                role="button"
                data-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </a>
            </div>
          </section>

          {/*-- Press */}

          <section className="coloured-section" id="press">
            <img
              className="press-logo"
              src="./images/techcrunch.png"
              alt="tc-logo"
            />
            <img className="press-logo" src="./images/tnw.png" alt="tnw-logo" />
            <img
              className="press-logo"
              src="./images/bizinsider.png"
              alt="biz-insider-logo"
            />
            <img
              className="press-logo"
              src="./images/mashable.png"
              alt="mashable-logo"
            />
          </section>

          {/* Pricing */}
          <section
            className="white-section"
            id="pricing"
            className="text-center"
          >
            <h2 className="section-heading">A Plan for Every Dog's Needs</h2>
            <p>Simple and affordable price plans for your and your dog.</p>
            <div class="row">
              <Card dogType="Chihuahua" matches="5" messages="10" />
              <Card dogType="Labrador" matches="5" messages="10" />
              <Card
                dogType="Mastiff"
                price="$99"
                priority={true}
                matches="Unlimited"
                messages="Unlimited"
              />
            </div>
          </section>

          {/* Call to Action */}

          <section className="coloured-section" id="cta">
            <h3 className="big-heading">
              Find the True Love of Your Dog's Life Today.
            </h3>
            <button className="dl-btn btn bt-lg btn-dark" type="button">
              <i className="fab fa-apple"></i> Download
            </button>
            <button className="dl-btn btn bt-lg btn-light" type="button">
              <i className="fab fa-google-play"></i> Download
            </button>
          </section>
        </div>
        {/* Footer */}

        <Footer />
      </div>
    </div>
  );
}

export default App;
