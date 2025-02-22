import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Work from './components/Work';
import Contact from './components/Contact';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Projects />
      <Work />
      <Skills />
      <Contact />
      <div className='h-[100%]'></div>
    </div>
  );
};

export default App;
