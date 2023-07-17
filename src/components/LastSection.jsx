import React from "react";
import EmailComponent from "./EmailComponent";

const LastSection = () => {
  return (
    <section className="py-4 lg:py-10 flex flex-col items-center">
      <h1 className="text-center my-10 text-white text-3xl font-dm_serif">
        Stop paying up to 7% fees every time you send money, plus they are time
        consuming
      </h1>
      <EmailComponent buttonAppearence="pri" />
      {/* <h5 className="text-white mt-4">Stablepay Owned by FincryptLLP</h5> */}
      <a href="/privacy-policy" className="text-white mt-4">
        Privacy Policy
      </a>
      <a href="/terms-conditions" className="text-white mt-4">
        Terms and Conditions
      </a>
    </section>
  );
};

export default LastSection;
