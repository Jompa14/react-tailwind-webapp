import React from 'react';
import Heading from '../utils/heading.jsx'
import BackgroundImage from '../utils/BackgroundImage.jsx'

import heroImage from '../../images/about/desktop/image-hero.jpg';

const Contact = () => {
    
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
                    title="Contact" 
                />
            </div>
                <Heading
                    size="M"
                    tag="h1"
                    title="Tell us about your project"
                    className="max-w-[300px] sm:max-w-[600px]"
                />
                <p className="max-w-[340px] sm:max-w-[680px] mt-10 font-medium text-grey">
                    We’d love to hear more about your project. Please, leave a message 
                    below or give us a call. We have two offices, one in 
                    Texas and one in Tennessee. If you find yourself nearby, come say hello!
                </p>
            </div>
        </div>
    );
};

export default Contact;