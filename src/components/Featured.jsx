import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './subcomponents/Header';
import HeadedContent from './subcomponents/HeadedContent';
import ProjectCard from './subcomponents/ProjectCard';
import projectData from '../data/projects.json';

function Featured(props) {
	const { bioHidden } = props;
	const [featuredProjects, setFeaturedProjects] = useState([]);
	
	useEffect(() => {
		const featured = projectData.filter(project => project.featured)
									.map(project => <ProjectCard key={`featured-${project.name}`} {...project}/>);
		setFeaturedProjects(featured);
	}, []);
	
	return (
		// might be able to make this, experiences, and projects (header + content) into its own component
		<div>
			<Header opaque={bioHidden}>Featured Projects</Header>
			<HeadedContent id='featured'>
				{featuredProjects}
				<div className='mb-10'>
					Wanna see more projects? Head <Link to='/projects' className='underline'>here</Link>!
				</div>
			</HeadedContent>
        </div>
	);
};

export default Featured;
