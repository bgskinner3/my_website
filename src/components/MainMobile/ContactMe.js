import React, { useRef, useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { InView } from 'react-intersection-observer';
import ReactCurvedText from 'react-curved-text';
import { SiLinkedin, SiMedium, SiGithub, SiGmail } from 'react-icons/si';
import { useSpring, animated } from 'react-spring';

const ContactMe = () => {
  // const [startOffset, setStartOffset] = useState(-400);
  // const startOffsetRef = useRef(startOffset);
  // const ref = useRef(null);
  // useEffect(() => {
  //   // Create an IntersectionObserver that triggers when the component is 50% visible
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         // Start the animation loop when the component is in view
  //         setTimeout(() => requestAnimationFrame(animate), 1000);
  //       }
  //     },
  //     { threshold: 0.5 }
  //   );

  //   // Observe the component when it mounts
  //   observer.observe(ref.current);

  //   // Clean up the observer when the component unmounts
  //   return () => observer.disconnect();
  // }, []);

  // const animate = (time) => {
  //   // Get the previous startOffset value from the ref
  //   const prevStartOffset = startOffsetRef.current;

  //   // Calculate the new startOffset value
  //   const newStartOffset = prevStartOffset + 0.1 * (1250 - prevStartOffset);

  //   // Update the state and ref with the new value
  //   setStartOffset(newStartOffset);
  //   startOffsetRef.current = newStartOffset;

  //   // Request the next animation frame if the new value is not yet equal to the target value
  //   if (newStartOffset !== 1250) {
  //     requestAnimationFrame(animate);
  //   }
  // };
  const textStyles = useSpring({
    from: { transform: 'translateX(-300%)', opacity: '100' },
    to: { transform: 'translateX(200%)', opacity: '100' },

    loop: true,
  });

  const style = {
    fontSize: 24,
    fontFamily: 'Pl',
  };

  return (
    <div id="contactMe" className="myClassMobile relative">
      <div className=" h-screen bg-red-500">
        <div className=" myClassMobile bg-auto bg-center bg-fixed flex ">
          <div className=" absolute top-32">
            <InView triggerOnce={true}>
              {({ inView, ref }) => (
                <div ref={ref}>
                  <Transition.Root
                    show={inView}
                    appear={true}
                    className="absolute flex flex-col space-y-16 text-left z-10 top-18 inset-y-20 left-20 "
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
            <div className="flex absolute -left-4 -top-24">
              <svg
                viewBox="0 0 500 800"
                width="356"
                height="556"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <circle
                  cx="118"
                  cy="328"
                  r="300"
                  stroke="#F8EEE4"
                  strokeWidth="1"
                  strokeDasharray="1155 1"
                  strokeDashoffset="0"
                  fill="none"
                  fillRule="evenodd"
                  opacity="100"
                />
              </svg>
            </div>
            <div className="flex z-10 text-white  ml-14 w-full">
              <div className="flex absolute top-56 text-white">
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
              <div className="absolute left-32 top-44">
                <InView triggerOnce={true}>
                  {({ inView, ref }) => (
                    <div ref={ref}>
                      <Transition.Root
                        show={inView}
                        appear={true}
                        className="absolute flex flex-col space-y-20 text-left p-10 z-10 inset-y-48 left-14 text-center"
                      >
                        <Transition.Child
                          as="div"
                          enter="ease-in delay-[800ms] duration-[300ms] transition-all"
                          enterFrom="opacity-0 translate-y-full  rotate-12"
                          enterTo="opacity-100 translate-y-0 rotate-0"
                          className=" perspective-none "
                        >
                          <div className=" contactMeText font-bold text-white ">
                            PASSIONS
                          </div>
                        </Transition.Child>
                        <Transition.Child
                          as="div"
                          enter="ease-in delay-[1000ms] duration-[300ms] transition-all"
                          enterFrom="opacity-0 translate-y-full  rotate-12"
                          enterTo="opacity-100 translate-y-0 rotate-0"
                          className=" "
                        >
                          <div className=" contactMeText font-bold  text-white text-center">
                            {'&'}
                          </div>
                        </Transition.Child>

                        <Transition.Child
                          as="div"
                          enter="ease-in delay-[1200ms] duration-[300ms] transition-all"
                          enterFrom="opacity-0 translate-y-full  rotate-12"
                          enterTo="opacity-100 translate-y-0 rotate-0"
                          className=" "
                        >
                          <div className=" contactMeText font-bold  text-white ">
                            INTERESTS
                          </div>
                        </Transition.Child>
                      </Transition.Root>
                    </div>
                  )}
                </InView>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -inset-10 bg-gradient-to-b from-black to-transparent"></div>
      <div className=" text-white absolute bottom-32 left-8 justify-center">
        <div className="space-y-12 justify-center ">
          <InView triggerOnce={true}>
            {({ inView, ref }) => (
              <div ref={ref}>
                <Transition.Root show={inView} appear={true}>
                  <Transition.Child
                    as="a"
                    enter="ease-in delay-[500ms] duration-[300ms] transition-all"
                    enterFrom="opacity-0 -translate-x-full rotate-12"
                    enterTo="opacity-100 translate-x-0 rotate-0"
                    className=""
                  >
                    <a href="https://github.com/bgskinner3">
                      <SiGithub className="w-12 h-12 hover:scale-110 hover:animate-bounce" />
                    </a>
                  </Transition.Child>
                </Transition.Root>
              </div>
            )}
          </InView>
          <InView triggerOnce={true}>
            {({ inView, ref }) => (
              <div ref={ref}>
                <Transition.Root show={inView} appear={false}>
                  <Transition.Child
                    as="a"
                    enter="ease-in delay-[500ms] duration-[500ms] transition-all"
                    enterFrom="opacity-0 -translate-x-full"
                    enterTo="opacity-100 translate-x-0"
                    className="  "
                  >
                    <a href="https://medium.com/@bgskinner3">
                      <SiMedium className="w-12 h-12 hover:scale-110 hover:animate-bounce" />
                    </a>
                  </Transition.Child>
                </Transition.Root>
              </div>
            )}
          </InView>
          <InView triggerOnce={true}>
            {({ inView, ref }) => (
              <div ref={ref}>
                <Transition.Root show={inView} appear={true}>
                  <Transition.Child
                    as="a"
                    enter="ease-in delay-[500ms] duration-[300ms] transition-all"
                    enterFrom="opacity-0 -translate-x-full"
                    enterTo="opacity-100 translate-x-0"
                    className="  "
                  >
                    <a href="https://www.linkedin.com/in/brennan-skinner-642783a3/">
                      <SiLinkedin className="w-12 h-12 hover:scale-110 hover:animate-bounce" />
                    </a>
                  </Transition.Child>
                </Transition.Root>
              </div>
            )}
          </InView>
          <InView triggerOnce={true}>
            {({ inView, ref }) => (
              <div ref={ref}>
                <Transition.Root show={inView} appear={true}>
                  <Transition.Child
                    as="a"
                    enter="ease-in delay-[500ms] duration-[300ms] transition-all"
                    enterFrom="opacity-0 -translate-x-full"
                    enterTo="opacity-100 translate-x-0"
                    className=" "
                    href="mailto:bgskinner2@gmail.com/?subject=Important Email!"
                  >
                    <a href="mailto:bgskinner2@gmail.com/?subject=Important Email!">
                      <SiGmail className="w-12 h-12 hover:scale-110 hover:animate-bounce" />
                    </a>
                  </Transition.Child>
                </Transition.Root>
              </div>
            )}
          </InView>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
