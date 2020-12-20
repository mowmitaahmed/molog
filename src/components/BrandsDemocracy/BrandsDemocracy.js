import React from 'react';
import { Link } from 'react-router-dom';
import './BrandsDemocracy.css';

const BrandsDemocracy = () => {
    return (
        <section className="brands_democracy_area py-5 bg-white">
            <div className="container">
                <div className="row my-4">
                    <div className="col-md-12 text-center pb-4 brands_democracy_top">
                        <h2 className="h2-responsive">Brands Democracy</h2>
                        <p className="p-responsive">Your campaign - For the people, by the people and of the people.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-6 text-center mb-3">
                        <div className="single_brands_democracy border rounded py-5 px-3 hvr-float-shadow mx-2">
                           <span className="material-icons">phonelink</span>
                           <h3 className="h3-responsive">Create a campaign</h3>
                           <p className="p-responsive">On which social platform you want to promote and set the standards for influencers.</p>
                           <Link to="/" target="_self" className="btn tb-btn tb-style1">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 text-center mb-3">
                        <div className="single_brands_democracy border rounded py-5 px-3 hvr-float-shadow mx-2">
                           <span className="material-icons">archive</span>
                           <h3 className="h3-responsive">Your campaign goes live</h3>
                           <p className="p-responsive">After done with all the required parameters, your campaign goes live on our Everipost app and ready to accept submissions.</p>
                           <Link to="/" target="_self" className="btn tb-btn tb-style1">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 text-center mb-3">
                        <div className="single_brands_democracy border rounded py-5 px-3 hvr-float-shadow mx-2">
                           <span className="material-icons">flip</span>
                           <h3 className="h3-responsive">Select and Approve</h3>
                           <p className="p-responsive">You can review all the content on your dashboard where you can choose influencers on the basis of quality of content, followers, engagement ratio and other parameters.</p>
                           <Link to="/" target="_self" className="btn tb-btn tb-style1">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 text-center mb-3">
                        <div className="single_brands_democracy border rounded py-5 px-3 hvr-float-shadow mx-2">
                           <span className="material-icons">grid_on</span>
                           <h3 className="h3-responsive">Experience</h3>
                           <p className="p-responsive">Everiposters will post approved content on their social media and share it with their loyal followers.</p>
                           <Link to="/" target="_self" className="btn tb-btn tb-style1">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandsDemocracy;