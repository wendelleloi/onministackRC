import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Login from "./pages/Login";
import Timeline from './pages/Timeline.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/timeline" exact component={Timeline}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
