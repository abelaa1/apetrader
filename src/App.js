import React from 'react';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum';
import PaperTrade from './pages/PaperTrade';
import Portfolio from './pages/Portfolio';
import Better from './pages/Better';
import Screener from './pages/Screener';
import Trade from './pages/Trade';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/Curriculum' component={Curriculum} />
          <Route path='/PaperTrade' component={PaperTrade} />
          <Route path='/Portfolio' component={Portfolio} />
          <Route path='/Better' component={Better} />
          <Route path='/Screener' component={Screener} />
          <Route path='/Trade' component={Trade} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
