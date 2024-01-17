import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import resume from '../assets/resume.pdf';
import NavTab from './subcomponents/NavTab';
import SubTab from './subcomponents/SubTab';
import Hamburger from "hamburger-react";

function Nav() {
	const location = useLocation();
	const [openTab, setOpenTab] = useState(1);
	const [openMenu, setOpenMenu] = useState(false);
	const tabMap = useRef({'/': 1, 'projects': 2});
	
	useEffect(() => {
		setOpenTab(tabMap.current[location.pathname == '/' ? location.pathname : location.pathname.split('/')[1]]);
	}, [location.pathname]);

	// prevent scrolling when nav is open
	useEffect(() => {
		document.body.style.overflowY = openMenu ? 'hidden' : 'scroll';
	}, [openMenu]);

	return (
		<>
			<div className='md:hidden duration-200 transition-opacity ease-in-out w-svw h-svh fixed bg-white z-30 -ml-6' style={{visibility: openMenu ? 'visible' : 'hidden', opacity: openMenu ? '.5' : '0'}} onClick={() => setOpenMenu(!openMenu)}></div>
			<div className='md:hidden fixed top-2 right-4 z-50'>
				<Hamburger toggled={openMenu} toggle={setOpenMenu}/>
			</div>
			<nav className={`${!openMenu ? 'translate-x-full md:translate-x-0' : ''} duration-200 z-40 bg-white top-0 right-0 w-3/4 h-svh flex flex-col justify-evenly fixed md:sticky p-12 text-4xl md:p-0 md:flex-row md:justify-between md:items-center md:h-24 md:w-full`}>
				<div className="hidden md:flex md:flex-row md:justify-start">
					<Link to='/'><div>Issac</div></Link>
				</div>
				<div className="flex flex-col justify-center items-center md:justify-start h-full w-full md:w-7/12 md:grid md:grid-rows-3 md:h-full md:text-sm">
					<div className='flex flex-col justify-evenly md:justify-start items-center h-1/2 md:h-full w-full md:grid md:row-start-2 md:row-span-1 md:grid-cols-6'>
						<NavTab col={1} link='/' openTabState={[openTab, setOpenTab]} openMenuState={[openMenu, setOpenMenu]}>Home</NavTab>
						<NavTab col={2} link='/projects' openTabState={[openTab, setOpenTab]} openMenuState={[openMenu, setOpenMenu]}>Projects</NavTab>
						<NavTab col={3} link={resume} target='_blank'>Resume</NavTab>
					</div>
					<div className='hidden md:grid md:row-start-3 md:row-span-1 md:grid-cols-6 md:h-full'>
					{/* IDEA: similar to novalauncher, make side scrollable nav for subtabs */}
					{   openTab == 1 &&
						<>
							<SubTab col={1} link='/#about'>About</SubTab>
							<SubTab col={2} link='/#featured'>Featured</SubTab>
							{/* <SubTab col={3} link='/#skills'>Skills</SubTab> */}
						</>
					}
					{	openTab == 2 &&
						<>
							<SubTab col={1} link='/projects/#websites'>Websites</SubTab>
							<SubTab col={2} link='/projects/#games'>Games</SubTab>
							<SubTab col={3} link='/projects/#programs'>Programs</SubTab>
							<SubTab col={4} link='/projects/#webgames'>Web Games</SubTab>
						</>
					}
					</div>
				</div>
				<div className='relative bottom-0 flex flex-row justify-center md:justify-end'>
					<a href='https://github.com/iscii' target="_blank" rel="noopener noreferrer"><FaGithub size={35}/></a>
					<a href='https://www.linkedin.com/in/issacz/' target="_blank" rel="noopener noreferrer"><FaLinkedin className="ml-5" size={35}/></a>
				</div>
			</nav>
		</>
	);
};

export default Nav;
