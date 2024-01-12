import { Document, Page } from 'react-pdf'
import Header from './subcomponents/Header'
import resume from '../assets/resume.pdf';
import HeadedContent from './subcomponents/HeadedContent';

function Skills(props) {
    const {bioHidden} = props;
    // might remove this 
	return (
        <div className='px-24'>
            <Header opaque={bioHidden}>Skills</Header>
            <HeadedContent id='skills'>
                {/* make this prettier with icons n colors pls */}
                <div className='mb-2'>
                    <h2>Languages</h2>
                    JavaScript, Python, Ruby, Java, C/C++, C#, Bash, OCaml, SQL, TypeScript, CoffeeScript
                </div>
                <div className='mb-2'>
                    <h2>Frameworks</h2>
                    React, Next, Svelte, Ruby on Rails, Mocha, Backbone, Express, Tailwind, Bootstrap, Sass
                </div>
                <div>
                    <h2>Other</h2>
                    Git, Unix, HTML/CSS, MongoDB, Postgres, Postman, AWS, Atlassian, Node, Axios,
                    Selenium, Playwright, Chai, Joi, Handlebars
                </div>
            </HeadedContent>
        </div>
	);
};

export default Skills;
