import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './ClientsSection.css';

// import $ from 'jquery';

import TFN from "/TFN.png";
import LaVida from "/LaVida.png";
import WISSENSCHAFT from "/WISSENSCHAFT.png";
import KeneLogo from "/KeneLogo.png";
import Assocmaster from "/Assocmaster.png";
import AOS from "/AOS.png";

import User01 from '../images/avatars/user-01.jpg'
import TestimonialCarousel from './TestimonialCarousel';

const ClientsAndTestimonials = () => {
 
    const clientSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      };
    
      const testimonialSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              arrows: false,
              dots: true,
            },
          },
        ],
      };
    

  return (
    <div id="clients" className="section s-clients">
      <div className="row narrower s-clients__top h-text-center">
        <div className="column">
          <h1 className="display-1" data-aos="fade-up">
            We've had the privilege of working with some amazing brands.
          </h1>
        </div>
      </div>
      <div className="row clients-outer">
        <div className="column">
          <Slider {...clientSettings} className="clients" data-aos="fade-up">
            <div className="clients__slide">
              <img src={TFN} alt="TFN" />
            </div>
            <div className="clients__slide">
              <img src={LaVida} alt="LaVida" />
            </div>
            <div className="clients__slide">
              <img src={WISSENSCHAFT} alt="WISSENSCHAFT" />
            </div>
            <div className="clients__slide">
              <img src={KeneLogo} alt="KeneLogo" />
            </div>
            <div className="clients__slide">
              <img src={Assocmaster} alt="Assocmaster" />
            </div>
            <div className="clients__slide">
              <img src={AOS} alt="AOS" />
            </div>
          </Slider>
        </div>
      </div>
      {/* <div className="row testimonials collapse">
        <div className="column large-12">
          <Slider {...testimonialSettings} className="testimonial-slider" data-aos="fade-up">
            <div className="testimonial-slider__slide">
              <p>
                1st Testimony about the brand
                We create attention-grabbing outdoor ad campaigns that connect with your audience, 
                strategically placing your message for maximum visibility and impact across prime 
                locations.
              </p>
              <div className="testimonial-slider__author">
                <img src={User01} alt="Author image" className="testimonial-slider__avatar" />
                <cite className="testimonial-slider__cite">
                  <strong>Tim Cook</strong>
                  <span>CEO, Apple</span>
                </cite>
              </div>
            </div>
          </Slider>
        </div>
      </div> */}

{/* <TestimonialCarousel /> */}


    </div>
  );
};

export default ClientsAndTestimonials;