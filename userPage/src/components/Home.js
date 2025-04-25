import React from 'react';
import { Link } from 'react-router-dom'; // Import Link từ react-router-dom
import '../style/style.css'; // Import file CSS từ src/styles/
import Header from './Header'; // Import component Header mới

const Home = () => {
  return (
    <div className="background">
      <div className="group-1">
        <div className="design">
          <div className="row-5 group">
            <img className="rectangle" src="/images/rectangle_23.png" alt="" />
            <img className="shapes" src="/images/shapes.png" alt="" width="45" height="53" />
          </div>
          <img className="rectangle-2" src="/images/rectangle_22.png" alt="" />
          <img className="rectangle-3" src="/images/rectangle_21.png" alt="" />
        </div>
        <div className="image">
          <div className="row-6 group">
            <img src="/images/place_your_image_here_dou_15.png" alt="" width="400" height="265" />
            <img src="/images/place_your_image_here_dou_14.png" alt="" width="400" height="265" />
            <img src="/images/place_your_image_here_dou_13.png" alt="" width="400" height="265" />
          </div>
          <div className="place-your-image-here-double-click-to-edit-4"></div>
        </div>
        <div className="text">
          <Header/>
          
          <div className="row-10 group">
            <div className="col-14">
              <div className="title">
                <img className="title-2" src="/images/title_15.png" alt="pure lite" width="522" height="45" title="pure lite" />
                <img className="title-3" src="/images/title_14.png" alt="pure lite" width="521" height="48" title="pure lite" />
              </div>
              <div className="title-4">
                <img className="title-5" src="/images/title_13.png" alt="pure lite" width="514" height="44" title="pure lite" />
                <img className="title-6" src="/images/title_12.png" alt="pure lite" width="520" height="49" title="pure lite" />
              </div>
              <p className="paragraph">
                Pure Lite is a refreshing beverage with 7% alcohol. Every bottle contains the pure taste of beer you crave for.<br />
                <strong className="fw900">Drink Responsibly.</strong>
              </p>
            </div>
            <img className="body-text" src="/images/body_text_32.png" alt="make it new, make it pure" width="55" height="171" title="make it new, make it pure" />
            <p className="body-text-2">7* strong and<br />pure<br />dark beer</p>
          </div>
          <p className="body-text-3">need a drink?</p>
          <div className="button">Go To Store</div>
        </div>
        <img className="logo" src="/images/logo.png" alt="" width="73" height="74" />
      </div>
      <div className="l-constrained">
        <div className="group-2">
          <div className="design-2">
            <img className="rectangle-4" src="/images/rectangle_18.jpg" alt="" />
            <img className="rectangle-5" src="/images/rectangle_17.jpg" alt="" />
          </div>
          <div className="images group">
            <img className="place-your-image-here-double-click-to-edit-5" src="/images/place_your_image_here_dou_11.jpg" alt="" width="247" height="601" />
            <img className="place-your-image-here-double-click-to-edit-6" src="/images/place_your_image_here_dou_10.jpg" alt="" width="387" height="601" />
          </div>
          <div className="text-3 group">
            <div className="row-7 group">
              <p className="price">$4.60</p>
              <div className="quantity group">
                <div className="rectangle-holder">+</div>
                <p className="amount">1</p>
                <div className="rectangle-holder-2">-</div>
              </div>
            </div>
            <p className="paragraph-2">
              Massive malt meets big hops in this classic flavor for maximum effect. Several North American hops and large British malts create powerful tropical fruit aromas up front, followed by a cleansing bitter finish. This classic flavor is considered a big guy drink, yet it's simple to handle thanks to a good dose of dry hopping.
            </p>
            <div className="row-4 group">
              <div className="product-name group">
                <p className="body-text-5">classic purelite<br />dark beer</p>
                <img className="stars" src="/images/stars_10.png" alt="" width="181" height="26" />
                <p className="body-text-4">109 reviews</p>
              </div>
              <div className="button-3">Add To Cart</div>
            </div>
          </div>
        </div>
        <div className="group-3">
          <div className="design-3">
            <img className="rectangle-6" src="/images/rectangle_15.jpg" alt="" />
            <img className="rectangle-7" src="/images/rectangle_16.jpg" alt="" />
            <div className="images-2 group">
              <img src="/images/place_your_image_here_dou_9.jpg" alt="" width="288" height="389" />
              <img src="/images/place_your_image_here_dou_8.jpg" alt="" width="289" height="389" />
              <img src="/images/place_your_image_here_dou_7.jpg" alt="" width="288" height="389" />
            </div>
          </div>
          <div className="text-4">
            <p className="title-7">frequently bought</p>
            <div className="row-3 match-height group">
              <div className="product-name-2">
                <p className="body-text-6">lemon<br />purelite<br />beer</p>
                <img className="stars-2" src="/images/stars_9.png" alt="" width="182" height="27" />
                <p className="body-text-7">201 reviews</p>
              </div>
              <div className="product-name-3">
                <p className="body-text-8">apple<br />purelite<br />beer</p>
                <img className="stars-3" src="/images/stars_8.png" alt="" width="182" height="27" />
                <p className="body-text-9">180 reviews</p>
              </div>
              <div className="product-name-4">
                <p className="body-text-10">mint<br />purelite<br />beer</p>
                <img className="stars-4" src="/images/stars_7.png" alt="" width="182" height="27" />
                <p className="body-text-11">73 reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="group-4">
        <div className="images-3"></div>
        <div className="text-5">
          <p className="body-text-12">
            <Link to="#">purelite biggest store sale yet</Link>
          </p>
          <p className="body-text-13">
            up to<br />80<span className="text-style-2">%</span> off
          </p>
          <div className="row-2 match-height group">
            <div className="button-5">
              Crazy<br />Deals
            </div>
            <div className="button-7">
              Free Gifts<br />& Bundles
            </div>
            <div className="button-9">
              Nothing<br />Above $100
            </div>
          </div>
        </div>
      </div>
      <div className="l-constrained-2">
        <img className="rectangle-8" src="/images/rectangle_14.jpg" alt="" />
        <div className="row-11 group">
          <div className="col-15">
            <div className="images-4 group">
              <div className="col-5">
                <img className="place-your-image-here-double-click-to-edit-10" src="/images/place_your_image_here_dou_5.jpg" alt="" width="315" height="200" />
                <img className="place-your-image-here-double-click-to-edit-11" src="/images/place_your_image_here_dou_4.jpg" alt="" width="315" height="200" />
              </div>
              <div className="col-7">
                <div className="product-name-5">
                  <p className="body-text-14">lemon<br />purelite<br />beer</p>
                  <img className="stars-5" src="/images/stars_6.png" alt="" width="182" height="27" />
                  <p className="body-text-15">201 reviews</p>
                </div>
                <div className="product-name-6">
                  <p className="body-text-16">apple<br />purelite<br />beer</p>
                  <img className="stars-6" src="/images/stars_5.png" alt="" width="182" height="27" />
                  <p className="body-text-17">201 reviews</p>
                </div>
              </div>
              <div className="col-6">
                <img className="place-your-image-here-double-click-to-edit-12" src="/images/place_your_image_here_dou_3.jpg" alt="" width="315" height="200" />
                <img className="place-your-image-here-double-click-to-edit-13" src="/images/place_your_image_here_dou_2.jpg" alt="" width="315" height="200" />
              </div>
            </div>
            <img className="rectangle-9" src="/images/rectangle_13.jpg" alt="" />
          </div>
          <div className="col-8">
            <div className="product-name-7">
              <p className="body-text-18">mint<br />purelite<br />beer</p>
              <img className="stars-7" src="/images/stars_4.png" alt="" width="182" height="27" />
              <p className="body-text-19">201 reviews</p>
            </div>
            <div className="product-name-8">
              <p className="body-text-20">butter<br />purelite<br />beer</p>
              <img className="stars-8" src="/images/stars_3.png" alt="" width="182" height="27" />
              <p className="body-text-21">201 reviews</p>
            </div>
          </div>
        </div>
      </div>
      <div className="image-2">
        <div className="text-6">
          <div className="title-8">
            <img className="title-9" src="/images/title_10.png" alt="pure lite" width="521" height="45" title="pure lite" />
            <img className="title-10" src="/images/title_9.png" alt="pure lite" width="520" height="48" title="pure lite" />
          </div>
          <div className="title-11">
            <img className="title-12" src="/images/title_8.png" alt="pure lite" width="513" height="44" title="pure lite" />
            <img className="title-13" src="/images/title_7.png" alt="pure lite" width="520" height="49" title="pure lite" />
          </div>
          <div className="body-text-22">
            new<br />beer
          </div>
          <p className="paragraph-3">
            Massive malt meets big hops in this classic flavor for maximum effect. Several North American hops and large British malts create powerful tropical fruit aromas up front, followed by a cleansing bitter finish. This classic flavor is considered a big guy drink, yet it's simple to handle thanks to a good dose of dry hopping.
          </p>
        </div>
      </div>
      <div className="l-constrained-3">
        <div className="row group">
          <img className="rectangle-10" src="/images/rectangle_12.jpg" alt="" />
          <div className="text-7">
            <p className="title-14">customer reviews</p>
            <div className="customer-review">
              <div className="wrapper-8 group">
                <p className="body-text-25">Amelia Watson</p>
                <img className="stars-9" src="/images/stars.png" alt="" width="182" height="27" />
                <p className="body-text-24">08/01/2021</p>
              </div>
              <p className="paragraph-4">
                One of the best tasted beer I've ever had. the best beer available in the here, in my opinion. I have drank many award winning beers and my favorite brew is purelite.
              </p>
            </div>
            <div className="line"></div>
            <div className="customer-review-2">
              <div className="wrapper-7 group">
                <p className="body-text-27">Kiara Morisson</p>
                <img className="stars-10" src="/images/stars.png" alt="" width="181" height="27" />
                <p className="body-text-26">08/01/2021</p>
              </div>
              <p className="paragraph-5">
                One of the best tasted beer I've ever had. the best beer available in the here, in my opinion. I have drank many award winning beers and my favorite brew is purelite.
              </p>
            </div>
          </div>
          <img className="rectangle-11" src="/images/rectangle_11.jpg" alt="" />
        </div>
        <img className="rectangle-12" src="/images/rectangle_10.jpg" alt="" />
        <div className="group-8">
          <div className="design-4">
            <img className="rectangle-13" src="/images/rectangle_4.jpg" alt="" />
            <img className="rectangle-14" src="/images/rectangle_5.jpg" alt="" />
          </div>
          <div className="text-8">
            <p className="title-15">newsletter</p>
            <div className="rectangle-holder-3">
              <div className="body-text-28">
                <p>type your name here...</p>
              </div>
            </div>
            <div className="rectangle-holder-4">
              <div className="body-text-29">
                <p>type your email here...</p>
              </div>
            </div>
            <div className="rectangle-holder-5">
              <div className="body-text-30">
                <p>type your message here...</p>
              </div>
            </div>
            <div className="rectangle-holder-6">
              <div className="body-text-31">
                <p>submit information</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="design-5">
        <div className="l-constrained-4 group">
          <img className="rectangle-15" src="/images/rectangle_2.jpg" alt="" />
          <div className="col">
            <div className="text-9 group">
              <div className="col-4">
                <p className="body-text-32">About</p>
                <p className="paragraph-6">
                  purelite is owned and operated by Purelite Inc., a liquor company that offers the best pure beer in the market today!<br />
                  <span className="text-style-3"> </span><br />
                  Any questions? Our email address is ask@purelite.com<br />
                  <span className="text-style-3"> </span><br />
                  Drink Responsibly<br />
                  <span className="text-style-3"> </span><br />
                  Credits to pureliteTM
                </p>
              </div>
              <div className="col-12">
                <p className="body-text-33">Info</p>
                <p className="paragraph-7">
                  <Link to="#">Search<br />About Us<br />Frequently Asked Questions<br />Careers<br />Terms and Conditions<br />Privacy Policy<br />Returns and Refunds Policy<br />Shop Our Instagram</Link>
                </p>
              </div>
              <div className="col-13">
                <div className="title-16">
                  <img className="title-17" src="/images/title_4.png" alt="pure lite" width="403" height="35" title="pure lite" />
                  <img className="title-18" src="/images/title_3.png" alt="pure lite" width="403" height="36" title="pure lite" />
                </div>
                <div className="title-19">
                  <img className="title-20" src="/images/title_2.png" alt="pure lite" width="397" height="34" title="pure lite" />
                  <img className="title-21" src="/images/title.png" alt="pure lite" width="402" height="37" title="pure lite" />
                </div>
              </div>
            </div>
            <img className="rectangle-16" src="/images/rectangle_3.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;