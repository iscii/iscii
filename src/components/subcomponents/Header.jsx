import { useContext } from 'react';
import { StyleContext } from '../../contexts/StyleContext';

function Header(props) {
    const { bioHidden } = useContext(StyleContext);
    
	return (
        <h1 className={`py-10 sticky top-20 z-20 ${bioHidden ? 'relative z-10 bg-white' : 'bg-gradient-to-t from-white to-transparent'}`}>
            {props.children}
        </h1>            
	);
};

export default Header;
