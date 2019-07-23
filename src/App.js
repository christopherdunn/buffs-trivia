import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './Containers/home';
import About from './Containers/about';
import Question from './Containers/question';

function App() {
  return (
    <BrowserRouter>

    <div className="App">
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/submit-a-question" component={Question} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
