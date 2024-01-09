import React, { useState } from 'react';
export const StyleContext = React.createContext();

export const StyleProvider = ({children}) => {
    const [bioHidden, setBioHidden] = useState(false);
    // z-0 bio, z-10 scrollable content, z-20 headers, z-40 nav
	return (
		<StyleContext.Provider value={{bioHidden, setBioHidden}}>
			{children}
		</StyleContext.Provider>
	);
};
