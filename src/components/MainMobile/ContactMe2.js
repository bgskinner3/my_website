import React, { useRef, useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { InView } from 'react-intersection-observer';
import ReactCurvedText from 'react-curved-text';
import { SiLinkedin, SiMedium, SiGithub, SiGmail } from 'react-icons/si';


const ContactMe2 = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const animationStyle = {
    animation: 'move 5s linear infinite',
    animationPlayState: isPaused ? 'paused' : 'running',
  };
  

  const style = {
    fontSize: 24,
    fontFamily: 'Pl',
  };
  return (
    <div id="contactMe" className="myClassMobile relative ">
      <div className="  overflow-hidden">
        <div className=" myClassMobile ">
          <div className="z-10 brightness-90">
            <div className="flex absolute -top-96  text-white">
              <ReactCurvedText
                width={600}
                height={600}
                cx={300}
                cy={300}
                rx={250}
                ry={250}
                startOffset={0}
                reversed={true}
                text={`CHESS,   DeFi,   ROCK CLIMBING, FRONT END DEVELOPMENT, BACK END DEVELOPEMENT, ETHEREUM, WEBFLOW DEVELOPMENT`}
                textProps={style}
                textPathProps={{ fill: '#f1e9e9' }}
                tspanProps={null}
                ellipseProps={null}
                svgProps={{ className: 'rotating-curved-text' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -inset-10 bg-gradient-to-b from-black to-transparent "></div>
      <div className="absolute bottom-72 p-6 right-5 ">
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div ref={ref}>
              <Transition.Root
                show={inView}
                appear={true}
                className="absolute flex flex-col space-y-16 text-left z-10 top-48 left-40 "
              >
                <Transition.Child
                  as="div"
                  enter="ease-in delay-[800ms] duration-[300ms] transition-all"
                  enterFrom="opacity-0 translate-y-full  rotate-12"
                  enterTo="opacity-100 translate-y-0 rotate-0"
                  className=" "
                >
                  <div className=" contactMeText font-bold text-white ">
                    LETS'S
                  </div>
                </Transition.Child>

                <Transition.Child
                  as="div"
                  enter="ease-in delay-[1000ms] duration-[300ms] transition-all"
                  enterFrom="opacity-0 translate-y-full  rotate-12"
                  enterTo="opacity-100 translate-y-0 rotate-0"
                  className=" "
                >
                  <div className=" contactMeText font-bold  text-white ">
                    CONNECT!
                  </div>
                </Transition.Child>
              </Transition.Root>
            </div>
          )}
        </InView>
        <div className="absolute -bottom-5">
          <div className=" w-screen ">
            <hr className="my-5 w-screen  h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            <div
              className="moving-text flex space-x-32 font-extrabold"
              style={animationStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="grid grid-rows-1 space-y-6">
                <a href="https://github.com/bgskinner3">
                  <SiGithub className="w-24 h-24 hover:scale-110 hover:animate-bounce" />

                  <p className="aboutMeText mt-5">GITHUB </p>
                </a>
              </div>
              <div className="grid grid-rows-1">
                <a href="https://medium.com/@bgskinner3">
                  <SiMedium className="w-24 h-24 " />

                  <p className="aboutMeText mt-5">MEDIUM </p>
                </a>
              </div>
              <div className="grid grid-rows-1">
                <a href="https://www.linkedin.com/in/brennan-skinner-642783a3/">
                  <SiLinkedin className="w-24 h-24 hover:scale-110 hover:animate-bounce" />
                  <p className="aboutMeText mt-5">LINKEDIN </p>
                </a>
              </div>
              <div className="grid grid-rows-1 text-center space-y-12">
                <a href="https://www.linkedin.com/in/brennan-skinner-642783a3/">
                  <SiGmail className="w-24 h-24 hover:scale-110 hover:animate-bounce" />
                  <p className="aboutMeText mt-5">GMAIL </p>
                </a>
              </div>
            </div>
            <hr className="my-5  h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
          </div>
        </div>
        <svg
          viewBox="0 0 500 800"
          width="356"
          height="556"
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          <circle
            cx="218"
            cy="300"
            r="250"
            stroke="#F8EEE4"
            strokeWidth="1"
            strokeDasharray="1 1"
            strokeDashoffset="200"
            fill="none"
            fillRule="evenodd"
            opacity="100"
          />
        </svg>
      </div>
    </div>
  );
};

export default ContactMe2;
