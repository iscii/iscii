import { Link } from "react-router-dom";

function SubTab(props) {
    const {col, link, target} = props;
    return (
        <div className={`col-start-${col} flex justify-center items-end border-t-2`}><Link to={link} target={target}>{props.children}</Link></div>
    );
}

export default SubTab;