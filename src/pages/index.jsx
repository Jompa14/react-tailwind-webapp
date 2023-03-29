import React from 'react';
import HeroSlider from '../components/HeroSlider.jsx'
import Welcome from '../components/sections/Welcome.jsx'
  
const Home = () => {
  return (
    <div>
        <HeroSlider />
        <Welcome />
    </div>
  );
};
  
export default Home;