"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import './about.css';

import { IoReader } from 'react-icons/io5';

const socialLinks = [
    {
        id: 1,
        icon: '/Gmail.png',
        link: 'mailto:saitadikonda.dev@gmail.com',
        name: 'Email'
    },
    {
        id: 2,
        icon: '/Github.png',
        link: 'https://github.com/saitadikonda99',
        name: 'GitHub'
    },
    {
        id: 3,
        icon: '/LinkedIn.png',
        link: 'https://www.linkedin.com/in/tadikondasaimanikanta',
        name: 'LinkedIn'
    },
    {
        id: 4,
        icon: '/X.png',
        link: 'https://twitter.com/sai_tadikonda_',
        name: 'X'
    }
];


const about = () => {

    const handleClick = (link: string) => {
        window.open(link, '_blank');
    }

    return (
        <div className="AboutComponent">
            <div className="AboutComponent-in">

                <div className="about-one">
                    <Link href="https://github.com/saitadikonda99" target='_blank'>github.com/saitadikonda99</Link>
                </div>
                <div className="about-two">
                    <h1>Tadikonda Sai Manikanta</h1>
                    <Link href="https://drive.google.com/file/d/1IRfHOZj7YGA5JrFetApWpJoAU_NTsTI1/view" target='_blank'>Resume <IoReader /></Link>
                </div>
                <div className="about-three">
                    <p>CS @KL University ’26 | Open to SDE & DevOps Roles</p>
                </div>
                <div className="about-four">
                    <p>I&apos;m Tadikonda Sai Manikanta, a Full-Stack Developer passionate about crafting high-performance, scalable web applications. With expertise in <span>Next.js</span>, <span>React</span>, and <span>Node.js</span>, I specialize in building seamless digital experiences and optimizing system performance for real-world impact.</p>
                </div>
                <div className="about-five">
                    {socialLinks.map(({ id, icon, link, name }) => (
                        <div className={`about-link ${name.toLowerCase()}`} key={id} onClick={() => handleClick(link)}>
                            <Image
                                src={icon}
                                alt={name}
                                width={24}
                                height={24}
                            />
                            <p>{name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default about