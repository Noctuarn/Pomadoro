import React from "react";

import "./ComponentHeader.scss"

const ComponentHeader = ({ title, imgSrc, rewerse }) => {
  return (
    <header className="component-header">
      <h1
        style={{
          display: "flex",
          flexDirection: rewerse ? "row-reverse" : "row",
          marginBottom: "30px"
        }}
      >
        {title}
      </h1>
      <img src={imgSrc} alt="" />
    </header>
  );
};

export default ComponentHeader;