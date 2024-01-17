import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard(props) {
    const {name, desc, image, link, repo, category} = props;

	return (
		<div className='relative flex flex-col md:flex-row justify-start py-10 min-h-60 h-auto md:h-96 border-b-2 first-of-type:pt-0 last-of-type:border-0'>
            <h3 className="md:hidden text-xl mb-5">{name}</h3>
            <a href={link} className='md:my-auto' target='_blank' rel='noopener noreferrer'>
                <img src={`/images/${category}/${image}`} width={350} alt={name} title={name}/>
            </a>
            <div className='md:w-8/12 md:ml-12 md:mt-0 flex flex-col justify-between'>
                <div className="my-5">
                    <h3 className="mb-4 hidden md:inline-block">{name}</h3>
                    <p>{desc}</p>
                </div>
                <div>
                    {   link &&
                        <a className="pr-4 text-xl md:text-base inline-flex items-center" href={link} target='_blank' rel='noopener noreferrer'>Link <FaExternalLinkAlt className="inline ml-2"/></a>
                    }
                    {   repo &&
                        <a className="text-xl md:text-base inline-flex items-center" href={repo} target='_blank' rel='noopener noreferrer'>Repo <FaExternalLinkAlt className="inline ml-2"/></a>
                    }
                </div>
            </div>
		</div>
	);
};

export default ProjectCard;
