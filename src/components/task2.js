import React from 'react';
import './task2.css'

function Congratcard() {
return (
    <div className="card">
      <img
        className="profile-img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        alt="Profile Image"
      />
      <h1 className="message1">Congratulations!</h1>
      <p className="message">You've achieved something amazing.</p>
      <img
        className="watch-img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        alt="Watch Image"
      />
    </div>
  );
}

export default Congratcard;
