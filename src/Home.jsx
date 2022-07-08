import React from 'react';
import './_Home.scss';
import Header from './Header';
import NewsCont from './NewsCont';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <NewsCont />
    </div>
  );
};

export default Home;
