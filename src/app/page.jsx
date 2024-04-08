'use client'
import ReactFullpage from '@fullpage/react-fullpage';
import { motion } from "framer-motion";
import { Lexend_Deca } from 'next/font/google';

const rowdies = Lexend_Deca({
    weight: "800",
    subsets: ["latin"],
    display: "swap",
})

export default function Home() {

    return(
            <div className='p-10 sm:p-20 pt-20 border-2 border-black'>
                <div>
                    <motion.h1
                        className='text-xl sm:text-2xl text-gray-600 tracking-widest'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                    IRZI RAHMATULLAH
                    </motion.h1>
                </div>

                <div className={`pt-4 sm:pt-7 text-black font-bold ${rowdies.className}`}>
                    <motion.h1
                        className='text-4xl sm:text-6xl tracking-widest'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{x:0, opacity: 1}}
                        transition={{delay: 0.5}}
                    >
                    Full Stack
                    </motion.h1>
                    <motion.h1
                        className='text-4xl sm:text-6xl tracking-widest'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{x:0, opacity: 1}}
                        transition={{delay: 0.5}}
                    >
                    Developer
                    </motion.h1>
                </div>

                <div>
                    <motion.h1
                        className='text-xl sm:text-2xl text-gray-600 tracking-widest pt-4'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit officia ipsam provident, nostrum vero ipsa soluta veritatis voluptatem quisquam excepturi libero, aliquam vel maiores quis esse, voluptas in a totam?
                    </motion.h1>
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