import Image from "next/image"
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProjectCard({title, desc, srcImg, srcCode, year, tech }) {
    const [isReadMore, setIsReadMore] = useState(desc.length > 100 ? true : false);
    const [sliceDesc, setSliceDesc] = useState(100);

    useEffect(() => {
      if(window.innerWidth < 1024) { 
        setSliceDesc(80); //lg
      } else if(window.innerWidth < 768) {
        setSliceDesc(70); //md
      } else if(window.innerWidth < 640) {
        setSliceDesc(60); //sm
      }
    }, [])

    const readMoreHandler = () => {
        setIsReadMore(!isReadMore);
    }
    return (
      <motion.div 
      className="p-2 rounded-2xl relative bg-gray-600 shadow-2xl shadow-gray-600 w-full min-h-fit sm:min-h-[90vh] md:min-h-[100vh] lg:min-h-[78vh] h-fit"
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ ease: [0.17, 0.67, 0.83, 0.67], delay: 0.3 }}
      >
        <div className="rounded-2xl relative h-[25vh] sm:h-[30vh] md:h-[35vh]">
          <Image
            src={srcImg}
            alt={title}
            layout="fill"
            className="rounded-2xl w-full placeholder:blur"
          />
        </div>
        <div className="p-2 text-slate-200 sm:min-h-[56vh] md:min-h-[65vh] lg:min-h-[40vh] items-end relative flex flex-col justify-between">
          <div>
            <h1 className="p-2 text-lg font-bold">{title}</h1>
            <p>{isReadMore ? desc.slice(0, sliceDesc) + "..." : desc}</p>

            {/* <Description desc={desc} /> */}
            {desc.length > 100 ? (
              <ReadMoreBtn
                onReadMoreClick={readMoreHandler}
                isReadMore={isReadMore}
              />
            ) : (
              ""
            )}
          </div>
          <div className="mt-3 w-full">
            <Link
              href={srcCode}
              className="p-1 px-4 bg-slate-200 text-black w-fit rounded-xl font-bold"
              target="blank"
            >
              View
            </Link>
            <p className="pt-2">
              {tech.map((e) => (
                <>#{e} </>
              ))}
            </p>
          </div>
        </div>
      </motion.div>
    );
}

// Childs Components
const ReadMoreBtn = ({onReadMoreClick, isReadMore}) => {
    return(
        <>
            <button onClick={onReadMoreClick} className="mx-2 underline">
                {isReadMore ? "Read More" : "Show Less"}
            </button>
        </>
    )
}
