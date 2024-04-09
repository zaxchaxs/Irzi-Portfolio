'use client'
import { motion } from "framer-motion";

export default function AboutMeSection({fontLexend}) {
    return(
        <div className="w-full mx-auto p-10 sm:p-24 pt-20" id="home">
            <div className={`md:text-left mx-auto w-full text-center p-4 m-4 md:block sm:mt-7 border-2 border-black text-black font-bold ${fontLexend}`}>
                <motion.h1
                    className='text-4xl sm:text-6xl'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{x:0, opacity: 1}}
                    transition={{delay: 0.5, type: "spring"}}
                >{`Full Stack`}
                </motion.h1>
                <motion.h1
                    className='text-4xl sm:text-6xl'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{x:0, opacity: 1}}
                    transition={{delay: 0.5, type: "spring"}}
                >{`Developer`}
                </motion.h1>
            </div>
            <div className={`md:text-left mx-auto w-full text-center p-4 m-4 md:block sm:mt-7 border-2 border-black text-black font-bold ${fontLexend}`}>
                <motion.h1
                    className='text-4xl sm:text-6xl'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{x:0, opacity: 1}}
                    transition={{delay: 0.5, type: "spring"}}
                >{`Full Stack`}
                </motion.h1>
                <motion.h1
                    className='text-4xl sm:text-6xl'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{x:0, opacity: 1}}
                    transition={{delay: 0.5, type: "spring"}}
                >{`Developer`}
                </motion.h1>
            </div>
            <div className={`md:text-left mx-auto w-full text-center p-4 m-4 md:block sm:mt-7 border-2 border-black text-black font-bold ${fontLexend}`}>
                <motion.h1
                    className='text-4xl sm:text-6xl'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{x:0, opacity: 1}}
                    transition={{delay: 0.5, type: "spring"}}
                >{`Full Stack`}
                </motion.h1>
                <motion.h1
                    className='text-4xl sm:text-6xl'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{x:0, opacity: 1}}
                    transition={{delay: 0.5, type: "spring"}}
                >{`Developer`}
                </motion.h1>
            </div>
            <div className={`md:text-left mx-auto w-full text-center p-4 m-4 md:block sm:mt-7 border-2 border-black text-black font-bold ${fontLexend}`}>
                <motion.h1
                    className='text-4xl sm:text-6xl'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{x:0, opacity: 1}}
                    transition={{delay: 0.5, type: "spring"}}
                >{`Full Stack`}
                </motion.h1>
                <motion.h1
                    className='text-4xl sm:text-6xl'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{x:0, opacity: 1}}
                    transition={{delay: 0.5, type: "spring"}}
                >{`Developer`}
                </motion.h1>
            </div>
            <div className={`md:text-left mx-auto w-full text-center p-4 m-4 md:block sm:mt-7 border-2 border-black text-black font-bold ${fontLexend}`}>
                <motion.h1
                    className='text-4xl sm:text-6xl'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{x:0, opacity: 1}}
                    transition={{delay: 0.5, type: "spring"}}
                >{`Full Stack`}
                </motion.h1>
                <motion.h1
                    className='text-4xl sm:text-6xl'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{x:0, opacity: 1}}
                    transition={{delay: 0.5, type: "spring"}}
                >{`Developer`}
                </motion.h1>
            </div>
        </div>
    )
}