import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

export default function ProjectCard({title, desc, srcImg, srcCode, year, tech }) {
    const [isReadMore, setIsReadMore] = useState(false);

    return (
      <div className="p-2 rounded-2xl bg-gray-600 shadow-xl">
        <div className="rounded-2xl relative h-[25vh] sm:h-[30vh] md:h-[35vh]">
          <Image
            src={srcImg}
            alt={title}
            layout="fill"
            objectFit=""
            className="rounded-2xl w-full"
          />
        </div>
        <div className="p-2 text-slate-200">
          <h1 className="p-2 text-lg font-bold">{title}</h1>
          <p>{desc.length > 100 ? desc.slice(0, 100) + "..." : desc}</p>
          
          <div className="my-2" >
            <Link href={srcCode} className="p-1 px-4 bg-slate-200 text-black w-fit rounded-full font-bold" target="blank" >View</Link>
          </div>

          <div className="py-2">
            <p>
                {tech.map(e => <>#{e} </>)}
            </p>
          </div>
        </div>
      </div>
    );
}

const ReadMoreBtn = () => {
    return(
        <>
            <button>Read More</button>
        </>
    )
}