import React, { useState, useEffect } from 'react';
import data from '../delegate.json';
// import logo from '../media/logo.png';

export default function Carousel() {
    const [CarouselData, setCarouselData] = useState(null)
    useEffect(() => {
        setCarouselData(data.carousel.slides);
    }, [])
    return (<>
  <div className="carousel carousel-slider center">
        {CarouselData && CarouselData.map(p => 
                  <div key={p.title} className="carousel-item red">
                    <h3 className="black">{p.title}</h3>
                  <a className="btn waves-effect white grey-text darken-text-2">button</a>
                </div>
            )}
            </div>
    </>
    )
};



