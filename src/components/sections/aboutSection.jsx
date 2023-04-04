import React from 'react';
import Heading from '../utils/heading.jsx'
import BackgroundImage from '../utils/BackgroundImage.jsx'

import heroImage from '../../images/about/desktop/image-hero.jpg';

const About = () => {
    
    return(
        <div 
            className={`flex flex-col md:flex-row justify-end md:items-end 
                h-[60vh] md:h-[80vh]
                mb-20 relative 
            `}>
        
            <BackgroundImage 
                img={heroImage}
                className={`h-[30vh] md:h-[80vh] w-full xl:w-[50%] 
                    brightness-50`}
            />

            <div 
                id="titlePlusText" 
                className={`flex flex-col justify-end 
                    bg-white w-[90%] xl:w-[55%] h-[35vh] md:h-[40vh] xl:h-[50vh]
                    pl-10 xl:pl-40 relative
                `}
            >
            
            <div className="hidden md:block absolute -top-[150px] right-2">
                <Heading 
                    size="XL" 
                    color="text-grey-light" 
                    tag="h2" 
                    title="About" 
                />
            </div>
                <Heading
                    size="M"
                    tag="h1"
                    title="Your Team of Professionals"
                    className="max-w-[300px] sm:max-w-[600px]"
                />
                <p className="max-w-[340px] sm:max-w-[680px] mt-10 font-medium text-grey">
                    Our small team of world-class professionals will work with you every 
                    step of the way. Strong relationships are at the core of everything we do. 
                    This extends to the relationship our projects have with their surroundings.
                </p>
            </div>
        </div>
    );
};

export default About;