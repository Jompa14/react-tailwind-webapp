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
        title: 'First Slide', 
        subtitle: 'This is the subtitle of the first slide', 
        image: paramourImage,
        alt: 'paramour image' 
    },
    { 
        title: 'Third Slide', 
        subtitle: 'This is the subtitle of the third slide', 
        image: seraphImage,
        alt: 'seraph image'
    },
    { 
        title: 'Second Slide', 
        subtitle: 'This is the subtitle of the second slide', 
        image: federalImage,
        alt: 'federal image'
    },
    { 
        title: 'Fourth Slide', 
        subtitle: 'This is the subtitle of the fourth slide', 
        image: trinityImage, 
        alt: 'trinity image'
    },
  ];

  useEffect(() => {
  // Check if window matches desktop media query
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

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
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: `url(${slides[currentSlide - 1].image})` }}
        >
            <div className="flex flex-col items-center justify-center h-full">
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
                <p className="mt-4 text-xl">{slides[currentSlide - 1].subtitle}</p>
                <button className="flex items-center px-6 py-2 mt-8 text-xl font-semibold text-white bg-black rounded-full hover:bg-gray-900">
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-2" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor">
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>
      </div>
        <div className="absolute bottom-0 -left-16 flex">
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
