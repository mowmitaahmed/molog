import React from 'react';
import './HeroContact.css';

const HeroContact = (props) => {
    const title = props.title;
    return (
        <section className="hero_contact_area py-5">
            <div className="container">
                <div className="row text-center text-white">
                    <div className="col-md-12 hero_contact_details">
                        <h1 className="h1-responsive">{title.title}</h1>
                        <p className="p-responsive">{title.subtitle}</p>
                    </div>
                </div>
            </div>
            <div className="overlay"></div>
        </section>
    );
};

export default HeroContact;