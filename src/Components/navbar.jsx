import React, { useState, useEffect } from "react";
import MobileNavBar from "./MobileNavBar";
import MainNavbar from "./mainNavbar";
import Header from "./Header";

const NavBar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
    }, []);

    return <>{screenWidth < 877 ? <MobileNavBar /> : <><MainNavbar /><Header /></>}</>;
};
export default NavBar;
