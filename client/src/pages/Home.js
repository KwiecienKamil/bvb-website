import React from "react";
import "../css/home.css";
import News from "./News";

const Home = (props) => {
  return (
    <div className="home-container" id="home">
      <div className="home-socials-container">
        <div className="home-socials">
          <div className="home-socials-wrapper">
            <a id="fb" href="https://www.facebook.com/BVB" target="_blank">
              <i class="bx bxl-facebook bx-tada-hover"></i>
            </a>
            <a id="yt" href="https://www.youtube.com/@BVB" target="_blank">
              <i class="bx bxl-youtube bx-tada-hover"></i>
            </a>
            <a id="ig" href="https://www.instagram.com/bvb09/" target="_blank">
              <i class="bx bxl-instagram bx-tada-hover"></i>
            </a>
            <a id="tt" href="https://twitter.com/bvb" target="_blank">
              <i class="bx bxl-twitter bx-tada-hover"></i>
            </a>
            <a
              id="tc"
              href="https://www.twitch.tv/bvb_official"
              target="_blank"
            >
              <i class="bx bxl-twitch bx-tada-hover"></i>
            </a>
          </div>
          <a className="login" onClick={props.onShowLogin}>
            LOG IN
          </a>
        </div>
      </div>
      <News onCloseLogin={props.onCloseLogin} />
    </div>
  );
};

export default Home;
