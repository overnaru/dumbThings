import React, { Component, PropTypes } from 'react';
import FadeCarousel from './FadeCarousel';
import MyNavbar from './MyNavbar';
import Features from './Features';
import Waypoint from 'react-waypoint';
import Works from './Works';

export default class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = { change: 'false' };
 }

 _setNavStyle(bool) {
this.setState({ change: bool });
}
  render() {
    return (
      <div >
          <MyNavbar changeNav={this.state.change} />
          <FadeCarousel />
          <Features />
          <Waypoint
            onEnter={this._setNavStyle.bind(this, 'true')}
            onLeave={this._setNavStyle.bind(this, 'false')}
            threshold={0}
          />
          <Works />

      </div>
    );
  }
}
