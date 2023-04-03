import React, { useState, useRef, useEffect } from 'react';


function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} `}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

const Banner = () => {
  return (
    <div id="main">
      <div className="relative">
        <div className="main-pic">
          <div className="d1 "></div>
          <div className="d2 "></div>
          <div className="d3 ">
            <div className="overlay-text ">
              <FadeInSection>
                <div className="flex flex-col ">
                  <div className="flex font-bold text-black text-lg md:text-4xl space-x-2 md:space-x-5 introFont tracking-[.1em] text-center">
                    <p>BRENNAN</p>
                    <p>SKINNER</p>
                  </div>
                  <hr className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
                  <div className="flex space-x-2 md:space-x-4 text-md md:text-3xl font-bold justify-center italic">
                    <p className="introFont tracking-widest text-black">
                      FULL-STACK
                    </p>
                    <p className="introFont tracking-widest text-red-600">
                      DEVELOPER
                    </p>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
          <div className="d4 "></div>
        </div>

        {/* <img src={Banner_Pic} alt="" className=" brightness-50"></img> */}

        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pb-52 pr-20">
          <FadeInSection>
            <div className="absolute flex flex-col text-center">
              <div className="flex font-bold  text-slate-500 text-5xl space-x-5 introFont tracking-[.1em]">
                <p>BRENNAN</p>
                <p>SKINNER</p>
              </div>
              <hr class="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
              <div className="flex space-x-4 text-3xl font-bold justify-center italic">
                <p className="introFont tracking-[.2em] text-slate-500">
                  FULL-STACK
                </p>
                <p className="introFont tracking-[.2em] text-red-600">
                  DEVELOPER
                </p>
              </div>
            </div>
          </FadeInSection>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
