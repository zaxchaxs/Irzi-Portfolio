'use client';
import { motion } from "framer-motion";


export default function DoubleUnderline() {
    return (
        <div className=" p-2 relative justify-center flex md:block border-2 border-black">
            <div className="w-2/3 h-[5px] bg-black border-2 border-black rounded-md m-2"></div>
            <div className="w-2/3 h-[5px] bg-black border-2 border-black rounded-md float-right"></div>
        </div>
    )
}