import React from 'react';
import Zoom from 'react-reveal/Zoom';
import data from '../assets/data';

const Projects = () => (
  <div className="text-center mt-24 lg:mt-12 md:pt-20 my-10">
    <h1 className="text-2xl text-gray-500">Projects</h1>
    <div className="mb-20 mt-12 flex flex-wrap flex-col md:flex-row justify-center items-center">
      {data.map((item) => (
        <div className={`w-72 h-auto md:w-80 md:h-auto lg:w-96 lg:h-96 m-6 rounded p-4 bg-green-900 bg-[url('${item.img}')]`} key={item.id}>
          <Zoom left>
            <img src={item.img} alt={item.title} className="w-64 h-auto md:w-72 md:h-auto lg:w-80 lg:h-auto mx-auto rounded" />
            <div className="m-2 p-2">
              {/* <h2>{item.img}</h2> */}
              <h1 className="text-left text-2xl px-4">{item.title}</h1>
              <p className="text-xs text-left m-2">{item.description}</p>
              <div className="btn text-left">
                <a href={item.repo} target="_blank" rel="noreferrer" alt="github" className="m-2 p-2 bg-emerald-600 text-white font-bold leading-normal uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out items-center text-sm">Github</a>
                {/* <a href={item.link} target="_blank" rel="noreferrer" alt="demo" className="m-2 p-2 bg-emerald-600 text-white font-bold leading-normal uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out items-center text-sm">Live Demo</a> */}
              </div>
            </div>
          </Zoom>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
