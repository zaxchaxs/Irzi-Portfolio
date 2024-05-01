'use client';
import { motion } from "framer-motion";


export default function SingleUnderline() {
    return (
        <div className={`p-2 md:p-4 w-2/3 md:w-1/2 lg:w-1/3 mx-auto items-center flex justify-center`}>
            <motion.div
                className="md:h-[5px] h-[3px] bg-black border-2 border-black rounded-full"
                initial={{width: 0,}}
                whileInView={{width: "80%"}}
                transition={{type: "spring", delay: 0.7}}
                ></motion.div>
        </div>
    )
}