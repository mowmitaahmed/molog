import React from 'react';
import GetInTouch from '../GetInTouch/GetInTouch';
import HeroContact from '../HeroContact/HeroContact';
import JoinCommunity from '../JoinCommunity/JoinCommunity';
import FooterArea from '../FooterArea/FooterArea';
import Navbar from '../Navbar/Navbar';

const Contact = () => {
    const ContactArray = {
        title: 'We value your time.',
        subtitle: 'Tell us about your project & build it together.'
    }
    return (
        <section>
            <Navbar />
            <HeroContact title={ContactArray} />
            <GetInTouch />
            <JoinCommunity />
            <FooterArea />
        </section>
    );
};

export default Contact;