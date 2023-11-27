import {useEffect, useState} from "react";

/**
 * cleanUp function
 */
function Hello() {
    function hihi() {
        console.log("created :)");
    }
    function byebye() {
        console.log("bye :(");
        return byebye;
    }
    useEffect(hihi, []);
    return <h1>Hello!</h1>
}
function Showing() {
    const [showing, setShowing] = useState(false);
    const onClick=()=> setShowing((prev)=>!prev);
    return (
        <div>
            {showing ? <Hello/> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    )
}

export default Showing;