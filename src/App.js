import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import Oops from "./components/Oops";
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <>
  <Navbar />
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/flashcards" component={Oops} />
    <Route component={NoMatch} />
  </Switch>
  </>
);

export default App;