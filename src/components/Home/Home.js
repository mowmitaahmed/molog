import React from 'react';
import Navbar from '../Navbar/Navbar';
import HomeHero from '../HomeHero/HomeHero';
import CarouselArea from '../CarouselArea/CarouselArea';
import HomeGoodHands from '../HomeGoodHands/HomeGoodHands';
import ChartImage from '../ChartImage/ChartImage';
import Analyze from '../../images/home/analyze.png';
import HomeReleventData from '../HomeReleventData/HomeReleventData';
import HomeChooseAPlan from '../HomeChooseAPlan/HomeChooseAPlan';
import HomePeopleSaying from '../HomePeopleSaying/HomePeopleSaying';
import MeetTheTeam from '../MeetTheTeam/MeetTheTeam';
import HomeBusinessNews from '../HomeBusinessNews/HomeBusinessNews';
import FooterArea from '../FooterArea/FooterArea';

const Home = () => {
    const analyzeImg = {
        id: 1,
        img: Analyze
    }
    return (
        <div>
            <Navbar />
            <HomeHero />
            <CarouselArea />
            <HomeGoodHands />
            <ChartImage key={analyzeImg.id} img={analyzeImg.img} />
            <HomeReleventData />
            <HomeChooseAPlan />
            <HomePeopleSaying />
            <MeetTheTeam />
            <HomeBusinessNews />
            <FooterArea />
        </div>
    );
};

export default Home;