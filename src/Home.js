import {Link} from "react-router-dom";
import React from "react";

function Home() {
    return <div>
        <ul>
            <li><Link to="/coinTracker">coinTracker</Link></li>
            <li><Link to="/todo">todo</Link></li>
            <li><Link to="/movie">movie</Link></li>
        </ul>
    </div>
}

export default Home;