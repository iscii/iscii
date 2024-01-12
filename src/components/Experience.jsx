import { Document, Page } from 'react-pdf'
import Header from './subcomponents/Header'
import resume from '../assets/resume.pdf';

function Experience(props) {
    const {bioHidden} = props;
    // might remove this 
	return (
        <div className='px-24'>
            <Header opaque={bioHidden}>Experience</Header>
            <div id="experience" className='scroll-mt-48'>
                <Document file={resume}>
                    <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} width={980}/>
                </Document>        
            </div>
        </div>
	);
};

export default Experience;
