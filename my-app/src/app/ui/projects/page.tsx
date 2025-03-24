import React from 'react'
import Link from 'next/link'

import './page.css'

import { RiExternalLinkLine } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

// Define the project type
interface Project {
    title: string;
    description: string;
    techStack: string[];
    liveLink: string;
    sourceLink: string;
}

// Projects data array
const projects: Project[] = [
    {
        title: "sac.kluniversity.in",
        description: "Student Activity Center Website, K L Deemed to be University",
        techStack: ["Next.js", "CSS", "TypeScript", "MySQL", "Docker", "Redis", "NGINX"],
        liveLink: "https://sac.kluniversity.in",
        sourceLink: "https://github.com/saitadikonda99/Kepler-452b"
    },
    {
        title: "AgroDrones Tech (Freelance Project)",
        description: "Agricultural Drone Sales and Services Website",
        techStack: ["Next.js", "TypeScript", "MongoDB", "Vercel"],
        liveLink: "https://agrodroness.vercel.app/",
        sourceLink: "https://github.com/saitadikonda99/Agrodronestech"
    },
    {
        title: "Open Query – AI-Powered SQL Query Generator",
        description: "AI-Powered SQL Query Generator",
        techStack: ["Next.js", "TypeScript", "Gemini API", "MongoDB", "Vercel"],
        liveLink: "https://openqueryai.vercel.app",
        sourceLink: "https://github.com/saitadikonda99/AI-Powered-SQL-Query-Generator"
    },
    {
        title: "Personal Portfolio",
        description: "My Personal Portfolio",
        techStack: ["Next.js", "TypeScript",],
        liveLink: "https://github.com/saitadikonda99/Portfolio",
        sourceLink: "https://www.saitadikonda.in"
    }

];

const page = () => {
    return (
        <div className="ProjectsComponent" id="projects">
            <div className="ProjectsComponent-in">
                <div className="projects-one">
                    <h1>Projects</h1>
                </div>
                {projects.map((project, index) => (
                    <div className="Project-Card" key={index}>
                        <div className="Project-Card-in">
                            <div className="project-card-one">
                                <Link href={project.liveLink} target='_blank'>
                                    {project.title} <RiExternalLinkLine />
                                </Link>
                            </div>
                            <div className="project-card-two">
                                <p>{project.description}</p>
                            </div>
                            <div className="project-card-three">
                                {project.techStack.map((tech, techIndex) => (
                                    <div className="Project-stack" key={techIndex}>
                                        <p>{tech}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="project-card-four">
                                <Link href={project.liveLink} target='_blank'><CiGlobe /> Live</Link>
                                <Link href={project.sourceLink} target='_blank'><FaGithub />Source</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page