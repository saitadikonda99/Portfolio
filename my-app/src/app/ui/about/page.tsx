import React from 'react'
import Link from 'next/link'

import './page.css'

const page = () => {
  return (
        <div className="AboutComponent" id="about">
            <div className="AboutComponent-in">
                <div className="about-one">
                    <h1>About</h1>
                </div>
                <div className="About-two">
                    <p>Hello, World! I am Tadikonda Sai Manikanta, a Full-Stack Developer passionate about crafting high-performance, scalable web applications. With a strong foundation in Next.js, React, Node.js, and Spring Boot, I thrive on building seamless user experiences and optimizing system performance.</p>  
                    <p>With two years of front-end experience and expertise in backend development, I have worked on multiple projects, I also enjoy teaching and mentoring, having instructed over 5000 students in JavaScript, React, and web development.</p>  
                    <p>One of my notable projects, the <Link href="https://sac.kluniversity.in">Student Activity Center</Link> (SAC) website, streamlines club management for educational institutions. I am currently seeking internship and full-time software roles where I can contribute my skills and grow as a developer.</p>  
                    <p>Let&apos;s connect and collaborate!</p>
                </div>
            </div>
        </div>
  )
}

export default page