import React from "react";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import SkillsList from "./SkillsList";
import SkillListGlobe from "./SkillListGlobe";
import MediumPosts from "./MediumPosts";
import ContactMe from "./ContactMe";
import ContactMe2 from "./ContactMe2";


const MainMobile = () => {
  return (
    <div className="justify-center gap-52">
      <Banner />
      <AboutMe />
      <SkillListGlobe />
      <SkillsList />
      <MediumPosts />
      <ContactMe2 />
      {/* <ContactMe /> */}
      {/* <hr class="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <AboutMe />
      <hr class="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <ListSkills />

      <hr class="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <div className="from-transparent pointer-events-none sticky top-0 flex h-20 bg-gradient-to-t to-base-100"></div> */}
    </div>
  );
};

export default MainMobile;