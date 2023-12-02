import React from 'react'
import css from '../Home/Home.module.css';
// import imageSrc  from '../components/img/HomeImg';
export const Home = () => {
  return (
    <div>
      <h1 className={css.title}>Сontact Вook</h1>
      <div className={css.homeContainer}>
        <p className={css.homeText}>
          Welcome to our application! Phone book - quick search for contacts Our
          application has the ability to add and delete contacts You just need
          to register to use it
        </p>
      </div>
      {/* <div className={css.imgContainer}>
        <img src={imageSrc} alt="" />
        <h2></h2>
      </div> */}
    </div>
  );
}
