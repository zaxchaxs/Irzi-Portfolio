'use client'

import { motion } from "framer-motion";
import { useState } from "react";

// Components
import Image from "next/image";
import Link from "next/link";

// Icons
import githubIcon from "@/../public/icons/github-icon.png";

export default function ProjectPoster ({data}) {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  return (
    <div className={`flex items-center w-full object-cover`}>
      {/* github icon */}
      <motion.div
        className="absolute top-2 right-2 sm:w-14 w-8 z-10"
        initial={{ x: 0, scale: 0, opacity: 0 }}
        whileInView={{ x: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
        whileHover={{ scale: 1.2, transition: { delay: 0, type: "spring" } }}
      >
        <Link href={data.source} target="blank">
          <Image src={githubIcon} alt="githubIcon" width={50} height={50} />
        </Link>
      </motion.div>

      <motion.div
        className={`flex items-center relative w-full object-cover group overflow-hidden `}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.25 }}
      >
        <div className="w-full -bottom-72 group-hover:bottom-0 transition-all ease-in-out duration-300 absolute h-fit bg-black z-10 rounded-t-xl sm:rounded-t-2xl p-2 px-4 sm:p-4 overflow-hidden bg-opacity-60">
          <div className="w-full text-slate-100">
            <h1 className="font-bold text-base sm:text-xl">{data.title}</h1>
            <p className="text-left">
              {data.desc.length > 40 ? `${data.desc.slice(0, 100)}...` : data.desc}
            </p>
          </div>
        </div>
        <Image
          onLoad={() => setIsImgLoaded(true)}
          src={data.image}
          alt={data.title}
          width={500}
          height={300}
          className={`${isImgLoaded ? 'blur-0' : 'blur-md'} w-full min-w-[70] object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all ease-in-out duration-300`}
          placeholder="blur"
          blurDataURL={data.image}
        />
      </motion.div>

      {/* Button */}
      <motion.div
        className={`absolute z-10 top-4 left-4 sm:top-5 sm:left-8 ${
          data.preview ? "" : "hidden"
        }`}
        initial={{ scale: 0, y: 0, opacity: 0 }}
        whileInView={{
          scale: 1,
          y: 0,
          opacity: 1,
          transition: { delay: 0.5, type: "spring" },
        }}
        whileHover={{ scale: 1.2 }}
      >
        <div className="cursor-pointer bg-gray-600 text-white font-bold p-1 px-2 sm:p-1 sm:px-4 text-xxs sm:text-sm rounded-lg sm:rounded-xl border-2 border-gray-600 hover:bg-gray-200 hover:text-gray-600 ease-in-out duration-300">
          <Link href={data.preview ? data.preview : "#"} target="blank">
            Preview
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
