import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from './subcomponents/Header';
import ProjectCard from './subcomponents/ProjectCard';
import projectData from '../data/projects.json';

function Featured() {
	const [featuredProjects, setFeaturedProjects] = useState([]);
	
	useEffect(() => {
		const featured = projectData.filter(project => project.featured)
									.map(project => <ProjectCard key={`featured-${project.name}`} {...project}/>);
		setFeaturedProjects(featured);
	}, []);
	
	return (
		<div>
			<Header>Featured Projects</Header>
			<div id="featured" className='relative z-10 bg-white scroll-mt-52'>
				{featuredProjects}
				Wanna see more projects? Head <Link to='/projects'>here</Link>!
			</div>
        </div>
	);
};

export default Featured;
