import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home'
import Login from './Login'
export default function App() {
  return (
    <Router>
      <div>
       

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
              <Route path='/Home' >
              <Home/>
              </Route>
              <Route exact path='/' >
              <Login/>
              </Route>
        </Switch>
      </div>
    </Router>
  );
}

