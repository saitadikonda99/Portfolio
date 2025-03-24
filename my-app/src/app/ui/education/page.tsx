import React from 'react'

import './page.css'

import { MdOutlineSchool } from "react-icons/md";

const page = () => {
  return (
        <div className="EducationComponent">
            <div className="EducationComponent-in">
                <div className="education-one">
                    <h1>Education</h1>
                </div>
                <div className="education-two">
                    <div className="education-two-one">
                        <div className="education-two-one-one">
                            <MdOutlineSchool />
                        </div>
                        <div className="education-two-one-two">
                            <p>K L Deemed to be University</p>
                            <p>Bachelor of Technology in Computer Science & Engineering</p>
                        </div>
                    </div>
                    <div className="education-two-two">
                        <p>2022 - 2026</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default page