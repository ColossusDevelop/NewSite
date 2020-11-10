import React from 'react'; 
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import StreamPage from './StreamPage';
import VideosPage from './VideosPage';
import SocialMediaPage from './SocialMediaPage';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <a className="streampageLink">
            <Link to='/StreamPage'>Live Stream</Link> 
          </a>
          <a className="socialmediaLink">
            <Link to="/SocialMediaPage">Posts</Link>
          </a>
          <a className="videopageLink">
            <Link to='/VideosPage'>Videos</Link>
          </a>
        </ul>
      </nav>

{/* The Switch component looks through the Route compnonents inside of it and renders the first one that matches the current URL */}
      <Switch>
        <Route exact path='/SocialMediaPage'>
          <SocialMediaPage />
        </Route>
        <Route path='/VideosPage'>
          <VideosPage />
        </Route>
        <Route path='/StreamPage'>
          <StreamPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
