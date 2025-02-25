'use client'

// Compo
import HomeButton from '@/components/Button/homeButton';
import Image from "next/image"
import DoubleUnderline from '../Underlines/doubleUnderline';

import Link from "next/link";
import { motion } from "framer-motion";
import mySelf from "../../../public/img/myself.jpg"
import mySelf2 from "../../../public/img/newMyself.jpg"


export default function HomeSection({fontLexend}) {
    return (
      <div className="p-10 sm:px-24 mx-auto py-20 md:flex justify-between overflow-hidden">
        <motion.div
          className=" md:hidden items-center py-10 justify-center flex"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
        >
          <Image
            alt="Irzi Rahmatullah"
            src={mySelf2}
            width={200}
            height={200}
            className="h-40 w-40 grayscale placeholder:blur hover:grayscale-0 duration-300 rounded-full object-cover items-center justify-center"
          />
        </motion.div>
        <div className="p-4 sm:p-2 w-full ">
          <div className="justify-center flex md:inline">
            <motion.h1
              className="text-xl sm:text-2xl text-gray-600 tracking-widest"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, type: "spring" }}
            >
              IRZI RAHMATULLAH
            </motion.h1>
          </div>
          <div
            className={`md:text-left mx-auto md:mx-0 w-fit text-center p-4 m-4 md:block sm:mt-7  text-black font-bold ${fontLexend}`}
          >
            <motion.h1
              className="text-4xl sm:text-6xl"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              {`Full Stack`}
            </motion.h1>
            <motion.h1
              className="text-4xl sm:text-6xl"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              {`Developer`}
            </motion.h1>
            <DoubleUnderline />
          </div>
          <motion.div
            className="text-base text-center sm:text-left sm:text-xl text-gray-600 tracking-widest"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            <div className="py-4">
              <p>
                Hi! I am a junior fullstack web developer. I love to exploring
                the latest technologies and learning about new ways to improve
                my skills.
              </p>
            </div>
            <div className="p-2 sm:p-4 flex justify-center items-center md:justify-start">
              <Link href={"/docs/Irzi_Rahmatullah-CV.pdf"}>
                <HomeButton
                  value="Download CV"
                  background={"bg-gray-600"}
                  textCol={"text-white"}
                  bgHover="hover:bg-gray-200"
                  textHov={"hover:text-gray-600"}
                />
              </Link>
              <div
                onClick={() => {
                  fullpage_api.moveTo(4);
                  fullpage_api.getActiveSection();
                }}
              >
                <HomeButton
                  value="Contact Me"
                  background="bg-gray-200"
                  textCol="text-gray-600"
                  bgHover={"hover:bg-gray-600"}
                  textHov={"hover:text-white"}
                />
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="hidden md:flex w-auto h-auto items-center"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
        >
          <Image
            src={mySelf}
            width={600}
            height={600}
            className="w-96 h-96 grayscale placeholder:blur hover:grayscale-0 duration-300 rounded-3xl object-cover"
            alt="Irzi Rahmatullah"
          />
        </motion.div>
      </div>
    );
}