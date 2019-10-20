import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

// Featured
import Index from './views/Index';
import Dreams from './views/Dreams';
// import Projects from './views/Projects';
// import Resume from './views/Resume';
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
          <Route path="/dreams" component={Dreams} />
          <Route path="/contact" component={Contact} />
          {/*<Route path="/projects" component={Projects} />
      <Route path="/stats" component={Stats} />
      <Route path="/resume" component={Resume} />
      {/* Only useful in development mode */}
          <Route component={NotFound} status={404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;



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
