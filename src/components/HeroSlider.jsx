import { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const slides = [
    { title: 'First Slide', subtitle: 'This is the subtitle of the first slide', image: 'https://via.placeholder.com/1920x1080' },
    { title: 'Second Slide', subtitle: 'This is the subtitle of the second slide', image: 'https://via.placeholder.com/1920x1080' },
    { title: 'Third Slide', subtitle: 'This is the subtitle of the third slide', image: 'https://via.placeholder.com/1920x1080' },
    { title: 'Fourth Slide', subtitle: 'This is the subtitle of the fourth slide', image: 'https://via.placeholder.com/1920x1080' },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide % slides.length) + 1);
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const handleSlideClick = (index) => {
    setCurrentSlide(index + 1);
  };

  return (
    <div className="relative flex flex-col justify-center h-screen">
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
      <div className="absolute bottom-4 left-4 flex space-x-2">
        {slides.map((slide, index) => (
          <button key={index} className={`w-6 h-6 rounded-full ${index === currentSlide - 1 ? 'bg-black' : 'bg-white hover:bg-gray-200'}`} onClick={() => handleSlideClick(index)}>{(index + 1).toString().padStart(2, '0')}</button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
