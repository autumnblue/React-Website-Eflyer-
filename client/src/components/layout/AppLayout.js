import React, { Component } from 'react';

export default class AppLayout extends Component {
  render() {
    return (
      <div className="root">
        {this.props.children}
      </div>
    );
  }
}
