'use client'
import Image from "next/image"

// icons
import homeIcon from "@/../public/icon/home.svg" 
import aboutIcon from "@/../public/icon/person-circle.svg"
import projectsIcon from "@/../public/icon/project-icon.svg"
import contactIcon from "@/../public/icon/mail.svg"
import backArrow from "@/../public/icon/arrow-back.svg"

import { useState } from "react"
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link"


export default function Navbar({isHomePage}) {
	const [isNavOpen, setisNavOpen] = useState(false);
	const route = useRouter();

    // function handler
    const humbergerHandler = () => {
        setisNavOpen(!isNavOpen);
    };
	const handlerMoveSection = (path, router) => {
		if(isHomePage) {
			fullpage_api.moveTo(path);
			fullpage_api.getActiveSection();
			setisNavOpen(false);
		}
		route.push(router)

	};

    return (
        <>
            <nav className="w-full fixed sm:px-10 md:px-16 backdrop-blur-sm z-50">
				<div className="relative flex justify-between">
					<div className={`mx-6 text-3xl p-4 duration-500 relative ease-in-out z-[50] justify-center items-center flex ${isNavOpen ? "text-white" : "text-black" } `}>
						<motion.div
							className={`absolute -left-5 ${isHomePage || isNavOpen ? "hidden" : ""}`}
							initial={{scale: 1}}
							whileHover={{scale: 1.2}}
							whileTap={{scale: 1}}
						>
							<Link href={"/"}>
								<Image src={backArrow} width={50} height={50} alt="back route icon" />
							</Link>
						</motion.div>
						<h1>Irzi</h1>
					</div>
					<motion.div
						className="bg-gray-600 hidden sm:flex items-center p-4 gap-8 rounded-b-xl "
						initial={{y: -50, opacity: 0}}
						whileInView={{y:0, opacity: 1}}
						transition={{delay: 0.4}}
					>
						<IconBtn source={homeIcon} delay={0.5} path={1} route={"/#home"} onIconClick={handlerMoveSection} />
						<IconBtn source={aboutIcon} delay={0.55} path={2} route={"/#about"} onIconClick={handlerMoveSection} />
						<IconBtn source={projectsIcon} delay={0.6} path={3} route={"/#projects"} onIconClick={handlerMoveSection} />
						<IconBtn source={contactIcon} delay={0.65} path={4} route={"/#contacts"} onIconClick={handlerMoveSection} />

					</motion.div>
					<div className="sm:hidden items-center flex z-[50] px-10">
						{/* <IconBtn source={contactIcon} /> */}
						<HumbergerBtn isNavOpen={isNavOpen} onHumBtnClick={humbergerHandler} />
					</div>
					<div className="absolute top-0 h-screen" >
						<NavItems isNavOpen={isNavOpen} setIsNavOpen={setisNavOpen} onButtonClick={handlerMoveSection} />
					</div>
				</div>
            </nav>
        </>
    )
};

// Child Components
function IconBtn({source, delay, path=1, onIconClick, route}) {
    return (
		<motion.div
			className="cursor-pointer"
			whileTap={() => onIconClick(path, route)}
			initial={{y: -10, opacity: 0, scale: 0.5}}
			whileInView={{y:0, opacity: 1, scale: 1}}
			transition={{delay: delay}}
			whileHover={{
				scale: 1.2,
				transition: { duration: 0.1 },

			  }}
		>
			<Image className="h-6 rounded-md w-fit" src={source} alt="Icon Button" />
		</motion.div>
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

function NavItems({ isNavOpen, setIsNavOpen, onButtonClick}) {
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
        clipPath: "circle(0px at calc(100% - 61px) 35px)",
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
						<MenuButton onButtonClick={onButtonClick} delay={1.1} menu={"Home"} itemVariants={itemVariants} isNavOpen={isNavOpen} routes={"/#home"} index={1} />
						<MenuButton onButtonClick={onButtonClick} delay={1.2} menu={"About"} itemVariants={itemVariants} isNavOpen={isNavOpen} routes={"/#about"} index={2} />
						<MenuButton onButtonClick={onButtonClick} delay={1.3} menu={"Projects"} itemVariants={itemVariants} isNavOpen={isNavOpen} routes={"/#projects"} index={3} />
						<MenuButton onButtonClick={onButtonClick} delay={1.4} menu={"Contact"} itemVariants={itemVariants} isNavOpen={isNavOpen} routes={"/#contact"} index={4} />
					</div>
				</div>
			</motion.nav>
		</>
	);
};

function MenuButton({onButtonClick, delay, menu, itemVariants, isNavOpen, routes, index}) {
	return(
		<div onClick={() => onButtonClick(index, routes)} className="cursor-pointer text-2xl font-bold text-white" variants={itemVariants} animate={isNavOpen ? "open" : "closed"} delay={delay}>
			<motion.h2 className="text-white" variants={itemVariants} animate={isNavOpen ? "open" : "closed"}>
				{menu}
			</motion.h2>
		</div>
	)
}