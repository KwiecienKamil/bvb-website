import React, { useState, useEffect } from "react";
import "../css/news.css";
import img1 from "../assets/newsImage1.jpg";
import img2 from "../assets/newsImage2.jpg";
import img3 from "../assets/newsImage3.jpg";
import NewsCard from "../UI/NewsCard";

const News = (props) => {
  const [src, setSrc] = useState(0);
  const h1Title = [
    "Bellingham joins Real Madrid",
    "We bought Bansebaini for 20mln€",
    "Ansgar Knauff moves to Eintracht Frankfurt",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      if (src === 0) {
        setSrc(1);
      } else if (src === 1) {
        setSrc(2);
      } else if (src === 2) {
        setSrc(0);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [src]);
  const image = document.getElementById("news-image");
  const images = [
    "https://images7.alphacoders.com/127/1278155.jpg",
    "https://static.jutarnji.hr/images/slike/2021/01/22/o_6150583_1280.jpg",
    "https://www.bvb.de/var/ezdemo_site/storage/images/media/bilder/buehnenbilder/b_knauff4/4215701-1-ger-DE/B_Knauff_buehnenbild_regular.jpg",
  ];

  return (
    <div className="news-container" onClick={props.onCloseLogin}>
      <div className="news-images">
        <img src={`${images[src]}`} alt="news-img" id="news-image" />
        <div className="news-header">
          <h1>{`${h1Title[src]}`}</h1>
        </div>
      </div>
      <h1 className="section-header">BVB NEWS</h1>
      <div className="mini-news-container">
        <NewsCard
          href="https://www.bvb.de/eng/News/Overview/Two-players-in-the-VDV-Team-of-the-Season"
          src="https://www.bvb.de/var/ezdemo_site/storage/images/media/bilder/teaserbilder/82t_kobel/4191901-1-ger-DE/82T_Kobel_bvbnachricht_teaser_normal_regular.jpg"
          alt="GregorKobel"
          newsTitle="Two players in the VDV Team of the Season"
          newsTitleDesc="Gregor Kobel and Jude Bellingham have been voted into the 2022/23 Team of the Season by their 
          fellow professionals in the VDV (the Professional Footballers Union in Germany)."
        />
        <NewsCard
          href="https://www.bvb.de/eng/News/Overview/Four-Borussia-players-are-U17-European-champions"
          src="https://www.bvb.de/var/ezdemo_site/storage/images/media/bilder/galeriebilder/g_u17_europameister/4213915-1-ger-DE/G_U17_Europameister_bvbnachrichtenbild_regular.jpg"
          alt="GregorKobel"
          newsTitle="Four Borussia players are U17 European champions"
          newsTitleDesc="Borussia Dortmund U17 players Almuger Kabar, Paris Brunner, Charles Herrmann 
          and Kjell Wätjen are European champions!"
        />
        <NewsCard
          href="https://www.bvb.de/eng/News/Overview/Information-on-season-and-matchday-tickets-for-2023-24"
          src="https://www.bvb.de/var/ezdemo_site/storage/images/media/bilder/galeriebilder/g_fans_sip4/4214263-1-ger-DE/G_Fans_SIP_bvbnachrichtenbild_regular.jpg"
          alt="Season-info"
          newsTitle="Information on season tickets for 2023/24"
          newsTitleDesc="As in previous seasons, Borussia Dortmund once again consulted with fan representatives regarding ticketing for the 2023/2024 season."
        />
      </div>
    </div>
  );
};

export default News;
