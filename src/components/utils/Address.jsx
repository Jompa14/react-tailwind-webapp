import React from 'react';
import Button from './Button.jsx';


const Address = ({office, mail, address, phone}) => {
    
    return(
        <div 
            id="adressCard"
            className={`flex flex-wrap xl:flex-col justify-between 
                md:max-lg:w-full
                items-end xl:items-start py-4`}
        >
            <div className={`flex flex-col`}>
                <p className="text-lg text-grey-dark pb-4">{office}</p>
                <p className="text-grey pb-1">Mail: {mail}</p>
                <p className="text-grey pb-1">Address: {address}</p>
                <p className="text-grey pb-1">Phone: {phone}</p>
            </div>
            <Button text="View on Map" mode="white"/>
        </div>
    );
};

export default Address;