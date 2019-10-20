// currently unused due to routing issue
import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
    <Main>
        <article className="post" id="index">
            <header>
                <div className="title">
                    <h2><Link to="/">About Webume</Link></h2>
                    <p>This artistic, responsive, react app was written solely for the purpose of self-branding.</p>
                </div>
            </header>
            <p> Welcome to Webume! My Resume, the web way.
                Let us begin having some adventure by clicking my{' '}
                <Link to="/resume">resume</Link>, {' '}
                <Link to="/dreams">some of my PLAN-A dreams</Link>, {' '}
                <Link to="/projects">projects</Link>, {' '}
                or <Link to="/contact">contact</Link> pages.
            </p>
            <p>Feel free to find bugs and throw at me. Next refresh & the bug will #RIP. Promise! Just as is, this
               website's source code is desperate to be found and praised <a href="https://github.com/disha00991/webume">here</a>.</p>
        </article>
    </Main>
);

export default Index;
