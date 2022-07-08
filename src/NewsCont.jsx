import React from 'react';
import { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import './_NewsCont.scss';

const NewsCont = () => {
  const [news, setNews] = useState([]);
  console.log(process.env.API_KEY);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=india&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="newsCont">
      {news ? (
        news?.map((data, i) => (
          <NewsCard
            author={data.author}
            title={data.title}
            desc={data.description}
            publishedAt={data.publishedAt}
            url={data.url}
            urlImage={data.urlToImage}
            key={i}
          />
        ))
      ) : (
        <h3>Loading....</h3>
      )}
    </div>
  );
};

export default NewsCont;
