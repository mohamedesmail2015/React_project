import React, { Component } from "react";
import HomeTop from "../Components/home/HomeTop";
import Categories from "../Components/home/Categories";
import NewArrival from "../Components/home/NewArrival";
import Collection from "../Components/home/Collection";
import Featured from "../Components/home/Featured";

export class HomePage extends Component {
  constructor() {
    super();
    window.scroll(0, 0);
  }

  render() {
    return (
      <>
        <HomeTop />
        <Categories />
        <NewArrival />
        <Collection />
        <Featured />
      </>
    );
  }
}

export default HomePage;
