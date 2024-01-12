import { Document, Page } from 'react-pdf'
import Header from './subcomponents/Header'
import resume from '../assets/resume.pdf';
import HeadedContent from './subcomponents/HeadedContent';

function Experience(props) {
    const {bioHidden} = props;
    // might remove this 
	return (
        <div className='px-24'>
            <Header opaque={bioHidden}>Experience</Header>
            <HeadedContent id='experience'>
                <Document file={resume}>
                    <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} width={980}/>
                </Document>        
            </HeadedContent>
        </div>
	);
};

export default Experience;
