import { Link } from "react-router-dom";

function Main(){
    return(
        <>
            <ul>
                <li><Link to="/todo-list">todo list</Link></li>
                <li><Link to="/coin-tracker">coin tracker</Link></li>
                <li><Link to="/movie">movie app</Link></li>
            </ul>
        </>
    )
};

export default Main;