import React from 'react';
import Heading from '../utils/heading.jsx'
import Profile from '../utils/Profile.jsx'

import jacksonImage from '../../images/about/desktop/avatar-jackson.jpg';
import jakeImage from '../../images/about/desktop/avatar-jake.jpg';
import mariaImage from '../../images/about/desktop/avatar-maria.jpg';
import thompsonImage from '../../images/about/desktop/avatar-thompson.jpg';

const Heritage = () => {
    
    const leadersData = [
        { alt: 'Jake profile', name: 'Jake Richards', role: 'Chief Architect', img: jakeImage },
        { alt: 'Thompson profile', name: 'Thompson Smith', role: 'Head of Finance', img: thompsonImage },
        { alt: 'Jackson profile', name: 'Jackson Rourke', role: 'Lead Designer', img: jacksonImage },
        { alt: 'Maria profile', name: 'Maria Simpson', role: 'Senior Architect', img: mariaImage },
    ];
    
    return(
        <div 
            className={`flex flex-col lg:flex-row justify-between 
                relative pt-10 px-10 mt-10 mb-20
            `}>
            <div  
                className={`flex w-auto`}
            >
                <Heading
                    size="M"
                    tag="h2"
                    title="The Leaders"
                    className={`max-w-[200px] sm:max-w-[400px] 
                        leading-10 md:leading-[80px] pb-10 pr-10`
                    }
                />
            </div>
            <div
                className="flex flex-wrap justify-between xl:max-w-[700px]"
            >
            {leadersData.map((leader, index) => (
                <Profile
                    img={leader.img}
                    name={leader.name}
                    role={leader.role}
                    alt={leader.alt}
                    className="w-[90%] sm:w-[300px] h-[90%] sm:h-[400px]"
                />
            ))}
            </div>
        </div>
    );
};

export default Heritage;