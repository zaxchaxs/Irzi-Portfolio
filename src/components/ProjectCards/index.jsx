import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

export default function ProjectCard({title, desc, srcImg, srcCode, year, tech }) {
    const [isReadMore, setIsReadMore] = useState(desc.length > 100 ? true : false);

    const readMoreHandler = () => {
        setIsReadMore(!isReadMore);
    }

    return (
      <div className="p-2 rounded-2xl bg-gray-600 shadow-xl w-full h-fit md:min-h-[80vh]">
        <div className="rounded-2xl relative h-[25vh] sm:h-[30vh] md:h-[35vh]">
          <Image
            src={srcImg}
            alt={title}
            layout="fill"
            objectFit=""
            className="rounded-2xl w-full"
          />
        </div>
        <div className="p-2 text-slate-200 w-full border-2 border-black">
          <h1 className="p-2 text-lg font-bold">{title}</h1>
          <p>{isReadMore ? desc.slice(0, 100) + "..." : desc}</p>

          {/* <Description desc={desc} /> */}
          {desc.length > 100 ? (
            <ReadMoreBtn
              onReadMoreClick={readMoreHandler}
              isReadMore={isReadMore}
            />
          ) : (
            ""
          )}

          <div className="my-3 w-full align-bottom border-2 border-black">
            <Link
              href={srcCode}
              className="p-1 px-4 bg-slate-200 text-black w-fit rounded-full font-bold"
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
      </div>
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
