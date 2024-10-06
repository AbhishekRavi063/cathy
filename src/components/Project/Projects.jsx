import React from 'react';
import './Projects.css';
import netflix from '../../Assets/Netflix.png';
import github from '../../Assets/github-logo.png';
import fitclub from "../../Assets/Fitclub.png"
import blackhole from '../../Assets/blackhole.mp4'


const cardData = [
  {
    image: netflix,
    title: "NETFLIX UI CLONE",
    description: "Netflix UI clone using TMDB movies API",
    technology: "REACT.JS",
    linkText: "Visit website",
    creatorImage: github,
    creatorName: "MINE",
  },
  {
    image: fitclub,
    title: "fitclub",
    description: "fitclub",
    technology: "REACT.JS",
    linkText: "Visit website",
    creatorImage: github,
    creatorName: "MINE",
  },
  {
    image: netflix,
    title: "NETFLIX UI CLONE",
    description: "Netflix UI clone using TMDB movies API",
    technology: "REACT.JS",
    linkText: "Visit website",
    creatorImage: github,
    creatorName: "MINE",
  },
  {
    image: netflix,
    title: "NETFLIX UI CLONE",
    description: "Netflix UI clone using TMDB movies API",
    technology: "REACT.JS",
    linkText: "Visit website",
    creatorImage: github,
    creatorName: "MINE",
  },
  {
    image: netflix,
    title: "NETFLIX UI CLONE",
    description: "Netflix UI clone using TMDB movies API",
    technology: "REACT.JS",
    linkText: "Visit website",
    creatorImage: github,
    creatorName: "MINE",
  }
];

const NftCard = () => {
  return (
    <div className="mainn">


      <h1 className='ph'>Projects</h1>
      <div className="row">
        {cardData.map((card, index) => (
          <div key={index} className="nft">
            <div className="main">
              <img
                className="tokenImage"
                src={card.image}
                alt="NFT"
              />
              <h2>{card.title}</h2>
              <p className="description">{card.description}</p>
              <div className="tokenInfo">
                <div className="price">
                  <ins>◘</ins>
                  <p>{card.technology}</p>
                </div>
                <div className="duration">
                  <ins>◷</ins>
                  <p>{card.linkText}</p>
                </div>
              </div>
              <hr />
              <div className="creator">
                <div className="wrapper">
                  <img
                    src={card.creatorImage}
                    alt="Creator"
                  />
                </div>
                <p>
                  <ins>Creation of</ins> {card.creatorName}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NftCard;
