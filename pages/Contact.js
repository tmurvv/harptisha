// packages
import React from 'react';
import Head from 'next/head';

// internal
import PageTitle from '../src/components/PageTitle';
import ContactUsForm from '../src/components/ContactUsForm';
import ContactCSS from '../src/styles/contact.css';
import { cssVariables } from '../src/constants/cssVariables';
import { branding } from '../src/constants/branding';

function Contact() {
    return (
        <>
        <Head>
            <title>harptisha.com -- Contact Us</title>
            <meta name="Description" content="Contact Us -- Lever Harps, Pedal Harps, Wire Harps, Celtic Harps, Irish Harps, Folk Harps" key="title" />
        </Head>
        <div className='contactContainer'>
            <PageTitle maintitle={branding.additionalPageThree} subtitle={branding.additionalPageThreeSub} />
            <div>
                <ContactUsForm handleCloseContact={() => console.log('')} />
            </div>
            <div className='contactDivider'>
                <hr /> 
            </div>
            <ContactCSS />
        </div>
        </>
    )
}

export default Contact;
