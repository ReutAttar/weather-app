import React from "react";
import Home from "./pages/Home";
import Favorites from "./pages/favorites/Favorites";
import { Routes, Route } from "react-router-dom";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}
export default RoutesComponent