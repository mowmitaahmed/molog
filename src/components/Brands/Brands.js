import React from 'react';
import BrandsDemocracy from '../BrandsDemocracy/BrandsDemocracy';
import ChartImage from '../ChartImage/ChartImage';
import DownloadWallpaper from '../DownloadWallpaper/DownloadWallpaper';
import FooterArea from '../FooterArea/FooterArea';
import HeroArea from '../HeroArea/HeroArea';
import ImageComperission from '../ImageComperission/ImageComperission';
import Navbar from '../Navbar/Navbar';
import ParallaxArea from '../ParallaxArea/ParallaxArea';
import PricingArea from '../PricingArea/PricingArea';
import TestimonialArea from '../TestimonialArea/TestimonialArea';
import ChartImg from '../../images/chartImage.png';

const Home = () => {
    const chartImg = {
        id: 1,
        img: ChartImg
    }
    return (
        <div>
            <Navbar />
            <HeroArea />
            <BrandsDemocracy />
            <ChartImage key={chartImg.id} img={chartImg.img} />
            <ImageComperission />
            <ParallaxArea />
            <TestimonialArea />
            <PricingArea />
            <DownloadWallpaper />
            <FooterArea />
        </div>
    );
};

export default Home;