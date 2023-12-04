import React from 'react';


function SkillCard({ skill }) {
	return (
		<div className="skill-card m-2 flex flex-col justify-center items-center" >
			<div className="skill-name bg-green-100">{skill.name}</div>
		</div>
	)
}

export default SkillCard;