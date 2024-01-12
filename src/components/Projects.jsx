import { useState, useEffect, useRef } from 'react';
import Header from './subcomponents/Header';
import HeadedContent from './subcomponents/HeadedContent';
import ProjectCard from './subcomponents/ProjectCard';
import projectData from '../data/projects.json';

function Projects() {
    const [projects, setProjects] = useState([]);
    const categories = useRef(['websites', 'games', 'programs', 'webgames']);
	
	useEffect(() => {
		const projects = categories.current
            .map(category =>
                <div key={category}>
                    <Header opaque={true}>{{'websites': 'Websites', 'games': 'Games', 'programs': 'Programs', 'webgames': 'Web Games'}[category]}</Header>
                    <HeadedContent id={category}>
                    {
                        projectData
                        .filter(project => project.category === category)
                        .map(project => <ProjectCard key={`${category}-${project.name}`} {...project}/>)
                    }
                    </HeadedContent>
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