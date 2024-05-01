'use client';
import { motion } from "framer-motion";


export default function DoubleUnderline({isContactSec}) {
    return (
        <div className={`p-2 relative justify-center ${isContactSec ? "hidden md:block" : ""}`}>
            <motion.div
                className="w-3/5 md:w-2/3 h-[5px] bg-black border-2 border-black rounded-md m-2"
                initial={{x: -100, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{type: "spring", delay: 0.8}}
                ></motion.div>
            <motion.div
                className="w-3/5 md:w-2/3 h-[5px] bg-black border-2 border-black rounded-md float-right"
                initial={{x: 100, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{type: "spring", delay: 0.9}}
            ></motion.div>
        </div>
    )
}