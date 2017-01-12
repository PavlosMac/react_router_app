import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.jsx';
import About from './components/About.jsx'
import Home from './components/Home.jsx';
import Pricing from './components/Pricing.jsx';
import Stuff from './components/Stuff.jsx';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';


window.onload = () => {
  ReactDOM.render(
    <Router  history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home}/>
        <Route path="home" components={Home} />
        <Route path="about" components={About} />
        <Route path="pricing" components={Pricing} />
        <Route path="stuff" components={Stuff} />
      </Route>
    </Router>,
    document.getElementById('app')
  )
}
