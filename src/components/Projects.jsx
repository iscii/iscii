function Projects() {
    const [featuredProjects, setFeaturedProjects] = useState([]);
	
	useEffect(() => {
		const featured = projectData.filter(project => project.featured)
									.map(project => <ProjectCard key={`featured-${project.name}`} {...project}/>);
		setFeaturedProjects(featured);
	}, []);
    
    return (
        <div className=''>
            <h1>Projects</h1>
        </div>
    );
}

export default Projects;