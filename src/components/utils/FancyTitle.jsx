import React from 'react';
import { useLocation } from 'react-router-dom';

function FancyTitle() {
    const location = useLocation();
    let pageTitle = location.pathname.split('/').pop();
  
    if (pageTitle === '') {
        pageTitle = 'home';
    }

    return (
        <div className={`absolute top-[138px] -left-[106px] xl:-left-[77px] 
            rotate-90 z-10 text-grey-light  w-[300px]
            hidden md:flex items-center
            `}
        >
            <hr className="w-[90px] mr-[40px]"/>
            <span className="uppercase tracking-[.75em]">
                {pageTitle}
            </span>
        </div>
  );
};

export default FancyTitle;