import React, { Component, PropTypes } from 'react';
import { Button, Collapse } from 'react-bootstrap';
export default class FeaturesContentRight extends Component {
  constructor(props) {
    super(props);
    this.state = { openfirst: false,
     opensecond: false,
    };
  }

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
      color: '#24242a',
      WebkitAnimationName: 'slideInRight',
      animationName: 'slideInRight',
      animationDuration: '1s'
    }
    const rightContent2 = {
      width: '30vw',
      color: '#24242a',
      animationDelay: '0.2s',
      WebkitAnimationName: 'slideInRight',
      animationName: 'slideInRight',
      animationDuration: '1s'
    }
    const rightContent3 = {
      width: '30vw',
      color: '#24242a',
      animationDelay: '0.3s',
      WebkitAnimationName: 'slideInRight',
      animationName: 'slideInRight',
      animationDuration: '1s'
    }

    const iStyle = {
      fontSize: '30px',
      marginLeft: '10px',
      color: '#3eb8d2'
    }

    return (
      <div style = {rightContainer}>
        <div style = {rightContent}>
          <h4 fontWeight= "600" >Responsive Design <i className="fa fa-html5"  style = {iStyle} aria-hidden="true" onClick={ ()=> this.setState({ openfirst: !this.state.openfirst })}/></h4>
          <hr style = {this.state.openfirst ? hr2StyleOpen : hr2StyleClose} />
          <Collapse in={this.state.openfirst}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in dui ante. Sed ac suscipit lorem, eget dapibus elit. Mauris non convallis lectus. Maecenas ultrice</p>
          </ Collapse>
        </div>
        <br />
        <div style = {rightContent2}>
          <h4 fontWeight= "600" >Responsive Design <i className="fa fa-html5" style = {iStyle} aria-hidden="true" onClick={ ()=> this.setState({ opensecond: !this.state.opensecond })}/></h4>
          <hr  style = {this.state.opensecond ? hr2StyleOpen : hr2StyleClose} />
            <Collapse in={this.state.opensecond}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in dui ante. Sed ac suscipit lorem, eget dapibus elit. Mauris non convallis lectus. Maecenas ultrice</p>
            </ Collapse>
        </div>
      </div>
    );
  }
}
