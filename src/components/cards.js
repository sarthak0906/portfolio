import React from 'react';
import './Card.css'; 

const Card = () => {
  return (
    <div className="card" onClick={props.onClick}>
      <div className="profile-pic">
        {/* Insert img */} {/* props.img */}
      </div>
      <div className="bottom">
        <div className="content">
          <span className="name">{props.name}</span>
          <span className="about-me">{props.about}</span>
        </div>
        <div className="bottom-bottom">
          <div className="social-links-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.999" viewBox="0 0 16 15.999">
              {/* Insert img */}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
