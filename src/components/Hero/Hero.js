import React from "react";

export const Hero = () => {
  const self = require("./self.png");

  return (
    <section>
      <div>
        <h1>Hero Section</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500
        </p>
        <a href="mailto:jhonpaulluceno@gmail.com">Contact Me</a>
      </div>
      <img src={self} alt="self"/>
    </section>
  );
};
