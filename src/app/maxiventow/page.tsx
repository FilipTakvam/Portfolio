'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PortfolioImage from '../components/portfolioimage';
import styles from '../styles/portfolio.module.scss';
import { TiArrowLeft, TiArrowRight } from 'react-icons/ti';
import { IoClose } from "react-icons/io5";
import LoadingScreen from '../loadingscreen';

export default function MaxiventOW() {

    const [imageCount, setImageCount] = useState<number>(0);

    useEffect(() => {
      const storedImageCount = localStorage.getItem('imageCount');
      const initialImageCount = storedImageCount ? parseInt(storedImageCount, 10) : 0;
      setImageCount(initialImageCount);
    }, []); // Empty dependency array to run only once

    return (
        <>
        <div className={styles.background}>
        {imageCount < 15 &&
         <LoadingScreen finishedCount={15} imageCount={imageCount}/>
        }
            <div className={`${styles.wrapper} wrapper`}>
                <Link href='/#projects' className={styles.closeIcon}>
                    <IoClose />
                </Link>

                <PortfolioImage src='/MaxiventOW/HeroImage.png' alt='Hero image of Maxivent OW' setImageCount={setImageCount}/>
                <PortfolioImage src='/MaxiventOW/DesignProcess.png' alt='Scope of work and time table' setImageCount={setImageCount}/>
                <PortfolioImage src='/MaxiventOW/Problems.png' alt='Problems Title' setImageCount={setImageCount}/>
                <PortfolioImage src='/MaxiventOW/OverviewFaded.png' alt='Overview of Maxivent OW' setImageCount={setImageCount}/>
                <PortfolioImage src='/MaxiventOW/Repairability.png' alt='Repairability' setImageCount={setImageCount}/>
                <PortfolioImage src='/MaxiventOW/Teardown.png' alt='Exploded view' setImageCount={setImageCount}/>
                <PortfolioImage src='/MaxiventOW/Airflow.png' alt='Air flow' setImageCount={setImageCount}/>
                <PortfolioImage src='/MaxiventOW/UI_pressbutton.png' alt='Pressing button' setImageCount={setImageCount}/>
                <PortfolioImage src='/MaxiventOW/ClearFeedbackText.png' alt='Clear feedback text' setImageCount={setImageCount}/>
                <PortfolioImage src='/MaxiventOW/UI_above_lights.gif' alt='UI Animation' setImageCount={setImageCount}/>
                <PortfolioImage src='/MaxiventOW/FilterChange.png' alt='Filter change' setImageCount={setImageCount}/>
                <PortfolioImage src='/MaxiventOW/PCB.png' alt='Filter change' setImageCount={setImageCount}/>
                <PortfolioImage src='/MaxiventOW/MoreThanRender.png' alt='More than render text' setImageCount={setImageCount}/>
                <PortfolioImage src='/MaxiventOW/Process.png' alt='Image collage of process' setImageCount={setImageCount}/>
                <PortfolioImage src='/MaxiventOW/StudioShot.png' alt='Image collage of process' setImageCount={setImageCount}/>
                <nav className={styles.navbar}>
                    <Link href='/safetyscanningradar'>
                        <div className={styles.navLink}>
                            <TiArrowLeft style={{ color: '#000000' }} /><p>Previous Project</p>
                        </div>
                    </Link>
                    <Link href='/'>
                        <Image src="/FT.svg" height={45} width={45} alt="logotype" className={styles.logo} />
                    </Link>
                    <Link href='/crushedspeaker'>
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
