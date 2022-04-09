import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import Information from "parts/Information";
import Featured from "parts/Featured";
import Contact from "parts/Contact";
import Footer from "parts/Footer";

import landingPage from "json/landingPage.json";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refInformation = React.createRef();
    this.refFeatured = React.createRef();
    this.refContact = React.createRef();
  }

  render() {
    return (
      <div>
        <Header
          refFeatured={this.refFeatured}
          refContact={this.refContact}
          {...this.props}
        />
        <Hero refInformation={this.refInformation}></Hero>
        <Information
          refInformation={this.refInformation}
          data={landingPage.information}
        />
        <Featured refFeatured={this.refFeatured} data={landingPage.featured} />
        <Contact refContact={this.refContact} {...this.props} />
        <Footer {...this.props} />
      </div>
    );
  }
}
