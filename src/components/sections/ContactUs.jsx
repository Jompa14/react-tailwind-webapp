import React from 'react';
import Heading from '../utils/heading.jsx'
import ContactForm from '../utils/ContactForm.jsx'


const ContactUs = () => {
    return(
        <div 
            id="detailsWrapper"
            className={`flex flex-col xl:flex-row
                pl-10 my-10
            `}>
            <Heading
                size="M"
                tag="h3"
                title="Conect with Us"
                className="max-w-[250px] sm:max-w-[400px] pb-10 sm:pb-20"
            />
            <div 
                id="adressWrapper"
                className={`flex flex-wrap justify-between w-full xl:w-[60%]`}
            >
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactUs;