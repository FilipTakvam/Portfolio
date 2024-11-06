'use client';

import { useState } from 'react';
import styles from './styles/page.module.scss'
import NavBar from './components/navbar'
import Hero from './sections/hero'
import About from './sections/about';
import Projects from './sections/projects';
import Contact from './sections/contact';

export default function Home() {
  const [navbarHeight, setNavbarHeight] = useState<number>(0);
  const [isInView, setIsInView] = useState<boolean>(false);

  return (
    <main className={styles.main}>
      <NavBar setNavbarHeight={setNavbarHeight} isInView={isInView}/>
      <Hero navbarHeight={navbarHeight}/>
      <About setIsInView={setIsInView}/>
      <Projects navbarHeight={navbarHeight}/>
      <Contact/>
    </main>
  )
}
