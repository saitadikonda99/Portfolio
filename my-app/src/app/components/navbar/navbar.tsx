"use client";
import React, { useState, useEffect } from "react";
import "./navbar.css";

// Icons
import { RiHome6Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { LuCodeXml } from "react-icons/lu";
import { BsPersonLinesFill, BsFillMoonStarsFill } from "react-icons/bs";
import { LuNotebook } from "react-icons/lu";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [mounted, setMounted] = useState(false);  

    useEffect(() => {
        const savedTheme =
            (localStorage.getItem("theme") as "light" | "dark") ||
            (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        
        setTheme(savedTheme as "light" | "dark");
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Adjust this value to account for the navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    // Avoid rendering the component before mounting to prevent SSR mismatch
    if (!mounted) return null;

    return (
        <div className="NavbarComponent">
            <div className="NavbarComponent-in">
                <div className="Navbar-one">
                    <div 
                        className="NavbarComponent-item" 
                        data-tooltip="Home"
                        onClick={() => scrollToSection("profile")}
                    >
                        <RiHome6Fill />
                    </div>
                    <div 
                        className="NavbarComponent-item" 
                        data-tooltip="About"
                        onClick={() => scrollToSection("about")}
                    >
                        <CgProfile />
                    </div>
                    <div 
                        className="NavbarComponent-item" 
                        data-tooltip="Projects"
                        onClick={() => scrollToSection("projects")}
                    >
                        <LuCodeXml />
                    </div>
                    <div 
                        className="NavbarComponent-item" 
                        data-tooltip="Connect"
                        onClick={() => scrollToSection("contact")}
                    >
                        <BsPersonLinesFill />
                    </div>
                    <div 
                        className="NavbarComponent-item" 
                        data-tooltip="Blog"
                    >
                        <LuNotebook />
                    </div>
                    <div
                        className="NavbarComponent-item"
                        data-tooltip={theme === "light" ? "Dark Mode" : "Light Mode"}
                        onClick={toggleTheme}
                    >
                        {theme === "light" ? <MdOutlineLightMode /> : <BsFillMoonStarsFill />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;