import React from "react";
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Todo from "./todolist/Todo";
import CoinTracker from "./coinTracker/CoinTracker";
import Movies from "./movieApp/routes/Movies";
import Detail from "./movieApp/routes/Detail";
import Home from "./Home";

function AppRoutes() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path={'/' } element={<Home/>}/>
                <Route path={'/todo'}  element={<Todo/>}/>
                <Route path={'/coinTracker'} element={<CoinTracker/>}/>
                <Route path={'/movie'} element={<Movies/>}/>
                <Route path={'/movie/detail/:id'} element={<Detail/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
