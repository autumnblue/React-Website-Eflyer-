import React, { Component } from 'react';
import { LeftPanel, Accordion, Section } from '../../components/left-panel';

export default class Home extends Component {

  constructor(...args) {
    super(...args);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    $('#root').toggleClass('sidebar-minified');
  }

  render() {
    return (
      <div id="page-design" className="page animated fadeIn">
        <LeftPanel>
          <Accordion>
            <Section title="COVER" collapsible={true} defaultCollapsed={false}>
              Preloaded images
            </Section>
            <Section title="COLOR" collapsible={true} defaultCollapsed={true}>
              Preloaded color selections
            </Section>
            <Section title="COMPANY INFO" collapsible={true} defaultCollapsed={true}>
              <div className="form-group">
                <input className="form-control" id="company_name" name="company_name" placeholder="Company Name"/>
              </div>
              <div className="form-group">
                <input className="form-control" id="company_address" name="company_address" placeholder="Company Address"/>
              </div>
              <div className="form-group">
                <input className="form-control" id="company_phone" name="company_phone" placeholder="Company Phone"/>
              </div>
              <div className="form-group">
                <input className="form-control" id="company_website" name="company_website" placeholder="Company Website"/>
              </div>
              <div className="form-group">
                <textarea className="form-control" rows="5" id="company_description" name="company_description" placeholder="About Us"/>
              </div>
            </Section>
            <Section title="FLYER NAME" collapsible={true} defaultCollapsed={true}>
              <input className="form-control" id="flyer_name" name="flyer_name" placeholder="Flyer Name"/>
            </Section>
          </Accordion>
        </LeftPanel>

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
