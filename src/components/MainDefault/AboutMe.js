import React, { useState, useRef, useEffect } from 'react';
import Me from '../../images/me3.jpg';
const FADE_INTERVAL_MS = 5750;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;

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
  return (
  
    <div id="about" className="grid grid-cols-2">
      <div className="w-full p-20">
        <img
          src={Me}
          alt=""
          className=" mask mask-parallelogram-3 opacity-50"
        />
      </div>
      <div className="w-full ">
        <FadeInSection>
          <section className=" aboutmefont items-center h-full">
            <div className="text-left p-10 ">
              <div className="text-xl p-10 -ml-96 leading-loose  text-transparent bg-clip-text bg-gradient-to-l from-slate-500 to-slate-400">
                <p className="ptags text">{`<p>`}</p>
                <p className="flex flex-wrap p-5">
                  I am a seasoned full-stack engineer with a wealth of
                  experience. I am passionate about exploring emerging
                  technologies and discovering new ways to apply them in
                  innovative ways.
                </p>
          
                <p className="p-5">
                  Beyond my engineering skills, I’m also an avid writer and
                  thinker, and I enjoy sharing my insights on new developments
                  in the field. I believe that collaboration is essential to
                  producing great work, and I’m always eager to work with
                  like-minded individuals who share my enthusiasm.
                </p>
    
                <p className="p-5">
                  If you're looking for a skilled engineer who is always looking
                  to learn and collaborate, I'd be thrilled to connect. Take a
                  look at some of my projects, articles and list of skills!
                </p>
                <p className="ptags text">{`</p>`}</p>
              </div>
            </div>
          </section>
        </FadeInSection>
      </div>
    </div>
  );
};

export default AboutMe;
