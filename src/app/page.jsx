'use client'
import ReactFullpage from '@fullpage/react-fullpage';
import Image from "next/image"
import { motion } from "framer-motion";
import { Lexend_Deca } from 'next/font/google';
import mySelf from "../../public/img/myself.jpg"

const rowdies = Lexend_Deca({
    weight: "800",
    subsets: ["latin"],
    display: "swap",
})

export default function Home() {

    return(
            <div className='p-10 sm:p-28 mx-auto pt-20 border-2 border-black sm:flex justify-between items-center'>
                <motion.div
                    className='border-2 border-black sm:hidden items-center justify-center flex'
                    initial={{y: -100, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{ delay: 0.3}}
                >
                    <Image src={mySelf} width={200} height={200} className='rounded-full object-cover items-center justify-center' />
                </motion.div>
                <div className='section1'>
                    <div className='justify-center flex sm:inline'>
                        <motion.h1
                            className='text-xl sm:text-2xl text-gray-600 tracking-widest'
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                        IRZI RAHMATULLAH
                        </motion.h1>
                    </div>
                    <div className={`pt-4 sm:pt-7 text-black font-bold flex justify-center items-center sm:inline ${rowdies.className}`}>
                        <motion.h1
                            className='text-4xl sm:text-6xl tracking-widest'
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{x:0, opacity: 1}}
                            transition={{delay: 0.5}}
                        >{`Full Stack\nDeveloper`}
                        </motion.h1>
                    </div>
                    <div>
                    <motion.h1
                        className='text-xl sm:text-xl text-gray-600 tracking-widest pt-4'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit officia ipsam provident, nostrum vero ipsa soluta veritatis voluptatem quisquam excepturi libero, aliquam vel maiores quis esse, voluptas in a totam?
                    </motion.h1>
                    </div>
                </div>
                <div className='border-2 border-black hidden sm:inline w-auto h-auto'>
                    <Image src={mySelf} width={600} height={600} className='rounded-full h-full object-cover' />
                </div>
               

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