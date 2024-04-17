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

export default function ProjectsSection({fontLexend}) {
    const [index, setIndex] = useState(0);

    const nextProjectHandler = () => {
        (index === dataProject.data.length - 1) ? setIndex(0) : setIndex(index+1);
    }

    const prevProjectHandler = () => {

    }

    return(
        <div className="w-full mx-auto p-10 sm:px-24 md:flex border-2 border-black justify-between" >
            <div className="border-2 w-full border-red-500" >
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
            <div className="w-full border-2 border-green-500 items-center justify-center flex relative overflow-hidden" >
                {/* Prev Button */}
                <div className="absolute left-0 z-10 w-8 sm:w-12">
                    <Image className="w-full" src={backArrow} width={30} height={30} alt="Next" />
                </div>
                {
                    dataProject.data.map(e => <ProjectCard srcImage={e.image} srcGithub={e.source} /> )
                }
                
                {/* Next Button */}
                <div className="absolute right-0 z-10 w-8 sm:w-12 cursor-pointer" >
                    <Image className="w-full" src={nextArrow} width={30} height={30} alt="Next" />
                </div>
            </div>
        </div>
    )
}


function ProjectCard({srcImage, srcGithub}) {
    return(
        <div className="border-2 border-yellow-400 flex items-center relative w-full justify-center">
            {/* Github icon */}
            <motion.div 
                className="absolute top-0 right-0 sm:w-14 w-10 z-10"
                initial={{x: 0, scale: 0, opacity: 0}}
                whileInView={{x: 0, scale: 1, opacity: 1}}
                transition={{delay: 0.9, type: "spring"}}
                whileHover={{scale: 1.2, transition: {delay: 0, type: "spring"}}}
            >
                <Link href={srcGithub}>
                    <Image src={githubIcon} alt="githubIcon" width={50} height={50} />
                </Link>
            </motion.div>

            <motion.div 
                className="min-w-60 md:min-w-96 w-full"
                initial={{scale: 0.5, opacity: 0.5}}
                whileInView={{scale: 1, opacity: 1}}
                transition={{delay: 0.5, type: "spring"}}
            >
                <Image className="placeholder:blur w-full" src={srcImage} alt="testing" width={700} height={700} />
            </motion.div>
        </div>
    )
}