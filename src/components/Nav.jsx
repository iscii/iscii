import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import resume from '../assets/resume.pdf';

function Nav() {
	return (
		<nav className='flex flex-row justify-between items-center h-24'>
				<div className="flex flex-row justify-start">
					<Link to='/'><div>Issac</div></Link>
				</div>
				<div className="flex flex-row justify-start w-1/2 text-sm">
					<Link to='/'><div className='mr-5'>About</div></Link>
					<Link to='/projects'><div className='mr-5'>Projects</div></Link>
					<a href={resume} target='_blank'><div>Resume</div></a>
				</div>
				<div className='flex flex-row justify-end'>
					<a href='https://github.com/iscii' target="_blank" rel="noopener noreferrer"><FaGithub size={35}/></a>
					<a href='https://www.linkedin.com/in/issacz/' target="_blank" rel="noopener noreferrer"><FaLinkedin className="ml-5" size={35}/></a>
				</div>
		</nav>
	);
};

export default Nav;