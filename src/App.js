import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import PropTypes from 'prop-types';
import image1 from './assets/image-1.png';
import image2 from './assets/image-2.png';
import image3 from './assets/image-3.png';
import image4 from './assets/image-4.png';
import image5 from './assets/image-5.png';
import image6 from './assets/image-6.png';
import './App.css';

const images = [image1, image2, image3, image4, image5, image6];

function App() {
  const NextArrow = ({ onClick }) => (
    <div
      className="arrow next"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
      aria-label="Next"
    >
      <FaArrowRight />
    </div>
  );

  NextArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  const PrevArrow = ({ onClick }) => (
    <div
      className="arrow prev"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
      aria-label="Previous"
    >
      <FaArrowLeft />
    </div>
  );

  PrevArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      <Slider
        infinite={settings.infinite}
        lazyLoad={settings.lazyLoad}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        centerMode={settings.centerMode}
        centerPadding={settings.centerPadding}
        nextArrow={settings.nextArrow}
        prevArrow={settings.prevArrow}
        beforeChange={settings.beforeChange}
      >
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? 'slide activeSlide' : 'slide'} key={img}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
