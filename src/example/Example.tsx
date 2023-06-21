import React from 'react';
import stl from './styles/index.module.scss';
export const Example = () => {
  console.log(stl);
  return <h1 className={`${stl['color-blue']} ${stl['small-text']}`}>Hello World!</h1>;
};
