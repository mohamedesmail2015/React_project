import React, { Component } from "react";
import "../../assets/css/HomeSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgSlider1 from "../../assets/images/shuffle-01.jpg";
import imgSlider2 from "../../assets/images/shuffle-02.jpg";
import imgSlider3 from "../../assets/images/shuffle-03.jpg";
import imgSlider4 from "../../assets/images/shuffle-04.jpg";
import imgSlider5 from "../../assets/images/shuffle-05.jpg";
import imgSlider6 from "../../assets/images/shuffle-06.jpg";

export class HomeSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={imgSlider1} alt="Logo" className="imgSlider" />
          </div>
          <div>
            <img src={imgSlider2} alt="Logo" className="imgSlider" />
          </div>
          <div>
            <img src={imgSlider3} alt="Logo" className="imgSlider" />
          </div>
          <div>
            <img src={imgSlider4} alt="Logo" className="imgSlider" />
          </div>
          <div>
            <img src={imgSlider5} alt="Logo" className="imgSlider" />
          </div>
          <div>
            <img src={imgSlider6} alt="Logo" className="imgSlider" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default HomeSlider;
