import { motion } from "framer-motion";
import HomeButton from "../Button/homeButton";
import Link from "next/link";

export default function ProjectsSection({fontLexend}) {
    return(
        <div className="w-full mx-auto p-10 sm:px-24 md:flex overflow-hidden border-2 border-black" >
            <div className="border-2 border-red-500" >
                <div className={`md:text-left mx-auto text-center p-4 md:block sm:mt-7 text-black font-bold ${fontLexend}`}>
                    <motion.h1
                        className='text-4xl sm:text-6xl'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{delay: 0.3, type: "spring"}}
                    >
                    My Projects
                    </motion.h1>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident error nobis quibusdam similique facere quia, dolor accusantium tempore sit voluptatem laudantium ratione. Sed dolorum illum, ex eos ab saepe facilis?</p>
                <Link href={"/about"} >
                    <HomeButton value="See More" background={"bg-gray-600"} textCol={"text-white"} bgHover="hover:bg-white" textHov={"hover:text-gray-600"} />
                </Link>
            </div>
            <div className="border-2 border-green-400" >
                
            </div>
        </div>
    )
}