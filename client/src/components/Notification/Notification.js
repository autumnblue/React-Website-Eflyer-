import React, { Component } from 'react';
import { connect } from 'react-redux';

class Notification extends Component {

  render() {
    const { notifications } = this.props;
    if (!notifications.length) {
      return null;
    }
    return (
      <div className="top-notification">
        {notifications[notifications.length - 1]}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  notifications: _.get(state, 'notifications', [])
});

export default connect(mapStateToProps)(Notification);
