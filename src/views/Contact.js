import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Main from '../layouts/Main';

import data from '../data/contact';

const messages = [
  'Some new idea to save the world?',
  'My grandson in 2065 admiring his Granny\'s old website?',
  'Go Ahead, mail me quick!',
  'But since you\'re not gender biased, Femail me quicker :D',
  'I\'ll reply even if I\'m the COO of some company 10 yrs later :)',
  'Waiting for your mail!',
  '*Thanks*'
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => { }; // pass linter
  }, [delay]);
};

const Contact = () => {
  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(messages[idx].length); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(() => {
    let newIdx = idx;
    let newChar = char;
    if (char - hold >= messages[idx].length) {
      newIdx += 1;
      newChar = 0;
    }
    if (newIdx === messages.length) {
      setIsActive(false);
    } else {
      updateMessage(messages[newIdx].slice(0, newChar));
      updateIter(newIdx);
      updateChar(newChar + 1);
    }
  }, isActive ? delay : null);

  return (
    <Main>
      <Helmet title="Contact" />
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2><Link to="/contact">Contact</Link></h2>
          </div>
        </header>
        <div className="email-at">
          <p>My formal mails usually arrive at{' '}
            <a href="mailto:disha.singh00991@gmail.com" style={{ color: 'teal' }}>disha.singh00991@gmail.com</a></p>
          <p>My informal mails drop by here:{' '}
            <a href="mailto:directionstar86@gmail.com" style={{ color: 'teal' }}>directionstar86@gmail.com</a></p>
          <div
            className="inline-container"
            style={{ color: 'red' }}
            onMouseEnter={() => setIsActive(false)}
            onMouseLeave={() => (idx < messages.length) && setIsActive(true)}
          >
            <p style={{position: 'absolute', bottom: '84px'}}>{message}</p>
          </div>
        </div>
        <ul className="icons">
          {data.map((s) => (
            <li key={s.label}>
              <a href={s.link}>
                <FontAwesomeIcon icon={s.icon} />
              </a>
            </li>
          ))}
        </ul>
      </article>
    </Main>
  );
};

export default Contact;
