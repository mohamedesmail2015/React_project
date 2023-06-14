import React, { Component, Fragment } from "react";
import About from "../Components/common/About";

export class AboutPage extends Component {
  constructor() {
    super();
    window.scroll(0, 0)

  }
  render() {
    return (
      <Fragment>
        <About />
      </Fragment>
    );
  }
}

export default AboutPage;
