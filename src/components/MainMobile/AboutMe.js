import React, { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { InView } from 'react-intersection-observer';
import Arrow from '../../images/arrow.jpg';
import Me from '../../images/me3.jpg';

const FADE_INTERVAL_MS = 2750;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;

function FadeInText(textArray) {
  const paragraphs_array = textArray.children;

  const [fadeProp, setFadeProp] = useState({ fade: 'fade-in' });
  const [wordOrder, setWordOrder] = useState(0);

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp.fade === 'fade-in'
        ? setFadeProp({ fade: 'fade-out' })
        : setFadeProp({ fade: 'fade-in' });
    }, FADE_INTERVAL_MS);

    return () => clearInterval(fadeTimeout);
  }, [fadeProp]);

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder((prevWordOrder) => (prevWordOrder + 1) % 3);
    }, WORD_CHANGE_INTERVAL_MS);

    return () => clearInterval(wordTimeout);
  }, []);

  return (
    <span className={fadeProp.fade}>
      <div className="text-left md:text-3xl sm:text-sm leading-loose font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-slate-600 to-slate-300">
        {paragraphs_array[wordOrder]}
      </div>
    </span>
  );
}

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
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

const AboutMe = () => {
  useEffect(() => {
    const spans = document.querySelectorAll('.wordMobile span');

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
  }, []);
  return (
    <div id="about" className="flex flex-col mb-5">
      <div className="grid grid-cols-2 p-10 flex flex-col md:flex-row gap-2 mt-12">
        <div className="wordMobile m-auto italic font-bold tracking-[.1em] text-red-600 text-left">
          <span>A</span>
          <span>B</span>
          <span>O</span>
          <span>U</span>
          <span>T</span>
        </div>

        <div className="flex">
          <InView triggerOnce={false}>
            {({ inView, ref }) => (
              <div ref={ref}>
                <Transition.Root
                  show={inView}
                  appear={true}
                  className="text-left"
                >
                  <Transition.Child
                    as="div"
                    enter="ease-in delay-[500ms] duration-[300ms] transition-all"
                    enterFrom="opacity-0 translate-y-full  rotate-12"
                    enterTo="opacity-100 translate-y-0 rotate-0"
                    className=" pt-2"
                  >
                    <div className="  aboutMeText font-bold text-white ">
                      ME
                    </div>
                  </Transition.Child>
                </Transition.Root>
              </div>
            )}
          </InView>
          <div className="">
            <img src={Arrow} alt="" className=" h-[100px] w-[200px]" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
        <div className="relative  cursor-pointer ">
          <img
            className="mask mask-parallelogram-3 opacity-50  "
            src={Me}
            alt="Me"
          />

          <div className="absolute top-0 left-0 px-6 py-4 m-auto h-full">
            <FadeInSection>
              <section className=" aboutmefont items-center h-full">
                <div className="text-left  ">
                  <div className="text-sm h-full leading-loose  text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600">
                    <FadeInText>
                      <div>
                        <p className="ptags text -pr-2">{`<p>`}</p>
                        <p className="pl-5">
                          I am a seasoned full-stack engineer with a wealth of
                          experience. I am passionate about exploring emerging
                          technologies and discovering new ways to apply them in
                          innovative ways.
                        </p>
                        <p className="ptags text -pr-2">{`<p>`}</p>
                      </div>
                      <div>
                        <p className="ptags text -pr-2">{`<p>`}</p>
                        <p className="pl-5">
                          Beyond my engineering skills, I’m also an avid writer
                          and thinker, and I enjoy sharing my insights on new
                          developments in the field. I believe that
                          collaboration is essential to producing great work,
                          and I’m always eager to work with like-minded
                          individuals who share my enthusiasm.
                        </p>
                        <p className="ptags text -pr-2">{`<p>`}</p>
                      </div>
                    </FadeInText>
                  </div>
                </div>
              </section>
            </FadeInSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;


