import React from 'react';
import FooterArea from '../FooterArea/FooterArea';
import GetInTouch from '../GetInTouch/GetInTouch';
import HeroContact from '../HeroContact/HeroContact';
import JoinCommunity from '../JoinCommunity/JoinCommunity';
import Navbar from '../Navbar/Navbar';

const Faq = () => {
    const FaqArray ={
            title: 'FAQ'
        }
    return (
        <div>
            <Navbar />
            <HeroContact title={FaqArray}/>
            <GetInTouch />
            <JoinCommunity />
            <FooterArea />
        </div>
    );
};

export default Faq;