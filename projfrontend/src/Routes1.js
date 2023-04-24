import React from "react";
import {BrowserRouter,Route, Routes} from 'react-router-dom'

import Home from "./core/Home"

const Routes1 = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" exact Component={Home}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Routes1;