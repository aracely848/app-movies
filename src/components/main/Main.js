import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../header/Header';
import Home from '../home/Home';

class Main extends Component {
  
  render(){
    return (
      <div>
        <Header />        
        <Switch>
          <Route path="/home" component={ Home } />
          <Redirect to="/home" />
        </Switch>         
      </div> 
    )
  }
}

export default Main;