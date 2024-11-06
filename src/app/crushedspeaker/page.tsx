'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PortfolioImage from '../components/portfolioimage';
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
            {imageCount < 14 &&
                <LoadingScreen finishedCount={14} imageCount={imageCount} />
            }
            <div className={`${styles.wrapper} wrapper`}>
                <Link href='/#projects' className={styles.closeIcon}>
                    <IoClose />
                </Link>

                <PortfolioImage src='/CrushedSpeaker/LandingPage.png' alt='Hero image of the Crushed Speaker' setImageCount={setImageCount}/>
                <PortfolioImage src='/CrushedSpeaker/Scope.png' alt='The orginal project brief' setImageCount={setImageCount}/>
                <PortfolioImage src='/CrushedSpeaker/SemanticWords.png' alt='Semantic words of the speaker' setImageCount={setImageCount}/>
                <PortfolioImage src='/CrushedSpeaker/animation.gif' alt='Animation involving clay and steel ball' setImageCount={setImageCount}/>
                <PortfolioImage src='/CrushedSpeaker/ComputerScreen.png' alt='Process picture of CAD' setImageCount={setImageCount}/>
                <PortfolioImage src='/CrushedSpeaker/Balls.png' alt='Material Exploration' setImageCount={setImageCount}/>
                <PortfolioImage src='/CrushedSpeaker/Underneath.png' alt='Underneath view' setImageCount={setImageCount}/>
                <PortfolioImage src='/CrushedSpeaker/conductive.png' alt='Hand pressing conductive fabric' setImageCount={setImageCount}/>
                <PortfolioImage src='/CrushedSpeaker/Cable.png' alt='Cable' setImageCount={setImageCount}/>
                <PortfolioImage src='/CrushedSpeaker/OverviewParts.png' alt='Overview of parts' setImageCount={setImageCount}/>
                <PortfolioImage src='/CrushedSpeaker/Packaging.png' alt='Packaging' setImageCount={setImageCount}/>
                <PortfolioImage src='/CrushedSpeaker/PerspectiveMultiple.png' alt='Multipe crushed speakers' setImageCount={setImageCount}/>
                <PortfolioImage src='/CrushedSpeaker/Evaluation.png' alt='Evaluation of the Semantic words' setImageCount={setImageCount}/>
                <PortfolioImage src='/CrushedSpeaker/LivingRoom.png' alt='Final shoot' setImageCount={setImageCount}/>
                <nav className={styles.navbar}>
                    <Link href='/maxiventow'>
                        <div className={styles.navLink}>
                            <TiArrowLeft style={{ color: '#000000' }} /><p>Previous Project</p>
                        </div>
                    </Link>
                    <Link href='/'>
                        <Image src="/FT.svg" height={45} width={45} alt="logotype" className={styles.logo} />
                    </Link>
                    <Link href='/selfcheckout'>
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