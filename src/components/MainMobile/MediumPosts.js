import React, { useEffect, useState, useMemo } from 'react';
import get_most_recent_medium_articles from '../../api/medium_api';
import { Transition } from '@headlessui/react';
import { InView } from 'react-intersection-observer';



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
      <div
        id="medium"
        className="grid grid-cols-1 justify-center place-items-center mb-10"
      >
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <div ref={ref}>
              <Transition.Root show={inView} appear={false} className="">
                <Transition.Child
                  as="div"
                  enter="ease-in delay-[500ms] duration-[300ms] transition-all"
                  enterFrom="opacity-0 translate-x-full rotate-12 "
                  enterTo="opacity-100 translate-x-0 rotate-0"
                  className="m-10"
                >
                  <div className="aboutMeText font-bold text-white medium-text-border-mobile">
                    MEDIUM
                  </div>
                </Transition.Child>
              </Transition.Root>
            </div>
          )}
        </InView>
        {mediumPosts.map((post, i) => {
          return (
            <InView triggerOnce={true} key={i}>
              {({ inView, ref }) => (
                <div ref={ref}>
                  <Transition.Root show={inView} appear={true} className="">
                    <div className={`flex flex-col items-center m-8`}>
                      <div className="grid grid-cols-1 mt-8">
                        <Transition.Child
                          as="div"
                          enter="ease-in delay-[400ms] duration-[200ms] transition-all"
                          enterFrom={`opacity-0 translate-y-12 ${
                            i % 2 ? 'rotate-12' : '-rotate-12'
                          }`}
                          enterTo="opacity-100 translate-y-0 rotate-0"
                          className=""
                        >
                          <div className=" medium-text-mobile font-bold text-white ">
                            {post.title.slice(0, post.title.indexOf(':'))}
                          </div>
                        </Transition.Child>
                        <hr className="h-px mt-5 mb-2 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
                        <Transition.Child
                          as="div"
                          enter="ease-in delay-[1000ms] duration-[300ms] transition-all"
                          enterFrom="opacity-0 -translate-y-12  "
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
                        className=" "
                      >
                        <div
                          className={`h-[110px] w-[220px] hover:scale-95 duration-500 filter grayscale hover:grayscale-0 overflow-hidden rounded-md `}
                        >
                          <img
                            className="hover:scale-125 transition-all duration-500 justify-center"
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
}

export default MediumPosts