import React from 'react';

const Skills: React.FC = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        <div className="skill-card html">
          <i className="fa-brands fa-html5 html-icon" aria-hidden="true"></i>
          <p>HTML</p>
        </div>
        <div className="skill-card css">
          <i className="fa-brands fa-css3-alt css-icon" aria-hidden="true"></i>
          <p>CSS</p>
        </div>
        <div className="skill-card js">
          <i className="fa-brands fa-js-square js-icon" aria-hidden="true"></i>
          <p>JavaScript</p>
        </div>
        <div className="skill-card react">
          <i className="fa-brands fa-react react-icon" aria-hidden="true"></i>
          <p>React</p>
        </div>
        <div className="skill-card node">
          <i className="fa-brands fa-node-js node-icon" aria-hidden="true"></i>
          <p>Node</p>
        </div>
        <div className="skill-card nextjs">
          <i className="fa-brands fa-nextjs nextjs-icon" aria-hidden="true"></i>
          <p>Next.js</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
