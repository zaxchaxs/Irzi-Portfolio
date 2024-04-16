'use client'
import { motion } from "framer-motion";
import HomeButton from "../Button/homeButton";
import Link from "next/link";
import dataProject from "@/../public/json/projectsData.json";
import testingImage from "@/../public/img/projectsImage/photo.png"
import Image from "next/image";

import githubIcon from "@/../public/icon/github-icon.png"

export default function ProjectsSection({fontLexend}) {
    return(
        <div className="w-full mx-auto p-10 sm:px-24 md:flex overflow-hidden border-2 border-black" >
            <div className="border-2 border-red-500" >
                <div className={`md:text-left mx-auto text-center p-4 md:block sm:mt-7 text-black font-bold ${fontLexend}`}>
                    <motion.h1
                        className='text-4xl sm:text-6xl'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{delay: 0.3, type: "spring"}}
                    >
                    My Projects
                    </motion.h1>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident error nobis quibusdam similique facere quia, dolor accusantium tempore sit voluptatem laudantium ratione. Sed dolorum illum, ex eos ab saepe facilis?</p>
                <Link href={"/about"} >
                    <HomeButton value="See More" background={"bg-gray-600"} textCol={"text-white"} bgHover="hover:bg-white" textHov={"hover:text-gray-600"} />
                </Link>
            </div>
            <div className="border-2 border-green-500 p-4 w-full flex">
                <ProjectCard />
            </div>
        </div>
    )
}


function ProjectCard() {

    return(
        <div className="border-2 border-black p-2 flex items-center justify-center">
            <div className="p-2 border-black rounded-full">
                <p>Prev</p>
            </div>
            <div className="border-2 border-yellow-400 relative">
                <motion.div 
                    className="absolute top-0 right-0 w-14"
                    initial={{x: 0, scale: 0, opacity: 0}}
                    whileInView={{x: 0, scale: 1, opacity: 1}}
                    transition={{delay: 0.5, type: "spring"}}
                    whileHover={{scale: 1.2, transition: {delay: 0, type: "spring"}}}
                >
                    <Link href={""}>
                        <Image src={githubIcon} alt="githubIcon" width={50} height={50} />
                    </Link>
                </motion.div>
                <motion.div 
                    className="md:min-w-72 w-full"
                >
                    <Image src={testingImage} alt="testing" width={400} height={400} />
                </motion.div>

            </div>
            <div className="p-2 border-black rounded-full">
                <p>Next</p>
            </div>
        </div>
    )
}