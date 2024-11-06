import React from 'react';
import styles from '../styles/scroll.module.scss';

function Scroll({isInView}: {isInView: boolean}) {

  return (
    <div
      className={styles.mouse}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
      }}
    ></div>
  )
}

export default Scroll