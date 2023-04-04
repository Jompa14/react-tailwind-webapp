import React from "react";
import ContactSection from '../components/sections/ContactSection.jsx'
import ContactDetails from '../components/sections/ContactDetails.jsx'

import imageMap from '../images/contact/desktop/image-map.png'


const Contact = () => {
  return (
    <div>
      <ContactSection />
      <ContactDetails />
      <img src={imageMap} alt="Our Offices" className="w-full"/>
    </div>
  );
};
  
export default Contact;