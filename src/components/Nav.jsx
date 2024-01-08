import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Nav() {
	return (
		<nav className='flex flex-row justify-between items-center h-24'>
				<div className="flex flex-row justify-start">
					<Link to='/'><div>Issac</div></Link>
				</div>
				<div className="flex flex-row justify-start w-1/2 text-sm">
					<Link to='/projects'><div className='mr-5'>Projects</div></Link>
					<Link to='/'><div>Resume</div></Link>
				</div>
				<div className='flex flex-row justify-end'>
					<Link to='https://github.com/iscii' target="_blank" rel="noopener noreferrer"><FaGithub size={35}/></Link>
					<Link to='https://www.linkedin.com/in/issacz/' target="_blank" rel="noopener noreferrer"><FaLinkedin className="ml-5" size={35}/></Link>
				</div>
		</nav>
	);
};

export default Nav;
