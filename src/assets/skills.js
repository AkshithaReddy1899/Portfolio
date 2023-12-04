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


export const SkillsData = [
	{
		type: "Frontend",
		list: [
			{
				name: "HTML",
				icon: <FaHtml5 size={30} />
			},
			{
				name: "CSS",
				icon: <IoLogoCss3 size={30} title="CSS" className="mx-2" />
			},
			{
				name: "JavaScript",
				icon: <IoLogoJavascript size={30} title="JS" className="mx-2" />
			},
		]
	},
	{
		type: "Mobile development",
		list: [
			{
				name: "Flutter",
				icon: <SiFlutter />
			},
			{
				name: "React Native",
				icon: <FaReact />
			},
		]
	},
	{
		type: "Backend",
		list: [
			{
				name: "Ruby",
				icon: <DiRuby size={30} title="Ruby" className="mx-2" />
			},
			{
				name: "Ruby-on-Rails",
				icon: <SiRubyonrails size={34} />
			},
			{
				name: "Express",
				icon: <SiExpress />
			},
		]
	},
	{
		type: "Database",
		list: [
			{
				name: "PostgreSql",
				icon: <SiPostgresql size={30} title="Postgres" className="mx-2" />
			},
			{
				name: "MySql",
				icon: <GrMysql size={30} />
			},
		]
	}
]