import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Route, IndexRedirect } from 'react-router';
import requireAuth from './require-auth';

// import App from '../components/Layout/App';
// import BasePage from '../components/Layout/BasePage';
// import Home from './home/Home';
// import LoginRequired from './public-pages/LoginRequired';
// import NotFound from './public-pages/NotFound';
//
// const routes = (
//   <Route>
//     <Route path="/" component={App} onEnter={requireAuth}>
//
//       {/* Default route*/}
//       <IndexRedirect to="home" />
//
//       <Route path="home" component={Home}/>
//
//     </Route>
//
//     <Route path="/" component={BasePage}>
//       <Route path="login-required" component={LoginRequired}/>
//
//       {/* Not found handler */}
//       <Route path="*" component={NotFound}/>
//     </Route>
//   </Route>
// );
const routes = null;

export default class Routes extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        {routes}
      </Router>
    );
  }
}

Routes.propTypes = {
  history: PropTypes.object.isRequired
};
