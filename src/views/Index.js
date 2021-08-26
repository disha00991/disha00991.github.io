// currently unused due to routing issue
import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
    <Main>
        <article className="post" id="index">
            <header>
                <div className="title">
                    <h2>About Webume</h2>
                    <p>This artistic, responsive, react app was written solely for the purpose of self-branding.</p>
                </div>
            </header>
            <p> Welcome to Webume! A Website detailing my work highlights, things I am passionate for and my overall aptitude in Computer Science..
                You can checkout
                <Link to="/resume"> my resume</Link>, {' '}
                <Link to="/projects">some of my projects</Link>, {' '}
                <Link to="/about">a little about myself</Link>, {' '}
                or <Link to="/contact">find my contact information</Link>. You can use the options at the top of the page to navigate the website too!
            </p>
            <p>I am thankful to Github pages for letting me host this website hassle-free. The
               website's source code can be found <a href="https://github.com/disha00991/webume">here</a>. Hope you like my website as much as I like an interactive resume!</p>
        </article>
    </Main>
);

export default Index;
