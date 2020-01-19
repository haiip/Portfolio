import React from "react";

const sizes = {
  s: { height: "250px" },
  m: { height: "450px" },
  l: { height: "600px" }
};

export const Avatar = ({ size }) => {
  let selectedSize = sizes[size];

  if (!selectedSize) {
    selectedSize = sizes.s;
  }

  return <img src={"/Bitemoji1.png"} alt="hej" style={{ ...selectedSize }} />;
};
