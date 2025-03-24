import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import './page.css'

import { RiExternalLinkLine } from "react-icons/ri";

const page = () => {
  return (
        <div className="ProfileComponent" id="profile">
            <div className="ProfileComponent-in">
                <div className="profile-one">
                    <div className="profile-one-one">
                        <h1>Hey, I&apos;m Sai Tadikonda 👋</h1>
                    </div>
                    <div className="profile-one-two">
                        <p>Third year Computer Science student | Full Stack Developer | DevOps Engineer based in india</p>
                    </div>
                    <div className="profile-one-three">
                        <Link href="https://drive.google.com/file/d/1gvaXNQ3Y7HXNrvJRHnZ6SIBuy0wGYkTk/view" target='_blank'> <RiExternalLinkLine /> Resume </Link>
                    </div>
                </div>
                <div className="profile-two">
                    <Image
                        src="/Me.jpeg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
  )
}

export default page