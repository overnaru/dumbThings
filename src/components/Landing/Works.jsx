import React, { Component, PropTypes } from 'react';

export default class Works extends Component {


  render() {
    const worksStyle = {
      height : '80vh',
      textAlign: 'center',
      color: '#24242a',
      fontSize: '100px',
      paddingTop: '5vh',
      backgroundImage: 'url("http://konachan.com/jpeg/4319f1573c274946198d7d4d9a0e63a8/Konachan.com%20-%20225086%20animal%20cat%20original%20pusheen%20snatti%20sunglasses.jpg")',
      backgroundSize:'cover'
    }

    return (
      <section style = {worksStyle}>
        Works in Progress...
      </section>
    );
  }
}
