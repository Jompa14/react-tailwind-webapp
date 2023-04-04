import React from 'react';
import Heading from './heading.jsx';


const Profile = ({ name, role, className, img, alt}) => {
    const basicStyle = `
        relative w-full h-full flex flex-col py-10
        ${className}
        relative
    `;
    
    return (
        <div 
            id="profile"
            className={basicStyle}
        >
            <img
                src={img}
                alt={alt}
                className="w-full h-full hover:brightness-50"
            />
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