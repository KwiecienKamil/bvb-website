import React from "react";

const NewsCard = (props) => {
  return (
    <div className="mini-news">
      <a href={props.href} target="_blank">
        <img src={props.src} alt={props.alt} />
        <div className="mini-news-desc">
          <p className="mini-news-title">{props.newsTitle}</p>
          <p className="mini-news-title-desc">{props.newsTitleDesc}</p>
        </div>
      </a>
    </div>
  );
};

export default NewsCard;
