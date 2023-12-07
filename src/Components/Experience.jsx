import experienceData from '../assets/experience';

const Experience = () => {
	return ( 
		<div className="text-center mt-24 lg:flex lg:flex-col justify-center items-center lg:mt-12 md:pt-20">
    <h1 className="text-2xl text-gray-500">Experience</h1>
		<div className="mt-10 lg:border-l-2 border-slate-700 flex justify-center items-center px-auto md:py-10 md:px-0 lg:flex lg:flex-col lg:items-start">
			{
				experienceData.map((item) => (
					<div className="text-left">
						<h2>{item.role}</h2>
						<h3>{item.title}</h3>
						<p>{item.year}</p>
					</div>
				))
			}
		</div>
    
  </div>
	 )
};
 
export default Experience;