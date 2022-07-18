import React from 'react';
import { ImLinkedin } from 'react-icons/im';
import { AiFillGithub } from 'react-icons/ai';
import { FiCodepen } from 'react-icons/fi';

const Footer = () => (
  <div className="text-slate-600 justify-center mx-auto text-center mt-32 pb-8">
    <p className="flex justify-center items-center">
      <a href="https://www.linkedin.com/in/akshitha-reddy-yadla/" alt="linkedin" className="m-4 text-green-300"><ImLinkedin size={25} /></a>
      <a href="https://github.com/AkshithaReddy1899" alt="github" className="m-4 text-green-300"><AiFillGithub size={25} /></a>
      <a href="https://codepen.io/Akshitha_Reddy" alt="codepen" className="m-4 text-green-300"><FiCodepen size={25} /></a>
    </p>
    <p className="text-xs">Designed and built by Akshitha Reddy</p>
    <p className="text-green-800 text-xl">akshithareddy1899@gmail.com</p>
  </div>
);

export default Footer;
