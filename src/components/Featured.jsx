import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import projectData from '../data/projects.json';

function Featured() {
	const [featuredProjects, setFeaturedProjects] = useState([]);
	
	useEffect(() => {
		const featured = projectData.filter(project => project.featured)
									.map(project => <ProjectCard key={`featured-${project.name}`} {...project}/>);
		setFeaturedProjects(featured);
	}, []);
	
	return (
		<>
			{featuredProjects}
			<div>
				Wanna see more projects? Head <Link to='/projects'>here</Link>!
			</div>
        </>
	);
};

export default Featured;
