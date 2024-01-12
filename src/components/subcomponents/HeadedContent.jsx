
function HeadedContent(props) {
    const {id, children} = props;

	return (
        <div id={id} className='scroll-mt-48'>
            {children}
        </div>
	);
};

export default HeadedContent;
