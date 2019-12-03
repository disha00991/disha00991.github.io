import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

const Header = () => (
  <header id="header">
    <h1 className="index-link">
      {routes.filter((l) => l.index).map((l) => 
        window.location.hash !== '#/' ? <Link key={l.label} to={l.path}>{l.label}</Link> : <span style={{fontSize: '0.7em'}}>{l.label}</span>
      )}
    </h1>
    <nav className="links">
      <ul className="links-ul">
        {routes.filter((l) => !l.index).map((l) => (
          <li key={l.label}>
            <Link to={l.path}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Header;
