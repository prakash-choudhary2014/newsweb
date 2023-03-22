import React from 'react';

const NewsCard = ({ title, image, description, url }) => {
 
  return (
    <a href={url}  rel="noopener noreferrer" className="card" >
      <div className="card-image-container">
        <img className="card-image" src={image} alt={title} />
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </a>
  );
};

export default NewsCard;




