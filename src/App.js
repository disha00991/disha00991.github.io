// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

// Featured
import Index from './views/Index';

import { Link } from 'react-router-dom';

import Main from './layouts/Main';

// All of our CSS
import './static/css/main.scss';

function App() {
  return (
    <div className="App">
      <Router basename='/'>
        {/* <Switch> */}
        <Main>
          <article className="post" id="index">
            <header>
              <div className="title">
                <h2><Link to="/">About this site</Link></h2>
                <p>A beautiful, responsive, react app written with modern Javascript.</p>
              </div>
            </header>
            <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
              <Link to="/resume">resume</Link>, {' '}
              <Link to="/projects">projects</Link>, {' '}
              or <Link to="/contact">contact</Link> me.
      </p>
            <p> Source available <a href="https://github.com/disha00991/webume">here</a>.</p> {/*@TODO: Add website link */}
          </article>
        </Main>


        {/* <Route exact path="/" component={Index} /> */}
        {/* <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/stats" component={Stats} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
      {/* Only useful in development mode */}
        {/*<Route component={NotFound} status={404} /> */}
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;


// import About from './views/About';
// import Projects from './views/Projects';
// import Resume from './views/Resume';
// import Stats from './views/Stats';
// import Contact from './views/Contact';

// import NotFound from './views/NotFound';

// All of our CSS
// import './static/css/main.scss';

// ReactDOM.render(
//   <Router basename={BASE_PATH}>
//     <Switch>
//       <Route exact path="/" component={Index} />
//       {/* <Route path="/about" component={About} />
//       <Route path="/projects" component={Projects} />
//       <Route path="/stats" component={Stats} />
//       <Route path="/contact" component={Contact} />
//       <Route path="/resume" component={Resume} />
//       {/* Only useful in development mode */}
//       {/*<Route component={NotFound} status={404} /> */}
//     </Switch>
//   </Router>,
//   document.getElementById('root'),
// );
