import React from 'react'
import Link from 'next/link'

import './page.css'

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const page = () => {
  return (
        <div className="ContactComponent" id="contact">
            <div className="ContactComponent-in">
                <div className="contact-one">
                    <h1>Contact</h1>
                </div>
                <div className="contact-two">
                    <div className="contact-two-one">
                        <Link href="mailto:saitadikonda.cse@gmail.com"> <IoMdMail /> Send Email</Link>
                    </div>
                    <div className="contact-two-two">
                        <Link href="https://www.linkedin.com/in/tadikondasaimanikanta/" target='_blank' aria-label="LinkedIn Profile"><FaLinkedin /></Link>
                        <Link href="https://github.com/saitadikonda99" target='_blank' aria-label="GitHub Profile"><FaGithub /></Link>
                        <Link href="https://www.instagram.com/_sai.you/" target='_blank' aria-label="Instagram Profile"><FaInstagram /></Link>
                        <Link href="https://x.com/sai_tadikonda_" target='_blank' aria-label="Twitter Profile"><FaXTwitter /></Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default page