import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar
        navItems={
            [
                { label: 'Portfolio', url: '/portfolio' },
                { label: 'Contact', url: '/contact' },
                { label: 'About Us', url: '/about' },
            ]}
    />

    </div>
  );
}

export default App;
