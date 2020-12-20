import React from 'react';
import TextLoop from "react-text-loop";
import HeroImage from '../../images/home/heroimage.png';
import './HomeHero.css';

const HomeHero = () => {
    return (
        <section className="home_hero_area bg-white">
            <hr className="mt-0" />
            <div className="container">
                <div className="row text-center mb-5">
                    <div className="col-md-12">
                        <h1 className="h1-responsive mt-5 pt-4 mb-3">We help ambitious brands <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
        <span>success</span>
        <span>thrive</span>
        <span>engage</span>
      </TextLoop>.</h1>
                        <p>Internet gives you full power to target any potential prospects in <br/>
                    the world. You can reach out to people to any country.</p>
                        <form className="tb-hero-form tb-style1">
                            <input className="mb-2" type="email" name="ne" required="" placeholder="Enter Your Email Adress" />
                            <button className="btn text-white btn-primary py-2 px-4 hvr-glow mb-2">Get in Touch Today</button>
                        </form>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="hero_image">
                            <img className="w-100 mb-2 img-fluid" src={HeroImage} alt={HeroImage} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;