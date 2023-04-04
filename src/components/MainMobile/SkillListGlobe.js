import React, { useState, useRef, useEffect } from 'react';
import allIcons from 'simple-icons';
import { v4 } from 'uuid';
import { IconCloud, Cloud, renderSimpleIcon } from 'react-icon-cloud';
import { useInView } from 'react-intersection-observer';
import Arrow from '../../images/arrowleft.jpg';
import { Transition } from '@headlessui/react';
import { InView } from 'react-intersection-observer';

const SkillListGlobe = () => {
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

        // Initial animation
        setTimeout(() => {
          span.classList.add('active');
        }, 750 * (idx + 1));
      });
    }
  }, [inView]);
  const tagCanvasOptions = {
    // activateAudio: string
    // activeCursor: string
    // altImage: boolean
    animTiming: 'Smooth', //| 'Linear'
    // audioIcon: boolean
    // audioIconDark: boolean
    // audioIconSize: number
    // audioIconThickness: number
    // audioVolume: number
    // bgColor: null | string
    // bgOutlineThickness: number
    // bgRadius: number
    // centreFunc: any
    // centreImage: any
    // clickToFront: 500,
    // decel: number
    depth: 0,
    // dragControl: boolean
    // dragThreshold: number
    fadeIn: 1,
    // freezeActive: true,
    // freezeDecel: true, // frontSelect: boolean
    // hideTags: boolean
    // imageAlign: 'centre' | 'left' | 'right'
    // imageMode: null | 'image' | 'text' | 'both'
    // imagePadding: number
    // imagePosition: 'top' | 'bottom' | 'left' | 'right'
    // imageRadius: number | string
    imageScale: 2,
    // imageVAlign: 'top' | 'bottom' | 'middle'
    initial: [0.1, -0.1],
    // interval: number
    // lock: null | 'x' | 'y' | 'xy'
    // maxBrightness: number
    // maxSpeed: number
    // minBrightness: number
    // minSpeed: number
    // minTags: 0 - 200
    // noMouse: boolean
    // noSelect: boolean
    // noTagsMessage: string
    // offsetX: number
    // offsetY: number
    outlineColour: '#0000',
    // outlineDash: number
    // outlineDashSpace: number
    // outlineIncrease: number
    // outlineMethod: 'outline' | 'classic' | 'block' | 'colour' | 'size' | 'none'
    // outlineOffset: number
    // outlineRadius: number
    // outlineThickness: number
    // padding: number
    // pinchZoom: boolean
    // pulsateTime: number
    // pulstateTo: number
    // radiusX: number
    // radiusY: number
    // radiusZ: number
    // repeatTagsTags: 0 - 64
    // reverse: true,
    // scrollPause: true,
    // shadow: string
    // shadowBlur: number
    // shadowOffset: [number,number] | number[]
    // shape: 'sphere' | 'hcylinder' | 'vcylinder' | 'hring' | 'vring'
    // shuffleTags: boolean
    // splitWidth: number
    // stretchX: number
    // stretchY: number
    // textAlign: 'centre' | 'left' | 'right'
    // textColour: string
    // textFont: string
    // textHeight: number
    // textVAlign: 'top' | 'bottom' | 'middle'
    // tooltip: 'native', // null | 'div'
    // // tooltipClass: string
    // tooltipDelay: 0,
    // txtOpt: boolean
    // txtScale: number
    // weight: boolean
    // weightFrom: any
    // weightGradient: any
    // weightMode: 'size' | 'colour' | 'both' | 'bgcolour' | 'bgoutline' | 'outline'
    // weightSize: number
    // weightSizeMax: number | null
    // weightSizeMin: number | null
    wheelZoom: false,
    // zoom: number
    // zoomMax: number
    // zoomMin: number
    // zoomStep: number
  };
  const iconSlugs = [
    'typescript',
    'solidity',
    'react',
    'javascript',
    'html5',
    'python',
    'express',
    'amazonaws',
    'postgresql',
    'firebase',
    'nodedotjs',
    'jest',
    'cypress',
    'docker',
    'git',
    'figshare',
    'jira',
    'github',
    'gitlab',
    'graphql',
    'figma',
  ];

  const iconTags = iconSlugs.map((slug) => ({
    id: slug,
    simpleIcon: allIcons.Get(slug),
  }));

  return (
    <div id="experience" className="grid grid-cols-1 ">
      <div className="grid grid-cols-1 p-10 flex flex-col md:flex-row gap-2">
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div ref={ref}>
              <Transition.Root show={inView} appear={true} className="">
                <Transition.Child
                  as="div"
                  enter="ease-in delay-[800ms] duration-[300ms] transition-all"
                  enterFrom="opacity-0 translate-y-full  rotate-12"
                  enterTo="opacity-100 translate-y-0 rotate-0"
                  className=" ml-24"
                >
                  <div className="aboutMeText font-bold text-white">
                    EXPERTISE
                  </div>
                </Transition.Child>
              </Transition.Root>
            </div>
          )}
        </InView>
        <img src={Arrow} alt="arrow" className="-ml-12 h-[100px] w-[200px]" />
      </div>

      <div className=" text-left  m-auto p-10 justify-center aboutmefont text-sm leading-loose text-transparent bg-clip-text bg-gradient-to-l from-slate-500 to-slate-400">
        <p className="ptagsMobile text">{`<p>`}</p>
        <p className="text-left p-3 text-transparent bg-clip-text bg-gradient-to-l from-slate-500 to-slate-400">
          As a full-stack engineer, I am dedicated to sharpening my skills and
          learning new ones every day.
        </p>
        <p className="text-left p-3  text-transparent bg-clip-text bg-gradient-to-l from-slate-500 to-slate-400">
          My passion for technology and commitment to learning has allowed me to
          explore innovative ways to apply different frameworks and languages
          into unique tech stacks.
        </p>
        <p className="text-left p-3  text-transparent bg-clip-text bg-gradient-to-l from-slate-500 to-slate-400">
          I take pride in being able to work across the entire technology stack,
          from front-end to back-end, and my versatility has allowed me to take
          on a variety of challenging projects.
        </p>
        <p className="ptagsMobile text">{`</p>`}</p>
      </div>
      <div className="">
        <IconCloud
          key={v4()}
          id={'icon'}
          minContrastRatio={0}
          iconSize={50}
          backgroundHexColor={'#fff'}
          fallbackHexColor={'#000'}
          tags={iconTags}
          tagCanvasOptions={tagCanvasOptions}
        />
      </div>
    </div>
  );
};

export default SkillListGlobe;
