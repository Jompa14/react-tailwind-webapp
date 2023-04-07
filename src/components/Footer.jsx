import React from 'react';

import logo from '../images/logo-white.svg';


const Footer = () => {
    return(
        <footer className="relative w-full footerDoubleBg">
            <div className="flex">
                <div 
                    className={`bg-grey-darkest h-[120px] w-[120px]
                        flex justify-center items-center
                    `}
                >
                    <img src={logo} alt="Arch Logo" />
                </div>
                
            </div>

        </footer>
    );
};

export default Footer;