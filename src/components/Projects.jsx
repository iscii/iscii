import { useState, useEffect, useRef } from 'react';

import Header from './subcomponents/Header';
import ProjectCard from './subcomponents/ProjectCard';
import projectData from '../data/projects.json';

function Projects() {
    const [projects, setProjects] = useState([]);
    const categories = useRef(['Websites', 'Games', 'Programs', 'Web Games']);
	
	useEffect(() => {
		const projects = categories.current
            .map(category =>
                <div key={category}>
                    <Header opaque={true}>{category}</Header>
                    <div className=''>
                    {
                        projectData
                            .filter(project => project.category === category)
                            .map(project => <ProjectCard key={`${category}-${project.name}`} {...project}/>)
                    }
                    </div>
                </div>
            );
		setProjects(projects);
	}, []);
    
    return (
        <div className='px-24'>
            {projects}
        </div>
    );
}

export default Projects;