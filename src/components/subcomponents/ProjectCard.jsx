import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard(props) {
    const {name, desc, image, link, repo} = props;

	return (
		<div className='relative flex flex-row justify-between mb-10 min-h-60 h-96 border-b-2 last-of-type:border-0'>
            <a href={link} className='my-auto' target='_blank' rel='noopener noreferrer'>
                <img src={image} width="400"/>
            </a>
            <div className='w-8/12'>
                <h3 className="text-2xl">{name}</h3>
                <p>{desc}</p>
                <div className="absolute bottom-5">
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
