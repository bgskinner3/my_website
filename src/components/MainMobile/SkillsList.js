import React, { useEffect, useState, createRef } from 'react';
import { DiReact, DiJsBadge } from 'react-icons/di';
import {
  SiTypescript,
  SiRedux,
  SiPostgresql,
  SiTailwindcss,
  SiCss3,
  SiSequelize,
  SiGraphql,
  SiAwslambda,
  SiAmazonaws,
  SiMongodb,
  SiSolidity,
} from 'react-icons/si';
import { FaNode, FaDocker, FaPython } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import { Transition } from '@headlessui/react';
import { InView } from 'react-intersection-observer';
import { useInView } from 'react-intersection-observer';
import Arrow from '../../images/arrow.jpg';

const SkillsList = () => {
  const [time, setTime] = useState(Infinity);
  const { ref, inView } = useInView();

  useEffect(() => {
    const spans = document.querySelectorAll('.word span');

    if (inView) {
      spans.forEach((span, idx) => {
        span.addEventListener('click', (e) => {
          e.target.classList.add('active');
        });
        span.addEventListener('animationend', (e) => {
          e.target.classList.remove('active');
        });

        setTimeout(() => {
          span.classList.add('active');
        }, 750 * (idx + 1));
      });
    }
  }, [inView]);

  const SkillsObject = {
    javascript: useSpring({
      from: {
        '--value': 0,
        '--size': '12rem',
        '--thickness': '2px',
      },

      to: {
        '--value': 97,
      },
      delay: time + 500,
    }),
    typescript: useSpring({
      from: {
        '--value': 0,
        '--size': '12rem',
        '--thickness': '2px',
      },

      to: {
        '--value': 84,
      },
      delay: time + 600,
    }),
    react: useSpring({
      from: {
        '--value': 0,
        '--size': '12rem',
        '--thickness': '2px',
      },

      to: {
        '--value': 96,
      },
      delay: time + 700,
    }),
    aws: useSpring({
      from: {
        '--value': 0,
        '--size': '12rem',
        '--thickness': '2px',
      },

      to: {
        '--value': 63,
      },
      delay: time + 800,
    }),
    solidity: useSpring({
      from: {
        '--value': 0,
        '--size': '12rem',
        '--thickness': '2px',
      },

      to: {
        '--value': 75,
      },
      delay: time + 900,
    }),
    node: useSpring({
      from: {
        '--value': 0,
        '--size': '12rem',
        '--thickness': '2px',
      },

      to: {
        '--value': 92,
      },
      delay: time + 1000,
    }),
    graphql: useSpring({
      from: {
        '--value': 0,
        '--size': '12rem',
        '--thickness': '2px',
      },

      to: {
        '--value': 93,
      },
      delay: time + 1100,
    }),
    docker: useSpring({
      from: {
        '--value': 0,
        '--size': '12rem',
        '--thickness': '2px',
      },

      to: {
        '--value': 68,
      },
      delay: time + 1200,
    }),
  };

  function setDuration(e) {
    if (e) {
      setTime(1000);
    }
  }

  return (
    <div className="mb-24">
      <div className="flex  pl-8 justify-center pt-8">
        <div className="flex flex-col space-y-4 justify-center">
          <p className="ptagsMobile   tracking-[.1em] -ml-52 ">{`< section >`}</p>
          <p className="ptagsMobile   tracking-[.1em] -ml-48">{`< h1 >`}</p>
          <div className="grid grid-cols-1 pl-10 pr-10 gap-2 ">
            <div
              ref={ref}
              className="wordMobile italic font-bold  tracking-[.1em] text-red-600 -ml-32"
            >
              <span>S</span>
              <span>K</span>
              <span>I</span>
              <span>L</span>
              <span>L</span>
              <span>S</span>
            </div>
            <p className="ptagsMobile   tracking-[.1em] -ml-48">{`< /h1 >`}</p>
            <p className="ptagsMobile   tracking-[.1em] -ml-48">{`< p >`}</p>
            <div className="items-center h-full text-left ">
              <p className="aboutmefont p-10 text-xs leading-loose text-transparent bg-clip-text bg-gradient-to-l from-slate-500 to-slate-400">
                Here is a list of some of my skills and my level of familiarity
                with each one. It's intended to provide a brief overview of what
                I am capable of, and to give you a sense of the expertise I can
                bring to the table.
              </p>
            </div>
            <p className="ptagsMobile   tracking-[.1em] -ml-48">{`< /p >`}</p>
            <p className="ptagsMobile   tracking-[.1em] -ml-48">{`< /section >`}</p>
            {/* <div className="pt- ml-auto">
              <img src={Arrow} alt="" className="h-[100px] w-[200px] " />
            </div> */}
          </div>
          <div className="ml-auto">
            <img src={Arrow} alt="" className="h-[100px] w-[200px] " />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <InView triggerOnce={true} onChange={(e) => setDuration(e)}>
          {({ inView, ref }) => (
            <div ref={ref}>
              <Transition.Root show={inView} appear={true} className="">
                <div className="grid grid-cols-2 gap-12 overflow-hidden">
                  <Transition.Child
                    as="div"
                    enter="ease-in duration-[500ms] transition-all"
                    enterFrom="opacity-0 translate-x-48"
                    enterTo="opacity-100 translate-y-0"
                    className=""
                  >
                    <div className="flex overflow-hidden space-x-4">
                      <DiJsBadge className="w-12 h-12 self-center text-yellow-300 " />
                      <animated.div
                        className="radial-progress text-white w-12 h-12 text-[12px]"
                        style={SkillsObject.javascript}
                      >
                        {SkillsObject.javascript['--value'].to(
                          (v) => v.toFixed(1) + '%'
                        )}
                      </animated.div>
                    </div>
                  </Transition.Child>

                  <Transition.Child
                    as="div"
                    enter="ease-in duration-[600ms] transition-all"
                    enterFrom="opacity-0 translate-x-48"
                    enterTo="opacity-100 translate-y-0"
                    className="overflow-hidden"
                  >
                    <div className="flex overflow-hidden space-x-4">
                      <SiTypescript className="w-12 h-12 self-center text-blue-500" />
                      <animated.div
                        className="radial-progress text-white w-12 h-12 overflow-hidden text-[12px]"
                        style={SkillsObject.typescript}
                      >
                        {SkillsObject.typescript['--value'].to(
                          (v) => v.toFixed(1) + '%'
                        )}
                      </animated.div>
                    </div>
                  </Transition.Child>

                  <Transition.Child
                    as="div"
                    enter="ease-in duration-[700ms] transition-all"
                    enterFrom="opacity-0 translate-x-48"
                    enterTo="opacity-100 translate-y-0"
                    className=""
                  >
                    <div className="flex overflow-hidden space-x-4">
                      <DiReact
                        className="w-12 h-12
                     self-center text-blue-400"
                      />
                      <animated.div
                        className="radial-progress text-white w-12 h-12
                       overflow-hidden text-[12px]"
                        style={SkillsObject.react}
                      >
                        {SkillsObject.react['--value'].to(
                          (v) => v.toFixed(1) + '%'
                        )}
                      </animated.div>
                    </div>
                  </Transition.Child>
                  <Transition.Child
                    as="div"
                    enter="ease-in duration-[800ms] transition-all"
                    enterFrom="opacity-0 translate-x-48"
                    enterTo="opacity-100 translate-y-0"
                    className=""
                  >
                    <div className="flex overflow-hidden space-x-4">
                      <SiAmazonaws className="w-12 h-12 self-center text-orange-400" />
                      <animated.div
                        className="radial-progress text-white w-12 h-12
                       overflow-hidden text-[12px]"
                        style={SkillsObject.aws}
                      >
                        {SkillsObject.aws['--value'].to(
                          (v) => v.toFixed(1) + '%'
                        )}
                      </animated.div>
                    </div>
                  </Transition.Child>

                  <Transition.Child
                    as="div"
                    enter="ease-in duration-[900ms] transition-all"
                    enterFrom="opacity-0 translate-x-48"
                    enterTo="opacity-100 translate-y-0"
                    className=""
                  >
                    <div className="flex overflow-hidden space-x-4">
                      <SiSolidity
                        className="w-12 h-12
                     self-center text-slate-500"
                      />
                      <animated.div
                        className="radial-progress text-white w-12 h-12
                       overflow-hidden text-[12px]"
                        style={SkillsObject.solidity}
                      >
                        {SkillsObject.solidity['--value'].to(
                          (v) => v.toFixed(1) + '%'
                        )}
                      </animated.div>
                    </div>
                  </Transition.Child>
                  <Transition.Child
                    as="div"
                    enter="ease-in duration-[1000ms] transition-all"
                    enterFrom="opacity-0 translate-x-48"
                    enterTo="opacity-100 translate-y-0"
                    className=""
                  >
                    <div className="flex overflow-hidden space-x-4">
                      <FaNode
                        className="w-12 h-12
                     self-center bg-lime-700"
                      />
                      <animated.div
                        className="radial-progress text-white w-12 h-12
                       overflow-hidden text-[12px]"
                        style={SkillsObject.node}
                      >
                        {SkillsObject.node['--value'].to(
                          (v) => v.toFixed(1) + '%'
                        )}
                      </animated.div>
                    </div>
                  </Transition.Child>
                  <Transition.Child
                    as="div"
                    enter="ease-in duration-[1100ms] transition-all"
                    enterFrom="opacity-0 translate-x-48"
                    enterTo="opacity-100 translate-y-0"
                    className=""
                  >
                    <div className="flex overflow-hidden space-x-4">
                      <SiGraphql
                        className="w-12 h-12
                     self-center text-pink-500"
                      />
                      <animated.div
                        className="radial-progress text-white w-12 h-12
                       overflow-hidden text-[12px]"
                        style={SkillsObject.graphql}
                      >
                        {SkillsObject.graphql['--value'].to(
                          (v) => v.toFixed(1) + '%'
                        )}
                      </animated.div>
                    </div>
                  </Transition.Child>
                  <Transition.Child
                    as="div"
                    enter="ease-in duration-[1200ms] transition-all"
                    enterFrom="opacity-0 translate-x-48"
                    enterTo="opacity-100 translate-y-0"
                    className=""
                  >
                    <div className="flex overflow-hidden space-x-4">
                      <FaDocker
                        className="w-12 h-12
                     self-center text-sky-900"
                      />
                      <animated.div
                        className="radial-progress text-white w-12 h-12
                       overflow-hidden text-[12px]"
                        style={SkillsObject.docker}
                      >
                        {SkillsObject.docker['--value'].to(
                          (v) => v.toFixed(1) + '%'
                        )}
                      </animated.div>
                    </div>
                  </Transition.Child>
                </div>
              </Transition.Root>
            </div>
          )}
        </InView>
      </div>
    </div>
  );
};

export default SkillsList;
