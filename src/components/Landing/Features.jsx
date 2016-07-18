import React, { Component, PropTypes } from 'react';
import Waypoint from 'react-waypoint';
import FeaturesContentLeft from './FeaturesContentLeft';
import FeaturesContentRight from './FeaturesContentRight';

export default class Features extends Component {

    constructor(props) {
      super(props);
      this.state = { change: 'false' };
   }

   _setNavStyle(bool) {
  this.setState({ change: bool });
  }

  render() {
    const featureStyle = {
      height : '80vh'
    }
    const titleAnimation = {
      marginTop: '8vh',
      textAlign: 'center',
      marginBottom: '5vh',
      WebkitAnimationName: 'fadeInDown',
      animationName: 'fadeInDown',
      animationDuration: '1.5s'
    }
    const title = {
      marginTop: '8vh',
      textAlign: 'center',
      marginBottom: '5vh',
    }
    const letter = {
      color : '#3eb8d2'
    }
    const h1Size = {
      fontSize: '45px'
    }
    const hrStyle = {
      width: '15vw',
      border: '2px solid #3eb8d2',
      marginBottom: '5vh'
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
      marginTop: '8vh',
      marginLeft : '8vw'
    }

    return (
      <section style = {featureStyle}>
        <Waypoint
          onEnter={this._setNavStyle.bind(this, 'true')}
          threshold={0}
        />
      <div style = {this.state.change === 'true' ? titleAnimation : title}>
          <h1 style= {h1Size} ><span style = {letter} >S</span>tart your <span style = {letter} >Pr</span>oyect with us</h1>
        </div>
        <hr style = {hrStyle}/>
          <div style = {this.state.change === 'true' ? divImageStyleAnimation : divImageStyle} >
            <img style = {imageStyle} src= "http://mightytext.net/mighty-website/img/feat-01-03.png"/>
          </div>
          {this.state.change === 'true' ? <FeaturesContentRight /> : ''}
      </section>
    );
  }
}
