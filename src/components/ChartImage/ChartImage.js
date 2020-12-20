import React from 'react';
import './ChartImage.css';

const ChartImage = (props) => {
    console.log('Analyze:', props);
    return (
        <section className="chart_image_area border-top border-bottom bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 chart_image_details">
                        <h2 className="mt-4 mb-3">We analyze your business from every direction.</h2>
                        <ul className="list-unstyled">
                            <li className="my-2"><span className="material-icons">check_circle</span> Wollo Token Sale Starts 5th September at Midday</li>
                            <li className="my-2"><span className="material-icons">check_circle</span> Educating children about the future of money</li>
                            <li className="my-2"><span className="material-icons">check_circle</span> World’s first token sale with a tangible reward</li>
                        </ul>
                        <button type="button" className="btn text-white me-4 my-2 py-2 px-4 hvr-float-shadow">Get A Free Consultation</button>
                        <button type="button" className="btn light_button my-2 py-2 px-4">Learn More</button>
                    </div>
                    <div className="col-md-6 pe-5">
                        <img className="img-fluid float-right" src={props.img} alt={props.img}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChartImage;
