import React from "react";

import Typical from "react-typical";

const TypeComponent = () => {
  return (
    <div className="text-white tab:text-left">
      <Typical
        steps={[
          "Forex Fees",
          1500,
          "Transaction Fees",
          1500,
          "Service Fees",
          1500,
          "Convenience Fees",
          1500,
        ]}
        loop={Infinity}
        wrapper="b"
      />
    </div>
  );
};

export default TypeComponent;
