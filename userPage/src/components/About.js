import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="background">
      <div className="text">
        <div className="navigation group">
          <p className="navigation-2">
            <a href="/home">Home</a> <a href="/products">Drinks</a>
            <a href="/products">Products</a>
            <strong className="text-style">About</strong>
          </p>
          <p className="text-2">
            <a href="/contact">Contact Us</a>
          </p>
        </div>
      </div>
      <div className="l-constrained">
        <div className="group-2">
          <div className="row-4 group">
            <div className="images group">
              <img
                className="place-your-image-here-double-click-to-edit-5"
                src="images/beer_bottles_and_glass.jpg" // Thay bằng hình ảnh thực tế của chai bia và ly bia
                alt="Pure Lite Beer Bottles and Glass"
                width="600"
                height="601"
              />
            </div>
            <div className="text-3 group">
              <div className="title">
                <img
                  className="title-2"
                  src="images/title_15.png"
                  alt="pure lite"
                  width="522"
                  height="45"
                  title="pure lite"
                />
                <img
                  className="title-3"
                  src="images/title_14.png"
                  alt="pure lite"
                  width="521"
                  height="48"
                  title="pure lite"
                />
              </div>
              <div className="title-4">
                <img
                  className="title-5"
                  src="images/title_13.png"
                  alt="pure lite"
                  width="514"
                  height="44"
                  title="pure lite"
                />
                <img
                  className="title-6"
                  src="images/title_12.png"
                  alt="pure lite"
                  width="520"
                  height="49"
                  title="pure lite"
                />
              </div>
              <p className="body-text-2">Our Story<br />Begins<br />Here</p>
              <p className="paragraph-2">
                At Pure Lite, we believe in keeping things simple yet extraordinary. Founded with a vision to redefine beer, we combine traditional brewing techniques with innovative flavors. From our classic dark beer to refreshing fruit-infused options, every sip reflects our commitment to quality and purity. Join us on this journey to experience beer like never before.
              </p>
              <div className="button-3">Explore Drinks</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;