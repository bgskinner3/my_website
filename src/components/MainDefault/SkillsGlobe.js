import React, { useState, useRef, useEffect } from 'react';
import allIcons from 'simple-icons';
import { v4 } from 'uuid';
import { IconCloud, Cloud, renderSimpleIcon } from 'react-icon-cloud';
import { useInView } from 'react-intersection-observer';
import Arrow from '../../images/arrow.jpg';

const SkillsGlobe = () => {
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
    clickToFront: 500,
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
    reverse: true,
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
    <div id="experience" className='grid grid-cols-1'>
      <div className="grid grid-cols-2 mb-28">
        <div className=" text-left pl-32 m-auto p-10 justify-center aboutmefont text-xl leading-loose text-transparent bg-clip-text bg-gradient-to-l from-slate-500 to-slate-400">
          <p className="ptags text">{`<p>`}</p>
          <p className="text-left p-3 text-transparent bg-clip-text bg-gradient-to-l from-slate-500 to-slate-400">
            As a full-stack engineer, I am dedicated to sharpening my skills and
            learning new ones every day.
          </p>
          <p className="text-left p-3  text-transparent bg-clip-text bg-gradient-to-l from-slate-500 to-slate-400">
            My passion for technology and commitment to learning has allowed me
            to explore innovative ways to apply different frameworks and
            languages into unique tech stacks.
          </p>
          <p className="text-left p-3  text-transparent bg-clip-text bg-gradient-to-l from-slate-500 to-slate-400">
            I take pride in being able to work across the entire technology
            stack, from front-end to back-end, and my versatility has allowed me
            to take on a variety of challenging projects.
          </p>
          <p className="ptags text">{`</p>`}</p>
        </div>
        <div className="p-10">
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

      <div className="flex justify-center">
        <div className="flex flex-wrap w-1/2">
          <div ref={ref} className="word italic font-bold  tracking-[.1em] text-red-600 text-left -pl-30">
            <p className="ptags  tracking-[.1em] pb-5  ">{`< section >`}</p>
            <p className="ptags  tracking-[.1em] pb-10 pl-3 ">{`< h1 >`}</p>
            <span className='pl-3'>S</span>
            <span>K</span>
            <span>I</span>
            <span>L</span>
            <span>L</span>
            <span>S</span>
            <p className="ptags  tracking-[.1em] pt-10 pl-3 ">{`< /h1 >`}</p>
          </div>
          <div className="items-center h-full text-left pl-3">
            <p className="ptags  pl-5">{`<p>`}</p>
            <p className="aboutmefont text-left pl-10 pt-3 pb-3 text-xl leading-loose text-transparent bg-clip-text bg-gradient-to-l from-slate-500 to-slate-400">
              Here is a list of some of my skills and my level of familiarity
              with each one. It's intended to provide a brief overview of what I
              am capable of, and to give you a sense of the expertise I can
              bring to the table.
            </p>
            <p className="ptags  tracking-[.1em]  pl-5">{`</p>`}</p>
            <p className="ptags  tracking-[.1em] pt-5 -pl-10 ">{`</section >`}</p>
          </div>
        </div>
        <div className="pt-96 ">
          <img src={Arrow} alt="" className="h-[300px] w-[400px] " />
        </div>
      </div>
     
    </div>
  );
};

export default SkillsGlobe;
