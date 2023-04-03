import React from 'react';
import HeroSlider from '../components/HeroSlider.jsx'
import Welcome from '../components/sections/Welcome.jsx'
import SmallTeam from '../components/sections/SmallTeam.jsx'
import Featured from '../components/sections/Featured.jsx'
  
const Home = () => {
  return (
    <div>
        <HeroSlider />
        <Welcome />
        <SmallTeam />
        <Featured />
    </div>
  );
};
  
export default Home;