import React from 'react';
import { NavLink as Link } from "react-router-dom";
import Button from './utils/Button';

import logo from '../images/logo-white.svg';


const Footer = () => {
    const footerItems = [
        {label: 'Portfolio', url: '/portfolio'},
        {label: 'About Us', url: '/about'},
        {label: 'Contact', url: '/contact'}
    ];
    return(
        <footer 
            id="footer"
            className={`relative w-full footerDoubleBg
                flex flex-col items-center
                pb-5
            `}
        >
            <div 
                id="logo-box"
                className={`bg-grey-darkest h-[120px] w-[120px]
                    flex justify-center items-center
                `}
            >
                <img src={logo} alt="Arch Logo" />
            </div>
            <div
                id="footer-items"
                className={`
                    flex flex-col justify-center items-center
                    my-5
                `}
            >
            {footerItems.map((item, index) => (
                <Link
                    className="py-3"
                    to={item.url}
                >
                    {item.label}
                </Link>
            ))}
            </div>
            <Button text="See Our Portifolio" to="portfolio"/>
        </footer>
    );
};

export default Footer;