import React, { useRef, useEffect } from 'react';
import './About.css';
import abhi from '../../Assets/3.jpg';
import backgroundVideo from '../../Assets/earth.mp4'; // Make sure to replace this with the actual path to your video file

function About() {
  const aboutRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current.classList.add('fade-in');
        } else {
          aboutRef.current.classList.remove('fade-in');
        }
      },
      {
        threshold: 0.5000, // Trigger when 10% of the element is visible
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className='amain'>
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="about" ref={aboutRef}>
        <h1 className='haa'>AND I AM</h1>
        <h1 className='ha'>ABHISHEK. R</h1>
        <p className='ap'>
          Pigs are domesticated animals known for their intelligence and social behavior. They are mammals belonging to the Suidae family and are typically raised for meat production. Pigs are known for their omnivorous diet and their ability to adapt to various environments. They have a keen sense of smell and are often used in areas such as truffle hunting. Pigs are also social animals that live in groups called sounders. Additionally, pigs are known for their strong maternal instincts and their playful nature.
        </p>
      </div>
      
    </div>
  );
}

export default About;
