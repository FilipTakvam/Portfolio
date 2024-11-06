'use client';
import React, { useEffect } from 'react';
import styles from './styles/loading.module.scss';
import Image from 'next/image';

type LoadingScreenProps = {
  imageCount: number,
  finishedCount: number,
}

function LoadingScreen({imageCount, finishedCount}: LoadingScreenProps) {
  useEffect(() => {
    // Applying on mount
    document.body.style.overflow = "hidden";
    document.getElementsByTagName('html')[0].style.overflow = "hidden";
    // Applying on unmount    
    return () => {
      document.body.style.overflow = "visible";

      document.getElementsByTagName('html')[0].style.overflow = "visible";
    }
  }, [])
  return (
    <div className={styles.loadingPage}>
      <Image src="/FT.svg" height={100} width={100} className={styles.logo} alt="logotype" />
      <div>
        <div className={styles.loadingBar}>
            <div className={styles.bar} style={{width: `${(imageCount/finishedCount)*100}%`}}></div>
        </div>
        <p>Just a Moment While the Project is Loading</p>
      </div>
    </div>
  )
}

export default LoadingScreen;