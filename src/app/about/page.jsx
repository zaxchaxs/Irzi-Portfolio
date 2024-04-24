'use client'
import { motion } from "framer-motion";
import { Lexend_Deca } from 'next/font/google';

const lexendDeca = Lexend_Deca({
    weight: "800",
    subsets: ["latin"],
    display: "swap",
})

export default function AboutPage() {
    return(
        <div className="w-full mx-auto p-10 sm:px-24 pt-20 md:flex overflow-hidden relative border-2 border-black" >
            <motion.div
                className={`${lexendDeca} mx-auto text-center border-2 border-red-500 w-full`}
                initial={{y: -100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{delay: 0.3, type:"spring"}}
            >
                <h1 className="text-4xl sm:text-6xl font-bold text-black p-4">
                    About Me
                </h1>
            </motion.div>
        </div>
        
    )
}