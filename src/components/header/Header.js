import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './header.scss';

class Header extends Component {

  constructor(props){
    super(props);    
    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render(){

    return(
      <React.Fragment>
        <Navbar color="faded" light expand="md" className="header">
          <div className="header__container">            
            <NavbarBrand className="mr-auto" href="/">
              <img src="assets/images/logo.png" alt="Movies" className="img-fluid"/>
            </NavbarBrand>
            <NavbarToggler onClick={ this.toggleNav } />
            <Collapse isOpen={this.state.isNavOpen} navbar className="header__menu">
              <Nav navbar >
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    HOME
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/categories">
                    CATEGORIES
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/favorites">
                    MY FAVORITES
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/signIn">
                    SIGN IN
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;