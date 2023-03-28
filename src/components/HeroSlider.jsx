import { useState, useEffect } from 'react';

import paramourImage from '../images/home/desktop/image-hero-paramour.jpg';
import federalImage from '../images/home/desktop/image-hero-federal.jpg';
import seraphImage from '../images/home/desktop/image-hero-seraph.jpg';
import trinityImage from '../images/home/desktop/image-hero-trinity.jpg';


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    { 
        title: 'Project  Paramour', 
        subtitle: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.', 
        image: paramourImage,
        alt: 'paramour image' 
    },
    { 
        title: 'Seraph Station', 
        subtitle: 'The Seraph Station project challenged us to design a unique station that would transport people through time.The result is a fresh and futuristic model inspired by space stations.', 
        image: seraphImage,
        alt: 'seraph image'
    },
    { 
        title: 'Federal II Tower', 
        subtitle: 'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.', 
        image: federalImage,
        alt: 'federal image'
    },
    { 
        title: 'Trinity Bank Tower', 
        subtitle: 'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.', 
        image: trinityImage, 
        alt: 'trinity image'
    },
  ];

  useEffect(() => {
  // Check if window matches desktop media query
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;

  // Only start interval if window is desktop
  if (isDesktop) {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide % slides.length) + 1);
    }, 10000);

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }
}, [slides]);


  const handleSlideClick = (index) => {
    setCurrentSlide(index + 1);
  };

  return (
    <div className="relative flex flex-col justify-center h-[82vh]">
        <div 
            className="absolute top-0 left-0 w-full h-full mix-blend-darken bg-cover bg-center" 
            style={{ backgroundImage: `url(${slides[currentSlide - 1].image})` }}
        >
            <div 
                className={`flex flex-col items-start text-white ml-10 md:ml-40 
                justify-center max-w-[400px] md:max-w-[450px] h-full`}
            >
                <h1 
                    className={`text-6xl font-bold ${currentSlide === 1 ? 'block' : 'hidden'}`}
                >
                    {slides[0].title}
                </h1>
                <h2 
                    className={`text-6xl font-bold ${currentSlide !== 1 ? 'block' : 'hidden'}`}
                >
                    {slides[currentSlide - 1].title}
                </h2>
                
                <p className="mt-4 ">{slides[currentSlide - 1].subtitle}</p>
                
                <button 
                    className="flex items-center px-6 py-4 mt-24 md:mt-12 text-white bg-grey-darkest hover:bg-grey-dark">
                    See Our Portfolio
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-2" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor">
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>
        </div>
        <div className="absolute bottom-0 -left-16 flex hidden md:block">
            {slides.map((slide, index) => (
                <button 
                    key={index} 
                    className={`w-16 h-16  
                    ${index === currentSlide - 1 ? 'bg-grey-darkest text-white' : 'text-grey bg-white hover:bg-grey-light'}`} 
                    onClick={() => handleSlideClick(index)}>{(index + 1).toString().padStart(2, '0')}
                </button>
            ))}
        </div>
    </div>
  );
};

export default Slider;
