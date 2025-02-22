import React from 'react'

import './skills.css'


import { FaJava } from "react-icons/fa";
import { TbLetterC } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGolang } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

const skillIcons = [
    <FaJava className="skill-icon-java" key="java" />,
    <TbLetterC className="skill-icon-c" key="c" />,
    <IoLogoJavascript className="skill-icon-javascript" key="javascript" />,
    <FaGolang className="skill-icon-golang" key="golang" />,
    <SiTypescript className="skill-icon-typescript" key="typescript" />,
    <FaPython className="skill-icon-python" key="python" />,
    <FaHtml5 className="skill-icon-html" key="html" />,
    <FaCss3 className="skill-icon-css" key="css" />,
    <FaReact className="skill-icon-react" key="react" />,
    <TbBrandNextjs className="skill-icon-next" key="next" />,
    <DiNodejs className="skill-icon-node" key="node" />,
    <SiMysql className="skill-icon-mysql" key="mysql" />,
    <FaDocker className="skill-icon-docker" key="docker" />,
    <SiKubernetes className="skill-icon-kubernetes" key="kubernetes" />,
    <FaAws className="skill-icon-aws" key="aws" />,
    <FaGitAlt className="skill-icon-git" key="git" />
];

const Skills = () => {
  return (
        <div className="SkillsComponent">
            <div className="SkillsComponent-in">
                <div className="skills-one">
                    <h1>Skills <span>&</span> Tools</h1>
                </div>
                <div className="skills-two">
                    {skillIcons.map((icon, index) => (
                        <div className="skills-stack" key={index}>
                            {icon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}
export default Skills