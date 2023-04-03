import React from 'react';
import BackgroundImage from './BackgroundImage.jsx';
import Heading from './heading.jsx';


const Card = ({ title, subtitle, className, img, number }) => {
    const basicStyle = `
        relative w-full h-full flex flex-col justify-end 
        pl-10 pb-10 ${className}
        relative
    `;
    
    return (
        <div 
            id="card"
            className={basicStyle}
        >
            <BackgroundImage 
                img={img}
                className="brightness-75"
            />
            <Heading
                color="text-white"
                size="S"
                tag="h4"
                title={title}
            />
            <p
                className="text-white"
            >
            {subtitle}
            </p>
            <div 
                className="hidden md:block absolute right-0 top-0 text-translucent text-[250px]">
                {number}
            </div>
        </div>
      );
};

export default Card;