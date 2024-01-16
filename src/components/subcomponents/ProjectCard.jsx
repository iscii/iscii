import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard(props) {
    const {name, desc, image, link, repo, category} = props;

	return (
		<div className='relative flex flex-col md:flex-row justify-between py-10 min-h-60 border-b-2 last-of-type:border-0'>
            <h3 className="md:hidden">{name}</h3>
            <a href={link} className='my-auto' target='_blank' rel='noopener noreferrer'>
                <img src={`/images/${category}/${image}`} width="400" alt={name} title={name}/>
            </a>
            <div className='md:w-8/12 md:pl-6 md:mt-0 mt-5'>
                <h3 className="mb-4 hidden md:inline-block">{name}</h3>
                <p>{desc}</p>
                <div className="md:absolute md:bottom-5">
                    {   link &&
                        <a className="pr-4 inline-flex items-center" href={link} target='_blank' rel='noopener noreferrer'>Link <FaExternalLinkAlt className="inline ml-2"/></a>
                    }
                    {   repo &&
                        <a className="inline-flex items-center" href={repo} target='_blank' rel='noopener noreferrer'>Repo <FaExternalLinkAlt className="inline ml-2"/></a>
                    }
                </div>
            </div>
		</div>
	);
};

export default ProjectCard;
