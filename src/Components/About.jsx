import React from 'react';
import Roll from 'react-reveal/Roll';
import { ReactComponent as Women } from '../assets/women.svg';

const About = () => (
  <div className="text-center mt-24 lg:mt-12 md:pt-20 mx-10">
    <h1 className="text-2xl text-gray-500">About</h1>
    <div className="flex lg:flex-row flex-col justify-center items-center mx-auto mt-18 lg:mt-16">
      <div className="w-80 h-80 lg:w-1/3 lg:h-1/3">
        <Roll right>
          <Women className="w-80 h-80 lg:w-3/4 mx-auto lg:h-3/4" />
        </Roll>
      </div>
      <div className="text-left text-gray-300 md:p-8 p-4 lg:w-1/2 lg:p-6">
        <Roll left>
          <p className="py-4">Hello! My name is Akshitha, and I enjoy building websites. My interest in web development started back in 2019 when I was exploring other career options after graduating.</p>
          <p className="py-4">
            I have a passion for creating the most beautiful and functional products. My programming skills are at the forefront of my work, with a focus on design and usability.
          </p>
          <div className="flex space-x-2 justify-center">
            <div>
              <a href="https://docs.google.com/document/d/1KNs-hqylG5itCTQvuigCDveSFVuT7rQRIy-hYPX-tJI/edit?usp=sharing" alt="resume" target="_blank" className="px-6 pt-2.5 pb-2 bg-green-600 text-white font-bold leading-normal uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out flex align-center justify-center items-center md:text-1.5xl" rel="noreferrer">
                View Resume
              </a>
            </div>
          </div>
        </Roll>
      </div>
    </div>
  </div>
);

export default About;
