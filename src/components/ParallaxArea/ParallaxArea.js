import React from 'react';
// import ParallaxBg from '../../images/parallax-bg.jpg';
import mobile from '../../images/mobile.png';
import './ParallaxArea.css';

const ParallaxArea = () => {
    return (
        <section className="parallax_area parallax">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-12">
                        <div className="row">
                            <div className="col-md-12 text-white parallax_details">
                                <h2 className="h2-responsive">Get everything organized. <br/> Build to scale your product.</h2>
                                <p className="p-responsive">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test override the digital divide.</p>
                            </div>
                        </div>
                        <div className="row text-white my-4">
                            <div className="col-md-4 col-sm-12 mb-4">
                                <div className="single_parallax_item">
                                    <div className="single_parallax_icon mb-3">
                                        <span className="material-icons">flip</span>
                                    </div>
                                    <h3 className="h3-responsive">Developers API</h3>
                                    <p className="p-responsive">One of the world’s leading software design systems for everyone.</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 mb-4">
                                <div className="single_parallax_item">
                                    <div className="single_parallax_icon mb-3">
                                        <span className="material-icons">crop</span>
                                    </div>
                                    <h3 className="h3-responsive">Developers API</h3>
                                    <p className="p-responsive">One of the world’s leading software design systems for everyone.</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12 mb-4">
                                <div className="single_parallax_item">
                                    <div className="single_parallax_icon mb-3">
                                        <span className="material-icons">track_changes</span>
                                    </div>
                                    <h3 className="h3-responsive">Developers API</h3>
                                    <p className="p-responsive">One of the world’s leading software design systems for everyone.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 parrallax_mobile">
                        <img className="img-fluid w-100" src={mobile} alt={mobile} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParallaxArea;