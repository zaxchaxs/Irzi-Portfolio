'use client'

// compo
import Image from "next/image"
import HomeButton from "../Button/homeButton";
import Link from "next/link";
import DoubleUnderline from '../Underlines/doubleUnderline';

import blueRandomPict from "@/../public/img/randomPict/giphy.gif"
import { motion } from "framer-motion";

export default function AboutMeSection({fontLexend}) {
    return(
        <div className="w-full  mx-auto p-10 sm:px-24 pt-20 md:flex overflow-hidden relative" >
            <div className="md:hidden absolute left-[30%] sm:left-[35%] sm:-top-8 -top-6 -z-10 items-center justify-center w-40 sm:w-56 p-2">
                <PopCatGif isMobileWidth={true} />
            </div>
            <div className="hidden md:flex items-center justify-center w-1/2 min-w-72 p-2">
                <PopCatGif isMobileWidth={false} />
            </div>
            <div className="p-2 w-full" >
                <div className={`md:text-left mx-auto md:mx-0 w-fit text-center p-4 md:block sm:mt-7 text-black font-bold ${fontLexend}`}>
                    <motion.h1
                        className='text-4xl sm:text-6xl'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{delay: 0.3, type: "spring"}}
                    >
                    About Me
                    </motion.h1>
                    <DoubleUnderline />
                </div>
                <motion.div 
                    className='text-base py-2 sm:py-6 text-center sm:text-left sm:text-xl text-gray-600 tracking-widest'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{delay: 0.4, type: "spring"}}
                >
                    <p>I have an interest in Software Engineering, especially Web Development.</p>
                    <div className='p-4 flex justify-center items-center md:block'>
                    <Link href={"/about"} >
                        <HomeButton value="Learn More" background={"bg-gray-600"} textCol={"text-white"} bgHover="hover:bg-gray-200" textHov={"hover:text-gray-600"} />
                    </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}


function PopCatGif({isMobileWidth}) {
    return (
        <>
            <motion.div
                className="w-full"
                initial={
                    isMobileWidth ? {y: -50, opacity: 0, scale: 0.3 } : {x: 200, opacity: 0, scale: 0.3} 
                }
                whileInView={
                    isMobileWidth ? {y: 0, opacity: 1, scale: 1} : {x: 0, opacity: 1, scale: 1}
                }
                transition={{delay: 0.8, type: "spring"}}
                whileHover={{scale: 1.2}}
            >
                <Image src={blueRandomPict} width={500} height={500} alt="Random Image" className="grayscale hover:grayscale-0 duration-300 placeholder:blur" />
            </motion.div>
        </>
    )
}