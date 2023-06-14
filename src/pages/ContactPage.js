import React, { Component, Fragment } from 'react'
import Contact from '../Components/common/Contact'

export class ContactPage extends Component {
  constructor() {
    super();
    window.scroll(0, 0)

  }
  render() {
    return (
      <Fragment>
        <Contact />
      </Fragment>
    )
  }
}

export default ContactPage
