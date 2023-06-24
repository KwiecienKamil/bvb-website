import React from 'react'
import '../css/about.css'

const About = () => {
  return (
    <div className='about-container-wrapper' id='about'>
      <div className="helpers-container">
        <div className="sponsor">
          <img src="https://www.bvbonlineshop.com/media/image/9c/e4/c5/puma-logo.png" alt="puma" />
        </div>
        <div className="payment">
          <img src="https://www.bvbonlineshop.com/media/image/g0/bc/96/70_bezahlmoeglichkeiten_pp.png" alt="paypal" />
          <img src="https://www.bvbonlineshop.com/media/image/97/d8/76/70_bezahlmoeglichkeiten_mc.png" alt="mastercard" />
          <img src="https://www.bvbonlineshop.com/media/image/42/aa/98/70_bezahlmoeglichkeiten_vi.png" alt="visa" />
          <img src="https://www.bvbonlineshop.com/media/image/30/c2/69/70_bezahlmoeglichkeiten_ae.png" alt="americanexpress" />
        </div>
        <div className="shipping">
          <img src="https://www.bvbonlineshop.com/media/image/4d/c4/2e/dhl-express-footer.png" alt="dhlexpress" />
          <img src="https://www.bvbonlineshop.com/media/image/28/d6/ba/dhl-footer-icon.jpg" alt="dhl" />
        </div>
      </div>
    </div>
  )
}

export default About
