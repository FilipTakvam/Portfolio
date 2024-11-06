'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PortfolioImage from '../components/portfolioimage';
import PortfolioVideo from '../components/portfoliovideo';
import styles from '../styles/portfolio.module.scss';
import { TiArrowLeft, TiArrowRight } from 'react-icons/ti';
import { IoClose } from "react-icons/io5";
import LoadingScreen from '../loadingscreen';

function CrushedSpeaker() {

    const [imageCount, setImageCount] = useState<number>(0);

    useEffect(() => {
      const storedImageCount = localStorage.getItem('imageCount');
      const initialImageCount = storedImageCount ? parseInt(storedImageCount, 10) : 0;
      setImageCount(initialImageCount);
    }, []); // Empty dependency array to run only once

    return (
        <div className={styles.background}>
            {imageCount < 15 &&
                <LoadingScreen finishedCount={16} imageCount={imageCount} />
            }
            <div className={`${styles.wrapper} wrapper`}>
                <Link href='/#projects' className={styles.closeIcon}>
                    <IoClose />
                </Link>

                <PortfolioImage src='/Willys/Hero.png' alt='Hero image of the Willys Self Checkout' setImageCount={setImageCount}/>
                <PortfolioImage src='/Willys/ScopeOfWork.png' alt='The orginal scope of work and timeline of project' setImageCount={setImageCount}/>
                <PortfolioImage src='/Willys/HTA.png' alt='HTA' setImageCount={setImageCount}/>
                <PortfolioImage src='/Willys/CWPHEA.png' alt='CW and PHEA' setImageCount={setImageCount}/>
                <PortfolioImage src='/Willys/Model.png' alt='Picture of Model' setImageCount={setImageCount}/>
                <PortfolioImage src='/Willys/OldUI.png' alt='Old UI layed out' setImageCount={setImageCount}/>
                <PortfolioImage src='/Willys/WizardOfOz.png' alt='Wizard of Oz' setImageCount={setImageCount}/>
                <PortfolioImage src='/Willys/WizardOfOzText.png' alt='Wizard of Oz Text' setImageCount={setImageCount}/>
                <PortfolioVideo backgroundColor='#dbdadd' playPauseColor="#FF000A" src='/Willys/FullVideo.mp4' setImageCount={setImageCount}/>
                <PortfolioImage src='/Willys/Process.png' alt='Process Image' setImageCount={setImageCount}/>
                <PortfolioImage src='/Willys/NewUI.png' alt='New UI layed out' setImageCount={setImageCount}/>
                <PortfolioImage src='/Willys/SelectionOfProcess.png' alt='Selection of improvements' setImageCount={setImageCount}/>
                <PortfolioImage src='/Willys/Comparison.png' alt='Comparison' setImageCount={setImageCount}/>
                <PortfolioImage src='/Willys/Comparison2.png' alt='Comparison' setImageCount={setImageCount}/>
                <PortfolioImage src='/Willys/Comparison3.png' alt='Comparison' setImageCount={setImageCount}/>
                <PortfolioImage src='/Willys/End.png' alt='Thank you screen' setImageCount={setImageCount}/>
                <nav className={styles.navbar}>
                    <Link href='/crushedspeaker'>
                        <div className={styles.navLink}>
                            <TiArrowLeft style={{ color: '#000000' }} /><p>Previous Project</p>
                        </div>
                    </Link>
                    <Link href='/'>
                        <Image src="/FT.svg" height={45} width={45} alt="logotype" className={styles.logo} />
                    </Link>
                    <Link href='/safetyscanningradar'>
                        <div className={styles.navLink}>
                            <TiArrowRight style={{ color: '#000000' }} /><p>Next Project</p>
                        </div>
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default CrushedSpeaker;