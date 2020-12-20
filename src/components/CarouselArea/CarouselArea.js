import React from 'react';
import Slider from "react-slick";
import Slider1 from '../../images/home/slider1.png';
import Slider2 from '../../images/home/slider2.png';
import Slider3 from '../../images/home/slider3.png';
import Slider4 from '../../images/home/slider4.png';
import Slider5 from '../../images/home/slider5.png';
import Slider6 from '../../images/home/slider6.png';
import Slider7 from '../../images/home/slider7.png';
import './CarouselArea.css';

const CarouselArea = () => {
    const settings = {
      dots: false,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    const sliderArray = [
        {
            img: Slider1
        },
        {
            img: Slider2
        },
        {
            img: Slider3
        },
        {
            img: Slider4
        },
        {
            img: Slider5
        },
        {
            img: Slider6
        },
        {
            img: Slider7
        }
    ]
    return (
        <section className="carousel_area bg-white">
            <hr className="my-0" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row py-4">
                            <Slider {...settings}>
                                {
                                    sliderArray.map(slide => (
                                        <div className="col-md-3 col-sm-6">
                                            <div className="single_slider p-2 d-flex justify-content-center">
                                                <img src={slide.img} alt=""/>
                                            </div>
                                        </div>
                                        ))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-0" />
        </section>
    );
};

export default CarouselArea;