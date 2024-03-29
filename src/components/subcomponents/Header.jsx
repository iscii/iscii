function Header(props) {
    const {opaque, extraClasses} = props;

	return (
        <h1 className={`py-5 md:py-10 sticky top-0 z-20 text-xl md:top-20 ${opaque ? 'relative z-10 bg-white' : 'header-fade'} ${extraClasses}`}> 
            {props.children}
        </h1>
	);
};

export default Header;
