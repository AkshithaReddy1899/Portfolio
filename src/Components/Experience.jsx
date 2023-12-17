import experienceData from '../assets/experience';
import Slide from 'react-reveal/Slide';

const Experience = () => {
	return ( 
		<div className="text-center mt-24 lg:flex lg:flex-col justify-center items-center lg:my-12 md:py-20">
			<Slide bottom right>
    <h1 className="text-2xl text-gray-500">Experience</h1>
		<div className="mt-10 lg:pl-10 lg:border-l-2 border-slate-700 flex justify-center items-center px-auto md:py-10 md:px-0 lg:flex lg:flex-col lg:items-start">
			{
				experienceData.map((item) => (
					<div className="text-left" key={item.id}>
						<h2>{item.role}</h2>
						<h3>{item.title}</h3>
						<p>{item.year}</p>
					</div>
				))
			}
		</div>
    </Slide>
  </div>
	 )
};
 
export default Experience;