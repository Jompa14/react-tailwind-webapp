import React from 'react';

const BackgroundImage = ({ img, className }) => {
  const backgroundStyle = `
    absolute inset-0 w-full h-full bg-center bg-cover -z-10 ${className}
  `;
  return (
      <div 
        className={backgroundStyle}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
  );
};

export default BackgroundImage;
