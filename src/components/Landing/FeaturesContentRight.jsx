import React, { Component, PropTypes } from 'react';

export default class FeaturesContentRight extends Component {

  render() {
    const hr2StyleOpen = {
      borderTop: '2px solid #3eb8d2',
      transition: ' width 0.8s',
      WebkitTransition: ' width 0.8s',
      marginLeft : '0vw',
      width : '29.5vw'
    }
    const hr2StyleClose = {
      borderTop: '2px solid #3eb8d2',
      transition: ' width 0.8s',
      WebkitTransition: ' width 0.8s',
      marginLeft : '0vw',
      width : '15vw'
    }
    const rightContainer = {
      float: 'right',
      marginRight: '18vw',
      marginTop: '3vh',
      width: '25vw',
    }
    const rightContent = {
      width: '30vw',
      color: '#fff',
      WebkitAnimationName: 'slideInRight',
      animationName: 'slideInRight',
      animationDuration: '1s'
    }
    const rightContent2 = {
      width: '30vw',
      color: '#fff',
      animationDelay: '0.2s',
      WebkitAnimationName: 'slideInRight',
      animationName: 'slideInRight',
      animationDuration: '1s'
    }
    const rightContent3 = {
      width: '30vw',
      color: '#fff',
      animationDelay: '0.3s',
      WebkitAnimationName: 'slideInRight',
      animationName: 'slideInRight',
      animationDuration: '1s'
    }

    const iStyle = {
      fontSize: '25px',
      marginRight: '10px',
      color: '#fff'
    }

    return (
      <div style = {rightContainer}>
        <div style = {rightContent}>
          <h4 fontWeight= "600" ><i className="fa fa-html5"  style = {iStyle} aria-hidden="true"/>   Responsive Design </h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in dui ante. Sed ac suscipit lorem, eget dapibus elit. Mauris non convallis lectus. Maecenas ultrice</p>
        </div>
        <br />
        <div style = {rightContent2}>
          <h4 fontWeight= "600" ><i className="fa fa-html5" style = {iStyle} aria-hidden="true"/>   Responsive Design </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in dui ante. Sed ac suscipit lorem, eget dapibus elit. Mauris non convallis lectus. Maecenas ultrice</p>
        </div>
        <br />

      </div>
    );
  }
}
