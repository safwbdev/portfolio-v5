import React from 'react';
import './styles/main.scss';
import { useReveal } from './hooks/useReveal';
import Cursor from './components/Cursor';
import ProgressBar from './components/ProgressBar';
import Nav from './components/Nav';
import Hero from './components/Hero';
import { About, Skills, Projects, Experience, Education, Contact } from './components/Sections';

export default function App() {
  useReveal();

  return (
    <>
      <Cursor />
      <ProgressBar />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <footer>SAFWBDEV © 2026 · BUILT WITH REACT + THREE.JS · KUALA LUMPUR, MALAYSIA</footer>
    </>
  );
}
