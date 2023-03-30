import React from 'react';
import HeroSlider from '../components/HeroSlider.jsx'
import Welcome from '../components/sections/Welcome.jsx'
import SmallTeam from '../components/sections/SmallTeam.jsx'
  
const Home = () => {
  return (
    <div>
        <HeroSlider />
        <Welcome />
        <SmallTeam />
    </div>
  );
};
  
export default Home;