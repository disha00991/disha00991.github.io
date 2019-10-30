import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import "react-bootstrap/dist/react-bootstrap.min.js";

// Featured
import Index from './views/Index';
import Resume from './views/Resume';
import Dreams from './views/Dreams';
import Projects from './views/Projects';
// import Stats from './views/Stats';
import Contact from './views/Contact';

import NotFound from './views/NotFound';

// All of our CSS
import './static/css/main.scss';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/resume" component={Resume} />
          <Route path="/dreams" component={Dreams} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          {/* 
      <Route path="/stats" component={Stats} />
      {/* Only useful in development mode */}
          <Route component={NotFound} status={404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
