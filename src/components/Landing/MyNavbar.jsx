import React, { Component, PropTypes } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';



export default class MyNavbar extends Component {

   render() {
     const navStyle1 = {
      background: 'rgba(36, 36, 42, 0)',
      border : 'none',
      transition: '0.8s',
      WebkitTransition: '0.8s',
      height: '10vh',
      fontSize: '14px',
      color: '#fff',
      fontWeight: '700',
      textTransform: 'uppercase'

    }
    const navStyle2 = {
      marginBottom : '0',
      border : 'none',
      background: '#24242a',
      transition: '0.8s',
      WebkitTransition: '0.8s',
      height: '8.5vh',
      fontSize: '14px',
      color: '#fff',
      fontWeight: '700',
      textTransform: 'uppercase'

   }

   const logoStyle1 = {
     height: '15vh',
     marginLeft: '7vw',
     transition: '0.8s',
     WebkitTransition: '0.8s',
    marginTop: '-2.2vh'
   }

   const logoStyle2 = {
     height: '11vh',
     marginLeft: '7vw',
     transition: '0.8s',
     WebkitTransition: '0.8s',
    marginTop: '-1.4vh'
   }

   const navItem1 = {
     transition: '0.8s',
     WebkitTransition: '0.8s',
     transform: 'translate(7vw, 1.4vh)'
   }
   const navItem2 = {
     transition: '0.8s',
     WebkitTransition: '0.8s',
     transform: 'translate(10vw, 2.2vh)'
   }
   const followStyle1 = {
     fontSize: '26px',
     transform: 'translate(-13vw, 1.2vh)',
     transition: '0.8s',
     WebkitTransition: '0.8s'
   }

   const followStyle2 = {
     fontSize: '26px',
     transform: 'translate(-10vw, 2.2vh)',
     transition: '0.8s',
     WebkitTransition: '0.8s'
   }
     return (
      <Navbar fixedTop = {true} style={this.props.changeNav === 'true' ? navStyle2 : navStyle1 } >
        <Navbar.Header>
          <Navbar.Brand>
            <img src = "http://vignette1.wikia.nocookie.net/ssb/images/1/1c/PokemonSymbol(preBrawl).svg/revision/latest?cb=20150826022020"
            style={this.props.changeNav === 'true' ? logoStyle2 : logoStyle1 }/>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav style={this.props.changeNav === 'true' ? navItem1 : navItem2 }>
            <NavItem eventKey={1} href="#">HOME</NavItem>
            <NavItem eventKey={2} href="#">FEATURES</NavItem>
            <NavItem eventKey={3} href="#">WORKS</NavItem>
            <NavItem eventKey={4} href="#">ABOUT</NavItem>
            <NavItem eventKey={5} href="#">CONTACT</NavItem>
          </Nav>
          <Nav pullRight style={this.props.changeNav === 'true' ? followStyle1 : followStyle2 }>
            <NavItem eventKey={1} href="#"> <i className="fa fa-facebook" aria-hidden="true" /></NavItem>
            <NavItem eventKey={2} href="#"><i className="fa fa-twitter" aria-hidden="true" /></NavItem>
            <NavItem eventKey={3} href="#"><i className="fa fa-google-plus" aria-hidden="true" /></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     );
   }
}

MyNavbar.propTypes = {
    changeNav: PropTypes.string
  };
