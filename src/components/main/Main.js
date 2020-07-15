import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../header/Header';
import Home from '../home/Home';
import Menu from '../menu/Menu';
import Categories from '../categories/Categories';
import Favorites from '../favorites/Favorites';
import SignIn from '../signIn/SignIn';

class Main extends Component {
  
  render(){
    return (
      <div>
        <Header />        
        <Switch>
          <Route path="/home" component={ Home } />
          <Route exact path="/categories" component={ Categories } />
          <Route exact path="/menu" component={ () => <Menu /> } />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/signIn" component={SignIn} />
          <Redirect to="/home" />
        </Switch>         
      </div> 
    )
  }
}

export default Main;