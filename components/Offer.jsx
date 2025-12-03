import Image from "next/image"
import * as motion from "motion/react-client"

const Offer = () => {
    return (
        <section className='mt-48 text-white my-14 relative md:my-20'>

            <div className='flex flex-col justify-center items-center gap-3 text-center mx-14'>
                <motion.h2 initial={{ opacity: 0 }} transition={{ duration: 0.8 }} whileInView={{ opacity: 1 }} viewport={{ delay: 1 }} className="font-bold text-5xl tracking-wide leading-normal md:text-7xl">Our Signatures Coffes</motion.h2>
                <motion.p initial={{ opacity: 0 }} transition={{ duration: 0.8 }} whileInView={{ opacity: 1 }} viewport={{ delay: 1 }} className="text-lg md:w-1/2">Explore our premium coffe blends, each one carefully crafted to deliver rich, bold flavors that will tranforms your coffe</motion.p>
            </div>

            <div className="flex flex-col gap-12 my-14 mx-24 md:grid md:grid-cols-3 ">

                <motion.div initial={{ opacity: 0, y: 150 }} transition={{ duration: 0.8 }} whileInView={{ opacity: 1, y: 0}} viewport={{ delay: 1, once: true }} className="bg-o1 relative rounded-2xl">

                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black/50 backdrop-blur-sm rounded-b-2xl">

                        <div className="flex flex-col justify-evenly h-full px-5 py-3">

                            <h2 className="text-2xl text-white font-bold md:text-xl">Latte Supreme</h2>

                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                    <Image src="/images/star.svg" alt="star" width={20} height={20} />
                                    <p className="text-xl md:text-base">4.8</p>
                                </div>

                                <p className="text-2xl md:text-base">$11.94</p>
                            </div>

                            <div className="flex justify-between items-center">
                                <p className="border-b-2 md:text-sm">Buy Now</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor" className="size-8 text-white md:size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </div>

                        </div>

                    </div>

                </motion.div>

                <motion.div initial={{ opacity: 0, y: 150 }} transition={{ duration: 0.8 }} whileInView={{ opacity: 1, y: 0}} viewport={{ delay: 1, once: true }} className="bg-o2 relative rounded-2xl">

                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black/50 backdrop-blur-sm rounded-b-2xl">

                        <div className="flex flex-col justify-evenly h-full px-5 py-3">

                            <h2 className="text-2xl text-white font-bold md:text-xl">Caramel Cloud</h2>

                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                    <Image src="/images/star.svg" alt="star" width={20} height={20} />
                                    <p className="text-xl md:text-base">4.9</p>
                                </div>

                                <p className="text-2xl md:text-base">$12.99</p>
                            </div>

                            <div className="flex justify-between items-center">
                                <p className="border-b-2 md:text-sm">Buy Now</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor" className="size-8 text-white md:size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </div>

                        </div>

                    </div>

                </motion.div>

                <motion.div initial={{ opacity: 0, y: 150 }} transition={{ duration: 0.8 }} whileInView={{ opacity: 1, y: 0}} viewport={{ delay: 1, once: true }} className="bg-o3 relative rounded-2xl">

                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black/50 backdrop-blur-sm rounded-b-2xl">

                        <div className="flex flex-col justify-evenly h-full px-5 py-3">

                            <h2 className="text-2xl text-white font-bold md:text-xl">Vanilla Ember</h2>

                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                    <Image src="/images/star.svg" alt="star" width={20} height={20} />
                                    <p className="text-xl md:text-base">4.7</p>
                                </div>

                                <p className="text-2xl md:text-base">$14.99</p>
                            </div>

                            <div className="flex justify-between items-center">
                                <p className="border-b-2 md:text-sm">Buy Now</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor" className="size-8 text-white md:size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </div>

                        </div>

                    </div>

                </motion.div>

                <motion.div initial={{ opacity: 0, y: 150 }} transition={{ duration: 0.8 }} whileInView={{ opacity: 1, y: 0}} viewport={{ delay: 1, once: true }} className="bg-o4 relative rounded-2xl">

                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black/50 backdrop-blur-sm rounded-b-2xl">

                        <div className="flex flex-col justify-evenly h-full px-5 py-3">

                            <h2 className="text-2xl text-white font-bold md:text-xl">Expresso Eclipse</h2>

                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                    <Image src="/images/star.svg" alt="star" width={20} height={20} />
                                    <p className="text-xl md:text-base">4.6</p>
                                </div>

                                <p className="text-2xl md:text-base">$11.94</p>
                            </div>

                            <div className="flex justify-between items-center">
                                <p className="border-b-2 md:text-sm">Buy Now</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor" className="size-8 text-white md:size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </div>

                        </div>

                    </div>

                </motion.div>

                <motion.div initial={{ opacity: 0, y: 150 }} transition={{ duration: 0.8 }} whileInView={{ opacity: 1, y: 0}} viewport={{ delay: 1, once: true }} className="bg-o5 relative rounded-2xl">

                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black/50 backdrop-blur-sm rounded-b-2xl">

                        <div className="flex flex-col justify-evenly h-full px-5 py-3">

                            <h2 className="text-2xl text-white font-bold md:text-xl">Maple Morning</h2>

                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                    <Image src="/images/star.svg" alt="star" width={20} height={20} />
                                    <p className="text-xl md:text-base">4.8</p>
                                </div>

                                <p className="text-2xl md:text-base">$12.50</p>
                            </div>

                            <div className="flex justify-between items-center">
                                <p className="border-b-2 md:text-sm">Buy Now</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor" className="size-8 text-white md:size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </div>

                        </div>

                    </div>

                </motion.div>

                <motion.div initial={{ opacity: 0, y: 150 }} transition={{ duration: 0.8 }} whileInView={{ opacity: 1, y: 0}} viewport={{ delay: 1, once: true }} className="bg-o6 relative rounded-2xl">

                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black/50 backdrop-blur-sm rounded-b-2xl">

                        <div className="flex flex-col justify-evenly h-full px-5 py-3">

                            <h2 className="text-2xl text-white font-bold md:text-xl">Cinnamon Drift</h2>

                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                    <Image src="/images/star.svg" alt="star" width={20} height={20} />
                                    <p className="text-xl md:text-base">4.4</p>
                                </div>

                                <p className="text-2xl md:text-base">$13.90</p>
                            </div>

                            <div className="flex justify-between items-center">
                                <p className="border-b-2 md:text-sm">Buy Now</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor" className="size-8 text-white md:size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>

            <p className="text-center text-white border-b-2 w-18 mx-auto">View all</p>

            <Image src="/images/splash-right.png" alt="splash" width={300} height={300} className="absolute -bottom-48 right-0 " />


        </section>
    )
}

export default Offer
