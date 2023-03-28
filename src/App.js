import './App.css';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';

function App() {
  return (
    <div className="App md:mx-[10%]">
        <Navbar
            navItems={
                [
                    { label: 'Portfolio', url: '/portfolio' },
                    { label: 'About Us', url: '/about' },
                    { label: 'Contact', url: '/contact' },
                ]}
        />
        <HeroSlider />

    </div>
  );
}

export default App;
