import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <hr />
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Chaima&apos;s Portfolio</p>
        <div className="social_icons">
        
          <a
            href="https://github.com/chaimaouerghil"
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
    </>
  );
};

export default Footer;
