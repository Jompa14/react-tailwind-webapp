import React from "react";
import ContactSection from '../components/sections/ContactSection.jsx'
import ContactDetails from '../components/sections/ContactDetails.jsx'
import ContactUs from '../components/sections/ContactUs.jsx'

import imageMap from '../images/contact/desktop/image-map.png'


const Contact = () => {
  return (
    <div>
      <ContactSection />
      <ContactDetails />
      <img src={imageMap} alt="Our Offices" className="w-full"/>
      <ContactUs />
    </div>
  );
};
  
export default Contact;