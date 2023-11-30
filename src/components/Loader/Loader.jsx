import React from 'react'
import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css'; 
export const Loader = () => {
  return (
    <div className={css.LoaderContainer}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        height={80}
        width={80}
        visible={true}
      />
    </div>
  );
}
