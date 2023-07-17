import React from "react";
import EmailComponent from "../EmailComponent";

const Intro = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-8 lg:w-[50%] lg:mt-0">
      <h1 className="heroTitle font-dm_serif text-5xl font-normal lg:text-6xl text-white lg:w-5/6 text-center lg:text-start">
        {title}
      </h1>
      <p className="heroDesc text-[#f7f8f0] lg:w-5/6 text-center lg:text-start">
        {children}
      </p>
      <EmailComponent buttonAppearence="pri" extraClass="hidden lg:block" />
    </div>
  );
};

export default Intro;
