
function HeadedContent(props) {
    const {id, children} = props;

	return (
        <div id={id} className='relative bg-white scroll-mt-48'>
            {children}
        </div>
	);
};

export default HeadedContent;
