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

const SkillsList = () => {
  const [time, setTime] = useState(Infinity);

  const SkillsObject = {
    javascript: useSpring({
      from: {
        '--value': 0,
        '--size': '12rem',
        '--thickness': '2px',
      },

      to: {
        '--value': 95,
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
        '--value': 85,
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
        '--value': 95,
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
        '--value': 65,
      },
      delay: time +800,
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
        '--value': 95,
      },
      delay: time +1000,

    }),
    graphql: useSpring({
      from: {
        '--value': 0,
        '--size': '12rem',
        '--thickness': '2px',
      },

      to: {
        '--value': 92,
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
      delay: time +1200,
      
    }),
  };

  function setDuration(e) {
   
    if (e) {
      setTime(1000);
    } 
  }

  return (
    <div className="flex justify-center">
      <InView triggerOnce={true} onChange={(e) => setDuration(e)}>
        {({ inView, ref }) => (
          <div ref={ref}>
            <Transition.Root show={inView} appear={true} className="">
              <div className="grid grid-cols-4 gap-24 overflow-hidden">
                <Transition.Child
                  as="div"
                  enter="ease-in duration-[500ms] transition-all"
                  enterFrom="opacity-0 translate-x-48"
                  enterTo="opacity-100 translate-y-0"
                  className=""
                >
                  <div className="flex overflow-hidden space-x-4">
                    <DiJsBadge className="w-24 h-24 self-center text-yellow-300 " />
                    <animated.div
                      className="radial-progress text-white w-24 h-24"
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
                    <SiTypescript className="w-24 h-24 self-center text-blue-500" />
                    <animated.div
                      className="radial-progress text-white w-24 h-24 overflow-hidden"
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
                    <DiReact className="w-24 h-24 self-center text-blue-400" />
                    <animated.div
                      className="radial-progress text-white w-24 h-24 overflow-hidden"
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
                    <SiAmazonaws className="w-24 h-24 self-center text-orange-400" />
                    <animated.div
                      className="radial-progress text-white w-24 h-24 overflow-hidden"
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
                    <SiSolidity className="w-24 h-24 self-center text-slate-500" />
                    <animated.div
                      className="radial-progress text-white w-24 h-24 overflow-hidden"
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
                    <FaNode className="w-24 h-24 self-center bg-lime-700" />
                    <animated.div
                      className="radial-progress text-white w-24 h-24 overflow-hidden"
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
                    <SiGraphql className="w-24 h-24 self-center text-pink-500" />
                    <animated.div
                      className="radial-progress text-white w-24 h-24 overflow-hidden"
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
                    <FaDocker className="w-24 h-24 self-center text-sky-900" />
                    <animated.div
                      className="radial-progress text-white w-24 h-24 overflow-hidden"
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
  );
};

export default SkillsList;
