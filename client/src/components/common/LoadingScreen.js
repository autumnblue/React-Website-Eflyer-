import React, { Component } from 'react';
import Loading from 'react-loading';
import Footer from 'components/layout/Footer';

export default class LoadingScreen extends Component {
  render() {
    return (
      <div id="page-loading" className="root">
        <div className="page">
          <div className="contents">
            <div className="logo">
              <img src="/img/logo.png" alt="E-Flyer"/>
              <h1>Welcome to E-Flyer!</h1>
            </div>
            <Loading type="spin"className="spinner"/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
