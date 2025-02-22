import React from 'react'
import './projects.css'

import ProjectCard from '../../components/projectCard/projectCard'

const Projects = () => {

  const projectsArray = [
    {
      id: "01",
      title: "My Portfolio",
      subtitle: "Personal Portfolio Website",
      description: "This is my personal portfolio website. I have built this website to showcase my skills and projects.",
      audience: 500,
      techStack: ["Next.js", "Tailwind CSS", "Vercel"],
      githubLink: "https://github.com/yourusername/your-repo",
      liveLink: "https://www.saitadikonda.in",
      imageSrc: "/portfolio.png"
    },
    {
      id: "02",
      title: "My Portfolio",
      subtitle: "Personal Portfolio Website",
      description: "This is my personal portfolio website. I have built this website to showcase my skills and projects.",
      audience: 500,
      techStack: ["Next.js", "Tailwind CSS", "Vercel"],
      githubLink: "https://github.com/yourusername/your-repo",
      liveLink: "https://www.saitadikonda.in",
      imageSrc: "/portfolio.png"
    },
    {
      id: "03",
      title: "My Portfolio",
      subtitle: "Personal Portfolio Website",
      description: "This is my personal portfolio website. I have built this website to showcase my skills and projects.",
      audience: 500,
      techStack: ["Next.js", "Tailwind CSS", "Vercel"],
      githubLink: "https://github.com/yourusername/your-repo",
      liveLink: "https://www.saitadikonda.in",
      imageSrc: "/portfolio.png"
    },
    {
      id: "04",
      title: "My Portfolio",
      subtitle: "Personal Portfolio Website",
      description: "This is my personal portfolio website. I have built this website to showcase my skills and projects.",
      audience: 500,
      techStack: ["Next.js", "Tailwind CSS", "Vercel"],
      githubLink: "https://github.com/yourusername/your-repo",
      liveLink: "https://www.saitadikonda.in",
      imageSrc: "/portfolio.png"
    }
  ];

  return (  
        <div className="ProjectsComponent">
            <div className="ProjectsComponent-in">
                <div className="projects-one">
                    <p>FEATURED PROJECTS</p>
                    <h1>What I&apos;ve Built</h1>
                </div>
                <div className="projects-two">
                    {projectsArray.map((project) => (
                    <ProjectCard 
                        key={project.id}  
                        id={project.id}
                        title={project.title}
                        subtitle={project.subtitle}
                        description={project.description}
                        audience={project.audience}
                        techStack={project.techStack}
                        githubLink={project.githubLink}
                        liveLink={project.liveLink}
                        imageSrc={project.imageSrc}
                    />
                    ))}
                </div>
            </div>
        </div>
  )
}

export default Projects
