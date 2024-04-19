'use client'
import { delay, motion } from "framer-motion";
import HomeButton from "../Button/homeButton";
import Link from "next/link";
import dataProject from "@/../public/json/projectsData.json";
import Image from "next/image";
import testingImage from "@/../public/img/projectsImage/firstPortfolio.jpg";

// Icons
import githubIcon from "@/../public/icon/github-icon.png"
import backArrow from "@/../public/icon/arrow-back-circle.svg"
import nextArrow from "@/../public/icon/arrow-next-circle.svg"

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'
import { useState } from "react";
import { data } from "autoprefixer";

export default function ProjectsSection({fontLexend}) {


    return(
        <div className="w-full mx-auto p-10 sm:px-24 md:flex border-2 overflow-hidden border-black justify-between" >
            <div className="w-full" >
                <div className={`md:text-left mx-auto text-center p-4 md:block sm:mt-7 text-black font-bold ${fontLexend}`}>
                    <motion.h1
                        className='text-4xl md:text-5xl sm:text-6xl'
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
            <div className="w-full items-center justify-center flex relative overflow-hidden" >
                <ProjectCard data={dataProject.data} />
            </div>
        </div>
    )
}


function ProjectCard({data}) {
    const [index, setIndex] = useState(1);

    const nextProjectHandler = () => {
        (index === data.length-1) ? setIndex(0) : setIndex(index+1);
    }

    const prevProjectHandler = () => {
        index === 0 ? setIndex(data.length-1) : setIndex(index-1);
    }

    return (
        <div className={`w-fit relative gap-4 flex transition-all ease-in-out duration-500 md:rounded-2xl border-2 border-green-500`}>
            {
                data.map((e, i) => (
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
                            className="absolute top-0 right-0 sm:w-14 w-10 z-10"
                            initial={{x: 0, scale: 0, opacity: 0}}
                            whileInView={{x: 0, scale: 1, opacity: 1}}
                            transition={{delay: 0.5, type: "spring"}}
                            whileHover={{scale: 1.2, transition: {delay: 0, type: "spring"}}}
                        >
                            <Link href={e.source}>
                                <Image src={githubIcon} alt="githubIcon" width={50} height={50} />
                            </Link>
                        </motion.div>

                        <motion.div
                        className={`flex items-center w-full object-cover ${i === index ? "" : "hidden"}`}
                        key={i}
                        initial={{scale: 0, opacity: 0}}
                        whileInView={{scale: 1, opacity: 1}}
                        transition={{type: "spring", bounce: 0.25}}
                        >
                            {/* <img src={e.image} alt={e.title} className="w-[80vh] object-cover rounded-2xl min-w-[50vh]" /> */}
                            <Image src={e.image} alt={e.title} width={400} height={266} className="w-[80vh] min-w-[70] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all ease-in-out duration-300" placeholder="blur" blurDataURL={e.image} />
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
                    </div>
                ))
            }
        </div>
    )
}