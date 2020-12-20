import React from 'react';
import './AboutHero.css';

const AboutHero = () => {
    return (
        <section className="about_area">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 py-5 my-5">
                        <h2 className="h2-responsive text-center text-white py-5 my-5">A Strategy-Focused Marketing Team.</h2>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
            <div className="overlay"></div>
        </section>
    );
};

export default AboutHero;