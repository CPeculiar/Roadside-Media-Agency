import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';

import User01 from '../images/avatars/user-01.jpg';

import './TestimonialCarousel.css'

const TestimonialCarousel = () => {
  const sliderRef = useRef(null);

  const testimonialSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow onClick={() => sliderRef.current.slickNext()} />,
    prevArrow: <PrevArrow onClick={() => sliderRef.current.slickPrev()} />,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          dots: true,
          arrows: false,
          className: 'mobile-testimonial-carousel',
        },
      },
    ],
  };

  const testimonials = [
    {
      text: "Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. Explicabo a quaerat sint autem dolore ducimus ut consequatur neque.",
      author: "Satya Nadella",
      title: "CEO, Microsoft",
      image: User01,
    },
    {
      text: "Nisi dolores quaerat fuga rem nihil nostrum. Laudantium quia consequatur molestias delectus culpa.",
      author: "Jane Doe",
      title: "Marketing Director, Acme Corp",
      image: User01,
    },
    {
      text: "Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. Explicabo a quaerat sint autem dolore ducimus ut consequatur neque.",
      author: "John Smith",
      title: "CTO, Startup Inc",
      image: User01,
    },
  ];

  return (
    <div className="testimonial-carousel">
      <Slider ref={sliderRef} {...testimonialSettings} data-aos="fade-up">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="testimonial-avatar"
              />
              <div className="testimonial-info">
                <h3 className="testimonial-name">{testimonial.author}</h3>
                <p className="testimonial-title">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = ({ className, onClick }) => (
  <div className={`${className} testimonial-arrow testimonial-arrow--next`} onClick={onClick}>
    {/* <ArrowRightCircle /> */}
  </div>
);

const PrevArrow = ({ className, onClick }) => (
  <div className={`${className} testimonial-arrow testimonial-arrow--prev`} onClick={onClick}>
    {/* <ArrowLeftCircle /> */}
  </div>
);

export default TestimonialCarousel;