import React from 'react';
import Features from '../components/home/Features';
import HomeSlider from '../components/home/HomeSlider';
import LoadBalance from '../components/home/LoadBalance';
import PackingTable from '../components/home/PackingTable';
import MapSection from '../components/aboutUs/MapSection';
import CaseStudy from '../components/aboutUs/CaseStudy';
import Help from '../components/home/Help';
import { homeHelpCards } from '../data/homePageData';


const HomePage = () => {
    return (
        <div>
            <HomeSlider />
            <PackingTable />
            <LoadBalance />
            <Features />
            <MapSection />
            <CaseStudy />
            <Help cards={homeHelpCards} />
        </div>
    );
};

export default HomePage;