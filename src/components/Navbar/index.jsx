'use client'
import Image from "next/image"
import Link from "next/link"
import homeIcon from "@/../public/icon/home.svg" 
import aboutIcon from "@/../public/icon/person-circle.svg"
import projectsIcon from "@/../public/icon/project-icon.svg"
import contactIcon from "@/../public/icon/mail.svg"
import { useState } from "react"
import { motion } from "framer-motion";

export default function Navbar() {
    const [isNavOpen, setisNavOpen] = useState(false);

    // function handler
    const humbergerHandler = () => {
        setisNavOpen(!isNavOpen);
    };

    return (
        <>
            <nav className="w-full fixed sm:px-10 md:px-16 backdrop-blur-sm border-2 border-red-400">
				<div className="relative flex justify-between">
					<div className={`px-16 text-3xl p-4 duration-500 ease-in-out z-[50] ${isNavOpen ? "text-white" : "text-black" } `}>
						<h1>Irzi</h1>
					</div>
					<motion.div
						className="bg-gray-600 hidden sm:flex items-center p-4 gap-8 rounded-b-xl "
						initial={{y: -50, opacity: 0}}
						whileInView={{y:0, opacity: 1}}
						transition={{delay: 0.7}}
					>
						<IconBtn source={homeIcon} />
						<IconBtn source={aboutIcon} />
						<IconBtn source={projectsIcon} />
						<IconBtn source={contactIcon} />

					</motion.div>
					<div className="sm:hidden items-center flex z-[50] px-16">
						{/* <IconBtn source={contactIcon} /> */}
						<HumbergerBtn isNavOpen={isNavOpen} onHumBtnClick={humbergerHandler} />
					</div>
					<div className="absolute top-0 h-screen" >
						<NavItems isNavOpen={isNavOpen} setIsNavOpen={setisNavOpen} />
					</div>
				</div>
            </nav>
        </>
    )
};

// Child Components
function IconBtn({source}) {
    return (
        <>
            <Link className="hover:scale-110 active:scale-100" href={"#"}>
                <Image className="h-6 rounded-md w-fit" src={source}  />
            </Link>
        </>
    )
};

function HumbergerBtn({isNavOpen, onHumBtnClick}) {
    return(
        <button className=" button-three" aria-controls="primary-navigation" aria-expanded={isNavOpen ? "true" : "false"} onClick={onHumBtnClick} >
            <svg stroke="var(--button-color)" fill="none" className="hamburger w-10" viewBox="-10 -10 120 120">
                <path className="line" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70">
                </path>
            </svg>
        </button>
    )
}

function NavItems({ isNavOpen, setIsNavOpen }) {
	const handleItemClick = () => {
		setIsNavOpen(false);
	};
	const navVariant = {
		open: {
			clipPath: `circle(1920px at calc(100% - 40px) 40px)`,
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 40,
			},
		},
		closed: {
			clipPath: "circle(0px at calc(100% - 120px) 0px)",
			transition: {
				delay: 0.5,
				type: "spring",
				stiffness: 400,
				damping: 30,
			},
		},
	};

    navVariant.open = {
        clipPath: `circle(2444px at calc(100% - 40px) 40px)`,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
    navVariant.closed = {
        clipPath: "circle(0px at calc(100% - 85px) 35px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    };

	const itemVariants = {
		open: {
			opacity: 1,
			y: 0,
			rotate: 0,
		},
		closed: {
			opacity: 0,
			y: -40,
			rotate: 0,
		},
	};

	return (
		<>
			<motion.nav className={`fixed z-[45] items-center justify-center backdrop-blur-sm transition-all w-screen ease duration-700 overflow-hidden`} variants={navVariant} animate={isNavOpen ? "open" : "closed"} initial={false}>
				<div className="relative  backdrop-blur-sm opacity-95 flex flex-col items-center space-x-8 w-screen h-screen bg-gray-700">
					<div className="flex flex-col items-center space-y-8 my-auto mx-0">
						<motion.h1 animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.5, duration: 1 }} className="text-6xl font-bold text-white ">
                            Menu
                        </motion.h1>
						<Link href={"/"}>
							<div onClick={handleItemClick} className="text-2xl font-bold text-white" variants={itemVariants} animate={isNavOpen ? "open" : "closed"} delay={1}> 
								<motion.h2 className="text-white" variants={itemVariants} animate={isNavOpen ? "open" : "closed"}>
                                    Home
                                </motion.h2>
							</div>
						</Link>
						<Link href="/about">
							<div onClick={handleItemClick} className="text-2xl font-bold text-white" variants={itemVariants} animate={isNavOpen ? "open" : "closed"} delay={1.2}>
								<motion.h2 className="text-white" variants={itemVariants} animate={isNavOpen ? "open" : "closed"}>
									About
								</motion.h2>
							</div>
						</Link>
						<Link href="/projects">
							<div onClick={handleItemClick} className="text-2xl font-bold text-white" variants={itemVariants} animate={isNavOpen ? "open" : "closed"} delay={1.3}>
								<motion.h2 className="text-white" variants={itemVariants} animate={isNavOpen ? "open" : "closed"}>
									Projects
								</motion.h2>
							</div>
						</Link>
						<a href="/#contact">
							<div onClick={handleItemClick} className="text-2xl font-bold text-white" variants={itemVariants} animate={isNavOpen ? "open" : "closed"} delay={1.4}>
								<motion.h2 className="text-white" variants={itemVariants} animate={isNavOpen ? "open" : "closed"}>
									Contact
								</motion.h2>
							</div>
						</a>
					</div>
				</div>
			</motion.nav>
		</>
	);
};

