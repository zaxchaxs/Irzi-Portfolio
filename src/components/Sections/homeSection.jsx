'use client'
import ReactFullpage from '@fullpage/react-fullpage';
import Image from "next/image"
import { motion } from "framer-motion";
import mySelf from "../../../public/img/myself.jpg"
import HomeButton from '@/components/Button/homeButton';

export default function HomeSection({fontLexend}) {
    return (
        <div className='p-10 sm:p-24 mx-auto pt-20 md:flex justify-between overflow-hidden'>
            <motion.div
                className='border-2 border-black md:hidden items-center justify-center flex'
                initial={{y: -100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{delay: 0.3, type: "spring"}}

            >
                <Image src={mySelf} width={200} height={200} alt='Irzi Rahmatullah' className='h-40 w-40 rounded-full object-cover items-center justify-center' />
            </motion.div>
            <div className='p-4 sm:p-2 w-full border-2 border-black'>
                <div className='justify-center flex md:inline'>
                    <motion.h1
                        className='text-xl sm:text-2xl text-gray-600 tracking-widest'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{delay: 0.3, type: "spring"}}
                    >
                    IRZI RAHMATULLAH
                    </motion.h1>
                </div>
                <div className={`md:text-left mx-auto w-full text-center p-4 m-4 md:block sm:mt-7 border-2 border-black text-black font-bold ${fontLexend}`}>
                    <motion.h1
                        className='text-4xl sm:text-6xl'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{x:0, opacity: 1}}
                        transition={{delay: 0.5, type: "spring"}}
                    >{`Full Stack`}
                    </motion.h1>
                    <motion.h1
                        className='text-4xl sm:text-6xl'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{x:0, opacity: 1}}
                        transition={{delay: 0.5, type: "spring"}}
                    >{`Developer`}
                    </motion.h1>
                </div>
                <motion.div 
                    className='text-base text-center sm:text-left sm:text-xl text-gray-600 tracking-widest'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{delay: 0.7, type: "spring"}}
                >
                    <div className='py-4 sm:py-6'>
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit officia ipsam provident, nostrum vero ipsa soluta veritatis voluptatem quisquam excepturi libero, aliquam vel maiores quis esse, voluptas in a totam?</h1>
                    </div>
                    <div className='p-2 sm:p-4 flex justify-center items-center sm:block'>
                        <HomeButton value="Download CV" background={"bg-gray-600"} textCol={"text-white"} bgHover="hover:bg-white" textHov={"hover:text-gray-600"} />
                        <HomeButton value="Contact Me" background='bg-white' textCol="text-gray-600" bgHover={"hover:bg-gray-600"} textHov={"hover:text-white"} />
                    </div>
                </motion.div>
            </div>
            <motion.div
                className='hidden md:block w-auto h-auto border-2 border-black'
                initial={{x: 200, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{delay: 0.7, type: "spring"}}

            >
                <Image src={mySelf} width={600} height={600} className='w-72 h-72 rounded-full object-cover' alt='Irzi Rahmatullah' />
            </motion.div>
        
        

                {/* <ReactFullpage 
            render={({state, fullpageAPI}) => {
                <ReactFullpage.Wrapper>
                    <div className='section'>
                        <h1>Testing</h1>
                    </div>
                    <div className='section'>
                        <h1>testing2</h1>
                    </div>
                </ReactFullpage.Wrapper>
            }}
            {...fullpageOptions}
        /> */}
        </div>
    )
}