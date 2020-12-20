import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeroContact from '../HeroContact/HeroContact';
import HowItMainArea from '../HowItMainArea/HowItMainArea';
import FooterArea from '../FooterArea/FooterArea';

const HowItWorks = () => {
    const pageTitle = {
        title: 'How Partipost Works'
    }
    return (
        <div>
            <Navbar />
            <HeroContact title={pageTitle} />
            <HowItMainArea />
            <FooterArea />
        </div>
    );
};

export default HowItWorks;