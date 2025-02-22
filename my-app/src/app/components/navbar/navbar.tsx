"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import './navbar.css'

import { FaGithub } from "react-icons/fa";

const navbar = () => {

    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
    
          if (currentScrollY > 10) {
            setIsScrollingUp(true);
          } else {
            setIsScrollingUp(false);
          }
    
          setLastScrollY(currentScrollY);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

  return (
        <div className={`NavbarComponent ${isScrollingUp ? "scrollingUp" : ""}`}>
            <div className="NavbarComponent-in">
                <div className="navbar-one">
                    <a href="mailto:saitadikonda.cse@gmail.com">saitadikonda.cse@gmail.com</a>
                </div>
                <div className="navbar-two">
                    <Link href="/">Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/skills'>Skills</Link>
                    <Link href='/projects'>Projects</Link>
                    <Link href='/blogs'>Blogs</Link>
                    <Link href="https://github.com/saitadikonda99/" target="_blank" className='nav-github'> <FaGithub /> Github </Link>
                </div>
            </div>
        </div>
  )
}

export default navbar