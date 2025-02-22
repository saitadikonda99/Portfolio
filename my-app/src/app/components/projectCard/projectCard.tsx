import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import './projectCard.css';

import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";


interface ProjectCardProps {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    audience: number;
    techStack: string[];
    githubLink: string;
    liveLink: string;
    imageSrc: string;
}


const ProjectCard = ({id, title, subtitle, description, audience, techStack, githubLink, liveLink, imageSrc}: ProjectCardProps) => {


    return (
        <div className="project-card">
            <div className="project-card-in">
                <div className="project-card-one">
                    <h1>{id}</h1>
                </div>
                <div className="project-card-two">
                    <div className="project-card-two-in">
                        <div className="project-tab-one">
                            <div className="project-tab-one-one">
                                <div className="project-close"></div>
                                <div className="project-minimize"></div>
                                <div className="project-maximize"></div>
                            </div>
                            <div className="project-tab-one-two">
                                <p>{liveLink}</p>
                            </div>
                        </div>
                        <div className="project-tab-two">
                            <Image 
                                src={imageSrc}
                                alt={title}
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="project-tab-three">
                            <p>{subtitle}</p>
                            <h1>{title}</h1>
                        </div>
                        <div className="project-tab-four">
                            <p>{description}</p>
                        </div>
                        <div className="project-tab-five">
                            <div className="project-tab-five-in">
                                <p>audience reached</p>
                                <h1>{audience}+</h1>
                            </div>
                        </div>

                        <div className="project-tab-six">
                            <div className="project-tab-six-in">
                                {techStack.map((tech, index) => (
                                    <div key={index} className="tech-stack">
                                        <p>{tech}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="project-tab-seven">
                            <div className="project-tab-seven-in">
                                <Link href={githubLink}> <FaGithub /> Github</Link>
                                <Link href={liveLink}> <TbWorld /> Live</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;