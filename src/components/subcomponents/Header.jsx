function Header(props) {
    const {opaque} = props;

	return (
        // see if this can be done with normal css (make a replacement class)
        <h1 className={`py-10 sticky top-20 z-20 text-xl ${opaque ? 'relative z-10 bg-white' : 'header-fade'}`}> 
            {props.children}
        </h1>
	);
};

export default Header;
