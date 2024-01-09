import { Document, Page } from 'react-pdf'
import Header from './subcomponents/Header'
import resume from '../assets/resume.pdf';

function Resume() {
    // might remove this 
	return (
        <div>
            <Header>Resume</Header>
            <div id="resume" className='scroll-mt-52'>
                <Document file={resume}>
                    <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} width={1080}/>
                </Document>        
            </div>
        </div>
	);
};

export default Resume;
