import React from 'react'
import Link from 'next/link'

import './profile.css'


import { MdArrowOutward } from "react-icons/md";


const home = () => {
  return (
        <div className="ProfileComponent">
            <div className="ProfileComponent-in">
               
                <div className="profile-one">
                    <h1>Hey, I'm Sai Manikanta Tadikonda!</h1>
                </div>

                <div className="profile-two">
                    <h1>I'm a <span>Full Stack Developer</span> &</h1>
                </div>

                <div className="profile-three">
                    <div className="profile-three-one">
                        <h1>DevOps Engineer</h1>
                    </div>
                    <div className="profile-three-two">
                        <div className="dot"></div>
                        <p>Open to work</p>
                    </div>
                </div>

                <div className="profile-four">

                    <div className="profile-four-one">
                        <Link href='https://drive.google.com/file/d/1zSShqN2zO4RZLFyCLaQG3BeOfjSv8HEM/view?usp=sharing' target='_blank'>Resume</Link>    
                    </div>
                    
                    <div className="profile-four-two">
                        <p>Feel free to explore my portfolio and react out.</p>
                        <p>- I'd love to connect!</p>
                    </div>

                </div>

                <div className="profile-five">
                    <Link href='/'>Send a mail to hire me?</Link>
                    <MdArrowOutward />
                </div>

            </div>
        </div>
  )
}

export default home