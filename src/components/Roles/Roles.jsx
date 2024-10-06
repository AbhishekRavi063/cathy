import React from 'react';
import './Roles.css';
import backgroundVideo from '../../Assets/earth.mp4'; // Import your video file

function Roles() {
  return (
    <div className='rolesmain'>
      {/* Background Video */}
      <video autoPlay muted loop className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1 className="role">ROLES AND ACHIEVEMENTS</h1>
      
       

       <div className="glassbox">
       <ul>
          <li>Full Stack Web Developer</li>
          <li>Python Developer</li>
          <li>INTERNED AT UST GLOBAL</li>
          <li>CO-FOUNDER AICALLER</li>
          <li>CO-FOUNDER QWIPBOARDAI</li>
          <li>Winner at National LEVEL Hackathon</li>
          <li>RESEARCH INTERN AT AMRITA VISHWA VIDYAPEETHAM</li>
          <li>CHAIRPERSON AT IEEE SB NCERC</li>
          <li>WEBMASTER AT IEEE PES KERALA CHAPTER</li>
        </ul>
      </div>
    </div>
  );
}

export default Roles;
