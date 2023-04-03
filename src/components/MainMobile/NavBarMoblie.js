import React, { useState, useEffect } from 'react';
import { Link, Button, Element, Events, animateScroll } from 'react-scroll';
import { SiLinkedin, SiMedium, SiGithub } from 'react-icons/si';








const NavBarMobile = () => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <header>
      <nav className="pb-5 ">
        <div className="max-w-5">
          <div className="flex items-center justify-center">
            <span className="text-2xl font-semibold">
              <div className="flex gap-x-10 pt-10 text-white-900">
                <a href="https://www.linkedin.com/in/brennan-skinner-642783a3/">
                  <SiLinkedin className="w-8 h-8 hover:scale-110 hover:animate-bounce" />
                </a>
                <a href="https://medium.com/@bgskinner3">
                  <SiMedium className="w-8 h-8 hover:scale-110 hover:animate-bounce" />
                </a>
                <a href="https://github.com/bgskinner3">
                  <SiGithub className="w-8 h-8 hover:scale-110 hover:animate-bounce" />
                </a>
              </div>
            </span>
          </div>
        </div>
     
      </nav>
  
    </header>
  );
};

export default NavBarMobile;
