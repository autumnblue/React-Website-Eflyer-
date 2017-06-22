import React, { Component } from 'react';
import { connect } from 'react-redux';
import DesignLeftPanel from './DesignLeftPanel';
import { loadFlyer, saveFlyer } from 'actions/flyers';
import { showNotification } from 'actions/notifications';

class Design extends Component {

  constructor(...args) {
    super(...args);
    this.doAutosave = this.doAutosave.bind(this);
  }

  componentWillMount() {
    const {dispatch, autosave} = this.props;
    autosave || dispatch(loadFlyer());

    setTimeout(this.doAutosave, consts.AUTOSAVE_INTERVAL);
  }

  doAutosave() {
    const {dispatch, autosave, changed, saveFlyerApi, form} = this.props;

    if (autosave && saveFlyerApi.status !== consts.API_LOADING && changed) {
      // flyer has been loaded && not in the middle of auto-saving && flyer has been changed since last save
      dispatch(saveFlyer(form)).then(() => {
        dispatch(showNotification('Flyer saved.'));
      });
    }

    setTimeout(this.doAutosave, consts.AUTOSAVE_INTERVAL);
  }

  render() {
    const {step1Action} = this.props;

    return (
      <div id="page-design" className="page animated fadeIn">
        <DesignLeftPanel/>

        <div id="main">
          <div className="contents">
            <h1>Welcome!</h1>
          </div>
          {
            step1Action === 'USE_PREVIOUS_FLYER' ?
              <div className="page-actions">
                <button className="btn btn-primary btn-submit-flyer">SUBMIT FLYER</button>
                <button className="btn btn-success btn-edit-products">EDIT PRODUCTS</button>
              </div>
              :
              <div className="page-actions">
                <button className="btn btn-info btn-add-products">ADD PRODUCTS</button>
              </div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  autosave: _.get(state, 'flyers.autosave'),
  form: _.get(state, 'flyers.form'),
  changed: _.get(state, 'flyers.changed'),
  saveFlyerApi: _.get(state, 'flyers.saveFlyerApi'),
  step1Action: _.get(state, 'flyers.step1Action')
});

export default connect(mapStateToProps)(Design);
