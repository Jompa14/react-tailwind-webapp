import React from 'react';
import Heading from './heading.jsx';

import { FaTwitter, FaLinkedin } from 'react-icons/fa';


const Profile = ({ name, role, className, img, alt}) => {
    const basicStyle = `
        relative w-full h-full flex flex-col py-10
        ${className}
    `;
    
    return (
        <div 
            id="profile"
            className={basicStyle}
        >
            <div className="relative">
                <img
                    src={img}
                    alt={alt}
                    className="w-full h-full"
                />
                <div className={`absolute top-0 left-0 w-full h-full 
                    flex items-center justify-around px-10
                    opacity-0 hover:opacity-100 hover:bg-translucent-dark
                `}>
                    <a className="text-white" href="https://linkedin.com/" target="_blank">
                        <FaLinkedin size={40} />
                    </a>
                    <a className="mr-3 text-white" href="https://twitter.com/" target="_blank">
                        <FaTwitter size={40} />
                    </a>
                </div>
            </div>
            <Heading
                color="text-grey-darkest"
                size="S"
                tag="h4"
                title={name}
                className="py-3"
            />
            <p
                className="text-grey"
            >
            {role}
            </p>
        </div>
      );
};

export default Profile;