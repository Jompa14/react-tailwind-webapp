import React from 'react';
import { Link } from 'react-router-dom';


const Button = ({ text = '', to }) => {
    
  const hasText = !!text;
  
  const buttonStyle = `
    flex items-center justify-center w-16 h-16 rounded-md text-white
    ${hasText ? 'px-6 py-4 w-fit' : ''}
    bg-grey-darkest hover:bg-grey-dark active:bg-[#979797]
  `;

  const textElement = hasText ? (
    <>
      {text}
      <span className="ml-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor">
          <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor">
      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );

  return (
    <Link to={to}
        className={buttonStyle}
    >
      {textElement}
    </Link>
  );
};

export default Button;
