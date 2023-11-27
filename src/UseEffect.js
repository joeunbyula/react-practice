import styled from "./UseEffect.module.css";
import {useEffect, useState} from "react";


function UseEffect() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    console.log("i run all the time");

    /**
     * useEffect : code가 한번만 실행될 수 있도록 도와준다.
     */
    useEffect(() => {
        console.log("I run only once.");
    }, []);

    /**
     * keyword,counter가 변할 때 실행
     */
    useEffect(()=>{
        console.log("I run when 'keyword' changes. ==> ", keyword);
    },[keyword]);

    useEffect(() => {
        console.log("I run when 'counter' changes ==> ", counter);
    }, [counter]);
    useEffect(() => {
        console.log("I run when 'counter' and 'keyword' changes ==> ", counter);
    },[keyword, counter])

    return (
        <div>
            <input value={keyword} type="text" onChange={onChange} placeholder="Search here..."/>
            <h1 className={styled.title}>Welcome {counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    );
}

export default UseEffect;