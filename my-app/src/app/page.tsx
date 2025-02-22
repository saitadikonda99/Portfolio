import Image from "next/image";

import './page.css'

import Navbar from "./components/navbar/navbar";
import Home from './ui/profile/profile'
import Skills from './ui/skills/skills'
import Projects from './ui/projects/projects'

export default function Page() {
  return (
        <div className="HomeComponent">
            <div className="HomeComponent-in">
                <Navbar />  
                <Home />
                <Skills />
                <Projects />
            </div>
        </div>
  );
}
