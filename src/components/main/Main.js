import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../header/Header';
import Home from '../home/Home';
import Menu from '../menu/Menu';
import Categories from '../categories/Categories';
import Favorites from '../favorites/Favorites';
import SignIn from '../signIn/SignIn';
import { MOVIES } from '../movies';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: MOVIES
    };
  }
    render(){
      const HomePage = () => {
        return (
          <Home movies={this.state.movies}
          /> 
        );
      }
        return (
            <div>
            <Header />
            <div>
               <Switch>
                <Route path="/home" component={ HomePage } />
                <Route exact path="/categories" component={ Categories } />
                <Route exact path="/menu" component={ () => <Menu movies={this.state.movies}/> } />
                <Route exact path="/favorites" component={Favorites} />
                <Route exact path="/signIn" component={SignIn} />
                <Redirect to="/home" />
              </Switch> 
            </div>
          </div> 
        )
    }
}

export default Main;