import { useState, useEffect, useContext } from 'react';
import Bio from './Bio';
import Featured from './Featured';
// import Skills from './Skills';

function Home() {
	const [bioOpacity, setBioOpacity] = useState(100);

	const handleScroll = () => {
		const scrollPos = window.scrollY;
		const maxScrollPos = document.querySelector('#about').offsetHeight;
		const ratio = 1 - (scrollPos / maxScrollPos);
		setBioOpacity(ratio < 0.15 ? 0 : ratio); // setState only triggers rerenders when the value changes 
	};
	
	useEffect(() => {
		window.scrollTo({ top: 0});
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<Bio bioOpacity={bioOpacity} />
			<Featured bioHidden={bioOpacity == 0} />
			{/* <Skills bioHidden={bioHidden}/> */}
		</>
	);
};

export default Home;
