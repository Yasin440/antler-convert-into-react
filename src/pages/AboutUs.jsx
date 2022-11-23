import React from 'react';
import CaseStudy from '../components/aboutUs/CaseStudy';
import Visit from '../components/aboutUs/Visit';
import MapSection from '../components/aboutUs/MapSection';
import OurTeam from '../components/aboutUs/OurTeam';
import SliderClient from '../components/aboutUs/SliderClient';

const AboutUs = () => {
    return (
        <div>
            <SliderClient />
            <OurTeam />
            <MapSection />
            <CaseStudy />
            <Visit />
        </div>
    );
};

export default AboutUs;