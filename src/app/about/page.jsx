'use client'

import Image from "next/image"
import { motion } from "framer-motion";
import { Lexend_Deca } from 'next/font/google';

import skillsData from "@/../public/json/skillsData.json";

// images
import mySelfPict1 from "@/../public/img/myself2.jpg"
import mySelfPict1Copy from "@/../public/img/myself2copy.jpg"
import SingleUnderline from "@/components/Underlines/singleUnderline";
import Footer from "@/components/Footer";

const lexendDeca = Lexend_Deca({
    weight: "800",
    subsets: ["latin"],
    display: "swap",
})

export default function AboutPage() {
    return (
      <div className="w-full mx-auto px-10 pt-20 lg:pt-0 sm:px-24 overflow-hidden">
        <div className="w-full border-2 lg:flex relative justify-between">

          {/* Image large width */}
          <motion.div
            className={`relative hidden lg:block w-3/4 h-[100vh]`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <Image
              src={mySelfPict1}
              layout="fill"
              placeholder="blur"
              alt="Irzi Rahmatullah"
              objectFit="cover"
              className="grayscale hover:grayscale-0 duration-300 ease-in-out placeholder:blur min-w-full object-cover"
            />

            <motion.div
              className={`mx-auto text-center absolute left-8 bottom-5 p-2 px-6 rounded-2xl bg-gray-200 bg-opacity-50`}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
            >
              <h1
                className={`text-5xl text-black ${lexendDeca.className} font-bold`}
              >
                About Me
              </h1>
            </motion.div>
          </motion.div>

          {/* Image medium width */}
          <motion.div
            className={`lg:hidden absolute z-0 h-[400px] w-full `}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <Image
              src={mySelfPict1Copy}
              layout="fill"
              placeholder="blur"
              alt="Irzi"
              objectFit="cover"
              className="grayscale hover:grayscale-0 duration-300 ease-in-out placeholder:blur min-w-full object-cover"
            />
          </motion.div>
          <div className="mt-[330px] sm:mt-[320px] md:mt-[310px] lg:mt-0 lg:p-10 lg:pt-16 bg-gray-200 bg-opacity-50 relative z-10 w-full">
            <motion.div
              className={`mx-auto lg:hidden text-center `}
              initial={{ y: -100, opacity: 0, scale: 0 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl text-black ${lexendDeca.className} font-bold`}
              >
                About Me
              </h1>
            </motion.div>
            <div className="px-4">
              <motion.h1
                className={`text-xl sm:text-xl md:text-3xl text-black ${lexendDeca.className} `}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                Who Am I?
              </motion.h1>
            </div>
            <div className=" w-full p-2 text-gray-700 ">
              <motion.h1
                className={`font-bold text-lg p-2 tracking-widest`}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                Irzi Rahmatullah
              </motion.h1>
              <motion.p
                className={`text-base sm:text-lg md:text-xl text-justify indent-8`}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
              >
                Hi! I'm Irzi Rahmatullah. I'm from Bogor and currently doing my
                thing at Singaperbangsa University Karawang. Yep, I'm diving
                into the world of IT, majoring in Computer Science. That's why
                I'm all about tech, especially software engineering. I'm really
                into coding. It's like my go-to thing. Ever since I started
                messing around with code, I've been hooked. I've got a knack for
                problem-solving with lines of code, turning ideas into reality.
                Whether it's building websites, creating apps, or digging into
                data, coding is where I shine. It's not just a skill for me,
                it's something I'm passionate about and something I love to do.
                I believe that every project is an opportunity to learn and
                grow, and I am always excited to embrace new challenges.
              </motion.p>
            </div>
          </div>
        </div>

        <div className="w-full py-5 lg:py-20">
          <div className="py-10 sm:py-16 md:py-20">
            
            {/* Skill */}
            <motion.h1
              className={`text-2xl text-black ${lexendDeca.className} w-full text-center sm:text-3xl md:text-5xl`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              Skilled In
            </motion.h1>
            <SingleUnderline />
            <div className="p-4 sm:flex justify-between items-center pb-10 sm:py-8 md:py-10 gap-5">
              <motion.div
                className="py-4 text-gray-700 md:py-5 w-full"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <h1 className="text-center text-lg font-bold sm:text-xl md:text-2xl">
                  Language & Framework
                </h1>
                <p className="pt-2 text-center text-base sm:text-lg md:text-xl">
                  {skillsData.language.map((e) =>
                    e.skillful ? (
                      <>{"<"}<b>{e.name}</b>{">"}{" "} </>
                    ) : (
                      <>{"<"}{e.name}{">"} </>
                    )
                  )}
                </p>
              </motion.div>
              <motion.div
                className="text-gray-700 w-full"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <h1 className="text-center text-lg font-bold sm:text-xl md:text-2xl">
                  Tools
                </h1>
                <p className="pt-2 text-center text-base sm:text-lg md:text-xl">
                  {skillsData.tools.map((e) =>
                    e.skillful ? (
                      <>
                        {"<"}<b>{e.name}</b>{">"} {" "}
                      </>
                    ) : (
                      <>{"<"}{e.name}{">"} </>
                    )
                  )}
                </p>
              </motion.div>
            </div>

            {/* Education */}
            <motion.h1
              className={`text-2xl text-black ${lexendDeca.className} w-full text-center sm:text-3xl md:text-5xl`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              Education
            </motion.h1>
            <SingleUnderline />
            {/* Education */}
            <div className="p-4 sm:py-8 md:py-5">
              <motion.div
                className="py-2 md:py-5"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <h1 className="text-center text-lg font-bold text-gray-700 sm:text-xl md:text-2xl">
                  Universitas Singaperbangsa Karawang
                </h1>
                <p className="py-2 text-gray-700 font-bold md:text-xl">
                  Computer Science | 2023 - Now
                </p>
                <p className="text-justify text-gray-700 text-base sm:text-lg md:text-xl">
                  Currently, I'm in my second semester at Singaperbangsa
                  University Karawang, majoring in Computer Science. During my
                  time there, I've had loads of opportunities to dive into new
                  tech stuff. It's been all about honing my problem-solving
                  skills, leveling up my programming game, boosting my web
                  development skills, and a whole lot more.
                </p>
              </motion.div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
}