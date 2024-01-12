import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import resume from '../assets/resume.pdf';

function Nav() {
	return (
		<nav className='sticky top-0 px-24 z-40 flex flex-row justify-between items-center h-24 bg-white'>
			<div className="flex flex-row justify-start">
				<Link to='/#about'><div>Issac</div></Link>
			</div>
			<div className="grid grid-rows-3 w-1/2 h-full text-sm">
				<div className='grid row-start-2 row-span-1 grid-cols-6'>
					<div className='col-start-1 col-span-1 flex justify-center items-center relative'>
						<div className='before:absolute before:-bottom-[0.2rem] before:left-[42%] before:bg-white before:dark:bg-slate-800 before:w-[0.9rem] before:h-1 after:absolute after:-bottom-[0.45rem] after:left-[45%] after:w-3 after:h-3 after:rotate-45 after:border-b-2 after:border-r-2'>
							<Link to='/#about' className=''>About</Link></div>
						</div>
					<div className='col-start-2 col-span-1 flex justify-center items-center relative'><Link to='/projects'>Projects</Link></div>
					<div className='col-start-3 col-span-1 flex justify-center items-center relative'><a href={resume} target='_blank'>Resume</a></div>
				</div>
				<div className='grid row-start-3 row-span-1 grid-cols-6'>
					<div className='col-start-1 flex justify-center items-center border-t-2'><Link to='/#featured'>Featured</Link></div>
					<div className='col-start-2 flex justify-center items-center border-t-2'><Link to='/#experience'>Experience</Link></div>
				</div>
			</div>
			<div className='flex flex-row justify-end'>
				<a href='https://github.com/iscii' target="_blank" rel="noopener noreferrer"><FaGithub size={35}/></a>
				<a href='https://www.linkedin.com/in/issacz/' target="_blank" rel="noopener noreferrer"><FaLinkedin className="ml-5" size={35}/></a>
			</div>
		</nav>
	);
};

export default Nav;
