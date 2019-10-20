import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src='/images/1.jpg' alt="" />  {/*<img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" /> @TODO add basepath*/}
      </Link>
      <header>
        <h2>Disha Singh</h2>
        <p><a href="mailto:disha.singh00991@gmail.com">disha.singh00991@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Disha. I like appreciating people who build things and get inspired.
            I am a proud <a href="https://nith.ac.in/">NIT, Hamirpur, India</a> graduate, and {/* add dance club link @TODO*/}
            the co-founder of 3rd year choreo in <a href="#">Dance Club Rhythmeecs</a>. After college I was
            at <a href="https://www.publicissapient.com">Publicis Sapient</a>, and currently exploring my potential at <a href="www.thb.co.in">THB India</a>.
      </p>
      <ul className="actions">
        <li>{/*window.location.pathname !== `${BASE_PATH}/resume` @TODO*/}
          {window.location.pathname !== `/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Disha Singh</p>
    </section>
  </section>
);

export default Nav;
