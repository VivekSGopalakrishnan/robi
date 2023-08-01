import React from 'react'
import './Home.css'
import {gsap} from 'gsap'
import { useEffect } from 'react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  useEffect(() => {
    // Function to animate fade-in on scroll
    function animateFadeIn() {
      const elements = document.querySelectorAll('.home-name , .home-foot, .me-des');

      elements.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 2,
            scrollTrigger: {
              trigger: element,
              start: 'top 70%', // Adjust the scroll trigger start position as needed
              end: 'bottom 60%', // Adjust the scroll trigger end position as needed
              scrub: true,
            },
          }
        );
      }
      );
    }
    animateFadeIn();

    

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div className='home'>
      <div className='home-content'>
        <div className='home-title'>
        Start Scrolling!!!

        </div>
        
      </div>
      <div className='home-foot' >
        Heyy!!
      </div>
      <div className='home-name'>
        I am V S Gopalakrishnan 
      </div>
        <div className='me-des'>
          A Web Developer currently studying in SRM Institue of science and technology
        </div>
      

    </div>
  )
}

export default Home