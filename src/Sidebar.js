import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="logooo.png" alt="Logo" />
        <h1>ISTICHARA</h1>
      </div>
      <Link to="/"><button>Menu</button></Link>
      <Link to="/clients"><button>Clients</button></Link>
      <Link to="/demands"><button>Demands</button></Link>
    </div>
  );
};

export default Sidebar;

