import HomeButton from "../Button/homeButton";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import randomPict from "@/../public/img/randomPict/blueContactPict.jpeg"

export default function ContactSection({fontLexend}) {
    return(
        <div className="w-full mx-auto p-10 sm:px-24 pt-20 md:flex items-center justify-between">
            <div className="md:w-[102vh] md:min-w-[50vh] mx-auto w-full z-0">
                <Image src={randomPict} height={500} width={500} alt="random pict" className="z-0 grayscale hover:grayscale-0 h-[40vh] w-full md:h-auto object-fill transition-all ease-in-out duration-300 rounded-md" />
            </div>
            
            <div className="p-4 w-full z-10 md:m-0 sm:-mt-32 -mt-10">
                <div className={`z-10 md:text-left mx-auto text-center p-4 sm:mt-7 sm:bg-gray-200 rounded-sm text-black font-bold ${fontLexend}`} >
                    <motion.h1
                        className='text-3xl sm:text-4xl md:text-6xl z-10'
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{delay: 0.3, type: "spring"}}
                    >
                    Let's Connect
                    </motion.h1>
                </div>
                <motion.div 
                    className='text-base py-2 sm:py-6 text-center sm:text-left sm:text-xl text-gray-600 tracking-widest'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{delay: 0.4, type: "spring"}}
                >
                    <p>Feel free to say Hello!</p>
                    <div className='p-4 flex justify-center items-center md:block'>
                    <Link href={"/about"} >
                        <HomeButton value="Learn More" background={"bg-gray-600"} textCol={"text-white"} bgHover="hover:bg-white" textHov={"hover:text-gray-600"} />
                    </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}