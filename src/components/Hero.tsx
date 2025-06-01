import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <Image
        src="/images/profile.jpg"
        className="profile-img"
        width={300}
        height={300}
        alt="Chaima's personal headshot"
      />
      <div className="hero-text">
        <h1>Hey, I&apos;m Chaima 👋</h1>
        <p>
          I'm a software developer . I specialize in building (and occasionally designing)
          exceptional websites, applications, and everything in between.
        </p>
        <div className="social-icons">
       
          <a
            href="https://github.com/chaimaouerghi"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/chaima-o-01bbb1a6a/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
