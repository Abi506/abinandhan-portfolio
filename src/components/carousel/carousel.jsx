import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carousel.css';

const CertificationCarousel = () => {
  return (
    <div className='carousel-parent'>
      <Carousel 
        autoPlay
        infiniteLoop
        interval={1000} // Adjust the interval as needed
        transitionTime={500} // Adjust the speed of the transition
        showIndicators={false} // Hide dots
        showThumbs={false}
        width="80%" // Ensure full width in the parent container
      >
        <div>
          <img src="https://res.cloudinary.com/dkmnh0kwl/image/upload/v1726463522/EMCHEIVJTF-1_kzqd3b.jpg" alt="React" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dkmnh0kwl/image/upload/v1726463617/VGBJLAKYYA-1_ezii39.jpg" alt="Developer Foundation" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dkmnh0kwl/image/upload/v1726463569/JSGOUFAYIO-1_tlmwxp.jpg" alt="Static Website" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dkmnh0kwl/image/upload/v1726463590/TRHSOYDDJE-1_faldr4.jpg" alt="Responsive Website" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dkmnh0kwl/image/upload/v1726463598/YDGATPHFOO-1_qvqdlv.jpg" alt="Dynamic Website" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dkmnh0kwl/image/upload/v1726463609/WSSIXYINJD-1_x6axpm.jpg" alt="Javascript Essentials" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dkmnh0kwl/image/upload/v1726463578/KETEQSACVH-1_jttzi7.jpg" alt="Programming Foundation in python" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dkmnh0kwl/image/upload/v1726463559/MFKCRDTSME-1_g4kzyo.jpg" alt="Introduction to Databases" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dkmnh0kwl/image/upload/v1726463532/HFVXHVVCYK-1_dumxbk.jpg" alt="Node.js" />
        </div>
      </Carousel>
    </div>
  );
};

export default CertificationCarousel;
