import { motion } from "framer-motion";

export default function HomeButton({background, value, textCol, textHov, bgHover }) {
    return(
        <motion.button
            className={`${background} ${textCol} font-bold p-2 px-3 sm:p-3 sm:px-5 text-xxs sm:text-sm rounded-xl border-2 border-gray-600 m-2 hover:${bgHover}  hover:${textHov} ease-in-out duration-300  `}
        >  
           {value}
        </motion.button>
    )
}