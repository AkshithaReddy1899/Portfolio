import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="mx-auto md:mx-20 text-white">
      <Home />
      <hr className="border-b border-gray-600 my-14 mx-12 md:hidden" />
      <About />
      <hr className="border-b border-gray-600 my-14 mx-12 md:hidden" />
      <Skills />
      <hr className="border-b border-gray-600 my-14 mx-12 md:hidden" />
      <Projects />
      <hr className="border-b border-gray-600 my-14 mx-12 md:hidden" />
      <Contact />
      <hr className="border-b border-gray-600 my-14 mx-12 md:hidden" />
      <Footer />
    </div>
  );
}

export default App;
