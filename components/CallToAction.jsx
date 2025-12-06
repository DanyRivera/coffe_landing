import Image from 'next/image';
import * as motion from "motion/react-client"


const CallToAction = () => {
    return (
        <section className='bg-[#3a2716e9] mt-10 flex flex-col gap-4 relative h-[1300px] md:flex-row md:items-center md:py-5 md:h-auto md:px-20'>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} src="/images/exp1.webp" alt="exp" width={400} height={400} className="mx-auto absolute left-5 md:left-22 -top-14 md:static" /> 

            <div className="text-white pt-10 flex flex-col mx-5 md:mx-14 gap-5 relative top-1/3 md:static">
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} className='text-4xl leading-12 font-bold text-center md:leading-16 md:text-5xl'>Ready to Experience the Best Coffe?</motion.h2>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} className='text-center leading-8 text-base'>Take teh first step towards discovering your new favorite brew.</motion.p>
                <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} className='bg-[#825122] text-white px-4 py-4 rounded font-bold w-1/3 mx-auto text-sm md:px-2 md:py-3 '>Shop Now</motion.button>
            </div>

            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} src="/images/exp2.webp" alt="exp" width={400} height={400} className="mx-auto absolute bottom-10 md:bottom-2 left-0 md:left-14 md:static " /> 
        </section>
    )
}

export default CallToAction
