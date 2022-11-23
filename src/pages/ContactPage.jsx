import React from 'react';
import MapSection from '../components/aboutUs/MapSection';
import ContactBanner from '../components/contanctUs/ContactBanner';
import ContactForm from '../components/contanctUs/ContactForm';
import OurLocation from '../components/contanctUs/OurLocation';
import Help from '../components/home/Help';
import { contactHelpCards } from '../data/contactPageData';

const ContactPage = () => {
    return (
        <div>
            <ContactBanner />
            <OurLocation />
            <Help cards={contactHelpCards} />
            <MapSection />
            <ContactForm />
        </div>
    );
};

export default ContactPage;