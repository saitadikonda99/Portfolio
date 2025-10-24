import React from 'react'
import Link from 'next/link';


import './blogs.css'

import { RiExternalLinkLine } from 'react-icons/ri'

interface Blog {
    title: string;
    date: string;
    category: string[];
    link: string;
}

const blogs: Blog[] = [
    {
        title: "Deploying a React App on Kubernetes: A Quick Guide",
        date: "07 MAR 2024",
        category: ["DevOps", "React", "Kubernetes"],
        link: "https://dev.to/saitadikonda99/deploying-a-react-app-on-kubernetes-a-quick-guide-3e9"
    },
    {
        title: "From Code to Container: Dockerizing Your React Application Like a Pro",
        date: "30 JAN 2024",
        category: ["DevOps", "React", "Docker"],
        link: "https://saitadikonda99.hashnode.dev/docker-react"
    },
    {
        title: "JWT Authentication with node JS and Express",
        date: "28 NOV 2023",
        category: ["Backend", "Node.js", "Express", "JWT"],
        link: "https://saitadikonda99.hashnode.dev/jwt-authentication-with-node-js-and-express"
    },
    {
        title: "Make your work 10X productive using ChatGPT",
        date: "22 JAN 2023",
        category: ["AI", "Productivity", "ChatGPT"],
        link: "https://saitadikonda.hashnode.dev/make-your-work-10x-productive-using-chatgpt"
    }
]

const Blogs = () => {
    return (
        <div className="BlogsComponent">
            <div className="BlogsComponent-in">
                <div className="blogs-one">
                    <h1>Blogs</h1>
                </div>
                <div className="blogs-two">
                    {blogs.map((blog, index) => (
                        <div className="blogCard" key={index}>
                            <div className="blogCard-in">
                                <div className="blog-card-one">
                                    <p>{blog.date}</p>
                                </div>
                                <div className="blog-card-two">
                                    <Link href={blog.link} target='_blank'>
                                        {blog.title} <RiExternalLinkLine />
                                    </Link>
                                </div>
                                <div className="blog-card-three">
                                    {blog.category.map((cat, idx) => (
                                        <div className="blog-stack" key={idx}>
                                            <p>{cat}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blogs