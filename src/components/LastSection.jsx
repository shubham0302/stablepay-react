import React from "react";
import EmailComponent from "./EmailComponent";

const LastSection = () => {
  return (
    <section className="py-4 lg:py-10 flex flex-col gap-4 items-center">
      <h1 className="text-center text-white text-3xl font-dm_serif">
        Stop paying up to 7% fees every time you send money, plus they are time
        consuming
      </h1>
      {/* <EmailComponent buttonAppearence="pri" /> */}
      {/* <h5 className="text-white mt-4">Stablepay Owned by FincryptLLP</h5> */}

      {/* <div className="flex flex-col gap-4 justify-between w-full items-center"> */}
      {/* <div className="w-28"></div> */}
      <div className="flex flex-col gap-4 items-center">
        <a
          className="text-white"
          href="https://stablepay.notion.site/Frequently-Asked-Questions-76a273d858594e87be1634f6baeb0418"
          target="_blank"
          rel="noreferrer"
        >
          FAQ's
        </a>
        <a href="/privacy-policy" className="text-white">
          Privacy Policy
        </a>
        <a href="/terms-conditions" className="text-white">
          Terms and Conditions
        </a>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a href="https://onelink.to/bhvkxw" target="_blank">
          {" "}
          <img
            src="./images/playstore.svg"
            alt="playstore button"
            className="h-12"
          />
        </a>

        <a href="https://onelink.to/bhvkxw" target="_blank">
          <img
            src="./images/appstore.svg"
            alt="playstore button"
            className="h-12"
          />
        </a>
      </div>
      {/* </div> */}
    </section>
  );
};

export default LastSection;
