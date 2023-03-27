
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar
        navItems={
            [
                { label: 'Portfolio', url: '/portfolio' },
                { label: 'About Us', url: '/about' },
                { label: 'Contact', url: '/contact' },
            ]}
    />

    </div>
  );
}

export default App;
