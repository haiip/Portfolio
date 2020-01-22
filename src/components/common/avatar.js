import React from 'react';
import logo from '../../Bitemoji1.svg';

const sizes = {
  s: { height: '250px' },
  m: { height: '450px' },
  l: { height: '600px' }
};

export const Avatar = ({ size }) => {
  let selectedSize = sizes[size];

  if (!selectedSize) {
    selectedSize = sizes.s;
  }

  return <img src={logo} alt="avatar" style={{ ...selectedSize }} />;
};
