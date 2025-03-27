import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import "../Styles/ThemeSwitcher.css"; 

const ThemeSwitcher = ({ type }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`theme-switcher ${type}-theme`}>
            <FaSun 
                className={`theme-icon ${theme === "light" ? "active" : ""}`} 
                onClick={() => toggleTheme("light")} 
            />
            <FaMoon 
                className={`theme-icon ${theme === "dark" ? "active" : ""}`} 
                onClick={() => toggleTheme("dark")} 
            />
        </div>
    );
};

export default ThemeSwitcher;
