import React, { useState, useRef, useEffect } from 'react';
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
import { Transition } from '@headlessui/react';
import { InView } from 'react-intersection-observer';

const ListSkills = () => {
  return (
    <div id="experience" className="flex items-center justify-center">
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <div ref={ref}>
            <Transition.Root show={inView} appear={true}>
              {/* <Transition.Child
                as="h3"
                enter="ease-in delay-[200ms] duration-[800ms] transition-all"
                enterFrom="opacity-0 translate-x-12"
                enterTo="opacity-100 translate-x-0"
                className="text-5xl font-bold mb-10 introFont tracking-[.2em]"
              >
                Expertise
              </Transition.Child> */}
              <div className="flex">
                <Transition.Child
                  as="div"
                  enter="ease-in duration-[1000ms] transition-all"
                  enterFrom="opacity-0 translate-x-48"
                  enterTo="opacity-100 translate-y-0"
                  className=""
                >
                  <div className="grid grid-cols-3 gap-12">
                    <Transition.Child
                      as="p"
                      className="text-gray-300"
                      enter="ease-in delay-[500ms] duration-[600ms] transition-all"
                      enterFrom="opacity-0 translate-x-12"
                      enterTo="opacity-100 translate-y-0"
                    >
                      <div className="rounded-2xl bg-gradient-to-br from-yellow-300 to-neutral-900 p-1 shadow-xl shadow-lg shadow-yellow-300/40">
                        <div className="block rounded-xl bg-black p-4 sm:p-6 lg:p-8 flex flex-wrap ">
                          <div className="flex flex-col">
                            <div className="flex space-x-7">
                              <DiJsBadge className="w-24 h-24 self-center text-yellow-300 " />

                              <div
                                className="radial-progress bg-primary text-primary-content border-4 border-primary"
                                style={{ '--value': 90 }}
                              >
                                90%
                              </div>
                            </div>
                            <p className="text-center text-2xl">Javascript</p>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <Transition.Child
                      as="p"
                      className="text-gray-300"
                      enter="ease-in delay-[600ms] duration-[600ms] transition-all"
                      enterFrom="opacity-0 translate-x-12"
                      enterTo="opacity-100 translate-y-0"
                    >
                      <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-neutral-900 p-1 shadow-xl shadow-blue-600/40">
                        <div className="block rounded-xl bg-black p-4 sm:p-6 lg:p-8 flex flex-wrap ">
                          <div className="flex flex-col">
                            <div className="flex space-x-7">
                              <SiTypescript className="w-24 h-24 self-center text-blue-500" />

                              <div
                                className="radial-progress bg-primary text-primary-content border-4 border-primary"
                                style={{ '--value': 85 }}
                              >
                                85%
                              </div>
                              {/* <p>Proficent</p> */}
                            </div>
                            <p className="text-center text-2xl">TypeScript</p>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <Transition.Child
                      as="p"
                      className="text-gray-300"
                      enter="ease-in delay-[700ms] duration-[600ms] transition-all"
                      enterFrom="opacity-0 translate-x-12"
                      enterTo="opacity-100 translate-y-0"
                    >
                      <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-neutral-900 p-1 shadow-xl shadow-purple-600/40">
                        <div className="block rounded-xl bg-black p-4 sm:p-6 lg:p-8 flex flex-wrap ">
                          <div className="flex flex-col">
                            <div className="flex space-x-7">
                              <SiRedux className="w-24 h-24 self-center text-purple-600" />

                              <div
                                className="radial-progress bg-primary text-primary-content border-4 border-primary"
                                style={{ '--value': 80 }}
                              >
                                80%
                              </div>
                            </div>
                            <p className="text-center text-2xl">Redux</p>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <Transition.Child
                      as="p"
                      className="text-gray-300"
                      enter="ease-in delay-[800ms] duration-[600ms] transition-all"
                      enterFrom="opacity-0 translate-x-12"
                      enterTo="opacity-100 translate-y-0"
                    >
                      <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-neutral-900 p-1 shadow-xl shadow-blue-500/40">
                        <div className="block rounded-xl bg-black p-4 sm:p-6 lg:p-8 flex flex-wrap ">
                          <div className="flex flex-col ">
                            <div className="flex space-x-7">
                              <DiReact className="w-24 h-24 self-center text-blue-400" />

                              <div
                                className="radial-progress bg-primary text-primary-content border-4 border-primary"
                                style={{ '--value': 85 }}
                              >
                                85%
                              </div>
                            </div>
                            <p className="text-center text-2xl">React</p>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <Transition.Child
                      as="p"
                      className="text-gray-300"
                      enter="ease-in delay-[900ms] duration-[600ms] transition-all"
                      enterFrom="opacity-0 translate-x-12"
                      enterTo="opacity-100 translate-y-0"
                    >
                      <div className="rounded-2xl bg-gradient-to-br from-blue-700 to-neutral-900 p-1 shadow-xl shadow-blue-700/40">
                        <div className="block rounded-xl bg-black p-4 sm:p-6 lg:p-8 flex flex-wrap ">
                          <div className="flex flex-col">
                            <div className="flex space-x-7">
                              <SiPostgresql className="w-24 h-24 self-center text-blue-900" />

                              <div
                                className="radial-progress bg-primary text-primary-content border-4 border-primary"
                                style={{
                                  '--value': 90,
                                }}
                              >
                                90%
                              </div>
                            </div>
                            <p className="text-center text-2xl">PostgreSQL</p>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <Transition.Child
                      as="p"
                      className="text-gray-300"
                      enter="ease-in delay-[1000ms] duration-[600ms] transition-all"
                      enterFrom="opacity-0 translate-x-12"
                      enterTo="opacity-100 translate-y-0"
                    >
                      <div className="rounded-2xl bg-gradient-to-br from-sky-600 to-neutral-900 p-1 shadow-xl shadow-blue-400/40">
                        <div className="block rounded-xl bg-black p-4 sm:p-6 lg:p-8 flex flex-wrap ">
                          <div className="flex flex-col">
                            <div className="flex space-x-7">
                              <SiTailwindcss className="w-24 h-24 self-center text-blue-400" />

                              <div
                                className="radial-progress bg-primary text-primary-content border-4 border-primary"
                                style={{ '--value': 90 }}
                              >
                                90%
                              </div>
                            </div>
                            <p className="text-center text-2xl">Tailwind</p>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <Transition.Child
                      as="p"
                      className="text-gray-300"
                      enter="ease-in delay-[1100ms] duration-[600ms] transition-all"
                      enterFrom="opacity-0 translate-x-12"
                      enterTo="opacity-100 translate-y-0"
                    >
                      <div className="rounded-2xl bg-gradient-to-br from-sky-600 to-neutral-900 p-1 shadow-xl shadow-sky-600/40">
                        <div className="block rounded-xl bg-black p-4 sm:p-6 lg:p-8 flex flex-wrap ">
                          <div className="flex flex-col">
                            <div className="flex space-x-7">
                              <SiCss3 className="w-24 h-24 self-center text-sky-600" />

                              <div
                                className="radial-progress bg-primary text-primary-content border-4 border-primary"
                                style={{ '--value': 90 }}
                              >
                                90%
                              </div>
                            </div>
                            <p className="text-center text-2xl">CSS3</p>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <Transition.Child
                      as="p"
                      className="text-gray-300"
                      enter="ease-in delay-[1200ms] duration-[600ms] transition-all"
                      enterFrom="opacity-0 translate-x-12"
                      enterTo="opacity-100 translate-y-0"
                    >
                      <div className="rounded-2xl bg-gradient-to-br from-pink-500 to-neutral-900 p-1 shadow-xl shadow-pink-500/40">
                        <div className="block rounded-xl bg-black p-4 sm:p-6 lg:p-8 flex flex-wrap ">
                          <div className="flex flex-col">
                            <div className="flex space-x-7">
                              <SiGraphql className="w-24 h-24 self-center text-pink-500" />

                              <div
                                className="radial-progress bg-primary text-primary-content border-4 border-primary"
                                style={{ '--value': 90 }}
                              >
                                90%
                              </div>
                            </div>
                            <p className="text-center text-2xl">GraphQL</p>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <Transition.Child
                      as="p"
                      className="text-gray-300"
                      enter="ease-in delay-[1300ms] duration-[600ms] transition-all"
                      enterFrom="opacity-0 translate-x-12"
                      enterTo="opacity-100 translate-y-0"
                    >
                      <div className="rounded-2xl bg-gradient-to-br from-sky-500 to-neutral-900 p-1 shadow-xl shadow-sky-500/40">
                        <div className="block rounded-xl bg-black p-4 sm:p-6 lg:p-8 flex flex-wrap ">
                          <div className="flex flex-col ">
                            <div className="flex space-x-7">
                              <SiSequelize className="w-24 h-24 self-center text-sky-800" />

                              <div
                                className="radial-progress bg-primary text-primary-content border-4 border-primary"
                                style={{ '--value': 90 }}
                              >
                                90%
                              </div>
                            </div>
                            <p className="text-center text-2xl">Sequelize</p>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <Transition.Child
                      as="p"
                      className="text-gray-300"
                      enter="ease-in delay-[1400ms] duration-[600ms] transition-all"
                      enterFrom="opacity-0 translate-x-12"
                      enterTo="opacity-100 translate-y-0"
                    >
                      <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-neutral-900 p-1 shadow-xl shadow-orange-500/40">
                        <div className="block rounded-xl bg-black p-4 sm:p-6 lg:p-8 flex flex-wrap ">
                          <div className="flex flex-col">
                            <div className="flex space-x-7">
                              <SiAwslambda className="w-24 h-24 self-center text-orange-500" />

                              <div
                                className="radial-progress bg-primary text-primary-content border-4 border-primary"
                                style={{ '--value': 40 }}
                              >
                                40%
                              </div>
                            </div>
                            <p className="text-center text-2xl">Awslambda</p>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <Transition.Child
                      as="p"
                      className="text-gray-300"
                      enter="ease-in delay-[1500ms] duration-[600ms] transition-all"
                      enterFrom="opacity-0 translate-x-12"
                      enterTo="opacity-100 translate-y-0"
                    >
                      <div className=" rounded-2xl bg-gradient-to-br from-orange-400 to-neutral-900 p-1 shadow-xl shadow-orange-300/40">
                        <div className="block rounded-xl bg-black p-4 sm:p-6 lg:p-8 flex flex-wrap ">
                          <div className="flex flex-col">
                            <div className="flex space-x-7">
                              <SiAmazonaws className="w-24 h-24 self-center text-orange-400" />

                              <div
                                className="radial-progress bg-primary text-primary-content border-4 border-primary"
                                style={{ '--value': 50 }}
                              >
                                50%
                              </div>
                            </div>
                            <p className="text-center text-2xl">AWS Cloud</p>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <Transition.Child
                      as="p"
                      className="text-gray-300"
                      enter="ease-in delay-[1600ms] duration-[600ms] transition-all"
                      enterFrom="opacity-0 translate-x-12"
                      enterTo="opacity-100 translate-y-0"
                    >
                      <div className=" rounded-2xl bg-gradient-to-br from-lime-500 to-neutral-900 p-1 shadow-xl shadow-lime-500/40">
                        <div className="block rounded-xl bg-black p-4 sm:p-6 lg:p-8 flex flex-wrap ">
                          <div className="flex flex-col">
                            <div className="flex space-x-7">
                              <SiMongodb className="w-24 h-24 self-center text-lime-500" />

                              <div
                                className="radial-progress bg-primary text-primary-content border-4 border-primary"
                                style={{ '--value': 70 }}
                              >
                                70%
                              </div>
                            </div>
                            <p className="text-center text-2xl">Mongodb</p>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <Transition.Child
                      as="p"
                      className="text-gray-300"
                      enter="ease-in delay-[1700ms] duration-[600ms] transition-all"
                      enterFrom="opacity-0 translate-x-12"
                      enterTo="opacity-100 translate-y-0"
                    >
                      <div className=" rounded-2xl bg-gradient-to-br from-lime-700 to-neutral-900 p-1 shadow-xl shadow-lime-700/40">
                        <div className="block rounded-xl bg-black p-4 sm:p-6 lg:p-8 flex flex-wrap ">
                          <div className="flex flex-col">
                            <div className="flex space-x-7">
                              <FaNode className="w-24 h-24 self-center bg-lime-700" />

                              <div
                                className="radial-progress bg-primary text-primary-content border-4 border-primary"
                                style={{ '--value': 70 }}
                              >
                                70%
                              </div>
                            </div>
                            <p className="text-center text-2xl">Node.js</p>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <Transition.Child
                      as="p"
                      className="text-gray-300"
                      enter="ease-in delay-[1800ms] duration-[600ms] transition-all"
                      enterFrom="opacity-0 translate-x-12"
                      enterTo="opacity-100 translate-y-0"
                    >
                      <div className=" rounded-2xl bg-gradient-to-br from-sky-900 to-neutral-900 p-1 shadow-xl shadow-sky-900/40">
                        <div className="block rounded-xl bg-black p-4 sm:p-6 lg:p-8 flex flex-wrap ">
                          <div className="flex flex-col">
                            <div className="flex space-x-7">
                              <FaDocker className="w-24 h-24 self-center text-sky-900" />

                              <div
                                className="radial-progress bg-primary text-primary-content border-4 border-primary"
                                style={{ '--value': 70 }}
                              >
                                70%
                              </div>
                            </div>
                            <p className="text-center text-2xl">Docker</p>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <Transition.Child
                      as="p"
                      className="text-gray-300"
                      enter="ease-in delay-[1900ms] duration-[600ms] transition-all"
                      enterFrom="opacity-0 translate-x-12"
                      enterTo="opacity-100 translate-y-0"
                    >
                      <div className=" rounded-2xl bg-gradient-to-br from-yellow-500 to-neutral-900 p-1 shadow-xl shadow-yellow-500/40">
                        <div className="block rounded-xl bg-black p-4 sm:p-6 lg:p-8 flex flex-wrap ">
                          <div className="flex flex-col">
                            <div className="flex space-x-7">
                              <FaPython className="w-24 h-24 self-center text-yellow-500" />

                              <div
                                className="radial-progress bg-primary text-primary-content border-4 border-primary"
                                style={{ '--value': 70 }}
                              >
                                70%
                              </div>
                            </div>
                            <p className="text-center text-2xl">Python</p>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>

                    <Transition.Child
                      as="p"
                      className="text-gray-300"
                      enter="ease-in delay-[2000ms] duration-[600ms] transition-all"
                      enterFrom="opacity-0 translate-x-12"
                      enterTo="opacity-100 translate-y-0"
                    >
                      <div className=" rounded-2xl bg-gradient-to-br from-slate-500 to-neutral-900 p-1 shadow-xl shadow-slate-500/40">
                        <div className="block rounded-xl bg-black p-4 sm:p-6 lg:p-8 flex flex-wrap ">
                          <div className="flex flex-col">
                            <div className="flex space-x-7">
                              <SiSolidity className="w-24 h-24 self-center text-slate-500" />

                              <div
                                className="radial-progress bg-primary text-primary-content border-4 border-primary"
                                style={{ '--value': 70 }}
                              >
                                70%
                              </div>
                            </div>
                            <p className="text-center text-2xl">Solidity </p>
                          </div>
                        </div>
                      </div>
                    </Transition.Child>
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
//SiGraphql
//FaNode

export default ListSkills;
