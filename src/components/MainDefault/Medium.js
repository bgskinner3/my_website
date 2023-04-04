import React, { useEffect, useState, useMemo } from 'react';
import get_most_recent_medium_articles from '../../api/medium_api';
import { Transition } from '@headlessui/react';
import { InView } from 'react-intersection-observer';
import MEDIUMLOGO from '../../images/MEDIUMLOGO.jpeg';
import Arrow from '../../images/arrowleft.jpg';

import Banner_Pic from '../../images/skyline2.jpg';
const FADE_INTERVAL_MS = 4750;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;

function FadeInText(articleArray) {
  const [fadeProp, setFadeProp] = useState({ fade: 'fade-in' });
  const [pageOrder, setWordOrder] = useState(0);

  const article_array = articleArray.children;

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
      setWordOrder((prevWordOrder) => (prevWordOrder + 1) % 2);
    }, WORD_CHANGE_INTERVAL_MS);

    return () => clearInterval(wordTimeout);
  }, []);

  return <span className={fadeProp.fade}>{article_array[pageOrder]}</span>;
}
// const MediumPosts = () => {
//   const [mediumPosts, setMediumPosts] = useState([]);

//   useEffect(() => {
//     getPosts();
//   }, []);

//   const getPosts = async () => {
//     try {
//       const posts = await get_most_recent_medium_articles();

//       setMediumPosts(posts);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return mediumPosts.length ? (
//     <div id="medium">

//       <FadeInText>
//         {mediumPosts.map((post) => {
//           return (
//             <div>
              // <div
              //   className="hero h-"
              //   style={{
              //     backgroundImage: `url(${Arrow})`,
              //   }}
              // >
              //   <div className="hero-overlay "></div>
              //   <div className="hero-content text-center text-neutral-content">
              //     <div className="max-w-md">
              //       <a href={post.url}>
              //         <h1 className="mb-5 text-5xl font-bold">{post.title}</h1>
              //       </a>
              //     </div>
              //   </div>
              // </div>
//             </div>
//           );
//         })}
//       </FadeInText>
//     </div>
//   ) : (
//     <div className="text-white">nbjkdf</div>
//   );
// };

const MediumPosts = () => {
  const [mediumPosts, setMediumPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const posts = await get_most_recent_medium_articles();

      setMediumPosts(posts);
    } catch (error) {
      console.error(error);
    }
  };

  return mediumPosts.length ? (
    <div id="medium" className="m-24">
      <div>
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div ref={ref}>
              <Transition.Root show={inView} appear={false} className="">
                <Transition.Child
                  as="div"
                  enter="ease-in delay-[800ms] duration-[300ms] transition-all"
                  enterFrom="opacity-0 translate-x-full rotate-12 "
                  enterTo="opacity-100 translate-x-0 rotate-0"
                  className=""
                >
                  <img src={MEDIUMLOGO} alt="logo" />
                </Transition.Child>
              </Transition.Root>
            </div>
          )}
        </InView>
        <div className="grid grid-cols-1 text-left text-2xl mt-3">
          <p className="p-20 ml-20 mr-20 m-auto text-transparent bg-clip-text bg-gradient-to-l from-slate-500 to-slate-400">
            Check out my recent Medium articles where I cover technologies I've
            learned, web3 development, and personal projects. For more, visit my
            profile.
          </p>
          <div className="mr-auto p-">
            <img src={Arrow} alt="" className="h-[300px] w-[400px] " />
          </div>
        </div>
      </div>
      {mediumPosts.map((post, i) => {
        return (
          <InView triggerOnce={true}>
            {({ inView, ref }) => (
              <div ref={ref}>
                <Transition.Root show={inView} appear={true} className="">
                  <div
                    className={`flex ${
                      i % 2 ? 'flex-row-reverse' : ''
                    } space-x-5 items-center m-10`}
                  >
                    <div className="grid grid-cols-1">
                      <Transition.Child
                        as="div"
                        enter="ease-in delay-[400ms] duration-[200ms] transition-all"
                        enterFrom={`opacity-0 translate-y-12 ${
                          i % 2 ? 'rotate-12' : '-rotate-12'
                        }`}
                        enterTo="opacity-100 translate-y-0 rotate-0"
                        className=""
                      >
                        <div className=" medium-text font-bold text-white ">
                          {post.title.slice(0, post.title.indexOf(':'))}
                        </div>
                      </Transition.Child>
                      <hr className="h-px mt-10 mb-2 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
                      <Transition.Child
                        as="div"
                        enter="ease-in delay-[1000ms] duration-[300ms] transition-all"
                        enterFrom="opacity-0 -translate-y-24  "
                        enterTo="opacity-100 translate-y-0 "
                        className=" "
                      >
                        <div className="text-white ">
                          {post.title.slice(post.title.indexOf(':') + 1)}
                        </div>
                      </Transition.Child>
                    </div>
                    <Transition.Child
                      as="div"
                      enter="ease-in delay-[500ms] duration-[600ms] transition-all"
                      enterFrom="opacity-0 translate-y-12  "
                      enterTo="opacity-100 translate-y-0 "
                      className="flex"
                    >
                      <div
                        className={`${
                          i % 2 ? 'h-[250px] w-[550px]' : 'h-[230px] w-[400px]'
                        } hover:scale-95 duration-500 filter grayscale hover:grayscale-0 overflow-hidden rounded-md`}
                      >
                        <img
                          className="hover:scale-125 transition-all duration-500 "
                          src={post.picture}
                          alt=""
                        />
                      </div>
                    </Transition.Child>
                  </div>
                </Transition.Root>
              </div>
            )}
          </InView>
        );
      })}
    </div>
  ) : (
    <div>mkdlsfmd</div>
  );
};



export default MediumPosts;
