import React from "react";

// Router
import { Navigate, Routes, Route } from "react-router-dom";

import HeaderFunction from "./components/HeaderFunction"
import MainFunction from "./components/MainFunction"
import FooterFunction from "./components/FooterFunction"

export default function RouterBlog() {
    return (
        <React.Fragment>
            <HeaderFunction name="Örnek props"></HeaderFunction>
            
            <div className="container">
                <Routes>
                    <Route path={"/"} elementName={<MainFunction/>}></Route>;
                    <Route path={"/index"} elementName={<MainFunction/>}></Route>;
                    <Route path={"*"} elementName={<Navigate to={"/"}/>}></Route>;
                </Routes>
            </div>
            <MainFunction></MainFunction>
            <FooterFunction></FooterFunction>
        </React.Fragment>
    )
}