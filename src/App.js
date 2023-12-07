import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="mx-auto md:mx-20 text-white">
      <Home />
      <hr className="border-solid border-0 border-b border-gray-600 my-14 mx-12 md:hidden" />
      <About />
      <hr className="border-solid border-0 border-b border-gray-600 my-14 mx-12 md:hidden" />
      <Experience />
      <hr className="border-solid border-0 border-b border-gray-600 my-14 mx-12 md:hidden" />
      <Skills />
      <hr className="border-solid border-0 border-b border-gray-600 my-14 mx-12 md:hidden" />
      <Projects />
      <hr className="border-solid border-0 border-b border-gray-600 my-14 mx-12 md:hidden" />
      <Contact />
      <hr className="border-solid border-0 border-b border-gray-600 my-14 mx-12 md:hidden" />
      <Footer />
    </div>
  );
}

export default App;
