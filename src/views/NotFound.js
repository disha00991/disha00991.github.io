import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

const PageNotFound = () => (
  <div className="not-found">
    <Helmet title="404" />
    <h1>Page Not Found</h1>
    <p>Return to :</p>
    <ul>
      <li><Link to="/">Homepage</Link></li>
      <li><Link to="/resume">Resume</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/dreams">Dreams</Link></li>
      <li><Link to="/about">About Me</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li></li>
    </ul>
  </div>
);

export default PageNotFound;
