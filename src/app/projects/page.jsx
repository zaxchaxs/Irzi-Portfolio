'use client'
import { motion } from "framer-motion";
import { Lexend_Deca } from 'next/font/google';
import dataProject from "@/../public/json/projectsData.json";
import ProjectCard from "@/components/ProjectCards";
import Link from "next/link";
import SingleUnderline from "@/components/Underlines/singleUnderline";
import Footer from "@/components/Footer";

const lexendDeca = Lexend_Deca({
    weight: "800",
    subsets: ["latin"],
    display: "swap",
})

export default function ProjectsPage() {
    return (
      <div className="p-10 sm:px-24 mx-auto pt-20 overflow-hidden w-full">
        <div className="w-full">
          <motion.div
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black ${lexendDeca.className} text-center p-2 w-full`}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 0.3 }}
          >
            <h1>My Projects</h1>
            <SingleUnderline />
          </motion.div>
          <motion.div
            className="text-base md:text-lg p-2 text-justify sm:mb-10 md:mb-20"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 0.5 }}
          >
            <p>
              These are a few projects that demonstrate my expertise and
              experience through tangible examples of my work. Each project is
              succinctly outlined, accompanied by links to code repositories and
              live demonstrations. They serve as a testament to my capability in
              tackling intricate challenges, adeptness with diverse
              technologies, and proficient project management skills.
            </p>
          </motion.div>
        </div>

        {/* Project Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 pt-4">
            {
                dataProject.data.map(e => <ProjectCard key={e.id} title={e.title} desc={e.desc} tech={e.tech} srcCode={e.source} srcImg={e.image} year={e.year} />)
            }
        </div>
        <div className="w-full flex justify-center py-10">
            <div className={`w-fit my-4 p-2 text-xs sm:text-base ${lexendDeca.className} underline shadow-xl rounded-md`}>
                <Link href={"https://github.com/zaxchaxs?tab=repositories"} target="blank">See More Projects I've Created</Link>
            </div>
        </div>
        <Footer />
      </div>
    );
}