import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import resume from '../assets/resume.pdf';
import NavTab from './subcomponents/NavTab';

function Nav() {
	return (
		<nav className='sticky top-0 px-24 z-40 flex flex-row justify-between items-center h-24 bg-white'>
			<div className="flex flex-row justify-start">
				<Link to='/#about'><div>Issac</div></Link>
			</div>
			<div className="grid grid-rows-3 w-1/2 h-full text-sm">
				<div className='grid row-start-2 row-span-1 grid-cols-6'>
					<div className='col-start-1 col-span-1 flex justify-center items-center relative'>
						<div className='before:absolute before:-bottom-[0.3rem] before:left-[45%] before:w-2 before:h-2 before:rotate-45 before:bg-white before:dark:bg-slate-800 after:absolute after:-bottom-[0.3rem] after:left-[45%] after:w-2 after:h-2 after:rotate-45 after:border-b-2 after:border-r-2'>
							<Link to='/#about' className=''>About</Link>
						</div>
					</div>
					<div className='col-start-2 col-span-1 flex justify-center items-center relative'><Link to='/projects'>Projects</Link></div>
					<div className='col-start-3 col-span-1 flex justify-center items-center relative'><a href={resume} target='_blank'>Resume</a></div>
				</div>
				<div className='grid row-start-3 row-span-1 grid-cols-6'>
					<div className='col-start-1 flex justify-center items-center border-t-2'><Link to='/#featured'>Featured</Link></div>
					<div className='col-start-2 flex justify-center items-center border-t-2'><Link to='/#experience'>Experience</Link></div>
				</div>
				{/* <div className='grid row-start-3 row-span-1 grid-cols-6'>
					<div className='col-start-1 flex justify-center items-center border-t-2'><Link to='/#websites'>Websites</Link></div>
					<div className='col-start-2 flex justify-center items-center border-t-2'><Link to='/#games'>Games</Link></div>
					<div className='col-start-3 flex justify-center items-center border-t-2'><Link to='/#programs'>Programs</Link></div>
					<div className='col-start-4 flex justify-center items-center border-t-2'><Link to='/#webgames'>Web Games</Link></div>
				</div> */}
			</div>
			<div className='flex flex-row justify-end'>
				<a href='https://github.com/iscii' target="_blank" rel="noopener noreferrer"><FaGithub size={35}/></a>
				<a href='https://www.linkedin.com/in/issacz/' target="_blank" rel="noopener noreferrer"><FaLinkedin className="ml-5" size={35}/></a>
			</div>
		</nav>
	);
};

export default Nav;
