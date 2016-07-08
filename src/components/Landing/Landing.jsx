import React, { Component, PropTypes } from 'react';

export default class Landing extends Component {
  render() {

    const  DivStyle = {
    opacity: '0.5',
    backgroundColor: 'rgb(0, 168, 133)'
};
    return (
      <div style={DivStyle}>
          <h1>hello world</h1>
      </div>
    );
  }
}
