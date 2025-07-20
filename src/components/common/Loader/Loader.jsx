import React from 'react';
import s from './Loader.module.css';

const Loader = () => (
  <div className={s.loaderWrapper}>
    <div className={s.loader}></div>
  </div>
);

export default Loader;
