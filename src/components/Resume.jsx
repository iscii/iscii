import { Document, Page } from 'react-pdf'
import Header from './subcomponents/Header'
import resume from '../assets/resume.pdf';

function Resume(props) {
    const {bioHidden} = props;
    // might remove this 
	return (
        <div className='px-24'>
            <Header opaque={bioHidden}>Resume</Header>
            <div id="resume" className='scroll-mt-52'>
                <Document file={resume}>
                    <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} width={980}/>
                </Document>        
            </div>
        </div>
	);
};

export default Resume;
