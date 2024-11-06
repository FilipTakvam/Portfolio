
import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/navbar.module.scss';
import Image from 'next/image';
import NavTrigger from './navtrigger';
import { motion, AnimatePresence, Variants } from "framer-motion";
import breakpoints from '../styles/constants/breakpoints';
import Link from 'next/link';

const navLinksVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const menuSlide: Variants = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
}

const slide: Variants = {
  initial: { x: 80, opacity: 0.0 },
  enter: (i: number) => ({ x: 0, opacity: 1, transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.06 * i } }),
  exit: (i: number) => ({ x: 80, opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.06 * i } })
}

type NavBarProps = {
  setNavbarHeight: React.Dispatch<React.SetStateAction<number>>,
  isInView: boolean,
}


const NavBar = ({ setNavbarHeight, isInView }: NavBarProps) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const navbarRef = useRef<HTMLElement | null>(null);
  const [initialPath, setInitialPath] = useState<string>();
  const [targetPath, setTargetPath] = useState<string>();

  useEffect(() => {
    setInitialPath(`M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`);
    setTargetPath(`M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`);
  }, []);


  const curve: Variants = {
    initial: {
      d: initialPath
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  }

  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js


  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function scrollToTopMobile() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'auto' });
    closeMobileNav();
  }

  function closeMobileNav() {
    setIsMobileNavOpen(false);
    setIsActive(false);
  }

  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        const height = navbarRef.current.offsetHeight;
        setNavbarHeight(height);
      }
    };

    const handleWindowResize = () => {
      updateNavbarHeight();

      if (window.innerWidth >= breakpoints.lg) {
        closeMobileNav();
      }
    };

    // Initial setup
    updateNavbarHeight();

    // Event listener for window resize
    window.addEventListener('resize', handleWindowResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [setNavbarHeight]);

  return (
    <nav ref={navbarRef}
      className={isInView ? `${styles.navBar} wrapper ${styles.opaque}` : `${styles.navBar} wrapper`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1, duration: 2, ease: [0.33, 1, 0.68, 1] } }}
      >
        <Image src="/FT.svg" height={45} width={45} className={styles.logo} alt="logotype" />
      </motion.div>
      <motion.ul
        className={styles.navLinksDesktop}
        variants={navLinksVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.li variants={linkVariants}>
          <div className={styles.navLinkTop} onClick={scrollToTop}>Home</div>
        </motion.li>
        <motion.li variants={linkVariants}>
          <Link href="#about" scroll={true}>About</Link>
        </motion.li>
        <motion.li variants={linkVariants}>
          <Link href="#projects" scroll={true}>Projects</Link>
        </motion.li>
        <motion.li variants={linkVariants}>
          <Link href="#contact" scroll={true}>Contact</Link>
        </motion.li>
      </motion.ul>
      <NavTrigger isMobileNavOpen={isMobileNavOpen} setIsMobileNavOpen={setIsMobileNavOpen} isActive={isActive} setIsActive={setIsActive} />
      <AnimatePresence mode="wait">
        {isMobileNavOpen && (
          <motion.div className={styles.mobileNav}
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <motion.ul className={styles.navLinks}>
              <motion.li
                custom={1}
                variants={slide}
                initial="initial"
                animate="enter"
                exit="exit">
                <div className={styles.navLinkTop} onClick={scrollToTopMobile}>Home</div>
              </motion.li>
              <motion.li
                custom={2}
                variants={slide}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link href="#about" scroll={true} onClick={closeMobileNav}>About</Link>
              </motion.li>
              <motion.li
                custom={3}
                variants={slide}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link href="#projects" scroll={true} onClick={closeMobileNav}>Projects</Link>
              </motion.li>
              <motion.li
                custom={4}
                variants={slide}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link href="#contact" scroll={true} onClick={closeMobileNav}>Contact</Link>
              </motion.li>
            </motion.ul>
            <svg className={styles.svgCurve}>
              <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
