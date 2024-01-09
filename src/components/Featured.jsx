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
			<h1 className='py-20 bg-gradient-to-t from-white to-transparent'>
				Featured Projects	
			</h1>
			<div className='bg-white'>
				{featuredProjects}
			</div>
			<div className='py-10'>
				Wanna see more projects? Head <Link to='/projects'>here</Link>!
			</div>
        </>
	);
};

export default Featured;
