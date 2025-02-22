import React from 'react';
import './page.css'

import Navbar from "./components/navbar/navbar";
import Profile from  './ui/profile/Profile'
import Skills from './ui/skills/skills'
import Projects from './ui/projects/projects'

export default function Page() {
  return (
        <div className="HomeComponent">
            <div className="HomeComponent-in">
                <Navbar />  
                <Profile />
                <Skills />
                <Projects />
            </div>
        </div>
  );
}
