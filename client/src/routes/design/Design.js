import React, { Component } from 'react';
import { connect } from 'react-redux';
import DesignLeftPanel from './DesignLeftPanel';
import { loadFlyer } from 'actions/flyers';

class Design extends Component {

  componentWillMount() {
    const {dispatch, autosave} = this.props;
    autosave || dispatch(loadFlyer());
  }

  render() {
    return (
      <div id="page-design" className="page animated fadeIn">
        <DesignLeftPanel/>

        <div id="main">
          <div className="contents">
            <h1>Welcome!</h1>
          </div>
          <div className="page-actions">
            <button className="btn btn-primary btn-submit-flyer">SUBMIT FLYER</button>
            <button className="btn btn-success btn-edit-products">EDIT PRODUCTS</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  autosave: _.get(state, 'flyers.autosave')
});

export default connect(mapStateToProps)(Design);
