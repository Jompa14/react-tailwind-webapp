import React from 'react';
import Heading from '../utils/heading.jsx';
import Button from '../utils/Button.jsx';
import smallTeamImage from '../../images/home/desktop/image-small-team.jpg';

const SmallTeam = () => {
  return (
    <section className="flex items-center justify-center relative h-[500px]">
      <div className="absolute inset-0 z-0">
        <img 
            src={smallTeamImage} 
            alt="bg-image" 
            className="w-full h-[500px] object-cover brightness-50"  
        />
      </div>
      <div className="z-10 ml-10">
            <Heading  
                color="text-white" 
                title="Small team, big ideas"
                className="max-w-[60%] mb-20"  
            />
            <Button 
                text="About Us"
                to="/about"
            />
      </div>
    </section>
  );
};

export default SmallTeam;