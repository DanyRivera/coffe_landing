'use client'

import Image from "next/image"
import { motion } from "motion/react"

const Hero = () => {
    return (
        <section className='h-full relative z-0 md:px-20'>
            <div className="md:grid md:grid-cols-12 md:items-center ">
                <div className="px-5 pt-10 flex flex-col gap-7 md:col-span-6 md:pl-14">
                    <motion.h1 initial={{ opacity: 0 }} transition={{ duration: 0.8 }} animate={{ opacity: 1 }} className="text-white text-5xl font-bold leading-14 md:leading-18 md:w-full md:font-black md:text-7xl">Awaken Your  Senses With  Every Sip</motion.h1>
                    <motion.p initial={{ opacity: 0 }} transition={{ duration: 0.8 }} animate={{ opacity: 1 }} className="text-white w-[80%] font-light md:text-sm md:w-2/3">Discover hand-roasted blends from sutainable farms across the globe</motion.p>
                    <motion.button initial={{ opacity: 0 }} transition={{ duration: 0.8 }} animate={{ opacity: 1 }} className="bg-[#825122] text-white px-4 py-2 rounded md:w-1/3 md:text-sm">Shop Our Roast</motion.button>

                    <div className="flex flex-col gap-3 mt-5 md:flex-row md:gap-5">
                        <motion.ul initial={{ opacity: 0 }} transition={{ duration: 0.8 }} animate={{ opacity: 1 }} className="flex">
                            <Image src="/images/people1.jpg" className="rounded-full" alt="star" width={45} height={45} />
                            <Image src="/images/people2.jpg" className="rounded-full -ml-3" alt="star" width={45} height={45} />
                            <Image src="/images/people3.jpg" className="rounded-full -ml-3" alt="star" width={45} height={45} />
                            <Image src="/images/people4.jpg" className="rounded-full -ml-3" alt="star" width={45} height={45} />
                            <Image src="/images/people5.jpg" className="rounded-full -ml-3" alt="star" width={45} height={45} />
                            <Image src="/images/people1.jpg" className="rounded-full -ml-3" alt="star" width={45} height={45} />
                        </motion.ul>
                        <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.8 }} animate={{ opacity: 1 }} className="flex flex-col gap-1">
                            <ul className="flex">
                                <Image src="/images/star.svg" alt="star" width={20} height={20} />
                                <Image src="/images/star.svg" alt="star" width={20} height={20} />
                                <Image src="/images/star.svg" alt="star" width={20} height={20} />
                                <Image src="/images/star.svg" alt="star" width={20} height={20} />
                                <Image src="/images/star.svg" alt="star" width={20} height={20} />
                            </ul>
                            <p className="text-white md:text-sm md:w-full">Loved by 1000+ customers</p>
                        </motion.div>
                    </div>
                </div>
                <motion.div className="md:col-span-6 md:w-[120%] md:pr-14" initial={{ opacity: 0, y: 100 }} transition={{ duration: 0.8 }} animate={{ opacity: 1, y: 0 }}>
                    <Image
                        src="/images/coffe-header-light.png"
                        alt="coffe"
                        width={1000}
                        height={1000}
                        className="z-10 md:w-full"
                    />
                </motion.div>
            </div>

            <div className="flex flex-col gap-10 justify-center items-center px-5 py-5 md:flex-row ">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} className="bg-[#352112] flex items-center gap-4 md:gap-7 p-5 rounded-2xl w-full">
                    <div>
                        <Image src="/images/cup1.jpg" alt="cup" width={150} height={150} className="rounded-full" />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-white text-base">Brazillian Cerrado</h3>
                            <div className="flex justify-between items-center">
                                <p className="text-white text-base">$16.00</p>
                                <div className="flex gap-3 md:gap-1 items-center">
                                    <Image src="/images/star.svg" alt="star" width={20} height={20} />
                                    <p className="text-white text-sm">4.9</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="text-white underline text-sm">Details</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" className=" text-white size-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} className="bg-[#352112] flex items-center gap-4 md:gap-7 p-5 rounded-2xl w-full">
                    <div>
                        <Image src="/images/cup2.jpg" alt="cup" width={150} height={150} className="rounded-full" />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <div className="flex flex-col gap-2 ">
                            <h3 className="font-bold text-white text-base">Latte Supreme</h3>
                            <div className="flex justify-between items-center">
                                <p className="text-white text-base">$19.00</p>
                                <div className="flex gap-3 items-center">
                                    <Image src="/images/star.svg" alt="star" width={20} height={20} />
                                    <p className="text-white text-sm">4.9</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="text-white underline text-sm">Details</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" className=" text-white size-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} className="bg-[#352112] flex items-center gap-4 md:gap-7 p-5 rounded-2xl w-full">
                    <div>
                        <Image src="/images/cup3.jpg" alt="cup" width={150} height={150} className="rounded-full" />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-white text-base">Cappuccino</h3>
                            <div className="flex justify-between items-center">
                                <p className="text-white text-base">$12.00</p>
                                <div className="flex gap-3 items-center">
                                    <Image src="/images/star.svg" alt="star" width={20} height={20} />
                                    <p className="text-white text-sm">4.9</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="text-white underline text-sm">Details</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor" className="text-white size-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.img
                initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.8 }} animate={{ opacity: 1, x: 0 }}
                src="/images/vector-hero.svg"
                alt="vector"
                width={500}
                height={500}
                className="absolute top-[0] right-0 -z-10"
            />

            <Image src="/images/splash-left.png" alt="splash" width={300} height={300} className="absolute -bottom-40 left-0 " />


        </section>
    )
}

export default Hero
