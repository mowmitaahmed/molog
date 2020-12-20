import React from 'react';
import './ImageComperission.css';
import Slider1 from '../../images/slider1.png';
import Slider2 from '../../images/slider2.png';
import ImageSlider from "react-image-comparison-slider";

const ImageComperission = () => {
    return (
        <section className="image_comparission_area border-bottom bg-white">
            <div className="container">
                <div className="row">
                    <div style={{ width: 545, height: 400 }} className="col-md-6">
                        <ImageSlider sliderColor="white" handleColor="black"
                            image1={Slider2}
                            image2={Slider1}
                            onSlide={() => {
                            console.log("sliding");
                            }}
                        />
                    </div>
                    <div className="col-md-6 image_comparission_details ps-5 py-4">
                        <h2 className="mt-4 mb-3">We analyze your business from every direction.</h2>
                        <ul className="list-unstyled">
                            <li className="my-2"><span className="material-icons">check_circle</span> Wollo Token Sale Starts 5th September at Midday</li>
                            <li className="my-2"><span className="material-icons">check_circle</span> Educating children about the future of money</li>
                            <li className="my-2"><span className="material-icons">check_circle</span> World’s first token sale with a tangible reward</li>
                        </ul>
                        <button type="button" className="btn text-white me-4 my-2 py-2 px-4 hvr-float-shadow">Get A Free Consultation</button>
                        <button type="button" className="btn light_button my-2 py-2 px-4">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageComperission;