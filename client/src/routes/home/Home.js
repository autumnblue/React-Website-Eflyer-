/* eslint-disable max-len */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LeftPanel, Accordion, Section } from 'components/left-panel';
import { loadCompany } from 'actions/company';
import { loadFlyer, changeFlyer, saveFlyer, createFlyer } from 'actions/flyers';
import UiValidate from 'components/forms/UIValidate';
import ConfirmBox from 'components/modals/ConfirmBox';

class Home extends Component {

  constructor(...args) {
    super(...args);
    this.onFieldChange = this.onFieldChange.bind(this);
    this.onUsePreviousClick = this.onUsePreviousClick.bind(this);
    this.onCreateNewClick = this.onCreateNewClick.bind(this);
    this.createNewFlyer = this.createNewFlyer.bind(this);
    this.onConfirmNewFlyerYes = this.onConfirmNewFlyer.bind(this, true);
    this.onConfirmNewFlyerNo = this.onConfirmNewFlyer.bind(this, false);

    this.state = {
      confirmNewFlyerModalVisible: false
    };
  }

  componentWillMount() {
    const {companyInfo, autosave} = this.props;
    companyInfo || this.props.dispatch(loadCompany());
    autosave || this.props.dispatch(loadFlyer());
  }

  onFieldChange(e) {
    const field = $(e.currentTarget).data('field');
    this.props.dispatch(changeFlyer({ [field]: e.currentTarget.value }));
  }

  onUsePreviousClick() {
    const { dispatch, autosave, createFlyerApi, saveFlyerApi } = this.props;

    if (createFlyerApi.status === consts.API_LOADING || saveFlyerApi.status === consts.API_LOADING) {
      return;
    }

    const form = $('#contact-info-form');
    if (autosave && form.valid()) {
      dispatch(saveFlyer({
        contactName: $('#contact-info-form #contactName').val(),
        contactEmail: $('#contact-info-form #contactEmail').val(),
        contactPhone: $('#contact-info-form #contactPhone').val()
      }, '/design'));
    }
  }

  onCreateNewClick() {
    const { autosave, createFlyerApi, saveFlyerApi } = this.props;

    if (createFlyerApi.status === consts.API_LOADING || saveFlyerApi.status === consts.API_LOADING) {
      return;
    }

    const form = $('#contact-info-form');
    if (form.valid()) {
      if (autosave) {
        this.setState({ confirmNewFlyerModalVisible: true });
      } else {
        this.createNewFlyer();
      }
    }
  }

  onConfirmNewFlyer(yes) {
    if (yes) {
      this.createNewFlyer();
    }
    this.setState({ confirmNewFlyerModalVisible: false });
  }

  createNewFlyer() {
    this.props.dispatch(createFlyer({
      contactName: $('#contact-info-form #contactName').val(),
      contactEmail: $('#contact-info-form #contactEmail').val(),
      contactPhone: $('#contact-info-form #contactPhone').val()
    }, '/design'));
  }

  render() {
    const {loadCompanyApi, autosave, form, createFlyerApi, saveFlyerApi} = this.props;

    const contactName = typeof form.contactName === 'string' ? form.contactName : _.get(loadCompanyApi, 'contact', '');
    const contactEmail = typeof form.contactEmail === 'string' ? form.contactEmail : _.get(loadCompanyApi, 'email', '');
    const contactPhone = typeof form.contactPhone === 'string' ? form.contactPhone : _.get(loadCompanyApi, 'MemberLocation.phone', '');

    return (
      <div id="page-home" className="page responsive animated fadeIn">
        <LeftPanel>
          <Accordion>
            <Section title="CONTACT INFO" collapsible={false}>
              <UiValidate>
                <form id="contact-info-form">
                  <div className="form-group">
                    <input className="form-control" id="contactName" name="contactName" placeholder="Contact Name"
                           value={contactName} data-field="contactName" onChange={this.onFieldChange}
                           data-validate-input="" data-required="" data-message-required=""/>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="contactEmail" name="contactEmail" placeholder="Contact Email"
                           value={contactEmail} data-field="contactEmail" onChange={this.onFieldChange}
                           data-validate-input="" data-required="" data-email="" data-message-required="" data-message-email=""/>
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="contactPhone" name="contactPhone" placeholder="Contact Phone"
                           value={contactPhone} data-field="contactPhone" onChange={this.onFieldChange}
                           data-validate-input="" data-required="" data-message-required=""/>
                  </div>
                </form>
              </UiValidate>
            </Section>
          </Accordion>
        </LeftPanel>

        <div id="main">
          <div className="contents">
            <div className="home-actions">
              {
                autosave ?
                  <div id="use-previous-flyer" onClick={this.onUsePreviousClick}>
                    {
                      saveFlyerApi.status === consts.API_LOADING ?
                        <img src="/img/loading1.gif"/> : 'USE PREVIOUS FLYER'
                    }
                  </div>
                  : null
              }
              <div id="create-new-flyer" onClick={this.onCreateNewClick}>
                {
                  createFlyerApi.status === consts.API_LOADING ?
                    <img src="/img/loading1.gif"/> : 'CREATE NEW FLYER'
                }
              </div>
            </div>
          </div>
        </div>

        {
          this.state.confirmNewFlyerModalVisible ?
            <ConfirmBox id="confirm-new-flyer-modal" visible={this.state.confirmNewFlyerModalVisible}
                        text="Creating a new flyer will delete the previous flyer. Continue?"
                        onYes={this.onConfirmNewFlyerYes} onNo={this.onConfirmNewFlyerNo}/>
            : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  companyInfo: _.get(state, 'company.info'),
  autosave: _.get(state, 'flyers.autosave'),
  form: _.get(state, 'flyers.form'),
  createFlyerApi: _.get(state, 'flyers.createFlyerApi'),
  saveFlyerApi: _.get(state, 'flyers.saveFlyerApi')
});

export default connect(mapStateToProps)(Home);
