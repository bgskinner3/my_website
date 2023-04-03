import React, { useState, useEffect } from 'react';
import { Link, Button, Element, Events, animateScroll } from 'react-scroll';
import { SiLinkedin, SiMedium, SiGithub } from 'react-icons/si';
const NavBar = () => {
  const [activeSection, setActiveSection] = useState('');
  //console.log(id)
  // console.log(id)
  // const styles = {
  //   active: {
  //     visibility: 'visible',
  //     transition: 'all 0.5s',
  //   },
  //   hidden: {
  //     visibility: 'hidden',
  //     transition: 'all 0.5s',
  //     transform: 'translateY(-100%)',
  //   },
  // };
  //top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-black
  return (
    <header>
      <nav className=" top-0 z-10 bg-transparent absolute backdrop-filter backdrop-blur-lg bg-opacity-30 ">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl text-gray-900 font-semibold"></span>

            <div className="grid grid-cols-1 gap-y-10 pl-10 mt-52 text-white-900">
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
          </div>
        </div>
      </nav>
      <div className="fixed top-10 z-10 left-10 bg-transparent">
        <ul>
          <li>
            <Link
              activeClass="active"
              smooth
              spy={true}
              to="main"
              onSetActive={() => setActiveSection('')}
            ></Link>
          </li>
          <li>
            <Link
              activeClass="active"
              smooth
              spy
              to="about"
              onSetActive={() => setActiveSection('about')}
              offset={-200}
            ></Link>
            {activeSection === 'about' && (
              <span className="nav-text text-7xl italic introFont font-bold tracking-[.2em]">
                ABOUT ME
              </span>
            )}
          </li>
          <li>
            <Link
              activeClass="active"
              smooth
              spy
              to="experience"
              onSetActive={() => setActiveSection('experience')}
              offset={-300}
            ></Link>
            {activeSection === 'experience' && (
              <span className="nav-text text-7xl italic introFont font-bold introFont tracking-[.2em]">
                EXPERIENCE
              </span>
            )}
          </li>
          <li>
            <Link
              activeClass="active"
              smooth
              spy
              to="medium"
              onSetActive={() => setActiveSection('medium')}
              offset={-400}
            ></Link>
            {activeSection === 'medium' && (
              <span className="nav-text text-7xl italic introFont font-bold introFont tracking-[.2em]">
                MEDIUM
              </span>
            )}
          </li>
          <li>
            <Link
              activeClass="active"
              smooth
              spy
              to="contactMe"
              onSetActive={() => setActiveSection('contactMe')}
              offset={-400}
            ></Link>
            {/* {activeSection === 'contactMe' && (
              <span className="nav-text text-7xl italic introFont font-bold introFont tracking-[.2em]">
                LET'S CONNECT
              </span>
            )} */}
          </li>
        </ul>
      </div>
    </header>
  );
};
//contactMe
export default NavBar;
