import { Document, Page } from 'react-pdf'
import resume from '../assets/resume.pdf';

function Resume() {

	return (
        <div className=''>
            Resume
            <Document file={resume} className='w-full'>
                <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} height={1920}/>
            </Document>        
        </div>
	);
};

export default Resume;
