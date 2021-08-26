import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

const Blogs = () => {

  return (
    <Main>
      <Helmet title="Blogs" />
      <article className="post" id="blogs">
        <header>
          <div className="title">
            <h2>My Blogs</h2>
          </div>
        </header>
        <div className="row">
          <a className="card technical" href="https://wordpress.com/view/disha00991.wordpress.com">
            <div className="content">
              <h2>Technical Blog</h2>
              <em>Developer in Progress..</em>
            </div>
            <img src={process.env.PUBLIC_URL+"/images/laptop.svg"} />
          </a>
          {/* <a className="card life-blog" href="https://today5or5never.wordpress.com">
            <div className="content">
              <h2>Life Blog</h2>
              <em>Today or Never</em>
            </div>
            <img src={process.env.PUBLIC_URL+"/images/flowers.png"} />
          </a> */}
        </div>
      </article>
    </Main>
  );
};

export default Blogs;
