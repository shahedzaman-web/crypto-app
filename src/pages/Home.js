import React from "react";
import {
  bg1,
  cryptoBox,
  cryptoBuilding,
  hand,
  Subtract,
  bitcoin
} from "../assets/index";
import {
  AppNavbar,
  ServiceCarousel,
  ProductCarousel,
  TokenSealCarousel,
  Questions
} from "../components/index";
import { FaPlayCircle, FaCheck } from "react-icons/fa";

const Home = () => {
  return (
    <>
      {/* NavBar started here */}
      <AppNavbar />
      {/* NavBar ended here */}

      {/* Home Page started here */}

      <div style={{ backgroundImage: `url(${bg1})` }} alt="background">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 col-sm-12  d-flex justify-content-center flex-column">
              <p className="text-gold">Next Generation Security </p>
              <h4 className="text-white py-3 display-4">
                World Best a Crypto growth Center
              </h4>
              <p className="text-white small-text">
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
                  ipsum aliquet turpis elit elit natoque varius eget facilisi.
                  Amet rhoncus sed nulla tristique aenean viverra urna nec.
                  Dapibus nascetur amet lacinia et placerat nibh.
                </small>
              </p>
              <div className="d-flex flex-row">
                <button className="nav-a btn-pink me-3">Get Started</button>
                <FaPlayCircle size="50" color="#e215a7" />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 justify-content-center align-items-center">
              <img
                src={cryptoBox}
                className="img-fluid crypto-box-img w-75"
                alt="cryptoBox"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Home Page ended here */}
    
        {/* About Page started here */}
        <div className="container app-bg">
          <div className="py-5 d-flex justify-content-center align-items-center flex-column">
            <div className="line" />
            <h5 className="text-center display-5 text-white fw-bold">
              About Us
            </h5>
            <div className="line" />
            <div className="text-center d-flex align-items-center justify-content-center my-3">
              <p className="text-white w-75">
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
                  ipsum aliquet turpis elit elit natoque varius eget facilisi.
                  Amet rhoncus
                </small>
              </p>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-md-6 col-sm-12">
              <div className="d-flex flex-column  justify-content-center">
                <h4 className="display-6 app-text fw-bold">
                  Company Standards
                </h4>
                <p className="text-white small-text">
                  <small>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Venenatis velit augue iaculis cras consectetur. Felis duis
                    sit facilisis risus. Nullam condimentum placerat ac
                    dignissim...
                  </small>
                </p>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="d-flex flex-row ">
                    <FaCheck className="me-2 mt-1" size="16" color="#e215a7" />
                    <p className="text-white small-text">High market</p>
                  </div>
                  <div className="d-flex flex-row ">
                    <FaCheck className="me-2 mt-1" size="16" color="#e215a7" />
                    <p className="text-white small-text">Realtime Update</p>
                  </div>
                  <div className="d-flex flex-row ">
                    <FaCheck className="me-2 mt-1" size="16" color="#e215a7" />
                    <p className="text-white small-text">Available Worldwide</p>
                  </div>
                  <div className="d-flex flex-row ">
                    <FaCheck className="me-2 mt-1" size="16" color="#e215a7" />
                    <p className="text-white small-text">
                      Variety Of Currencies{" "}
                    </p>
                  </div>
                  <div className="d-flex flex-row ">
                    <FaCheck className="me-2 mt-1" size="16" color="#e215a7" />
                    <p className="text-white small-text">
                      Excepteur sint occaecat deleniti
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="d-flex flex-row ">
                    <FaCheck className="me-2 mt-1" size="16" color="#e215a7" />
                    <p className="text-white small-text">Fast Mining</p>
                  </div>
                  <div className="d-flex flex-row ">
                    <FaCheck className="me-2 mt-1" size="16" color="#e215a7" />
                    <p className="text-white small-text">Easy Mining</p>
                  </div>
                  <div className="d-flex flex-row ">
                    <FaCheck className="me-2 mt-1" size="16" color="#e215a7" />
                    <p className="text-white small-text">TRC20 Support</p>
                  </div>
                  <div className="d-flex flex-row ">
                    <FaCheck className="me-2 mt-1" size="16" color="#e215a7" />
                    <p className="text-white small-text">
                      Corporis suscipit laboriosam cupid
                    </p>
                  </div>
                  <div className="d-flex flex-row ">
                    <FaCheck className="me-2 mt-1" size="16" color="#e215a7" />
                    <p className="text-white small-text">
                      Ut enim ad minima veniam quis nostr
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 hand-container app-bg">
              <img src={hand} className="img-fluid img-hand" alt="hand" />
              <button className="play-btn"></button>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-md-6 col-sm-12">
              <img
                src={cryptoBuilding}
                className="img-fluid img-hand"
                alt="cryptoBuilding"
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="d-flex flex-column  justify-content-center">
                <h4 className="display-6 app-text ">
                  Accelerate the passage of the world
                </h4>
                <p className="text-white small-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
                  ipsum aliquet turpis elit elit natoque varius eget facilisi...
                </p>
                <button className="btn-pink w-25">Read More</button>
              </div>
            </div>
          </div>
        </div>
        {/* About Page ended here */}
        {/* Our Service Page started here */}
        <div className="container app-bg">
          <div className="py-5 d-flex justify-content-center align-items-center flex-column">
            <div className="line" />
            <h5 className="text-center display-5 text-white fw-bold">
              Our Services
            </h5>
            <div className="line" />
            <div className="text-center d-flex align-items-center justify-content-center my-3">
              <p className="text-white w-75">
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
                  ipsum aliquet turpis elit elit natoque varius eget facilisi.
                  Amet rhoncus
                </small>
              </p>
            </div>
          </div>
          <ServiceCarousel />
        </div>
        {/* Our Service Page ended here */}
        {/* CRYPTO MINING CALCULATOR PAGE STARTED HERE */}
        <div className="container app-bg">
          <div className="py-5 d-flex justify-content-center align-items-center flex-column">
            <div className="line" />
            <h6 className="text-center display-6 text-white fw-bold">
              CRYPTO MINING CALCULATOR
            </h6>
            <div className="line" />
            <div className="text-center d-flex align-items-center justify-content-center my-3">
              <p className="text-white w-75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
                ipsum aliquet turpis elit elit natoque varius eget facilisi.
                Amet rhoncus
              </p>
            </div>
          </div>
        </div>
        {/* CRYPTO MINING CALCULATOR PAGE Ended HERE */}
        {/* ABOUT OUR PRODUCTS PAGE STARTED HERE */}
        <div className="container app-bg">
          <div className="py-5 d-flex justify-content-center align-items-center flex-column">
            <div className="line" />
            <h6 className="text-center display-6 text-white fw-bold">
              ABOUT OUR PRODUCTS
            </h6>
            <div className="line" />
            <div className="text-center d-flex align-items-center justify-content-center my-3">
              <p className="text-white w-75">
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
                  ipsum aliquet turpis elit elit natoque varius eget facilisi.
                  Amet rhoncus
                </small>
              </p>
            </div>
          </div>
          <ProductCarousel />
        </div>

        {/* ABOUT OUR PRODUCTS PAGE Ended HERE */}

        {/* Token Seal Page Started here */}
        <div className="container app-bg">
          <div className="py-5 d-flex justify-content-center align-items-center flex-column">
            <div className="line" />
            <h6 className="text-center display-6 text-white fw-bold">
              Token Seal
            </h6>
            <div className="line" />
            <div className="text-center d-flex align-items-center justify-content-center my-3">
              <p className="text-white w-75">
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
                  ipsum aliquet turpis elit elit natoque varius eget facilisi.
                  Amet rhoncus
                </small>
              </p>
            </div>
           
          </div>
          <div className="ms-5 d-flex flex-row py-1">
              <img src={Subtract} className="img-fluid " alt="tokenSeal" />

              <h4 className="text-white w-50  display-6 ms-3">
                Convenience to STMX token holders
              </h4>
            </div>
            <TokenSealCarousel/>
            <div className=" d-flex py-2 flex-column py-1 justify-content-center align-items-center">
              <h6 className="text-white  fw-bold    display-6 ms-3">
              Join Token Sale
              </h6>
              <button className="btn-pink my-3">Register Now</button>

        </div>
        <div className="row py-5">
          <div className="col-md-6 col-sm-12">
            <img src={bitcoin} className="img-fluid crypto-box-img" alt="bitcoin" />
        </div>
        <div className="col-md-6 col-sm-12">
          <button className="btn-gold my-3">Token Sold Out!</button>
          <p className="text-white small-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo ipsum
            aliquet turpis elit elit natoque varius eget facilisi. Amet rhoncus
          </p>
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <p className="text-white fw-bold">
                Softcap in 258 days
              </p>
              <p className="text-white fw-bold">
              transation amount
              </p>
              <p className="text-white fw-bold">
              token sale target
              </p>

        </div>
        <div className="col-md-6 col-sm-6">
          <p className="text-gold  fw-bold">
            $300.000 USD
          </p>
          <p className="text-gold  fw-bold">
            $300.000 USD
          </p>
             <p className="text-gold  fw-bold">
            $300.000 USD
          </p>

        </div>
        </div>
        </div>
        </div>
        </div>
        {/* Token Seal Page Ended here */}
        {/* General Questions Page Starts here */}
        <div className="container app-bg">
          <div className="py-5 d-flex justify-content-center align-items-center flex-column">
            <div className="line" />
            <h6 className="text-center display-6 text-white fw-bold">
              General Questions
            </h6>
            <div className="line" />
            <div className="text-center d-flex align-items-center justify-content-center my-3">
              <p className="text-white w-75">
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
                  ipsum aliquet turpis elit elit natoque varius eget facilisi.
                  Amet rhoncus
                </small>
              </p>
            </div>
          </div>
          <Questions/>
          </div>

        {/* General Questions Page Ended here */}
      </>
   
  );
};

export default Home;
