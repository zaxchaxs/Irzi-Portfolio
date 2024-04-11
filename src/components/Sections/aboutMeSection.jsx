'use client'
import Image from "next/image"
import { motion } from "framer-motion";
import HomeButton from "../Button/homeButton";
import blueGamepad from "@/../public/img/randomPict/blue-gamepad.jpg"
import blueLight from "@/../public/img/randomPict/blueLight.jpg"
import greenLight from "@/../public/img/randomPict/greenLight.jpg"

export default function AboutMeSection({fontLexend}) {
    return(
        <div className="w-full mx-auto p-10 sm:px-24 pt-20 border-2 border-black flex" >
            <div className="border-2 border-black p-2" >
                <div className={`md:text-left mx-auto text-center p-4 m-4 md:block sm:mt-7 border-2 border-black text-black font-bold ${fontLexend}`}>
                    <motion.h1
                        className='text-4xl sm:text-6xl'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{x:0, opacity: 1}}
                        transition={{delay: 0.3, type: "spring"}}
                    >{`About Me`}
                    </motion.h1>
                </div>
                <motion.div 
                    className='text-base py-4 sm:py-6 text-center sm:text-left sm:text-xl text-gray-600 tracking-widest'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{delay: 0.4, type: "spring"}}
                >
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit officia ipsam provident, nostrum vero ipsa soluta veritatis voluptatem quisquam excepturi libero, aliquam vel maiores quis esse, voluptas in a totam?</h1>
                    <div className='p-2 sm:p-4 flex justify-center items-center sm:block'>
                        <HomeButton value="Learn More" background={"bg-gray-600"} textCol={"text-white"} bgHover="hover:bg-white" textHov={"hover:text-gray-600"} />
                    </div>
                </motion.div>
            </div>
            <div 
                className="hidden md:flex w-full h-auto border-2 border-black p-4 relative"
                initial={{x: 200, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{delay: 0.6, type: "spring"}}
            >
                <motion.div
                    
                >
                    <Image src={blueGamepad} width={500} height={500} alt="Random Image" className="top-0 left-0 z-10 w-56 h-48 object-cover grayscale placeholder:blur hover:grayscale-0 duration-300" />
                </motion.div>
                <motion.div>
                    <Image src={blueLight} width={500} height={500} alt="Random Image" className="top-32 right-7 absolute w-44 h-40 object-cover grayscale placeholder:blur hover:grayscale-0 duration-300" />
                </motion.div>
                <motion.div>
                    <Image src={greenLight} width={500} height={500} alt="Random Image" className="bottom-10 left-20 absolute w-36 h-32 object-cover grayscale placeholder:blur hover:grayscale-0 duration-300" />
                </motion.div>

            </div>
        </div>
    )
}