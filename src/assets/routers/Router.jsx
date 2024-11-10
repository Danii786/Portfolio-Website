import React from "react";
import { Route, Routes } from "react-router-dom";
import pages from "../routers/export";
const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<pages.Home />} />
                <Route path="/Register" element={<pages.Register />} />
                <Route path="/Contactus" element={<pages.Contactus />} />
                <Route path="/Project" element={<pages.Project />} />
                <Route path="/Aboutme" element={<pages.Aboutme />} />
               
            </Routes>


        </>
    )

}
export default Router;