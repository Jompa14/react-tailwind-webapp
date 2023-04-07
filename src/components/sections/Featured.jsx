import React from 'react';
import Card from '../utils/Card.jsx'
import Heading from '../utils/heading.jsx'
import Button from '../utils/Button.jsx';


import oneImage from '../../images/portfolio/desktop/image-228b.jpg';
import twoImage from '../../images/portfolio/desktop/image-del-sol.jpg';
import threeImage from '../../images/portfolio/desktop/image-prototype.jpg';

const Featured = () => {
    const cardData = [
        { alt: '228b Tower pic', title: '228B Tower', subtitle: 'View All Projects', img: oneImage },
        { alt: 'Project del Sol pic', title: 'Project del Sol', subtitle: 'View All Projects2', img: twoImage },
        { alt: 'Le Prototype pic', title: 'Le Prototype', subtitle: 'View All Projects', img: threeImage },
    ];

    return(
        <div className="w-full h-full px-10 sm:px-0 my-20">
            <div className="flex justify-between align-center">
                <Heading tag="h3" title="Featured"/>
                <Button 
                    text="See All"
                    to="/portfolio"
                />
            </div>
            <div className="flex flex-col min-[1330px]:flex-row flex-wrap mt-20">
            {cardData.map((card, index) => (
                <Card 
                    key={index}
                    img={card.img}
                    title={card.title}
                    subtitle={card.subtitle}
                    alt={card.alt}
                    number={index + 1}
                    className={`grow h-[200px] lg:h-[500px] basis-[340px]
                        mt-5 mr-5 last:mr-0 
                    `}
                />
            ))}
            </div>
            
        </div>
    );
};

export default Featured;