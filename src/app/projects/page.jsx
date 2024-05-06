'use client'
import { motion } from "framer-motion";
import { Lexend_Deca } from 'next/font/google';
import dataProject from "@/../public/json/projectsData.json";
import ProjectCard from "@/components/ProjectCards";

const lexendDeca = Lexend_Deca({
    weight: "800",
    subsets: ["latin"],
    display: "swap",
})

export default function ProjectsPage() {
    return (
      <div className="p-10 sm:px-24 mx-auto pt-20 overflow-hidden">
        <div className="w-full">
          <motion.div
            className={`text-2xl text-black ${lexendDeca.className} text-center p-2 border-2 border-black w-full`}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 0.3 }}
          >
            <h1>My Projects</h1>
          </motion.div>
          <motion.div
            className="text-base p-2 border-2 border-black text-justify"
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
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
            {
                dataProject.data.map(e => <ProjectCard key={e.id} title={e.title} desc={e.desc} tech={e.tech} srcCode={e.source} srcImg={e.image} year={e.year} />)
            }
        </div>
      </div>
    );
}