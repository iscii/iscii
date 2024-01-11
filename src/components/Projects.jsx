import { useState, useEffect } from 'react';
import Header from './subcomponents/Header';
import ProjectCard from './subcomponents/ProjectCard';
import projectData from '../data/projects.json';

function Projects() {
    const [projects, setProjects] = useState([]);
	
	useEffect(() => {
		const projects = projectData.map(project => <ProjectCard key={`featured-${project.name}`} {...project}/>);
		setProjects(projects);
	}, []);
    
    return (
        <div className=''>
            <Header opaque={true}>Projects</Header>
            <div className=''>
                {projects}
            </div>
        </div>
    );
}

export default Projects;