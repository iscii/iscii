import Bio from './Bio';
import Preview from './Featured';

function Home() {
	return (
		// https://www.oakharborwebdesigns.com -> dark mode
        // https://m7mad.dev -> single-page scrolling style
        // we can do scroll style, but still have a separate page for ALL projects. 
        // use right/left empty spaces for forward and back?
		// add a scrolly thingy so that scrolling down from the Bio doesn't move Bio, just moves everything below it up as a page, which then covers the Bio. (not in m7mad)
		// https://dev.to/erikkarlsson/how-to-add-a-preview-of-your-react-or-any-other-site-when-sharing-it-2fhf -> set meta tags for our site when previewed on other sites
		// TODO: currently working on getting project card to display the json data
		<>
			<div className='mt-12'>
				<Bio />
			</div>
			<div className='mt-12'>
				<Preview />
			</div>
		</>
	);
};

export default Home;
