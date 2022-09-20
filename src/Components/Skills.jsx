import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { DiReact, DiResponsive, DiRuby } from 'react-icons/di';
import {
  SiBootstrap, SiTailwindcss, SiRubyonrails, SiBulma, SiPostgresql, SiMysql,
} from 'react-icons/si';
import { VscDebugAltSmall } from 'react-icons/vsc';
import { TiTickOutline } from 'react-icons/ti';
import Flip from 'react-reveal/Flip';

const Skills = () => (
  <div className="text-center mt-24 lg:mt-12 md:pt-20">
    <h1 className="text-2xl text-gray-500">Skills</h1>
    <div className="flex flex-wrap flex-col md:flex-row justify-center items-center lg:mt-20">
      <div className="mx-6 my-12">
        <Flip bottom>
          <h1 className="text-green-200">Front-end</h1>
          <div className=" flex flex-wrap flex-row justify-center items-center p-8">
            <p className="flex flex-col justify-center items-center">
              <AiFillHtml5 size={30} title="HTML" className="mx-2" />
              <span className="text-xs text-green-700 m-2">HTML</span>
            </p>
            <p className="flex flex-col justify-center items-center">
              <IoLogoCss3 size={30} title="CSS" className="mx-2" />
              <span className="text-xs text-green-700 m-2">CSS</span>
            </p>
            <p className="flex flex-col justify-center items-center">
              <IoLogoJavascript size={30} title="JS" className="mx-2" />
              <span className="text-xs text-green-700 m-2">JavaScript</span>
            </p>
          </div>
        </Flip>
      </div>

      <div className="m-6">
        <Flip bottom>
          <h1 className="text-green-200">Back-end</h1>
          <div className=" flex flex-wrap flex-row justify-center items-center p-8">
            <p className="flex flex-col justify-center items-center">
              <DiRuby size={30} title="Ruby" className="mx-2" />
              <span className="text-xs text-green-700 m-2">Ruby</span>
            </p>
            <p className="flex flex-col justify-center items-center">
              <SiRubyonrails size={30} title="Rails" className="mx-2" />
              <span className="text-xs text-green-700 m-2">Ruby-on-Rails</span>
            </p>
          </div>
        </Flip>
      </div>

      <div className="m-6">
        <Flip bottom>
          <h1 className="text-green-200">Frameworks</h1>
          <div className=" flex flex-wrap flex-row justify-center items-center p-8">
            <p className="flex flex-col justify-center items-center">
              <SiBootstrap size={30} title="Bootstrap" className="mx-2" />
              <span className="text-xs text-green-700 m-2">Bootstrap</span>
            </p>
            <p className="flex flex-col justify-center items-center">
              <DiReact size={30} title="React" className="mx-2" />
              <span className="text-xs text-green-700 m-2">React</span>
            </p>
            <p className="flex flex-col justify-center items-center">
              <SiTailwindcss size={30} title="Tailwind" className="mx-2" />
              <span className="text-xs text-green-700 m-2">Tailwind</span>
            </p>
            <p className="flex flex-col justify-center items-center">
              <SiBulma size={30} title="Bulma" className="mx-2" />
              <span className="text-xs text-green-700 m-2">Bulma</span>
            </p>
          </div>
        </Flip>
      </div>
      <div className="m-6">
        <Flip bottom>
          <h1 className="text-green-200">Database</h1>
          <div className=" flex flex-wrap flex-row justify-center items-center p-8">
            <p className="flex flex-col justify-center items-center">
              <SiPostgresql size={30} title="Postgres" className="mx-2" />
              <span className="text-xs text-green-700 m-2">PostgreSql</span>
            </p>
            <p className="flex flex-col justify-center items-center">
              <SiMysql size={30} title="sql" className="mx-2" />
              <span className="text-xs text-green-700 m-2">MySql</span>
            </p>
          </div>
        </Flip>
      </div>
      <div className="m-6">
        <Flip bottom>
          <h1 className="text-green-200">Miscellaneous</h1>
          <div className=" flex flex-wrap flex-row justify-center items-center p-8">
            <p className="flex flex-col justify-center items-center">
              <DiResponsive size={32} title="Responsive web design" className="mx-2" />
              <span className="text-xs text-green-700 m-2">Responsive design</span>
            </p>
            <p className="flex flex-col justify-center items-center">
              <TiTickOutline size={30} title="testing" className="mx-2" />
              <span className="text-xs text-green-700 m-2">Testing</span>
            </p>
            <p className="flex flex-col justify-center items-center">
              <VscDebugAltSmall size={30} title="Debugging" className="mx-2" />
              <span className="text-xs text-green-700 m-2">Debugging</span>
            </p>
          </div>
        </Flip>
      </div>
    </div>
  </div>
);

export default Skills;
