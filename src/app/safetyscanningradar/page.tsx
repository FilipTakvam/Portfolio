'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PortfolioImage from '../components/portfolioimage';
import styles from '../styles/portfolio.module.scss';
import { TiArrowLeft, TiArrowRight } from 'react-icons/ti';
import { IoClose } from "react-icons/io5";
import LoadingScreen from '../loadingscreen';
import FullscreenVideo from '../components/fullvideo';

export default function SafetyScanningRadar() {

    const [imageCount, setImageCount] = useState<number>(0);

    useEffect(() => {
      const storedImageCount = localStorage.getItem('imageCount');
      const initialImageCount = storedImageCount ? parseInt(storedImageCount, 10) : 0;
      setImageCount(initialImageCount);
    }, []); // Empty dependency array to run only once
  

    return (
        <>
        <div className={styles.background}>
        {imageCount < 2 &&
         <LoadingScreen finishedCount={2} imageCount={imageCount}/>
        }
            <div className={`${styles.wrapper} wrapper`}>
                <Link href='/#projects' className={styles.closeIcon}>
                    <IoClose />
                </Link>

                <PortfolioImage src='/SafetyScanningRadar/LandingPage.png' alt='Hero image of Safety Scanning Radar' setImageCount={setImageCount}/>
                <FullscreenVideo src='/SafetyScanningRadar/Turnaround.mp4' setImageCount={setImageCount}/>
                <nav className={styles.navbar}>
                    <Link href='/selfcheckout'>
                        <div className={styles.navLink}>
                            <TiArrowLeft style={{ color: '#000000' }} /><p>Previous Project</p>
                        </div>
                    </Link>
                    <Link href='/'>
                        <Image src="/FT.svg" height={45} width={45} alt="logotype" className={styles.logo} />
                    </Link>
                    <Link href='/maxiventow'>
                        <div className={styles.navLink}>
                            <TiArrowRight style={{ color: '#000000' }} /><p>Next Project</p>
                        </div>
                    </Link>
                </nav>
            </div>

        </div>
        </>
    )
}
