'use client'

import Image from "next/image"
import { motion } from "framer-motion";
import { Lexend_Deca } from 'next/font/google';

// images
import mySelfPict1 from "@/../public/img/myself2.jpg"
import mySelfPict1Copy from "@/../public/img/myself2copy.jpg"


const lexendDeca = Lexend_Deca({
    weight: "800",
    subsets: ["latin"],
    display: "swap",
})

export default function AboutPage() {
    return(
        <div className="w-full mx-auto px-10 pt-20 lg:pt-0 sm:px-24 overflow-hidden" >
            <div className="w-full border-2 lg:flex relative justify-between">

                {/* Image large width */}
                <motion.div
                    className={`border-2 border-red-500 relative hidden lg:block w-3/4 h-[100vh]`}
                    initial={{opacity: 0, scale: 0.8}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{delay: 0.3, type:"spring"}}
                >
                    <Image src={mySelfPict1} layout="fill" placeholder="blur" alt="Irzi Rahmatullah" objectFit="cover" className="grayscale hover:grayscale-0 duration-300 ease-in-out placeholder:blur min-w-full object-cover" />

                    <motion.div
                        className={`mx-auto text-center absolute bottom-5 p-2 px-6 md:rounded-2xl lg:rounded-3xl bg-gray-200 bg-opacity-50`}
                        initial={{x: -100, opacity: 0}}
                        whileInView={{x:0, opacity: 1}}
                        transition={{delay: 0.7, type:"spring"}}
                    >
                        <h1 className={`text-3xl md:text-4xl lg:text-5xl text-black ${lexendDeca.className} font-bold`}>About Me</h1>
                    </motion.div>
                </motion.div>

                {/* Image medium width */}
                <motion.div
                    className={`lg:hidden absolute z-0 h-[400px] w-full `}
                    initial={{opacity: 0, scale: 0.8}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{delay: 0.3, type:"spring"}}
                >
                    <Image src={mySelfPict1Copy} layout="fill" placeholder="blur" alt="Irzi" objectFit="cover" className="grayscale hover:grayscale-0 duration-300 ease-in-out placeholder:blur min-w-full object-cover" />


                </motion.div>
                <div className="mt-[330px] sm:mt-[320px] md:mt-[310px] lg:mt-0 lg:p-10 lg:pt-16 bg-gray-200 bg-opacity-50 relative z-10 w-full">
                    <motion.div
                            className={`mx-auto lg:hidden text-center `}
                            initial={{y: -100, opacity: 0 , scale: 0}}
                            whileInView={{y:0, opacity: 1, scale: 1}}
                            transition={{delay: 0.3, type:"spring"}}
                        >
                            <h1 className={`text-3xl sm:text-4xl md:text-5xl text-black ${lexendDeca.className} font-bold`}>
                            About Me
                            </h1>
                    </motion.div>
                    <div className="px-4">
                        <motion.h1
                            className={`text-lg sm:text-xl md:text-2xl text-black ${lexendDeca.className} `}
                            initial={{x: -100, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            transition={{delay: 0.5, type: "spring"}}
                        >
                            Who Am I?
                        </motion.h1>
                    </div>
                    <div className=" w-full p-2 text-gray-700 ">
                        <motion.h1
                            className={`font-bold text-lg p-2 tracking-widest`}
                            initial={{x: -100, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            transition={{delay: 0.6, type: "spring"}}
                        >
                            Irzi Rahmatullah
                        </motion.h1>
                        <motion.p
                            className={`text-base sm:text-lg text-justify indent-8`}
                            initial={{x: -100, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            transition={{delay: 0.7, type: "spring"}}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore magni deserunt fugit veritatis quidem vel delectus voluptatum harum mollitia tempora architecto incidunt, ab ratione, eum sequi est, labore nisi doloribus?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nemo magnam laudantium odio expedita nobis consequuntur mollitia voluptas quos vero. Tempore ullam blanditiis quisquam minus obcaecati voluptatibus magnam perspiciatis veritatis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloribus reiciendis odio mollitia quidem dolore vel doloremque nam! Asperiores nobis error mollitia maxime, quaerat aperiam recusandae sint aliquam minus corrupti.
                        </motion.p>
                    </div>
                </div>
            </div>
            <div className="w-full py-5" >
                <div>
                    <motion.h1
                        className={`text-2xl text-black ${lexendDeca.className} w-full text-center`}
                        initial={{y: -100, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.3, type:"spring"}}
                    >
                        Skilled In
                    </motion.h1>

                    {/* Skill */}
                    <div className="p-4">
                        <motion.div
                            className="pb-2"
                            initial={{x: -100, opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            transition={{delay: 0.3, type:"spring"}}
                        >
                            <h1 className="text-center text-lg font-bold text-gray-700">Language & Framework</h1>
                            <p className="pt-2 text-justify text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptate odit suscipit nisi ut ex veritatis natus error deserunt hic, autem rem neque porro debitis iste amet praesentium molestiae. Dolorem?</p>
                        </motion.div>
                        <motion.div
                                initial={{x: 100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                transition={{delay: 0.3, type:"spring"}}
                            >
                                <h1 className="text-center text-lg font-bold text-gray-700">Tools</h1>
                                <p className="pt-2 text-justify text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptate odit suscipit nisi ut ex veritatis natus error deserunt hic, autem rem neque porro debitis iste amet praesentium molestiae. Dolorem?</p>
                        </motion.div>
                    </div>

                    <motion.h1
                        className={`text-2xl text-black ${lexendDeca.className} w-full text-center`}
                        initial={{y: -100, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{delay: 0.3, type:"spring"}}
                    >
                        Education
                    </motion.h1>
                    {/* Education */}
                    <div className="p-4">
                        <motion.div
                                className="pb-2"
                                initial={{x: -100, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                transition={{delay: 0.3, type:"spring"}}
                            >
                                <h1 className="text-center text-lg font-bold text-gray-700">Universitas Singaperbangsa Karawang</h1>
                                <p className="py-2 text-gray-700 font-bold">Computer Science | 2023 - Now</p>
                                <p className="text-justify text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptate odit suscipit nisi ut ex veritatis natus error deserunt hic, autem rem neque porro debitis iste amet praesentium molestiae. Dolorem?</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}