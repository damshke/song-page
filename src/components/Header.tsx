import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className="header">
      <div className="container container_header">
        {location.pathname.includes('song') && <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          ←
        </button>}
        <h1>Квартирник</h1>
      </div>
    </header>
  );
};

export default Header;