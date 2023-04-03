import React, { useRef, useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { InView } from 'react-intersection-observer';
import ReactCurvedText from 'react-curved-text';
import { SiLinkedin, SiMedium, SiGithub, SiGmail } from 'react-icons/si';
import { useSpring, animated } from 'react-spring';

const ContactMe = () => {
  const [startOffset, setStartOffset] = useState(-400);
  const startOffsetRef = useRef(startOffset);
  const ref = useRef(null);
  useEffect(() => {
    // Create an IntersectionObserver that triggers when the component is 50% visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start the animation loop when the component is in view
          setTimeout(() => requestAnimationFrame(animate), 1000);
        }
      },
      { threshold: .5 }
    );

    // Observe the component when it mounts
    observer.observe(ref.current);

    // Clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  const animate = (time) => {
    // Get the previous startOffset value from the ref
    const prevStartOffset = startOffsetRef.current;

    // Calculate the new startOffset value
    const newStartOffset = prevStartOffset + 0.1 * (1250 - prevStartOffset);

    // Update the state and ref with the new value
    setStartOffset(newStartOffset);
    startOffsetRef.current = newStartOffset;

    // Request the next animation frame if the new value is not yet equal to the target value
    if (newStartOffset !== 1250) {
      requestAnimationFrame(animate);
    }
  };
  const textStyles = useSpring({
    from: { transform: 'translateX(-100%)', opacity: '100' },
    to: { transform: 'translateX(100%)', opacity: '100' },

    loop: true,
  });

  const style = {
    fontSize: 52,
    fontFamily: 'Pl',
  };

  return (
    <div id="contactMe" className="myClass relative">
      <div className="h-screen bg-red-500 ">
        <div className=" myClass bg-auto bg-center bg-fixed flex">
          <div className="">
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <div ref={ref}>
                  <Transition.Root
                    show={inView}
                    appear={true}
                    className="absolute flex flex-col space-y-16 text-left p-10 z-10 inset-y-52 left-24"
                  >
                    <Transition.Child
                      as="div"
                      enter="ease-in delay-[500ms] duration-[300ms] transition-all"
                      enterFrom="opacity-0 translate-y-full  rotate-12"
                      enterTo="opacity-100 translate-y-0 rotate-0"
                      className=" perspective-none "
                    >
                      <div className=" my-text font-bold text-white ">
                        LETS'S
                      </div>
                    </Transition.Child>

                    <Transition.Child
                      as="div"
                      enter="ease-in delay-[700ms] duration-[300ms] transition-all"
                      enterFrom="opacity-0 translate-y-full  rotate-12"
                      enterTo="opacity-100 translate-y-0 rotate-0"
                      className=" perspective-none "
                    >
                      <div className=" my-text font-bold  text-white ">
                        CONNECT
                      </div>
                    </Transition.Child>
                  </Transition.Root>
                </div>
              )}
            </InView>
            <div className=" flex">
              <div className="absolute flex">
                <div ref={ref}>
                  <ReactCurvedText
                    width={1056}
                    height={1056}
                    cx={245}
                    cy={430}
                    rx={435}
                    ry={450}
                    startOffset={900}
                    reversed={true}
                    text={`React-GraphQL-DOCKER-AWS-SOLIDITY-JAVASCRIPT-TYPESCRIPT `}
                    textProps={style}
                    textPathProps={null}
                    tspanProps={null}
                    ellipseProps={null}
                    svgProps={null}
                  />
                </div>
              </div>
              <svg
                width="1056"
                height="1056"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="228"
                  cy="428"
                  r="427.5"
                  stroke="#F8EEE4"
                  strokeWidth="2"
                  strokeDasharray="1155 5"
                  strokeDashoffset="0"
                  fill="none"
                  fillRule="evenodd"
                  opacity="100"
                />
              </svg>
            </div>
          </div>

          <div className="text-white z-10  absolute bottom-52 right-6 justify-center ">
            <div className="flex space-x-12 justify-center">
              <a href="https://github.com/bgskinner3">
                <SiGithub className="w-24 h-24 hover:scale-110 hover:animate-bounce" />
              </a>

              <a href="https://medium.com/@bgskinner3">
                <SiMedium className="w-24 h-24 hover:scale-110 hover:animate-bounce" />
              </a>

              <a href="https://www.linkedin.com/in/brennan-skinner-642783a3/">
                <SiLinkedin className="w-24 h-24 hover:scale-110 hover:animate-bounce" />
              </a>

              <a href="mailto:bgskinner2@gmail.com/?subject=Important Email!">
                <SiGmail className="w-24 h-24 hover:scale-110 hover:animate-bounce" />
              </a>
            </div>

            <hr className="my-5  h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            <div className="flex ">
              <div className="moving-text-border relative">
                <animated.div
                  className="moving-text flex space-x-5 text-bold"
                  style={textStyles}
                >
                  <p>GITHUB </p> <p>MEDIUM </p> <p>LINKEDIN </p>
                  <p>GMAIL </p>
                  
                </animated.div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
      </div>
    </div>
  );
};

export default ContactMe;
