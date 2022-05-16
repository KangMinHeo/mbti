import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import travel from '../image/back/travel.jpg';
import airplane from '../image/back/airplane.jpg';
import maldive from '../image/back/maldives.jpg';

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 5000,
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: false,
            centerMode: true,
            centerPadding: "0px"
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img src={travel} alt="여행"/>
                    </div>
                    <div>
                        <img src={maldive} alt="비행기"/>
                    </div>
                    <div>
                        <img src={airplane} alt="몰디브"/>
                    </div>
                </Slider>
            </div>);
    }
}
