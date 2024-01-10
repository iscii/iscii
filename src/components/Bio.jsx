import picture from '../assets/images/alex.webp';

function Bio(props) {
    const { bioOpacity } = props;

	return (
		<div id="about" className='sticky top-24 pt-12 px-24 z-0 flex flex-row justify-between' style={{ opacity: bioOpacity }}>
            <div className='w-8/12'>
                Bello :D This a placeholder for an intro/description of myself. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
			<img src={picture} width={400} height={400} />
		</div>
	);
};

export default Bio;
