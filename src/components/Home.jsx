import { useState, useEffect, useContext } from 'react';
import Bio from './Bio';
import Featured from './Featured';
// import Skills from './Skills';

function Home() {
	const [bioOpacity, setBioOpacity] = useState(100);
	const [bioHidden, setBioHidden] = useState(false);

	const handleScroll = () => {
		const scrollPos = window.scrollY;
		const maxScrollPos = document.querySelector('#about').offsetHeight;
		const ratio = 1 - (scrollPos / maxScrollPos);
		if(ratio >= 0) {
			setBioOpacity(ratio < 0.15 ? 0 : ratio);
			setBioHidden(ratio < 0.15)
		}
	};
	
	useEffect(() => {
		window.scrollTo({ top: 0});
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<Bio bioOpacity={bioOpacity} />
			<Featured bioHidden={bioHidden} />
			{/* <Skills bioHidden={bioHidden}/> */}
		</>
	);
};

export default Home;
