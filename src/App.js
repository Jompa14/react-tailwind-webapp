import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';

function App() {
  return (
    <Router basename="/react-tailwind-webapp">
        <div className="App md:mx-[10%]">
            <Navbar
                navItems={
                    [
                        { label: 'Portfolio', url: '/portfolio' },
                        { label: 'About Us', url: '/about' },
                        { label: 'Contact', url: '/contact' },
                    ]}
            />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/portfolio' element={<Portfolio/>} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
