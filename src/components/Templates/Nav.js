import React from 'react';
import { Link } from 'react-router-dom';

import data from '../../data/contact';
const basepath = process.env.PUBLIC_URL;
const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={process.env.PUBLIC_URL+'/images/me.jpg'} alt="My Photo" />
      </Link>
      <header>
        <h2>Disha Singh</h2>
        <p><a href="mailto:disha.singh00991@gmail.com">disha.singh00991@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>Who's She?</h2>
      <p>Hi, I&apos;m Disha. I like appreciating people who build things and get inspired.
            I am a proud <a href="https://nith.ac.in/">NIT, Hamirpur, India</a> graduate, and {/* add dance club link @TODO*/}
            the co-founder of 3rd year choreo in <a href="https://www.instagram.com/rhythmeecz_nith/">Dance Club Rhythmeecs</a>. After college I was
            at <a href="https://www.publicissapient.com">Publicis Sapient</a>, and currently exploring my potential at <a href="https://www.thb.co.in">THB India</a>.
      </p>
      <ul className="actions">
        <li>
          {window.location.hash !== `#/resume` ? <Link to="/resume" className="button">My Work</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <i className={s.iconClass}></i>
            </a>
          </li>
        ))}
      </ul>
      <p className="icons made-with">Made with <i className="fa fa-heart" aria-hidden="true"></i> & <i class="fa fa-coffee" aria-hidden="true"></i></p>
      <p className="copyright">&copy; Disha Singh</p>
    </section>
  </section>
);

export default Nav;
