import React from 'react'
import styles from '../styles/hero.module.scss'
import { motion } from 'framer-motion'
import { BiLogoBehance, BiLogoInstagram, BiLogoLinkedinSquare, BiLogoGithub } from 'react-icons/bi'

const socialIconsVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};

const iconVariants = {
  initial: { opacity: 0, x: '-2.5rem' },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1]}},
};

type SectionProps = {
  navbarHeight: number,
}

function Hero({ navbarHeight } : SectionProps) {

  return (
    <section id="home" className={`${styles.heroSection} wrapper`} style={{ top: `${navbarHeight}px`, height: `calc(100svh - ${navbarHeight}px)` }}>
      <div className={styles.heroContainer}>
        <div className={styles.textContainer}>
          <div className={styles.nameContainer}>
            <motion.h1
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.5, duration: 2, ease: [0.33, 1, 0.68, 1] } }}
            >Filip
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.5, duration: 2, ease: [0.33, 1, 0.68, 1] } }}
            >Takvam
            </motion.h1>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0, transition: { delay: 1.7, duration: 1, ease: [0.33, 1, 0.68, 1] } }}
          >Industrial Design Engineer <br></br> Based in Sweden</motion.h2>
        </div>
        <motion.div
          className={styles.socialIcons}
          initial="initial"
          animate="animate"
          variants={socialIconsVariants}
        >
          <motion.div className={styles.socialIcon} variants={iconVariants}>
            <a href="https://behance.net/filiptakvam"><BiLogoBehance style={{ fontSize: "2.5rem" }}/> </a>
          </motion.div>
          <motion.div className={styles.socialIcon} variants={iconVariants}>
            <a href="https://www.instagram.com/filiptakvam/"><BiLogoInstagram style={{ fontSize: "2.5rem" }}/> </a>
          </motion.div>
          <motion.div className={styles.socialIcon} variants={iconVariants}>
            <a href="https://linkedin.com/in/filip-takvam-93208a155"><BiLogoLinkedinSquare style={{ fontSize: "2.5rem" }}/> </a>
          </motion.div>
          <motion.div className={styles.socialIcon} variants={iconVariants}>
            <a href="https://github.com/FilipTakvam"><BiLogoGithub style={{ fontSize: "2.5rem" }}/> </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero