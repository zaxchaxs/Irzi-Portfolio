'use client'
import { motion } from "framer-motion";
import HomeButton from "../Button/homeButton";
import Link from "next/link";
import dataProject from "@/../public/json/projectsData.json";
import testingImage from "@/../public/img/projectsImage/photo.png"
import Image from "next/image";
import githubIcon from "@/../public/icon/github-icon.png"

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'

export default function ProjectsSection({fontLexend}) {
    return(
        <div className="w-full mx-auto p-10 sm:px-24 md:flex overflow-hidden border-2 border-black justify-between" >
            <div className="border-2 border-red-500" >
                <div className={`md:text-left mx-auto text-center p-4 md:block sm:mt-7 text-black font-bold ${fontLexend}`}>
                    <motion.h1
                        className='text-4xl md:text-5xl sm:text-6xl'
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
            <div className="w-full border-2 border-green-500 p-4 overflow-hidden" >
                <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                navigation={true}
                pagination={{ type: "fraction", clickable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}

            >
                {
                    dataProject.data.map((e, i) => {
                        return <SwiperSlide key={i}>
                            {/* <div className="border-2 border-red-400 flex items-center justify-center">
                                <motion.div 
                                    className="w-full border-2 border-black relative"
                                >
                                    <Image className="w-full" src={testingImage} alt="testing" width={100} height={100} />
                                    <motion.div 
                                        className="w-full absolute top-0 right-0 "
                                        initial={{x: 0, scale: 0, opacity: 0}}
                                        whileInView={{x: 0, scale: 1, opacity: 1}}
                                        transition={{delay: 0.5, type: "spring"}}
                                        whileHover={{scale: 1.2, transition: {delay: 0, type: "spring"}}}
                                    >
                                        <Link href={e.source} target="blank">
                                            <Image src={githubIcon} alt="githubIcon" width={50} height={50} />
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </div> */}
                            {`Slide ${i}`}
                        </SwiperSlide>
                    })
                }
                </Swiper>
            </div>
            {/* <div className="border-2 border-green-500 p-4 w-full flex">

                <ProjectCard />
            </div> */}
        </div>
    )
}


function ProjectCard({srcImage, }) {

    return(
        <div className="border-2 border-black p-2 flex items-center justify-center">
            <div className="p-2 border-black rounded-full">
                <p>Prev</p>
            </div>
            <div className="border-2 border-yellow-400 relative">
                <motion.div 
                    className="absolute top-0 right-0 w-14"
                    initial={{x: 0, scale: 0, opacity: 0}}
                    whileInView={{x: 0, scale: 1, opacity: 1}}
                    transition={{delay: 0.5, type: "spring"}}
                    whileHover={{scale: 1.2, transition: {delay: 0, type: "spring"}}}
                >
                    <Link href={""}>
                        <Image src={githubIcon} alt="githubIcon" width={50} height={50} />
                    </Link>
                </motion.div>
                <motion.div 
                    className="md:min-w-72 w-full"
                >
                    <Image src={testingImage} alt="testing" width={400} height={400} />
                </motion.div>

            </div>
            <div className="p-2 border-black rounded-full">
                <p>Next</p>
            </div>
        </div>
    )
}