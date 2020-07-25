import React from 'react';
import { branding } from '../constants/branding';
import { cssVariables } from '../constants/cssVariables';
import FooterCss from '../styles/footer.css';

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='flexSB'>
                    <div className="logo">
                        <img src= {branding.mainLogoImage} alt={branding.mainLogoImageAlt} />
                    </div>    
                </div> 
                <div className='flexSB' style={{flexDirection: 'column'}}>
                    {/* with designer
                    <p className='copy'style={{marginBlockEnd:'0'}}>design by <a href='http://diomed.ca' style={{color: `${cssVariables.primaryColourLight}`, fontSize: '12px'}} target='_blank'>diomed.ca</a>/website by <a href='https://www.take2tech.ca' style={{color: cssVariables.primaryColorLight, fontSize: '12px'}} target='_blank'>take2tech.ca</a></p> */}
                    {/* without designer */}
                    <p className='copy'style={{marginBlockEnd:'0', textAlign: 'center'}}>website by <a href='https://www.take2tech.ca' target='_blank'>take2tech.ca</a></p>
                    <p className='copy' style={{marginBlockStart:'0', textAlign: 'center'}}>&copy; Copyright 2020 harptisha.com</p>
                </div>
            </div>
            <FooterCss />
        </>
    )
}

export default Footer;
