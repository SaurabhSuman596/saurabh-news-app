import React from 'react';
import './_newsCard.scss';

const NewsCard = ({ author, title, desc, publishedAt, url, urlImage }) => {
  return (
    <a className="linkNews" href={url} target="_blank" rel="noreferrer">
      <div className="newsCard">
        <img src={urlImage} alt="" />
        <h3>{title}</h3>
        <p className="desc_news">{desc}</p>

        <p className="newsAutor">
          <span>Short </span>by {author} /
        </p>
        <p className="external">read More at {url}</p>
      </div>
    </a>
  );
};

export default NewsCard;
