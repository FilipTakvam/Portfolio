import React from 'react';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '../styles/about.module.scss';
import { useAnimationControls, motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const items = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },

  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

type SectionProps = {
  setIsInView: (isInView: boolean) => void,
}


const About = ({ setIsInView }: SectionProps) => {

  const [inViewRef, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const animationControls = useAnimationControls();
  const talkControls = useAnimationControls();

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();

        if (rect.top <= 2) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Initial calculation on mount
    handleScroll();

    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      animationControls.start('show');
      talkControls.start({ opacity: 1, transition: { delay: 1.7, duration: 1 } });
    }
  }, [isInView])

  return (
    <section className={`${styles.aboutSection} acceleratedRendering`} ref={inViewRef} id="about">
      <div ref={sectionRef} className={`${styles.aboutContainer} wrapper `}>
        
        <div className={styles.informationContainer}>
          <img src="/PortraitMobile.png" alt="Portrait of Filip Takvam" className={styles.portraitMobile} />
          <motion.div className={styles.information} variants={container} initial={'hidden'} animate={animationControls}>
            <motion.div variants={items}>
              <h4>About Me</h4>
              <p>I am currently in the final year of my master&apos;s program in Industrial Design Engineering at Chalmers University, Gothenburg. My approach in work has always been characterized by a profound curiosity and a dedicated pursuit to find creative, yet achievable, solutions. I consistently explore new areas, from emerging technologies to design philosophies, fostering a comprehensive perspective in my design work. I thrive on challenges that push the boundaries of my current knowledge space, actively seeking opportunities to expand my expertise and refine my skills.</p>
            </motion.div>

            <motion.div variants={items}>
              <h4>Education</h4>
              <h5>Chalmers University of Technology, Gothenburg｜<span>2019-2024</span></h5>
              <p>M.Sc. Degree - Industrial Design Engineering</p>

              <h5 className={styles.notfirsth4}>Polhemsgymnasiet, Gothenburg｜<span>2014-2017</span></h5>
              <p>High school Diploma - Orientation of Technology and Design</p>
            </motion.div>

            <motion.div variants={items}>
              <h4>Experience</h4>
              <h5>Volvo Cars, Gothenburg｜<span>2018-Present</span></h5>
              <p>Automotive Crash Test Technician</p>

              <h5 className={styles.notfirsth4}>Lernia, Gothenburg｜<span>2018</span></h5>
              <p>Automotive Durability Testing Technician - Assigned to Volvo Cars</p>

              <h5 className={styles.notfirsth4}>Volvo Cars, Gothenburg｜<span>2017</span></h5>
              <p>Internship</p>
            </motion.div>
          </motion.div>

          <motion.div className={styles.sayHelloContainer} animate={talkControls} initial={{ opacity: 0 }}><Link className={styles.sayHello} href="#contact" scroll={true}>Want to get to know me better?</Link></motion.div>

        </div>

        <div className={styles.portraitContainer}>
          <img className={styles.portrait} src={'/Portrait.png'} alt="Portrait" />
        </div>
      </div>
    </section>
  )
}

export default About