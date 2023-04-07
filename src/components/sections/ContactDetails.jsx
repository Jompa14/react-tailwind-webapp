import React from 'react';
import Heading from '../utils/heading.jsx'
import Address from '../utils/Address.jsx'


const ContactDetails = () => {
    const offices = [
        {
            office: 'Main Office',
            mail: 'archone@mail.com',
            address: '1892  Chenoweth Drive TN',
            phone:	'123-456-3451'
        },
        {
            office: 'Office II',
            mail: 'archone@mail.com',
            address: '3399  Wines Lane TX',
            phone:	'832-123-4321'
        }
    ]
    return(
        <div 
            id="detailsWrapper"
            className={`flex flex-col xl:flex-row
                pl-10
            `}>
            <Heading
                size="M"
                tag="h3"
                title="Contact Details"
                className="max-w-[250px] sm:max-w-[500px] pb-10 sm:pb-20"
            />
            <div 
                id="adressWrapper"
                className={`flex flex-wrap justify-between w-full xl:w-[60%]`}
            >
            {offices.map((office, index) => (
                <Address 
                    office={office.office}
                    mail={office.mail}
                    address={office.address}
                    phone={office.phone}
                />
            ))}
            </div>
        </div>
    );
};

export default ContactDetails;