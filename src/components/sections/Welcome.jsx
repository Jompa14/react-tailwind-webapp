import React from 'react';
import Heading from '../utils/heading.jsx'

import welcomeImage from '../../images/home/desktop/image-welcome.jpg';

const Welcome = () => {
    
    return(
        <div className="mt-20 mb-40">
            <div className="hidden md:block absolute">
                <Heading 
                    size="XL" 
                    color="text-[#e2e2e2]" 
                    tag="h2" 
                    title="Welcome" 
                />
            </div>
            <div 
                id="textPlusImage"
                className="flex lg:justify-end  items-end"
            >
                <div 
                    id="titlePlusText" 
                    className="flex flex-col md:mt-[210px] ml-10 md:ml-0"
                >
                    <Heading
                        size="L"
                        tag="h3"
                        title="Welcome to Arch Studio"
                        className="max-w-[300px] sm:max-w-[600px]"
                    />
                    <p className="max-w-[340px] sm:max-w-[680px] mt-10 font-medium text-grey">
                        We have a unique network and skillset to help bring your projects 
                        to life. Our small team of highly skilled individuals combined with 
                        our large network put us in a strong position to deliver exceptional results.
                        <br/>
                        <br/>
                        Over the past 10 years, we have worked on all kinds of projects. 
                        From stations to high-rise buildings, we create spaces that inspire and delight.
                        <br/>
                        <br/>
                        We work closely with our clients so that we understand the intricacies of each project.
                        This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
                    </p>
                </div>
                <img 
                    src={welcomeImage} 
                    alt="Our Building"
                    className="w-[350px] h-[568px] ml-20 hidden lg:block" 
                />
            </div>
        </div>
    );
};

export default Welcome;