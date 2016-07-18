import React, { Component, PropTypes } from 'react';

export default class FeaturesContentLeft extends Component {

  render() {
    const hr2Style = {
      borderTop: '2px solid #3eb8d2'
    }
    const leftContainer = {
      float: 'left',
      marginLeft: '4vw',
      width: '25vw',
    }
    const leftContent = {
      width: '25vw',
      color: '#24242a',
      animationDelay: '0.3s',
      WebkitAnimationName: 'slideInLeft',
      animationName: 'slideInLeft',
      animationDuration: '1s'
    }
    const leftContent2 = {
      width: '25vw',
      color: '#24242a',
      animationDelay: '0.6s',
      WebkitAnimationName: 'slideInLeft',
      animationName: 'slideInLeft',
      animationDuration: '1s'
    }

    const iStyle = {
      fontSize: '30px',
      marginLeft: '10px',
      color: '#3eb8d2'
    }

    return (
      <div style = {leftContainer}>
        <div style = {leftContent}>
          <h4 fontWeight= "600" >Responsive Design <i className="fa fa-html5" style = {iStyle} aria-hidden="true" /></h4>
          <hr style = {hr2Style} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in dui ante. Sed ac suscipit lorem, eget dapibus elit. Mauris non convallis lectus. Maecenas ultrice</p>
        </div>
        <br />
        <div style = {leftContent2}>
          <h4 fontWeight= "600" >Responsive Design<i className="fa fa-html5"  style = {iStyle} aria-hidden="true" /></h4>
          <hr style = {hr2Style} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in dui ante. Sed ac suscipit lorem, eget dapibus elit. Mauris non convallis lectus. Maecenas ultrice</p>
        </div>
      </div>
    );
  }
}
