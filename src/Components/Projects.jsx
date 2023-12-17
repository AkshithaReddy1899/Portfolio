import React from 'react';
import Zoom from 'react-reveal/Zoom';
import data from '../assets/data';
import { FaGithub } from "react-icons/fa";

const Projects = () => (
  <div className="text-center mt-24 my-10 lg:my-12 md:py-20">
    <h1 className="text-2xl text-gray-500">Projects</h1>
    <div className="mb-20 mt-12 flex flex-wrap flex-col lg:flex-row justify-center items-center">
      {data.map((item) => (
        <div className="p-4" key={item.id}>
        <div className="w-72 h-auto md:w-80 md:h-auto lg:w-96 lg:h-auto m-6 rounded bg-green-900 backdrop-saturate-200" style={{ backgroundImage: `url(${item.img}) ` }} key={item.id}>
          <div className= "p-4 backdrop-saturate-200 bg-black/70">
          <Zoom >
            <div className="m-2 p-2">
              <h1 className="text-left text-2xl px-4 text-slate-200">{item.title}</h1>
              <p className="text-xs text-left m-2 text-slate-300">{item.description}</p>
              <div className="btn text-left">
                <a href={item.repo} target="_blank" rel="noreferrer" alt="github" className="m-2 p-2 bg-emerald-600 text-white font-bold leading-normal uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out items-center text-sm">Github</a>
              </div>
            </div>
          </Zoom>
          </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
