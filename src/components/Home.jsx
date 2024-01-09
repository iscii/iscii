import { useState, useEffect, useContext } from 'react';
import { StyleContext } from '../contexts/StyleContext';
import Bio from './Bio';
import Featured from './Featured';
import Resume from './Resume';

function Home() {
	const [bioOpacity, setBioOpacity] = useState(100);
	const {setBioHidden} = useContext(StyleContext);

	const handleScroll = () => {
		const scrollPos = window.scrollY;
		const maxScrollPos = document.querySelector('#about').offsetHeight;
		const ratio = 1 - (scrollPos / maxScrollPos);
		if(ratio >= 0) {
			setBioOpacity(ratio);
			setBioHidden(ratio < 0.15)
		}
	};
	
	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		// neon theme your site up
		// https://www.oakharborwebdesigns.com -> dark mode
        // https://m7mad.dev -> single-page scrolling style
        // we can do scroll style, but still have a separate page for ALL projects. 
        // use right/left empty spaces for forward and back?
		// add a scrolly thingy so that scrolling down from the Bio doesn't move Bio, just moves everything below it up as a page, which then covers the Bio. (not in m7mad)
		// https://dev.to/erikkarlsson/how-to-add-a-preview-of-your-react-or-any-other-site-when-sharing-it-2fhf -> set meta tags for our site when previewed on other sites
		
		<>
			<Bio bioOpacity={bioOpacity}/>
			<Featured />
			<Resume />
		</>
	);
};

export default Home;
