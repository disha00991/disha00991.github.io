import React from 'react';
import {
  Switch, Route, HashRouter
} from 'react-router-dom';
import "react-bootstrap/dist/react-bootstrap.min.js";

// Featured
import Index from './views/Index';
import Resume from './views/Resume';
import Dreams from './views/Dreams';
import Projects from './views/Projects';
import About from './views/About';
import Contact from './views/Contact';

import NotFound from './views/NotFound';

// All of our CSS
import './static/css/main.scss';

function App() {
  return (
    <div className="App">
      <HashRouter basename='/'>
        <Switch>
          <Route path="/resume" component={Resume} />
          <Route path="/dreams" component={Dreams} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={Index} />
          <Route component={NotFound} path={404} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
