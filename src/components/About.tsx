
import Image from 'next/image';
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            As a developer, I have always been passionate about creating elegant and effective solutions to
            complex problems. I have a strong foundation in software development, with a focus on web
            technologies such as HTML, CSS, and JavaScript. I enjoy working on both the front-end and
            back-end of applications, and I am always looking for ways to optimize performance, improve user
            experience, and ensure the highest level of code quality.
          </p>
          <p>
            Throughout my career, I have worked on a wide range of projects, from simple static websites to
            complex enterprise-level applications. I am experienced in working with a variety of development
            tools and frameworks, including React, Angular, Vue.js, Node.js, and Laravel. I am always eager
            to learn and explore new technologies, and I am constantly seeking out opportunities to improve
            my skills and knowledge.
          </p>
        </div>
        <div className="about-img">
          <Image
            src="/images/profile.jpg"
            className="profile-img"
            width={300}
            height={500}
            alt="About me image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
