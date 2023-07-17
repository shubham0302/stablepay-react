import React from "react";
import ComparisonCardSection from "./components/ComparisonCardSection";
import ContactUsSection from "./components/ContactUsSection";

import Header from "./components/Header";
import Hero from "./components/Hero";
import LastSection from "./components/LastSection";
import LongTextSection from "./components/LongTextSection";
import NoChargesSection from "./components/NoChargesSection";

const App = () => {
  const submitAction = (values) => {
    console.log(values);
  };
  return (
    <div className="bg-pri">
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-027CTY2L8J"
      ></script>
      <script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-027CTY2L8J');`}
      </script>
      <Hero />
      {/* <VideoCard /> */}
      <ComparisonCardSection />
      <NoChargesSection />
      {/* <LongTextSection /> */}
      <ContactUsSection />
      <LastSection />
    </div>
  );
};

export default App;
