import { motion } from "framer-motion";
import Link from "next/link"


export default function HomeButton({background, value, textCol, textHov, bgHover, }) {
    return(
        <>
            <button className={`${background} ${textCol} font-bold p-2 px-3 sm:p-3 sm:px-5 text-xxs sm:text-sm rounded-2xl border-2 border-gray-600 m-2 ${bgHover} ${textHov} ease-in-out duration-300`} >
            {value}
            </button>
        </>
    )
}