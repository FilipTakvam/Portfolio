import React from 'react';
import styles from '../styles/message.module.scss';

const Message = ({navbarHeight}: {navbarHeight: number}) => {

  return (
        <div className={`${styles.container} acceleratedRendering`} style={{ top: `${navbarHeight}px` }}>
            <p className={styles.thankYou}>Thank you for your message, I will be in touch</p>
        </div>
  )
};

export default Message