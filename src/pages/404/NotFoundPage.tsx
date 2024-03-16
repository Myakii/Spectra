import React from 'react';
import './css/NotFoundPage.css';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>Oups !</h1>
        <h2>La page que vous recherchez semble introuvable.</h2>
        <p>Je peux vous proposer quelques bons plats à la place ?</p>
        <Link to="/menu">Allons-y !</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
