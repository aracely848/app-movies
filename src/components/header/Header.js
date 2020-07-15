import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './header.css';

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
        <Navbar color="faded" light expand="md" className="options">
          <div className="allHeader">            
            <NavbarBrand className="mr-auto" href="/">
              <img src="assets/images/logo.png" alt="Movies" className="img-fluid"/>
            </NavbarBrand>
            <NavbarToggler onClick={ this.toggleNav } />
            <Collapse isOpen={this.state.isNavOpen} navbar className="header">
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
                  <NavLink className="nav-link" to="/sign-in">
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