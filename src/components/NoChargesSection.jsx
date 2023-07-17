import React from "react";
import EmailComponent from "./EmailComponent";
import TypeComponent from "./TypeComponent";

const NoChargesSection = () => {
  return (
    <section className="py-10">
      <div className="container flex flex-col md:flex-row-reverse justify-center flex-wrap gap-10 max-w-7xl mx-auto">
        <div className="flex-1 flex flex-col justify-center tab:items-start items-center text-center tab:text-left text-[#e1e1ff]">
          <div className="max-w-lg tab:flex flex-col tab:items-start text-center gap-2 text-2xl tab:text-4xl font-dm_serif text-white">
            <h5 className="text-center">Stable Pay</h5>
            <div className="flex items-center gap-2">
              <h6 className="text-center">
                {/* <br /> */}
                $0
              </h6>
              <TypeComponent />
              {/* <h6 className="text-center">Fees</h6> */}
            </div>
          </div>
          <p className="text-xl my-6 text-[#e8e8ff]">
            In short NO charges for sending money around the world, instantly!
          </p>
          <h4 className="text-3xl font-bold">Never any fees</h4>
          <h4 className="max-w-sm lg:mx-0 text-base my-3">
            We will never charge you. We’re on your team, so let’s win together.
          </h4>
          <div className="flex flex-col">
            <h4 className="text-lg mb-8 font-bold text-white">
              Join the Future of Global Remittance
            </h4>
            <EmailComponent buttonAppearence="pri" />
          </div>
          <div className="flex gap-8"></div>
        </div>
        <div className="relative flex-1 flex items-center justify-center aspect-h-image md:overflow-hidden">
          <img
            src="./images/stable-pay-mock.png"
            className="max-w-[60%] md:h-[80%]"
            alt="subject"
          />
        </div>
      </div>
    </section>
  );
};

export default NoChargesSection;
