import React from 'react'
import Image from 'next/image'

import './techStack.css'

const page = () => {
  return (
        <div className="StackComponent">
            <div className="StackComponent-in">
                <div className="stack-one">
                    <h1>Stack</h1>
                </div>
                <div className="stack-two">
                    <div className="stack-item" data-tooltip="TypeScript">
                        <Image src="/stack/typescript.svg" alt="TypeScript" width={50} height={50} />
                    </div>
                    <div className="stack-item" data-tooltip="JavaScript">
                        <Image src="/stack/js.svg" alt="JavaScript" width={50} height={50} />
                    </div>
                    <div className="stack-item" data-tooltip="Python">
                        <Image src="/stack/python.svg" alt="Python" width={50} height={50} />
                    </div>
                    <div className="stack-item" data-tooltip="Java">
                        <Image src="/stack/java.svg" alt="Java" width={50} height={50} />
                    </div>
                    <div className="stack-item" data-tooltip="Node.js">
                        <Image src="/stack/nodejs.svg" alt="Node.js" width={50} height={50} />
                    </div>
                    <div className="stack-item" data-tooltip="React">
                        <Image src="/stack/react.svg" alt="React" width={50} height={50} />
                    </div>
                    <div className="stack-item" data-tooltip="Next.js">
                        <Image src="/stack/nextjs2-light.svg" alt="Next.js Light" width={50} height={50} />
                    </div>
                    <div className="stack-item" data-tooltip="Git">
                        <Image src="/stack/git.svg" alt="Git" width={50} height={50} />
                    </div>
                    <div className="stack-item" data-tooltip="Docker">
                        <Image src="/stack/docker.svg" alt="Docker" width={50} height={50} />
                    </div>
                    <div className="stack-item" data-tooltip="MySQL">
                        <Image src="/stack/mysql.svg" alt="MySQL" width={50} height={50} />
                    </div>
                    <div className="stack-item" data-tooltip="MongoDB">
                        <Image src="/stack/mongodb.svg" alt="MongoDB" width={50} height={50} />
                    </div>
                    <div className="stack-item" data-tooltip="Redis">
                        <Image src="/stack/redis.svg" alt="Redis" width={50} height={50} />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default page