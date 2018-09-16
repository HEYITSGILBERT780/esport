import React, { Component } from 'react';
import {  Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AllTeams from './pages/AllTeams';

class App extends Component {
  render() {
    const App = () => (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path="/AllTeams/:gameId" component={AllTeams} />
          {/*<Route path="/OWAllTeams" key="ow-teams" component={AllTeams} />
          <Route path="/DOTA2AllTeams" key="dota-teams" component={AllTeams} />*/}
        </Switch>
      </div>  
    );
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
