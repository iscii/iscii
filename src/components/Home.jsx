import { useState, useEffect } from 'react';
import Bio from './Bio';
import Featured from './Featured';
import Resume from './Resume';

function Home() {
	const [bioOpacity, setBioOpacity] = useState(100);

	const handleScroll = () => {
		const scrollPos = window.scrollY;
		const maxScrollPos = document.querySelector('#bio').offsetHeight;
		const ratio = 1 - (scrollPos / maxScrollPos);
		setBioOpacity(ratio);
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
			<div id="bio" className="sticky top-24 pt-12 z-0" style={{ opacity: bioOpacity }}>
				<Bio />
			</div>
			<div className='relative z-10'>
				<Featured />
			</div>
			<div className='relative pt-12 z-10'>
				<Resume />
			</div>
		</>
	);
};

export default Home;
