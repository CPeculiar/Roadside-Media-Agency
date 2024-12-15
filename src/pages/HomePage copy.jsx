import React, { useState, useEffect } from 'react';
import Logo from '../assets/images/Roadside-Media-ICON-&-TYPO.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import '../css/styles.css'
import '../css/vendor.css'
import '../js/modernizr'
import '../js/fontawesome/all.min.js'

import Dropbox from "../images/icons/clients/dropbox.svg";
import Atom from "../images/icons/clients/atom.svg";
import Github from "../images/icons/clients/github.svg";
import Redhat from "../images/icons/clients/redhat.svg";
import Medium from "../images/icons/clients/medium.svg";
import Messenger from "../images/icons/clients/messenger.svg";
import Steam from "../images/icons/clients/steam.svg";
import Spotify from "../images/icons/clients/spotify.svg";
import Modal from 'react-modal';

// Ensure modal is set to the root of your app for accessibility
Modal.setAppElement('#root'); // Assumes you have a root div in your index.html

function HomePage() {

  // State for preloader
  const [isLoading, setIsLoading] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  
  
  // Simulate preloader
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);
//     return () => clearTimeout(timer);
// }, []);

// Separate useEffect for AOS
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    delay: 100
  });

}, []);  // Empty dependency array means this runs once after initial render




  return (
    <>
    <body id="top">

{/* <div className="min-h-screen flex"> */}

      {/* Header */}
      
        <header className="s-header"> 

       <div className="s-header__logo">
            <a href="/">
                <img src={Logo} alt="icon"  className='home-logo' />
            </a>
        </div>

        <div class="s-header__content">
    
         <nav class="s-header__nav-wrap">
           <ul class="s-header__nav">
                <li><a className="smoothscroll" href="#hero" title="Intro">Home</a></li>
                <li><a className="smoothscroll" href="#about" title="About">About</a></li>
                <li><a className="smoothscroll" href="#services" title="Services">Services</a></li>
            </ul>
          </nav>  

          <a href="mailto:thelordsbrethrenchurch@gmail.com" className="btn btn--primary btn--small">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>
                Get In Touch
            </a>
        </div>

        {/* <a className="s-header__menu-toggle" href="#0"><span>Menu</span></a> */}
      </header>  


 {/* Hero Section */}
 <section id="hero" className="s-hero target-section">

      <div className="s-hero__bg">
            <div className="gradient-overlay"></div>
        </div>

          <div className="row s-hero__content">
          <div className="column">

          <h1 style={{ color: '#ff4b13' }}>Hello.</h1>
            <div className="s-hero__content-about">

            <p>
              We are Roadside Media Agency.  <br />
             Where Creativity <br />
              meets Corporate Success
            </p>

            <footer>
            <div className="s-hero__content-social">
                            <a href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
                            <a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                            <a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                            <a href="#"><i className="fab fa-dribbble" aria-hidden="true"></i></a>
                        </div>
                     </footer>
                   </div>

                </div>
              </div>



              <div className="s-hero__video">
        <a 
          className="s-hero__video-link" 
          href="#" 
          onClick={openModal}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M21 12l-18 12v-24z"/>
          </svg>
          <span className="s-hero__video-text">Play Video</span>
        </a>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className={{
          base: 'modal-base',
          afterOpen: 'modal-base_after-open',
          beforeClose: 'modal-base_before-close'
        }}
        overlayClassName={{
          base: 'overlay-base',
          afterOpen: 'overlay-base_after-open',
          beforeClose: 'overlay-base_before-close'
        }}
        contentLabel="Video Modal"
        closeTimeoutMS={300}
      >
        <div className="modal-content">
          <button 
            className="modal-close-btn" 
            onClick={closeModal}
            aria-label="Close video modal"
          >
            ✕
          </button>
          <div className="video-container">
            <iframe
              src="https://player.vimeo.com/video/117310401?color=01aef0&title=0&byline=0&portrait=0"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Roadside Media Video"
            ></iframe>
          </div>
        </div>
      </Modal>

 {/* Add this CSS to your global or component-specific stylesheet */}
 <style jsx global>{`
        .overlay-base {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.75);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 300ms ease-in-out;
          z-index: 1000;
        }

        .overlay-base_after-open {
          opacity: 1;
        }

        .overlay-base_before-close {
          opacity: 0;
        }

        .modal-base {
          position: relative;
          width: 90%;
          max-width: 1200px;
          max-height: 90vh;
          background: black;
          border-radius: 8px;
          padding: 0;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transform: scale(0.9);
          opacity: 0;
          transition: all 300ms ease-in-out;
        }

        .modal-base_after-open {
          transform: scale(1);
          opacity: 1;
        }

        .modal-base_before-close {
          transform: scale(0.9);
          opacity: 0;
        }

        .modal-content {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
        }

        .modal-close-btn {
          position: absolute;
          top: 10px;
          right: 45px;
          background: rgba(255,255,255,0.2);
          color: black;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          z-index: 10;
          font-size: 20px;
          transition: background 0.3s ease;
        }

        .modal-close-btn:hover {
          {/* background: rgba(255,255,255,0.3); */}
        }

        .video-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        @media (max-width: 768px) {
          .modal-base {
            width: 95%;
            max-width: 100%;
            max-height: 95vh;
          }

          .modal-close-btn {
            top: 5px;
            right: 20px;
            width: 20px;
            height: 30px;
            font-size: 16px;
          }
        }
      `}</style>



        <div className="s-hero__scroll">
            <a href="#about" className="s-hero__scroll-link smoothscroll">
                Scroll Down
            </a>
        </div>
      </section>



      {/* about
    ================================================== */}
    <section id="about" className="s-about">

<div className="horizontal-line"></div>
<div className="row">
    <div className="column large-12">
          <div className="section-title" data-num="01" data-aos="fade-up">
          <h3 className="h6">Who We Are</h3>
        </div>
    </div>

    <div className="column large-6 w-900-stack s-about__intro-text">
      <h1 className="display-1" data-aos="fade-up">
      Kenechukwu Media Agency brings a decade of digital expertise to the forefront of corporate media solutions.
      </h1>

      <p className="lead" data-aos="fade-up" data-aos-delay="200"> 
      With specialization across branding, media coverage, event live streaming, digital studio setup, and outdoor advertising, 
      we help businesses elevate their presence and communication. Our edge lies in combining creative innovation with technical precision, 
      delivering end-to-end media services tailored to meet the evolving needs of modern organizations.
      We cater to businesses seeking professional storytelling, brand amplification, and seamless media production. 
      With a focus on fostering long-term partnerships, we empower our clients to make a lasting impact in their industries.
      Whether through media consultation, corporate media training, or flawless live event streaming, Kenechukwu offers the tools, 
      talent, and technology to connect brands with their audience.
      </p>
    </div>

    <div className="column large-6 w-900-stack s-about__photo-block">
                <div className="s-about__photo" data-aos="fade-up"></div>
            </div>
        </div>

        <div className="row block-large-1-2 block-tab-full s-about__process item-list">
            <div className="column item item-process" data-aos="fade-up">
                <h3 className="item-title">Vision Statement</h3>
                <p>
                To become a leading force in redefining corporate media, 
                inspiring global brands, and driving meaningful connections through innovative
                 storytelling and cutting-edge media solutions.
                </p>
            </div>
            <div className="column item item-process" data-aos="fade-up">
                <h3 className="item-title">Mission Statement</h3>
                <p>
                At Kenechukwu, our mission is to empower organizations with exceptional media 
                services that build credibility, amplify their message, and foster lasting connections. 
                Through creativity, professionalism, and a passion for excellence, we deliver 
                transformative solutions that unlock business potential and redefine corporate communication.
                </p>
            </div>
            <div className="column item item-process" data-aos="fade-up">
                <h3 className="item-title">Executive Summary</h3>
                <p>
                Kenechukwu Media Agency brings a decade of digital expertise to the forefront of corporate
                 media solutions. With specialization across branding, media coverage, event live streaming,
                  digital studio setup, and outdoor advertising, we help businesses elevate their presence 
                  and communication. Our edge lies in combining creative innovation with technical precision,
                   delivering end-to-end media services tailored to meet the evolving needs of modern organizations.
                </p>
            </div>
            <div className="column item item-process" data-aos="fade-up">
                <h3 className="item-title">What we do</h3>
                <p>
                We cater to businesses seeking professional storytelling, brand amplification, and seamless 
                media production. With a focus on fostering long-term partnerships, we empower our clients to make 
                a lasting impact in their industries. Whether through media consultation, corporate media training, 
                or flawless live event streaming, Kenechukwu offers the tools, talent, and technology to connect 
                brands with their audience.
                </p>
            </div>
        </div>
    </section>



     {/*  services
    ================================================== */}
    <section id="services" className="s-services">

        <div className="row">
            <div className="column large-12">
                <div className="section-title" data-num="02" data-aos="fade-up">
                    <h3 className="h6">Our Services</h3>
                </div>
            </div>
            <div className="column large-6 w-900-stack">
                <h1 className="display-1" data-aos="fade-up">
                At Kenechukwu Media Agency, we’ve spent the last 10 years mastering
                 the art and science of corporate media.
                </h1>
            </div>
            <div className="column large-6 w-900-stack">
                <p className="lead" data-aos="fade-up">
                From humble beginnings as a digital consultancy, we’ve grown into a 
                full-service agency that partners with businesses to tell stories that matter.
                 Our expertise spans across branding, media production, outdoor advertising, 
                 and live streaming, with one mission: to elevate every brand we work with.
                </p>
            </div>
        </div>

        <div className="row block-large-1-2 block-tab-full s-services__services item-list">
            <div className="column item item-service" data-aos="fade-up">
                <span className="service-icon service-icon--product-design"></span>
                <h3 className="item-title">Branding</h3>
                <p>
                Crafting your identity, building your reputation.
                We design brand experiences that resonate with your audience, 
                creating visual identities and messaging strategies that align 
                with your business goals. From logos to full brand development, 
                we help establish a distinctive presence.
                </p>
            </div>
            <div className="column item item-service" data-aos="fade-up">
                <span className="service-icon service-icon--branding"></span>
                <h3 className="item-title">Media Coverage</h3>
                <p>
                Capturing moments, amplifying your message.
                Our media coverage solutions ensure that your events and 
                initiatives receive the visibility they deserve. We work closely 
                with top media outlets to deliver strategic coverage that boosts 
                your brand.
                </p>
            </div>
            <div className="column item item-service" data-aos="fade-up">
                <span className="service-icon service-icon--frontend"></span>
                <h3 className="item-title">Digital Studio Setup</h3>
                <p>
                Turn ideas into content with ease.
                We set up world-class studios for podcasting, audio, and 
                video production. Whether you’re launching a corporate podcast or 
                need a space for multimedia production, our expertise ensures a 
                professional environment that fosters creativity.
                </p>
            </div>
            <div className="column item item-service" data-aos="fade-up">
                <span className="service-icon service-icon--research"></span>
                <h3 className="item-title">Outdoor Advertising</h3>
                <p>
                Make a statement with every display.
                Our outdoor advertising services offer impactful ways to 
                capture attention and engage your audience. We provide solutions 
                from billboards to digital signage that strategically connect 
                with your target market.
                </p>
            </div>
            <div className="column item item-service" data-aos="fade-up">
                <span className="service-icon service-icon--illustration"></span>
                <h3 className="item-title">Event Live Streaming & Setup</h3>
                <p>
                Reach audiences beyond the venue.
                We specialize in delivering flawless live streaming experiences 
                for events, conferences, and corporate gatherings. With reliable 
                equipment and technical expertise, we ensure that your message 
                reaches global audiences in real-time.
                </p>
            </div>
            <div className="column item item-service" data-aos="fade-up">
                <span className="service-icon service-icon--ecommerce"></span>
                <h3 className="item-title">Media Consultation and Training</h3>
                <p>
                Expert advice for media success.
                Our consulting services help organizations navigate 
                the complex media landscape. We provide insights on 
                media strategies, content planning, and emerging trends 
                to position your brand for growth. <br/>
                Also, Equip your team with media mastery.
                We offer tailored media training programs to enhance 
                communication skills, media literacy, and public engagement 
                for corporate teams. From media interviews to content creation, 
                we empower your staff to represent your brand confidently.
                </p>
            </div>
        </div>
    </section>





    {/* <section id="portfolio" class="s-portfolio">

<div class="row s-porfolio__top">
    <div class="column large-6 w-900-stack">
        <div class="section-title" data-num="03" data-aos="fade-up">
            <h3 class="h6">Recent Works</h3>
        </div>
    </div>
    <div class="column large-6 w-900-stack">
        <h1 class="display-1" data-aos="fade-up">
            Here are some of our projects we done lately. Feel
            free to check them out.
        </h1>
    </div>
</div> 

<div class="row s-portfolio__list block-large-1-2 block-tab-full collapse">

    <div class="column" data-aos="fade-up">
        <div class="folio-item">
            <div class="folio-item__thumb">
                <a class="folio-item__thumb-link" href="images/portfolio/gallery/g-red-wheel.jpg" title="The Red Wheel" data-size="1050x700">
                    <img src="images/portfolio/red-wheel.jpg" 
                         srcset="images/portfolio/red-wheel.jpg 1x, images/portfolio/red-wheel@2x.jpg 2x" alt="" />
                </a>
            </div>
            <div class="folio-item__info">
                <div class="folio-item__cat">Branding</div>
                <h4 class="folio-item__title">The Red Wheel</h4>
            </div>
            <a href="https://www.behance.net/" title="Project Link" class="folio-item__project-link">Project Link</a>
            <div class="folio-item__caption">
                <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
            </div>
        </div>
    </div>
    <div class="column" data-aos="fade-up">
        <div class="folio-item">
            <div class="folio-item__thumb">
                <a class="folio-item__thumb-link" href="images/portfolio/gallery/g-music-life.jpg" title="Music Life" data-size="1050x700">
                    <img src="images/portfolio/music-life.jpg" 
                         srcset="images/portfolio/music-life.jpg 1x, images/portfolio/music-life@2x.jpg 2x" alt="" />
                </a>
            </div>
            <div class="folio-item__info">
                <div class="folio-item__cat">Frontend Design</div>
                <h4 class="folio-item__title">Music Life</h4>
            </div>
            <a href="https://www.behance.net/" title="Project Link" class="folio-item__project-link">Project Link</a>
            <div class="folio-item__caption">
                <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
            </div>
        </div>
    </div>
    <div class="column" data-aos="fade-up">
        <div class="folio-item">
            <div class="folio-item__thumb">
                <a class="folio-item__thumb-link" href="images/portfolio/gallery/g-oi-logo.jpg" Title="OI Logo" data-size="1050x700">
                    <img src="images/portfolio/oi-logo.jpg.jpg" 
                         srcset="images/portfolio/oi-logo.jpg 1x, images/portfolio/oi-logo@2x.jpg 2x" alt="" />
                </a>
            </div>
            <div class="folio-item__info">
                <div class="folio-item__cat">Branding</div>
                <h4 class="folio-item__title">OI Logo</h4>
            </div>
            <a href="https://www.behance.net/" title="Project Link" class="folio-item__project-link">Project Link</a>
            <div class="folio-item__caption">
                <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
            </div>
        </div>
    </div> 
    <div class="column" data-aos="fade-up">
        <div class="folio-item">
            <div class="folio-item__thumb">
                <a class="folio-item__thumb-link" href="images/portfolio/gallery/g-corrugated-sheets.jpg" title="Corrugated Sheets" data-size="1050x700">
                    <img src="images/portfolio/corrugated-sheets.jpg" 
                         srcset="images/portfolio/corrugated-sheets.jpg 1x, images/portfolio/corrugated-sheets@2x.jpg 2x" alt="" />
                </a>
            </div>
            <div class="folio-item__info">
                <div class="folio-item__cat">Frontend Design</div>
                <h4 class="folio-item__title">Corrugated Sheets</h4>
            </div>
            <a href="https://www.behance.net/" title="Project Link" class="folio-item__project-link">Project Link</a>
            <div class="folio-item__caption">
                <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
            </div>
        </div>
    </div>
    <div class="column" data-aos="fade-up">
        <div class="folio-item">
            <div class="folio-item__thumb">
                <a class="folio-item__thumb-link" href="../images/portfolio/gallery/g-woodcraft.jpg" title="Sand Dunes" data-size="1050x700">
                    <img src="../images/portfolio/woodcraft.jpg" 
                         srcset="../images/portfolio/woodcraft.jpg 1x, ../images/portfolio/woodcraft@2x.jpg 2x" alt="" />
                </a>
            </div>
            <div class="folio-item__info">
                <div class="folio-item__cat">Frontend Design</div>
                <h4 class="folio-item__title">Wooocraft</h4>
            </div>
            <a href="https://www.behance.net/" title="Project Link" class="folio-item__project-link">
                Project Link
            </a>
            <div class="folio-item__caption">
                <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
            </div>
        </div>
    </div> 
    <div class="column" data-aos="fade-up">
        <div class="folio-item">
            <div class="folio-item__thumb">
                <a class="folio-item__thumb-link" href="../images/portfolio/gallery/g-lamp.jpg" title="The Lamp" data-size="1050x700">
                    <img src="../images/portfolio/lamp.jpg" 
                         srcset="../images/portfolio/lamp.jpg 1x, images/portfolio/lamp@2x.jpg 2x" alt="" />
                </a>
            </div>
            <div class="folio-item__info">
                <div class="folio-item__cat">Frontend Design</div>
                <h4 class="folio-item__title">The Lamp</h4>
            </div>
            <a href="https://www.behance.net/" title="Project Link" class="folio-item__project-link">Project Link</a>
            <div class="folio-item__caption">
                <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
            </div>
        </div>
    </div> 

</div> 

</section> */}










    {/* clients
    ================================================== */}
    <div id="clients" className="section s-clients">

        <div className="row narrower s-clients__top h-text-center">
            <div className="column">
                <h1 className="display-1" data-aos="fade-up">
                We've had the priveledge with working with
                some of the largest and most iconic brands
                </h1>
            </div>
        </div> 

        <div className="row clients-outer">
            <div className="column">
                <div className="clients" data-aos="fade-up">

                    <a href="#0" title="" className="clients__slide"><img src={Dropbox} /></a>
                    <a href="#0" title="" className="clients__slide"><img src={Atom} /></a>
                    <a href="#0" title="" className="clients__slide"><img src={Github} /></a>
                    <a href="#0" title="" className="clients__slide"><img src={Redhat} /></a>
                    <a href="#0" title="" className="clients__slide"><img src={Medium} /></a>
                    <a href="#0" title="" className="clients__slide"><img src={Messenger} /></a>
                    <a href="#0" title="" className="clients__slide"><img src={Steam} /></a>
                    <a href="#0" title="" className="clients__slide"><img src={Spotify} /></a>              
                </div> 
            </div> 
        </div> 

        <div className="row testimonials collapse">
            <div className="column large-12">
                <div className="testimonial-slider" data-aos="fade-up">

                    <div className="testimonial-slider__slide">
                        <p>
                      1st Testimony aboout the brand
                        </p>
                        <div className="testimonial-slider__author">
                            <img src="../images/avatars/user-02.jpg" alt="Author image" className="testimonial-slider__avatar" />
                            <cite className="testimonial-slider__cite">
                                <strong>Tim Cook</strong>
                                <span>CEO, Apple</span>
                            </cite>
                        </div>
                    </div> 
    
                    <div className="testimonial-slider__slide">
                        <p>
                        2nd Testimony aboout the brand
                        </p>
                        <div className="testimonial-slider__author">
                            <img src="../images/avatars/user-01.jpg" alt="Author image" className="testimonial-slider__avatar" />
                            <cite className="testimonial-slider__cite">
                                <strong>Sundar Pichai</strong>
                                <span>CEO, Google</span>
                            </cite>
                        </div>
                    </div> 
    
                    <div className="testimonial-slider__slide">
                        <p>
                        3rd Testimony aboout the brand
                        </p>
                        <div className="testimonial-slider__author">
                            <img src="images/avatars/user-04.jpg" alt="Author image" className="testimonial-slider__avatar" />
                            <cite className="testimonial-slider__cite">
                                <strong>Satya Nadella</strong>
                                <span>CEO, Microsoft</span>
                            </cite>
                        </div>
                    </div> 
    
                    <div className="testimonial-slider__slide">
                        <p>
                        4th Testimony aboout the brand
                        </p>
                        <div className="testimonial-slider__author">
                            <img src="images/avatars/user-05.jpg" alt="Author image" class="testimonial-slider__avatar" />
                            <cite class="testimonial-slider__cite">
                                <strong>Jeff Bezos</strong>
                                <span>CEO, Amazon</span>
                            </cite>
                        </div>
                    </div> 
                </div>             
            </div>
        </div>
    </div> 




     {/*  contact
    ================================================== */}
    <section className="s-contact">

        <div className="row narrower s-contact__top h-text-center">
            <div className="column">
                <h3 className="h6">Get In Touch</h3>
                <h1 className="display-1">
                Let’s Build Something Great Together! Have a project 
                in mind? Contact us today and let’s explore how we 
                can elevate your brand.
                </h1>
            </div>
        </div> 

        <div className="row h-text-center">
            <div className="column">
                <p className="s-contact__email">
                    <a href="mailto:kenechukwu@gmail.com">kene@gmail.com</a>
                </p>
            </div>
        </div>

    </section>  


   {/* footer
    ================================================== */}
    <footer className="s-footer">
        <div className="row row-y-top">

            <div className="column large-8 medium-12">
                <div className="row">
                    <div className="column large-7 tab-12 s-footer__block">
                        <h4 className="h6">Where to Find Us</h4>
        
                        <p>
                        3 Sen. Uche Ekwunife Crescent, <br />
                        off Kwata Junction, <br />
                        Awka, Anambra State <br />
                        <a href="tel:+2349031868409">234 903 186 8409</a>
                        </p>
                    </div>
        
                    <div className="column large-5 tab-12 s-footer__block">
                        <h4 className="h6">Follow Us</h4>
        
                        <ul className="s-footer__list">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">TikTok</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="column large-4 medium-12 s-footer__block--end">
                <a href="mailto:#0" className="btn h-full-width">Let's Talk</a>

                <div className="ss-copyright">
                    <span>Copyright Kenechukwu 2024</span> 
                    <span>Design by <a href="https://www.styleshout.com/">Kenechukwu</a> Media <a href="https://themewagon.com">Agency</a></span>
                </div>
            </div>

            <div className="ss-go-top">
                <a className="smoothscroll" title="Back to Top" href="#top">
                    top
                </a>
            </div> 
        </div>
    </footer>
    

   {/* photoswipe background
    ================================================== */}
    <div aria-hidden="true" className="pswp" role="dialog" tabindex="-1">

        <div className="pswp__bg"></div>
        <div className="pswp__scroll-wrap">

            <div className="pswp__container">
                <div className="pswp__item"></div>
                <div className="pswp__item"></div>
                <div className="pswp__item"></div>
            </div>

            <div className="pswp__ui pswp__ui--hidden">
                <div className="pswp__top-bar">
                    <div className="pswp__counter"></div><button className="pswp__button pswp__button--close" title="Close (Esc)"></button> <button className="pswp__button pswp__button--share" title=
                    "Share"></button> <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button className="pswp__button pswp__button--zoom" title=
                    "Zoom in/out"></button>
                    <div className="pswp__preloader">
                        <div className="pswp__preloader__icn">
                            <div className="pswp__preloader__cut">
                                <div className="pswp__preloader__donut"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                    <div className="pswp__share-tooltip"></div>
                </div><button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button> <button className="pswp__button pswp__button--arrow--right" title=
                "Next (arrow right)"></button>
                <div className="pswp__caption">
                    <div className="pswp__caption__center"></div>
                </div>
            </div>
        </div>
    </div> 

          
          {/* </div> */}
          </body>
    </>
  )
}

export default HomePage
