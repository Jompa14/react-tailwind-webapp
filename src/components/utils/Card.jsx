import React from 'react';
import BackgroundImage from './BackgroundImage.jsx';
import Heading from './heading.jsx';


const Card = ({ title, subtitle, className, img }) => {
    const basicStyle = `
        relative w-full h-full ${className}
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
        </div>
      );
};

export default Card;