import React, { Component } from 'react'
import Favorate from '../Components/common/Favorate'

export class FavoratePage extends Component {
  constructor() {
    super();
    window.scroll(0, 0)

  }
  render() {
    return (
      <>
        <Favorate />
      </>
    )
  }
}

export default FavoratePage
