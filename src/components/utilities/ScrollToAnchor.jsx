import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToAnchor() {
	const location = useLocation();
	const lastHash = useRef('');

	// listen to location change using useEffect with location as dependency
	// https://dev.to/mindactuate/scroll-to-anchor-element-with-react-router-v6-38op
	useEffect(() => {
		if (location.hash) {
		lastHash.current = location.hash.slice(1); // save hash for further use after navigation
		}

		if (lastHash?.current === 'about') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		} else if (lastHash.current && document.getElementById(lastHash.current)) {
			document.getElementById(lastHash.current)
				?.scrollIntoView({ behavior: 'smooth', block: 'start' });
			lastHash.current = '';
		}
	}, [location]);

	return null;
}

export default ScrollToAnchor;