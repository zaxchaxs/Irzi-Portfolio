"use client";

// Components
import HomeButton from "../Button/homeButton";
import Link from "next/link";
import dataProject from "@/../public/json/projectsData.json";
import DoubleUnderline from "../Underlines/doubleUnderline";
import ProjectPoster from '@/components/ProjectCards/ProjectPoster'

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectsSection({ fontLexend }) {

  return (
    <div className="w-full mx-auto p-10 sm:px-24 md:flex overflow-hidden justify-between">
      <div className="w-full text-center md:text-left mx-auto">
        <div
          className={`md:text-left mx-auto md:mx-0 w-fit text-center p-4 md:block sm:mt-7 text-black font-bold ${fontLexend}`}
        >
          <motion.h1
            className="text-4xl md:text-5xl sm:text-6xl"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            My Projects
          </motion.h1>
          <DoubleUnderline />
        </div>
        <motion.div
          className="text-base py-2 sm:py-6 sm:text-xl text-gray-600 tracking-widest"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
        >
          {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident error nobis quibusdam similique facere quia, dolor accusantium tempore sit voluptatem laudantium ratione. Sed dolorum illum, ex eos ab saepe facilis?</p> */}
          <p>
            Here are some projects I've whipped up over time. Feel free to check
            out the source code on my GitHub.
          </p>
          <div className="py-2 sm:py-4">
            <Link href={"/projects"} className="">
              <HomeButton
                value="See More"
                background={"bg-gray-600"}
                textCol={"text-white"}
                bgHover="hover:bg-gray-200"
                textHov={"hover:text-gray-600"}
              />
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="w-full items-center justify-center flex relative overflow-hidden">
        <Swiper
          modules={[ Pagination, Navigation]}
          loop
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          // navigation
        >
          {dataProject.data.filter(el => el.isDisplayed)
          .map((e, i) => {
            return (
              <SwiperSlide key={i}>
                <ProjectPoster data={e} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
