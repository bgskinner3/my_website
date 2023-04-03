import React from 'react';
import Banner from './Banner';
import AboutMe from './AboutMe';
import ListSkills from './ListSkills';
import MediumPosts from './Medium';
import SkillsGlobe from './SkillsGlobe';
import SkillsList from './SkillsList';
import ContactMe from './ContactMe';
import PreLoader from '../PreLoader';


const Main = () => {
  return (
    <div className="grid grid-rows-1 gap-52 justify-center ">

      <Banner />

      <AboutMe />
      <hr className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

      <SkillsGlobe />

      <SkillsList />
      <hr className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

      <MediumPosts />
      <hr className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <ContactMe />
    </div>
  );
};

export default Main;
