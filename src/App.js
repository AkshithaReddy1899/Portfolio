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
      <hr className="border-solid border-0 border-b border-gray-600 my-14 mx-12" />
      <About />
      <hr className="border-solid border-0 border-b border-gray-600 my-14 mx-12" />
      <Experience />
      <hr className="border-solid border-0 border-b border-gray-600 my-14 mx-12" />
      <Skills />
      <hr className="border-solid border-0 border-b border-gray-600 my-14 mx-12" />
      <Projects />
      <hr className="border-solid border-0 border-b border-gray-600 my-14 mx-12" />
      <Contact />
      <hr className="border-solid border-0 border-b border-gray-600 my-14 mx-12" />
      <Footer />
    </div>
  );
}

export default App;
