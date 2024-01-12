import { Link } from "react-router-dom";

function NavTab(props) {
    const {col, link, openTabState, target} = props;
    const [openTab, setOpenTab] = openTabState || [null, null];
    return (
        <div className={`col-start-${col} col-span-1 flex justify-center items-center relative`}>
            <div className={(openTab == col) ? 'before:absolute before:-bottom-[0.3rem] before:left-[45%] before:w-2 before:h-2 before:rotate-45 before:bg-white before:dark:bg-slate-800 after:absolute after:-bottom-[0.3rem] after:left-[45%] after:w-2 after:h-2 after:rotate-45 after:border-b-2 after:border-r-2' : ''}>
                <Link to={link} target={target} onClick={() => {if (openTab) setOpenTab(col)}}>{props.children}</Link>
            </div>
        </div>
    );
}

export default NavTab;