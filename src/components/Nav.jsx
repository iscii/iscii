import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import resume from '../assets/resume.pdf';
import NavTab from './subcomponents/NavTab';
import SubTab from './subcomponents/SubTab';

function Nav() {
	const location = useLocation();
	const [openTab, setOpenTab] = useState(1);
	const tabMap = useRef({'/': 1, 'projects': 2});
	
	useEffect(() => {
		setOpenTab(tabMap.current[location.pathname == '/' ? location.pathname : location.pathname.split('/')[1]]);
	}, [location.pathname]);

	return (
		<nav className='sticky z-40 flex flex-row bg-white md:top-0 md:justify-between md:items-center md:h-24'>
			<div className="flex flex-row justify-start">
				<Link to='/'><div>Issac</div></Link>
			</div>
			<div className="grid grid-rows-3 w-1/2 h-full text-sm">
				<div className='grid row-start-2 row-span-1 grid-cols-6'>
					<NavTab col={1} link='/' openTabState={[openTab, setOpenTab]}>Home</NavTab>
					<NavTab col={2} link='/projects' openTabState={[openTab, setOpenTab]}>Projects</NavTab>
					<NavTab col={3} link={resume} target='_blank'>Resume</NavTab>
				</div>
				{   openTab == 1 &&
					<div className='grid row-start-3 row-span-1 grid-cols-6'>
						<SubTab col={1} link='/#about'>About</SubTab>
						<SubTab col={2} link='/#featured'>Featured</SubTab>
						{/* <SubTab col={3} link='/#skills'>Skills</SubTab> */}
					</div>
				}
				{	openTab == 2 &&
					<div className='grid row-start-3 row-span-1 grid-cols-6'>
						<SubTab col={1} link='/projects/#websites'>Websites</SubTab>
						<SubTab col={2} link='/projects/#games'>Games</SubTab>
						<SubTab col={3} link='/projects/#programs'>Programs</SubTab>
						<SubTab col={4} link='/projects/#webgames'>Web Games</SubTab>
					</div>
				}
			</div>
			<div className='flex flex-row justify-end'>
				<a href='https://github.com/iscii' target="_blank" rel="noopener noreferrer"><FaGithub size={35}/></a>
				<a href='https://www.linkedin.com/in/issacz/' target="_blank" rel="noopener noreferrer"><FaLinkedin className="ml-5" size={35}/></a>
			</div>
		</nav>
	);
};

export default Nav;
