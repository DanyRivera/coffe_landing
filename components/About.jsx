import * as motion from "motion/react-client"


const About = () => {
    return (
        <section className="mt-52 text-white">

            <div className="mx-5 flex flex-col gap-8 md:ml-28 md:gap-4 md:absolute ">
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} className="text-4xl font-bold md:font-black md:text-7xl">Our Story</motion.h2>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} className="text-base md:text-lg">From Passion to Perfection: The Journey of Café Dany</motion.p>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} className="text-base md:text-lg md:w-1/2">At Café Dany, coffe isn't just a drink  -it's a passion, a ritual, and an experience. Our journey began in 1954, when a group lovers came together with a simple mission: to create exceptinal coffe that people could truly enjoy, share, and savor every day...</motion.p>

                <div className="flex flex-col gap-4 md:mt-24 md:gap-8">
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} className="text-base font-bold md:text-2xl md:w-1/4">Want to experience the quality and care behind every cup?</motion.p>
                    <div>
                        <motion.button initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ delay: 1 }} className="bg-[#825122] py-3 px-7 rounded font-bold block text-sm">Shop Now</motion.button>
                    </div>
                </div>

            </div>

            <div className="md:flex md:justify-end">
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} src="/images/about.png" alt="splash" width={800} height={800} className="md:w-10/12 " />
            </div>

        </section>
    )
}

export default About
