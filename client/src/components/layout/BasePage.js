import React, { Component } from 'react';
import Footer from 'components/layout/Footer';

export default class BasePage extends Component {
  render() {
    return (
      <div className="root">
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}
