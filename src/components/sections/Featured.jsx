import React from 'react';
import Card from '../utils/Card.jsx'
import Heading from '../utils/heading.jsx'

import oneImage from '../../images/portfolio/desktop/image-228b.jpg';
import twoImage from '../../images/portfolio/desktop/image-del-sol.jpg';
import threeImage from '../../images/portfolio/desktop/image-prototype.jpg';

const Featured = () => {
    const images = [oneImage, twoImage, threeImage]
    return(
        <div className="w-full h-full px-10 sm:px-0 my-20">
            <Heading title="Featured"/>
            <div className="flex flex-col min-[1330px]:flex-row flex-wrap mt-20">
            {images.map((image, index) => (
                <Card 
                    key={index}
                    img={image}
                    title="Title"
                    subtitle="Subtitle"
                    className="grow h-[200px] lg:h-[450px] basis-[340px] mt-5 mr-5 last:mr-0"
                />
            ))}
            </div>
            
        </div>
    );
};

export default Featured;