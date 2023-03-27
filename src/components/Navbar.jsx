import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import logo from '../images/logo.svg';

function Navbar(props) {
    const { navItems } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);
    
    const menuClasses = classNames({
        'flex': true,
        'justify-around': true, 
        'max-w-[500px]': true, 
        'z-50': true,
        'flex-col': isMobile,
        'items-start': isMobile,
        'pl-10': isMobile,
        'py-10': isMobile,
        'text-lg': isMobile,
        'animate-slide': isMobile,
        'absolute': isMobile,
        'w-96': isMobile,
        'h-56': isMobile,
        'top-24': isMobile,
        'right-0': isMobile,
        'bg-[#EEEFF4]': isMobile, 
        'text-grey': !isMobile,
        'flex-grow': !isMobile, 
        'hidden': isMobile && !isOpen,
        'block': isMobile && isOpen,
    });

  return (
    <nav className="flex flex-wrap sm:flex-nowrap items-center px-4 py-10 bg-white">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <a 
            href="/" 
            title="Arch Logo" 
            className="mr-20"
        >
            <img src={logo} alt="Arch Logo" />
        </a>
        <button
          className="block sm:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={isOpen ? 'hidden' : 'block'}
              d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
            />
            <path
              className={isOpen ? 'block' : 'hidden'}
              d="M4.293 3.293a1 1 0 011.414 0L12 9.586l6.293-6.293a1 1 0 011.414 1.414L13.414 11l6.293 6.293a1 1 0 01-1.414 1.414L12 12.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 11 4.293 4.707a1 1 0 010-1.414z"
            />
          </svg>
        </button>
      </div>

        <div
            className={`${isOpen ? 'block' : 'hidden'} sm:hidden 
            absolute inset-0 top-24 
            bg-grey-darkest opacity-20 animate-fade z-50`}
        >
        </div>
        <ul 
            className={`${menuClasses}`}
        >
            {navItems.map((item, index) => (
                <li key={index} className="mt-3 sm:mt-0">
                    <a href={item.url}>{item.label}</a>
                </li>
            ))}
        </ul>
    </nav>
  );
}

Navbar.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Navbar;
