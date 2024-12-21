import React from 'react';
import { motion } from "motion/react"
import { easeOut } from 'motion';
import team1 from '../../assets/loitte/tea,m1.jpg'
import team2 from '../../assets/loitte/team (1).jpg'

const Banner = () => {
    return (
        <div className="hero  min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        src={team1}
                        className="max-w-sm mx-auto rounded-3xl rounded-t-3xl rounded-br-3xl shadow-2xl border-l-4 border-b-4 border-blue-400 w-64" />

                    <motion.img
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        src={team2}
                        className="max-w-sm mx-auto rounded-3xl rounded-t-3xl rounded-br-3xl shadow-2xl border-l-4 border-b-4 border-blue-400 w-64" />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{ duration: 2, delay: 2, ease: easeOut, repeat: Infinity }}
                        className="text-5xl font-bold">The Easiest Way <motion.span
                            animate={{ color: ['#7419ff', '#33e9ff', '#3380ff'] }}
                            transition={{ duration: 2, delay: 2, ease: easeOut, repeat: Infinity }}

                        >New Job </motion.span>
                        to Get You </motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;