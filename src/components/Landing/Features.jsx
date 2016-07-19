import React, { Component, PropTypes } from 'react';
import Waypoint from 'react-waypoint';
import FeaturesContentRight from './FeaturesContentRight';
import { Collapse } from 'react-bootstrap';

export default class Features extends Component {

    constructor(props) {
      super(props);
      this.state = { openfirst: false,
        opensecond: false,
        openthird: false,
        change: 'false' };
   }

   _setNavStyle(bool) {
  this.setState({ change: bool });
  }

  render() {
    const featureStyle = {
      paddingTop: '5vh',
      height : '80vh',
      backgroundColor: '#24242a'
    }
    const topFeatures ={
      backgroundColor:'white',
      paddingTop: '5vh',
      height: '40vh',
      textAlign: 'center',
    }
    const titleAnimation = {
      WebkitAnimationName: 'fadeInUp',
      animationName: 'fadeInUp',
      animationDuration: '1.5s'
    }
    const title = {
      textAlign: 'center',
    }
    const topFeaturesElements = {
      display: 'inline-flex'
    }

    const topFeaturesElement = {
      margin:'5vw',
      width: '20vw'
    }

    const topFeaturesElementi = {
      fontSize: '35px',
      lineHeight: '70px',
      height: '70px',
      width: '70px',
      borderRadius: '50%',
      color: 'white',
      backgroundColor: '#3eb8d2',
      margin: '0 auto'
    }
    const topFeaturesElementiAnimation = {
      WebkitAnimationName: 'rotateIn',
      animationName: 'rotateIn',
      animationDuration: '1s',
      fontSize: '35px',
      lineHeight: '70px',
      height: '70px',
      width: '70px',
      borderRadius: '50%',
      color: 'white',
      backgroundColor: '#3eb8d2',
      margin: '0 auto'
    }

    const letter = {
      color : '#3eb8d2'
    }

    const h1Size = {
      margin: '0',
      fontSize: '45px'
    }

    const divImageStyle = {
      float: 'left',
      width: '50vw',
      margin : '0 auto'
    }

    const divImageStyleAnimation = {
      float: 'left',
      width: '50vw',
      WebkitAnimationName: 'fadeInUp',
      animationName: 'fadeInUp',
      animationDuration: '1.5s',
    }

    const imageStyle = {
      maxWidth: '80%',
      height:'30vh',
      marginTop: '2vh',
      marginLeft : '8vw'
    }

    return (
      <section style = {featureStyle}>
        <Waypoint
          onEnter={this._setNavStyle.bind(this, 'true')}
          threshold={0}
        />
      <div style = {topFeatures}>
        <div style = {this.state.change === 'true' ? titleAnimation : title}>
          <h1 style= {h1Size} ><span style = {letter} >S</span>tart your <span style = {letter} >Pr</span>oyect with us</h1>
        </div>
        <div style={topFeaturesElements}>
          <div style = {topFeaturesElement}>
            <div style = {this.state.change === 'true' ? topFeaturesElementiAnimation : topFeaturesElementi} onClick={ ()=> this.setState({ openfirst: !this.state.openfirst })}>
              <i className="fa fa-html5"  aria-hidden="true"/></div>
              <h4>Responsive Design </h4>
                <Collapse in={this.state.openfirst}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in dui ante.</p>
                </ Collapse>
          </div>
          <div style = {topFeaturesElement}>
            <div style = {this.state.change === 'true' ? topFeaturesElementiAnimation : topFeaturesElementi} onClick={ ()=> this.setState({ opensecond: !this.state.opensecond })}>
              <i className="fa fa-html5"  aria-hidden="true"/></div>
              <h4>Responsive Design </h4>
                <Collapse in={this.state.opensecond}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in dui ante.</p>
                </ Collapse>
          </div>
          <div style = {topFeaturesElement}>
            <div style = {this.state.change === 'true' ? topFeaturesElementiAnimation : topFeaturesElementi} onClick={ ()=> this.setState({ openthird: !this.state.openthird })}>
              <i className="fa fa-html5"  aria-hidden="true"/></div>
              <h4>Responsive Design </h4>
                <Collapse in={this.state.openthird}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in dui ante.</p>
                </ Collapse>
          </div>
        </div>
      </div>
          <div style = {this.state.change === 'true' ? divImageStyleAnimation : divImageStyle} >
            <img style = {imageStyle} src= "http://mightytext.net/mighty-website/img/feat-01-03.png"/>
          </div>
          {this.state.change === 'true' ? <FeaturesContentRight /> : ''}
      </section>
    );
  }
}
