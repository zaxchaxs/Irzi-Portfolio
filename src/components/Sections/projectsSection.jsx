'use client'

// Components
import HomeButton from "../Button/homeButton";
import Link from "next/link";
import Image from "next/image";
import dataProject from "@/../public/json/projectsData.json";
import DoubleUnderline from '../Underlines/doubleUnderline';

// Icons
import githubIcon from "@/../public/icons/github-icon.png"
import backArrow from "@/../public/icons/arrow-back-circle.svg"
import nextArrow from "@/../public/icons/arrow-next-circle.svg"

import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectsSection({fontLexend}) {
    return(
        <div className="w-full mx-auto p-10 sm:px-24 md:flex overflow-hidden justify-between" >
            <div className="w-full text-center md:text-left mx-auto" >
                <div className={`md:text-left mx-auto md:mx-0 w-fit text-center p-4 md:block sm:mt-7 text-black font-bold ${fontLexend}`}>
                    <motion.h1
                        className='text-4xl md:text-5xl sm:text-6xl'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{delay: 0.3, type: "spring"}}
                    >
                    My Projects
                    </motion.h1>
                    <DoubleUnderline />
                </div>
                <motion.div
                    className='text-base py-2 sm:py-6 sm:text-xl text-gray-600 tracking-widest'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{delay: 0.4, type: "spring"}}
                >
                    {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident error nobis quibusdam similique facere quia, dolor accusantium tempore sit voluptatem laudantium ratione. Sed dolorum illum, ex eos ab saepe facilis?</p> */}
                    <p>Here are some projects I've whipped up over time. Feel free to check out the source code on my GitHub.</p>
                    <div className="py-2 sm:py-4">
                        <Link href={"/projects"} className="" >
                            <HomeButton value="See More" background={"bg-gray-600"} textCol={"text-white"} bgHover="hover:bg-gray-200" textHov={"hover:text-gray-600"} />
                        </Link>
                    </div>
                </motion.div>
            </div>
            <div className="w-full items-center justify-center flex relative overflow-hidden" >
                <ProjectCard data={dataProject.data} />
            </div>
        </div>
    )
}


function ProjectCard({data}) {
    const [index, setIndex] = useState(0);

    const nextProjectHandler = () => {
        (index === data.filter(e => e.isDisplayed).length-1) ? setIndex(0) : setIndex(index+1);
    }

    const prevProjectHandler = () => {
        index === 0 ? setIndex(data.filter(e => e.isDisplayed).length-1) : setIndex(index-1);
    }

    return (
        <div className={`w-fit relative gap-4 flex transition-all ease-in-out duration-500 md:rounded-2xl`}>
            {
                data.filter(obj => obj.isDisplayed).map((e, i) => {
                    
                    if(e.isDisplayed) {
                        return (
                            <div key={i} className={`flex items-center w-full object-cover ${i === index ? "" : "hidden"}`}>
                                {/* prev button */}
                                <motion.div 
                                    className="absolute left-0 z-10 w-8 sm:w-12 cursor-pointer" onClick={prevProjectHandler}
                                    initial={{scale: 1}}
                                    whileHover={{scale: 1.3}}
                                    whileTap={{scale: 1}}
                                >
                                <Image className="w-full rounded-2xl" src={backArrow} width={30} height={30} alt="Next" />
                                </motion.div>

                                {/* github icon */}
                                <motion.div 
                                    className="absolute top-2 right-2 sm:w-14 w-8 z-10"
                                    initial={{x: 0, scale: 0, opacity: 0}}
                                    whileInView={{x: 0, scale: 1, opacity: 1}}
                                    transition={{delay: 0.5, type: "spring"}}
                                    whileHover={{scale: 1.2, transition: {delay: 0, type: "spring"}}}
                                >
                                    <Link href={e.source} target="blank">
                                        <Image src={githubIcon} alt="githubIcon" width={50} height={50} />
                                    </Link>
                                </motion.div>

                                <motion.div
                                className={`flex items-center relative w-full object-cover group overflow-hidden ${i === index ? "" : "hidden"}`}
                                key={i}
                                initial={{scale: 0, opacity: 0}}
                                whileInView={{scale: 1, opacity: 1}}
                                transition={{type: "spring", bounce: 0.25}}
                                >
                                    <div className="w-full bottom-0 sm:-bottom-32 group-hover:bottom-0 transition-all ease-in-out duration-300 absolute h-1/5 sm:h-1/4 bg-black z-10 rounded-t-xl sm:rounded-t-2xl p-2 px-4 sm:p-4 overflow-hidden bg-opacity-60">
                                        <div className="w-full text-slate-100">
                                            <h1 className="font-bold text-base sm:text-xl">{e.title}</h1>
                                            <p className="text-left" >{e.desc.length > 10 ? `${e.desc.slice(0, 64)}...` : e.desc}</p>
                                        </div>
                                    </div>
                                    <Image src={e.image} alt={e.title} width={400} height={266} className="w-[80vh] min-w-[70] object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all ease-in-out duration-300" placeholder="blur" blurDataURL={e.image} />
                                </motion.div>

                                {/* next button */}
                                <motion.div 
                                    className="absolute right-0 z-10 w-8 sm:w-12 cursor-pointer" onClick={nextProjectHandler} 
                                    initial={{scale: 1}}
                                    whileHover={{scale: 1.3}}
                                    whileTap={{scale: 1}}
                                >
                                    <Image className="w-full" src={nextArrow} width={30} height={30} alt="Next" />
                                </motion.div>

                                {/* Button */}
                                <motion.div
                                    className={`absolute z-10 top-4 left-4 sm:top-5 sm:left-8 ${e.preview ? "" : "hidden"}`}
                                    initial={{scale: 0, y: 0, opacity: 0}}
                                    whileInView={{scale: 1, y: 0, opacity: 1, transition:{delay: 0.6, type: "spring"}}}
                                    whileHover={{scale: 1.2}}
                                >
                                    <div className="cursor-pointer bg-gray-600 text-white font-bold p-1 px-2 sm:p-1 sm:px-4 text-xxs sm:text-sm rounded-lg sm:rounded-xl border-2 border-gray-600 hover:bg-gray-200 hover:text-gray-600 ease-in-out duration-300">
                                        <Link href={e.preview ? e.preview : "#" } target="blank">
                                            Preview
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        )    
                    }
                }
                )
            }
        </div>
    )
}