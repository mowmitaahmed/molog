import React from 'react';
import Mac from '../../images/mac.png';
import './HeroArea.css';

const HeroArea = () => {
    return (
        <section className="hero_area">
            <div className="container">
                <div className="row hero">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="hero_details text-center text-white">
                            <h1 className="h1-responsive">Experience The Power Of Word-Of-Mouth Marketing At Large Scale</h1>
                            <p className="p-responsive py-2">Internet gives you full power to target any potential prospects in the world. You can reach out to people to any country.</p>
                            <button className="btn bg-white rounded border px-4 py-2 hvr-shadow mb-5" type="submit">FREE CONSULTATION</button>
                        </div>
                        <div className="hero_image">
                            <img className="img-fluid pt-4" src={Mac} alt={Mac} />
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
            {/* Circle Animation */}
            <div className="tb-circle-shape-wrap">
                <div className="tb-circle-shape1"></div>
                <div className="tb-circle-shape2"></div>
                <div className="tb-circle-shape3"></div>
            </div>
            {/* Wave Animation */}
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
        </section>
    );
};

export default HeroArea;