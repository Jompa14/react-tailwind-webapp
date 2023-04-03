import React from 'react';
import Card from '../utils/Card.jsx'
import cardData from '../../images/portfolio/imageData.js';


const PortfolioSection = () => {

    return(
        <div className="w-full h-full px-10 sm:px-0 my-20">
            <div className="flex flex-col min-[1330px]:flex-row flex-wrap mt-20">
            {cardData.map((card, index) => (
                <Card 
                    key={index}
                    img={card.img}
                    title={card.title}
                    subtitle={card.subtitle}
                    alt={card.alt}
                    className="grow h-[200px] lg:h-[500px] basis-[340px] mt-5 mr-5 last:mr-0"
                />
            ))}
            </div>
            
        </div>
    );
};

export default PortfolioSection;