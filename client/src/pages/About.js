import React from "react";
import "../css/about.css";

const About = () => {
  return (
    <div className="about-container-wrapper" id="about">
      <div className="helpers-container">
        <div className="sponsor">
          <img
            src="https://www.bvbonlineshop.com/media/image/9c/e4/c5/puma-logo.png"
            alt="puma"
          />
        </div>
        <div className="payment">
          <img
            src="https://www.bvbonlineshop.com/media/image/g0/bc/96/70_bezahlmoeglichkeiten_pp.png"
            alt="paypal"
          />
          <img
            src="https://www.bvbonlineshop.com/media/image/97/d8/76/70_bezahlmoeglichkeiten_mc.png"
            alt="mastercard"
          />
          <img
            src="https://www.bvbonlineshop.com/media/image/42/aa/98/70_bezahlmoeglichkeiten_vi.png"
            alt="visa"
          />
          <img
            src="https://www.bvbonlineshop.com/media/image/30/c2/69/70_bezahlmoeglichkeiten_ae.png"
            alt="americanexpress"
          />
        </div>
        <div className="shipping">
          <img
            src="https://www.bvbonlineshop.com/media/image/4d/c4/2e/dhl-express-footer.png"
            alt="dhlexpress"
          />
          <img
            src="https://www.bvbonlineshop.com/media/image/28/d6/ba/dhl-footer-icon.jpg"
            alt="dhl"
          />
        </div>
      </div>
      <div className="about-links">
        <div className="support">
          <div className="about-header">
            <h1>Support</h1>
          </div>
          <div className="about-list">
            <ul>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Size Table</a>
              </li>
              <li>
                <a>Return Shipment</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="legal-info">
          <div className="about-header">
            <h1>Legal Information</h1>
          </div>
          <div className="about-list">
            <ul>
              <li>
                <a>Cookies</a>
              </li>
              <li>
                <a>Terms And Conditions</a>
              </li>
              <li>
                <a>Data protection</a>
              </li>
              <li>
                <a>Imprint</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="newsletter">
          <div className="about-header">
            <h1>Newsletter</h1>
          </div>
          <div className="about-input">
            <input type="email" placeholder="Your email address" />
            <button type="submit">
              <i class="bx bx-envelope"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="about-footer">
        <p>* All prices incl. value added tax where applicable</p>
        <h2>© 2005 - 2023 BVB Merchandising GmbH</h2>
      </div>
    </div>
  );
};

export default About;
