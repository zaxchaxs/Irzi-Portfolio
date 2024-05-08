
// Components
import Link from "next/link";
import Image from "next/image";
import DoubleUnderline from '../Underlines/doubleUnderline';


import { motion } from "framer-motion";
import randomPict from "@/../public/img/randomPict/blueContactPict.jpeg"
// Icons
import emailIcon from "@/../public/icons/contacts/email-icon.png";
import githubIcon from "@/../public/icons/contacts/github-icon.png";
import linkedinIcon from "@/../public/icons/contacts/linkedin-icon.png";
import instaIcon from "@/../public/icons/contacts/instagram-icon.png";
import facebookIcon from "@/../public/icons/contacts/facebook-icon.png";
import Footer from "../Footer";



export default function ContactSection({fontLexend}) {
    return(
        <div className="w-full mx-auto p-10 sm:px-24 pt-20 md:flex items-center justify-between relative border-green-500">
            <motion.div
                className="md:w-[102vh] md:min-w-[50vh] mx-auto w-full z-0 relative"
                initial={{x: -100, opacity: 0}}
                whileInView={{x:0, opacity: 1}}
                transition={{type:"spring", delay: 0.4}}
            >
                <Image src={randomPict} height={500} width={500} alt="random pict" className="z-0 grayscale hover:grayscale-0 h-[40vh] w-full md:h-auto object-fill transition-all ease-in-out duration-300 rounded-md" />
            </motion.div>
            <div className="md:p-4 p-2 w-full z-10 relative -mt-12 sm:-mt-14 md:mt-0 ">
                <div className={`flex md:block justify-center mx-auto md:mx-0 w-fit md:text-left text-center md:p-4 md:mt-0 text-black font-bold ${fontLexend}`} >
                    <motion.h1
                        className='text-2xl sm:text-4xl md:text-6xl bg-slate-200 w-fit px-6 rounded-md bg-opacity-60 md:bg-transparent '
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{delay: 0.3, type: "spring"}}
                    >
                    Let's Connect
                    </motion.h1>
                    <DoubleUnderline isContactSec={true} />
                </div>
                <div className='w-full text-base py-2 sm:py-6 px-8 text-center md:text-left sm:text-xl text-gray-600 tracking-widest'>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{delay: 0.4, type: "spring"}}
                    >
                        Feel free to get in touch with me and say hello!. You can reach me through the contact form below. Looking forward to connecting with you!
                    </motion.p>

                    {/* icons */}
                    <div className="w-full flex justify-center md:justify-start items-center p-4 gap-2 md:gap-6 md:my-6">
                        <IconSosmed srcImage={emailIcon} delay={0.4} alter={"email"} srcLink={"mailto:irzirahmatullah@gmail.com"} />
                        <IconSosmed srcImage={githubIcon} delay={0.5} alter={"github"} srcLink={"https://github.com/zaxchaxs"} />
                        <IconSosmed srcImage={linkedinIcon} delay={0.6} alter={"linked in"} srcLink={"https://www.linkedin.com/in/irzi-rahmatullah-65a44b294"} />
                        <IconSosmed srcImage={instaIcon} delay={0.7} alter={"instagram"} srcLink={"https://www.instagram.com/irzirhmtllh"} />
                        <IconSosmed srcImage={facebookIcon} delay={0.8} alter={"facebook"} srcLink={"https://web.facebook.com/Irzi.meghankhapthap/"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

function IconSosmed({srcImage, delay, alter, srcLink}) {
    return(
        <motion.div
            className="w-fit bg-gray-400 rounded-full p-2 group"
            initial={{scale: 0, opacity: 0}}
            whileInView={{scale: 1, opacity: 1, transition:{delay: delay, type:"spring"}}}
            whileHover={{scale: 1.2, transition:{type: "spring"}}}
            whileTap={{scale: 1}}
        >
            <Link href={srcLink} target="blank" >
                <Image alt={alter} src={srcImage} width={40} height={40} className="grayscale group-hover:grayscale-0 transition-all ease-in-out duration-300 min-w-6" />
            </Link>
        </motion.div>
    )
}