import { Link } from "react-router-dom";

function NavTab(props) {
    const {col, link, text} = props;
    return (
        <div className={`col-start-${col} col-span-1 flex justify-center items-center relative`}>
            <div className='before:absolute before:-bottom-[0.3rem] before:left-[45%] before:w-2 before:h-2 before:rotate-45 before:bg-white before:dark:bg-slate-800 after:absolute after:-bottom-[0.3rem] after:left-[45%] after:w-2 after:h-2 after:rotate-45 after:border-b-2 after:border-r-2'>
                <Link to={link} className=''>{text}</Link>
            </div>
        </div>
    );
}

export default NavTab;