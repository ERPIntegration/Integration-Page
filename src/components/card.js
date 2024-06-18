import React from 'react';

const Card = ({ title, description, link, photo }) => {
  return (
    <div className="card"><a href={link}>
      <img src={photo} alt={title} />
      
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>Learn More</a>
      </div></a>
    </div>
  );
};

export default Card;
