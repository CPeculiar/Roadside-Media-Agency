import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import User01 from '../images/avatars/user-01.jpg';

const TestimonialCarousel = () => {
  const testimonialSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const testimonials = [
    {
      text: "Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. Explicabo a quaerat sint autem dolore ducimus ut consequatur neque.",
      author: "Tim Cook",
      title: "CEO, Apple",
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
    <Slider {...testimonialSettings} className="testimonial-slider" data-aos="fade-up">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-slider__slide">
          <p>{testimonial.text}</p>
          <div className="testimonial-author">
            <img src={testimonial.image} alt={testimonial.author} />
            <cite>
              <strong>{testimonial.author}</strong>
              <span>{testimonial.title}</span>
            </cite>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialCarousel;

          