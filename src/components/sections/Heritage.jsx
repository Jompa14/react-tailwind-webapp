import React from 'react';
import Heading from '../utils/heading.jsx'

import heritageImage from '../../images/about/desktop/image-heritage.jpg';

const Heritage = () => {
    
    return(
        <div className={`flex justify-between relative pt-10`}>
            <div 
                id="titlePlusText" 
                className={`flex flex-col justify-end pl-10`}
            >
                <Heading
                    size="M"
                    tag="h2"
                    title="Our Heritage"
                    className="max-w-[200px] sm:max-w-[400px] leading-10 md:leading-[80px]"
                />
                <p className="max-w-[340px] sm:max-w-[500px] mt-10 font-medium text-grey">
                    Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.
                    Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. 
                    Our small team of world-class professionals provides input on every project. 
                    <br/>
                    <br/>
                    Speciliazing in Urban Design allowed us to focus on creating exceptional 
                    structures that live in harmony with their surroundings. 
                    We consider every detail from every surrounding element to inform our designs. 
                    <br/>
                    <br/>
                    Our small team of world-class professionals provides input on every project.
                </p>
            </div>
            <img 
                src={heritageImage} 
                alt="out heritage pic"
                className="hidden xl:block pl-20" 
            />
        </div>
    );
};

export default Heritage;