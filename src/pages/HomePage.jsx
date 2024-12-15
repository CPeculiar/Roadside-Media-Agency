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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faBroadcastTower } from '@fortawesome/free-solid-svg-icons';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import { faAd } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';



import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import ClientsAndTestimonials from './IconCarousel.jsx';

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

          <a href="https://wa.me/2349031868409" className="btn btn--primary btn--small">
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
                            <a href="https://www.facebook.com/share/1AYdjVx7K1/"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
                            {/* <a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a> */}
                            <a href="https://www.instagram.com/roadsidemediaagency/profilecard/?igsh=MXBzaDlqcnI4emh2Mg=="><i className="fab fa-instagram" aria-hidden="true"></i></a>
                            <a href="https://wa.me/2349031868409"><i className="fab fa-whatsapp" aria-hidden="true"></i></a>
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
      Roadside Media Agency powers corporate media with bold expertise and creative precision.
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
                <h3 className="item-title">Define</h3>
                <p>
                We clarify your brand's identity, audience, and goals to build a strong 
                foundation for impactful media solutions.
                </p>
            </div>
            <div className="column item item-process" data-aos="fade-up">
                <h3 className="item-title">Design</h3>
                <p>
                Our creative team develops tailored branding, visual identity, and studio 
                layouts that resonate and engage.
                </p>
            </div>
            <div className="column item item-process" data-aos="fade-up">
                <h3 className="item-title">Build</h3>
                <p>
                We set up and equip your digital studio, providing all the tools for 
                seamless audio, video, and content production.

                </p>
            </div>
            <div className="column item item-process" data-aos="fade-up">
                <h3 className="item-title">Launch</h3>
                <p>
                From live streaming to targeted media strategies, we get your message 
                out with impact, elevating your brand’s visibility.

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
                "At Roadside Media Agency, we deliver comprehensive media solutions to 
                elevate your brand."
                </h1>
            </div>
            <div className="column large-6 w-900-stack">
                <p className="lead" data-aos="fade-up">
                From dynamic branding and media coverage to state-of-the-art 
                digital studio setup, live streaming, and expert consultation, we’re your all-in-one
                 partner for impactful media success. Let's bring your vision to life!
                </p>
            </div>
        </div>

        <div className="row block-large-1-2 block-tab-full s-services__services item-list">
            <div className="column item item-service" data-aos="fade-up">
            {/* <span className="service-icon service-icon--product-design"></span> */}
            <FontAwesomeIcon icon={faAward} className='servicess-icons' />
                <h3 className="item-title">Branding</h3>
                <p>
                Roadside Media Agency crafts unique, compelling brand identities that capture your
                 vision, resonate with audiences, and strengthen your brand’s impact across all digital 
                 and physical platforms.
                </p>
            </div>

                <div className="column item item-service" data-aos="fade-up">
                {/* <span className="service-icon service-icon--frontend"></span> */}
                <FontAwesomeIcon icon={faVideo} className='servicess-icons' />
                <h3 className="item-title">Digital Studio Setup</h3>
                <p>
                We design, build, and equip professional audio and video studios for both home and 
                corporate environments, ensuring seamless production quality for podcasts, YouTube channels,
                 and more.
                </p>
            </div>

            <div className="column item item-service" data-aos="fade-up">
            {/* <span className="service-icon service-icon--illustration"></span> */}
            <FontAwesomeIcon icon={faBroadcastTower} className='servicess-icons' />
                <h3 className="item-title">Event Live Streaming & Setup</h3>
                <p>
                From conferences to product launches, Roadside provides full live-streaming services, 
                offering high-quality video, sound, and real-time audience engagement to bring your events 
                to a global stage.
                </p>
            </div>


            <div className="column item item-service" data-aos="fade-up">
            {/* <span className="service-icon service-icon--branding"></span>     */}
            <FontAwesomeIcon icon={faCameraRetro} className='servicess-icons' />
                <h3 className="item-title">Media Coverage</h3>
                <p>
                Our team provides expert media coverage for your events and corporate activities, 
                capturing moments that showcase your brand’s story and achievements to the world.
                </p>
            </div>


            <div className="column item item-service" data-aos="fade-up">
            {/* <span className="service-icon service-icon--research"></span>n */}
            <FontAwesomeIcon icon={faAd} className='servicess-icons' />
                <h3 className="item-title">Outdoor Advertising</h3>
                <p>
                We create attention-grabbing outdoor ad campaigns that connect with your audience, 
                strategically placing your message for maximum visibility and impact across prime 
                locations.
                </p>
            </div>
            <div className="column item item-service" data-aos="fade-up">
                {/* <span className="service-icon service-icon--ecommerce"></span> */}
                <FontAwesomeIcon icon={faHandshake} className='servicess-icons' />
                <h3 className="item-title">Media Consultation</h3>
                <p>
                Roadside offers professional media consultations, helping you strategize and execute 
                effective media solutions that align with your brand’s goals and elevate your presence
                 in the market.
                </p>
            </div>
        </div>
    </section>



    {/* clients
    ================================================== */}
  

   
               
           
<ClientsAndTestimonials />
 




        {/* <div className="row testimonials collapse">
            <div className="column large-12">
                <div className="testimonial-slider" data-aos="fade-up">

                    <div className="testimonial-slider__slide">
                        <p>
                      1st Testimony aboout the brand
                      We create attention-grabbing outdoor ad campaigns that connect with your audience, 
                strategically placing your message for maximum visibility and impact across prime 
                locations.
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
                        We create attention-grabbing outdoor ad campaigns that connect with your audience, 
                strategically placing your message for maximum visibility and impact across prime 
                locations.
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
                        We create attention-grabbing outdoor ad campaigns that connect with your audience, 
                strategically placing your message for maximum visibility and impact across prime 
                locations.
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
                        We create attention-grabbing outdoor ad campaigns that connect with your audience, 
                strategically placing your message for maximum visibility and impact across prime 
                locations.
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
        </div> */}
    




     {/*  contact
    ================================================== */}
    <section className="s-contact">

        <div className="row narrower s-contact__top h-text-center">
            <div className="column">
                <h3 className="h6">Get In Touch</h3>
                <h1 className="display-1">
                Let’s Build Something Great Together! <br/> Have a project 
                in mind? Contact us today and let’s explore how we 
                can elevate your brand.
                </h1>
            </div>
        </div> 

        <div className="row h-text-center">
            <div className="column">
                <p className="s-contact__email">
                    <a href="mailto:roadsidemediaagency@outlook.com" className='responsive-email'>roadsidemediaagency@outlook.com</a>
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
                        <h4 className="h6" style={{color: '#ff4b13'}}>Where to Find Us</h4>
        
                        <p>
                        3 Sen. Uche Ekwunife Crescent, <br />
                        off Kwata Junction, <br />
                        Awka, Anambra State <br />
                        <a href="tel:+2349031868409">234 903 186 8409</a>
                        </p>
                    </div>
        
                    <div className="column large-5 tab-12 s-footer__block">
                        <h4 className="h6" style={{color: '#ff4b13'}}>Follow Us</h4>
        
                        <ul className="s-footer__list">
                            <li><a href="https://www.facebook.com/share/1AYdjVx7K1/">Facebook</a></li>
                            <li><a href="https://www.instagram.com/roadsidemediaagency/profilecard/?igsh=MXBzaDlqcnI4emh2Mg==">Instagram</a></li>
                            <li><a href="mailto:roadsidemediaagency@outlook.com">Email</a></li>
                            <li><a href="https://wa.me/2349031868409">WhatsApp</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="column large-4 medium-12 s-footer__block--end">
                <a href="https://wa.me/2349031868409" className="btn h-full-width">Let's Talk</a>

                <div className="ss-copyright">
                    <span>Copyright Roadside Media Agency 2024</span> 
                    <span>Design by <a href="https://wa.me/2349031868409">Roadside</a> Media <a href="/">Agency</a></span>
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
