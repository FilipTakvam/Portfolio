"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "../styles/projects.module.scss";
import {
  useScroll,
  motion,
  useMotionValueEvent,
  useAnimationControls,
  AnimatePresence,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import Scroll from "../components/scroll";
import Head from "next/head";

const itemsContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const items = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
};

const imageAnimation = {
  hidden: {
    opacity: 0,
    scale: 0,
  },

  show: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.2, duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },

  hide: {
    opacity: 0,
    scale: 0,
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  },
};

type SectionProps = {
  navbarHeight: number,
}

const Projects = ({ navbarHeight }: SectionProps) => {
  const projects = [
    { name: "Maxivent OW", link: "/maxiventow" },
    { name: "Crushed speaker", link: "/crushedspeaker" },
    { name: "Willys self checkout", link: "/selfcheckout" },
    { name: "Safety scanning radar", link: "/safetyscanningradar" },
  ];

  const container = useRef<HTMLDivElement | null>(null);
  const [activeProject, setActiveProject] = useState<number>(0);

  const [inViewRef, isInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [inViewRef2, isInView2] = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
  const [inViewRef3, isInView3] = useInView({ threshold: 0.01 });
  const animationControls = useAnimationControls();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (isInView) {
      animationControls.start("show");
    }
  }, [isInView]);

  useEffect(() => {
    if (isInView2) {
      animationControls.start("show");
    }
  }, [isInView2]);

  useMotionValueEvent(scrollYProgress, "change", (scrollProgress) => {
    if (scrollProgress < 0.25) {
      setActiveProject(0);
    } else if (scrollProgress < 0.5) {
      setActiveProject(1);
    } else if (scrollProgress < 0.75) {
      setActiveProject(2);
    } else if (scrollProgress < 1) {
      setActiveProject(3);
    }
  });

  return (
    <>
      <Head>
        {/* Preload the project images, for faster loading */}
        <link rel="preload" href="/MaxiventWebsite.png" as="image" />
        <link rel="preload" href="/WillysWebsite.png" as="image" />
        <link rel="preload" href="/CrushedSpeakerWebsite.png" as="image" />
        <link rel="preload" href="/SafetyScanningRadarWebsite.png" as="image" />
      </Head>
      <section
        className={`${styles.projectsSection} acceleratedRendering`}
        ref={container}
        id="projects"
      >
        <div
          ref={inViewRef}
          className={`${styles.projectsContainer} wrapper ${styles.desktop}`}
          style={{ top: `${navbarHeight}px` }}
        >
          <Scroll isInView={isInView3} />
          <div
            className={`${styles.projectsListContainer}`}
            style={{ height: `calc(100svh - ${navbarHeight}px)` }}
          >
            <div className={styles.projectsList}>
              <h2 ref={inViewRef3}>Projects</h2>
              <motion.ul
                variants={itemsContainer}
                initial="hidden"
                animate={animationControls}
              >
                {projects.map((project, index) => (
                  <motion.li key={index} variants={items}>
                    <Link
                      href={project.link}
                      className={
                        index === activeProject
                          ? `${styles.activeLink} ${styles.link} `
                          : styles.link
                      }
                    >
                      {project.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <p>
              PSST... CLICK ON THE NAMES TO <br />
              GET A MORE DETAILED VIEW OF THE PROJECTS
            </p>
          </div>

          <div
            className={` ${styles.projectImageContainer}`}
            style={{ height: `calc(100svh - ${navbarHeight}px)` }}
          >
            <AnimatePresence mode="wait">
              {activeProject === 0 && (
                <Link href="/maxiventow">
                  <motion.img
                    key="maxivent"
                    variants={imageAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hide"
                    src="/MaxiventWebsite.png"
                    alt="Maxivent OW"
                    className={styles.projectImage}
                  />
                </Link>
              )}
              {activeProject === 2 && (
                <Link href="/selfcheckout">
                  <motion.img
                    key="willys"
                    variants={imageAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hide"
                    src="/WillysWebsite.png"
                    alt="Willys"
                    className={styles.projectImage}
                  />
                </Link>
              )}
              {activeProject === 1 && (
                <Link href="/crushedspeaker">
                  <motion.img
                    key="crushedspeaker"
                    variants={imageAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hide"
                    src="/CrushedSpeakerWebsite.png"
                    alt="CrushedSpeaker"
                    className={styles.projectImage}
                  />
                </Link>
              )}
              {activeProject === 3 && (
                <Link href="/safetyscanningradar">
                  <motion.img
                    key="safetyscanningradar"
                    variants={imageAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hide"
                    src="/SafetyScanningRadarWebsite.png"
                    alt="CrushedSpeaker"
                    className={styles.projectImage}
                  />
                </Link>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div
          ref={inViewRef2}
          className={`${styles.projectsContainer} wrapper ${styles.mobile}`}
          style={{ top: `${0}px` }}
        >
          <div
            className={`${styles.projectsListContainer}`}
            style={{ height: `calc(100svh - ${navbarHeight}px)` }}
          >
            <div className={styles.projectsList}>
              <h2>Projects</h2>
              <motion.ul
                variants={itemsContainer}
                initial="hidden"
                animate={animationControls}
              >
                {projects.map((project, index) => (
                  <motion.li key={index} variants={items}>
                    <Link
                      href={project.link}
                      className={
                        index === activeProject
                          ? `${styles.activeLink} ${styles.link} `
                          : styles.link
                      }
                    >
                      {project.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>

          <div className={` ${styles.projectImageContainer}`}>
            <AnimatePresence mode="sync">
              {activeProject === 0 && (
                <Link href="/maxiventow">
                  <motion.img
                    key="maxivent"
                    variants={imageAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hide"
                    src="/MaxiventWebsite.png"
                    alt="Maxivent OW"
                    className={styles.projectImage}
                  />
                </Link>
              )}
              {activeProject === 2 && (
                <Link href="/selfcheckout">
                  <motion.img
                    key="willys"
                    variants={imageAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hide"
                    src="/WillysWebsite.png"
                    alt="Willys"
                    className={styles.projectImage}
                  />
                </Link>
              )}
              {activeProject === 1 && (
                <Link href="/crushedspeaker">
                  <motion.img
                    key="crushedspeaker"
                    variants={imageAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hide"
                    src="/CrushedSpeakerWebsite.png"
                    alt="CrushedSpeaker"
                    className={styles.projectImage}
                  />
                </Link>
              )}
              {activeProject === 3 && (
                <Link href="/safetyscanningradar">
                  <motion.img
                    key="safetyscanningradar"
                    variants={imageAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hide"
                    src="/SafetyScanningRadarWebsite.png"
                    alt="CrushedSpeaker"
                    className={styles.projectImage}
                  />
                </Link>
              )}
            </AnimatePresence>
          </div>
          <h2 className={styles.mobileTitle}>Projects</h2>
        </div>
      </section>
    </>
  );
};

export default Projects;
