import React, { useState } from 'react';
import PropTypes from "prop-types";

function Navbar(props) {
    const { navItems } = props;
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between px-4 py-3 bg-white">
      <div className="flex items-center justify-between w-full md:w-auto">
        <a href="/" className="font-bold text-xl text-purple-500">Logo</a>
        <button
          className="block md:hidden focus:outline-none focus:bg-gray-700"
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
        className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center w-full md:w-auto`}
      >
        <ul className="text-gray-800 md:flex-grow md:flex md:justify-end">
          {navItems.map((item, index) => (
            <li key={index} className="mt-3 md:mt-0 md:ml-6">
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
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
