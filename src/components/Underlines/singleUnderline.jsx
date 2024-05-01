'use client';
import { motion } from "framer-motion";


export default function SingleUnderline({isContactSec}) {
    return (
        <div className={`p-2 mx-auto items-center flex justify-center`}>
            <motion.div
                className="w-1/2 h-[5px] bg-black border-2 border-black rounded-md"
                initial={{x: -100, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{type: "spring", delay: 0.8}}
                ></motion.div>
        </div>
    )
}