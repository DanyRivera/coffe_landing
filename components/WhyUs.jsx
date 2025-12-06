import Image from "next/image"
import * as motion from "motion/react-client"

const WhyUs = () => {
    return (
        <div className='mt-42 relative'>

            <div className="text-white pt-10 flex flex-col mx-5 md:mx-14 gap-5">
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} className="text-5xl font-bold text-center leading-14 md:text-7xl">Why Choose Us.</motion.h2>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} className="text-center leading-8 text-base">From been to cup, we ensure every sip is a premium experience.</motion.p>
            </div>

            <div className="flex flex-col gap-12 mt-10 mb-32 md:flex-row md:gap-10 md:mx-20 ">

                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} className="text-white mx-5 md:w-2/3 md:mx-auto flex flex-col gap-3 md:gap-7 border-l border-white/50 pl-7 md:justify-between">
                    <Image src="/images/why1.webp" alt="splash" width={300} height={300} className="w-full rounded" />
                    <h3 className="text-lg md:text-2xl font-bold">Premium Quality Beans</h3>
                    <p className="text-base">We source only the finest coffee beans from sustainable farms around the world, flavorful, and ethically produced.</p>
                    <div>
                        <button className="border rounded-2xl py-2 px-4 text-base">&rarr;</button>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} className="text-white mx-5 md:w-2/3 md:mx-auto flex flex-col gap-3 md:gap-7 border-l border-white/50 pl-7 md:justify-between">
                    <Image src="/images/why2.webp" alt="splash" width={300} height={300} className="w-full rounded" />
                    <h3 className="text-lg md:text-2xl font-bold">Freshness Guaranteed</h3>
                    <p className="text-base">Our beans are roasted to perfection and shipped directly to your door, ensuring the freshest possible coffe every time.</p>
                    <div>
                        <button className="border rounded-2xl py-2 px-4 text-base">&rarr;</button>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} className="text-white mx-5 md:w-2/3 md:mx-auto flex flex-col gap-3 md:gap-7 border-l border-white/50 pl-7 md:justify-between">
                    <Image src="/images/why3.webp" alt="splash" width={300} height={300} className="w-full rounded" />
                    <h3 className="text-lg md:text-2xl font-bold">Variety of Options</h3>
                    <p className="text-base">Whether you're fan of bold espressos, smooth lattes, or refreshing cold brews, we have a coffe to suit every taste.</p>
                    <div>
                        <button className="border rounded-2xl py-2 px-4 text-base">&rarr;</button>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} className="text-white mx-5 md:w-2/3 md:mx-auto flex flex-col gap-3 md:gap-7 border-l border-white/50 pl-7 md:justify-between">
                    <Image src="/images/why4.webp" alt="splash" width={300} height={300} className="w-full rounded" />
                    <h3 className="text-lg md:text-2xl font-bold">Eco-Friendly Packaging</h3>
                    <p className="text-base">Our packaging is 100% recyclable, and we're working hard to reduce our carbon footprint every step of the way.</p>
                    <div>
                        <button className="border rounded-2xl py-2 px-4 text-base">&rarr;</button>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default WhyUs
