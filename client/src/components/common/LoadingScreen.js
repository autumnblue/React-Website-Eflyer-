import React, { Component } from 'react';

export default class LoadingScreen extends Component {
  render() {
    return (
      <div id="loading-page" className="root">
        <div className="page">
          <div className="contents">
            <div className="logo">
              <img src="/img/placeholder.png" height="100px" alt="E-Flyer"/>
            </div>
            <div className="spinner">
              <img src="/img/spinner-md.gif"/>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="copyright">
            E-Flyer &copy; 2017
          </div>
        </div>
      </div>
    );
  }
}
