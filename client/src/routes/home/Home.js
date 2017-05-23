import React, { Component } from 'react';
import { hashHistory }  from 'react-router';
import { LeftPanel, Accordion, Section } from '../../components/left-panel';

export default class Home extends Component {

  constructor(...args) {
    super(...args);
    this.onUsePreviousClick = this.onUsePreviousClick.bind(this);
    this.onCreateNewClick = this.onCreateNewClick.bind(this);
  }

  onUsePreviousClick() {
    hashHistory.push('/design');
  }

  onCreateNewClick() {
    hashHistory.push('/design');
  }

  render() {
    return (
      <div id="page-home" className="page responsive animated fadeIn">
        <LeftPanel>
          <Accordion>
            <Section title="CONTACT INFO" collapsible={false}>
              <div className="form-group">
                <input className="form-control" id="contact_name" name="contact_name" placeholder="Contact Name"/>
              </div>
              <div className="form-group">
                <input className="form-control" id="contact_email" name="contact_email" placeholder="Contact Email"/>
              </div>
              <div className="form-group">
                <input className="form-control" id="contact_phone" name="contact_phone" placeholder="Contact Phone"/>
              </div>
            </Section>
          </Accordion>
        </LeftPanel>

        <div id="main">
          <div className="contents">
            <div className="home-action" id="use-previous-flyer" onClick={this.onUsePreviousClick}>USE PREVIOUS FLYER</div>
            <div className="home-action" id="create-new-flyer" onClick={this.onCreateNewClick}>CREATE NEW FLYER</div>
          </div>
        </div>
      </div>
    );
  }
}
