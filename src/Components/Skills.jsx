import React from 'react';
import Slide from 'react-reveal/Slide';
import { SkillsData } from '.././assets/skills';
import SkillCard from './skillCard';
import { FaReact, FaHtml5 } from "react-icons/fa";
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { DiReact, DiResponsive, DiRuby } from 'react-icons/di';
import {
  SiBootstrap, SiTailwindcss, SiBulma, SiPostgresql, SiMysql, SiExpress, SiFlutter, SiRubyonrails
} from 'react-icons/si';
import { GrMysql } from "react-icons/gr";
import { VscDebugAltSmall } from 'react-icons/vsc';
import { TiTickOutline } from 'react-icons/ti';


const Skills = () => {
  const skillsData = SkillsData;
  return(
    <div className="text-center mt-24 my-10 lg:my-12 md:py-20 lg:flex lg:flex-col justify-center items-center">
      <Slide bottom left>
    <h1 className="text-2xl text-gray-500">Skills</h1>
    <div className="flex flex-wrap flex-col md:flex-row justify-between items-center lg:w-1/2 lg:justify-center">
      <div className="md:w-11/12 lg:w-3/4 md:mx-2 lg:mx-6 my-8">
          {
            skillsData.map((item) => {
              return(
                <div className="skills-section flex flex-col md:flex-row md:justify-between justify-start my-6" key={item.type}>
                  <label className="text-left text-green-400">{item.type}</label>
                  <div className="flex flex-row">
                    {
                      item.list.map((skill) => <div className="skill-name m-2 p-1 border-1 rounded-md bg-slate-700" key={skill.name}>{skill.name}</div>)
                    }
                  </div>
                </div>
              )
            })
          }
      </div>
    </div>
    </Slide>
  </div>
  )
        };

export default Skills;
