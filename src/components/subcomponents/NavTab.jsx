import { Link } from "react-router-dom";

function NavTab(props) {
    const {col, link, openTabState, openMenuState, target} = props;
    const [openTab, setOpenTab] = openTabState || [null, null];
    const [setOpenMenu] = openMenuState || [null];
    return (
        <div className={`col-start-${col} col-span-1 flex justify-end md:justify-center items-center relative h-full w-[100px]`}>
            <div className={(openTab == col) ? 'md:before:absolute md:before:-bottom-[0.275rem] md:before:left-[45%] md:before:w-2 md:before:h-2 md:before:rotate-45 before:bg-white before:dark:bg-slate-800 after:absolute after:-bottom-[0.275rem] after:left-[45%] after:w-2 after:h-2 after:rotate-45 after:border-t-2 after:border-l-2' : ''}>
                <Link to={link} target={target} onClick={() => {if (openTab) setOpenTab(col); setOpenMenu(false)}}>{props.children}</Link>
            </div>
        </div>
    );
}

export default NavTab;