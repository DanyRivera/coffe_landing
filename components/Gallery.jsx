'use client'

import { useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"

const Gallery = () => {

    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        "/images/g1.webp",
        "/images/g2.webp",
        "/images/g3.webp",
        "/images/g4.webp",
        "/images/g5.webp",
    ]

    const next = () => {
        setCurrentImage((last) => (last + 1) % images.length);
    }

    const back = () => {
        setCurrentImage((anterior) =>
            anterior === 0 ? images.length - 1 : anterior - 1
        )
    };

    return (
        <section className="relative md:mt-14">
            <div className="text-white pt-10 flex flex-col mx-5 md:mx-14 gap-5">
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} className="text-4xl font-bold text-center leading-14 md:text-7xl md:leading-20 md:w-4/5 md:mx-auto">Explore the journey of coffe, from farm to cup.</motion.h2>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} className="text-center text-base md:text-xl leading-8 md:w-1/2 md:mx-auto">Explore the process -handpicked beans, expertly roasted, and brewed with passion. Witnedd the craftsmanship that brings our sig...</motion.p>
            </div>

            <div className="flex items-center gap-3 md:gap-5 justify-between my-14 mx-2 md:m-14 md:hidden">
                <button onClick={back} className="bg-[#825122] text-white px-3 py-2 rounded-full">&larr;</button>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} key={currentImage} className="relative w-[300px] h-[400px] md:w-96 md:h-96 overflow-hidden rounded-lg shadow-xl">
                    <Image
                        src={images[currentImage]}
                        alt={`Imagen ${currentImage + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={currentImage === 0}
                    />
                </motion.div>
                <button onClick={back} className="bg-[#825122] text-white px-3 py-2 rounded-full">&rarr;</button>
            </div>

            <div className="flex mt-6 space-x-2 justify-center mb-10 md:hidden">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-3 h-3 rounded-full ${index === currentImage ? 'bg-[#825122]' : 'bg-gray-300'
                            }`}
                        aria-label={`Ir a imagen ${index + 1}`}
                    />
                ))}
            </div>

            <div className="hidden md:grid md:grid-cols-3 md:mx-20 md:gap-x-5 md:mt-10">
                <div>
                    <Image
                        src="/images/g4.webp"
                        alt="Gallery"
                        width={500}
                        height={500}
                        className="h-full object-cover rounded md:hover:scale-95 md:hover:transition-all"
                    />
                </div>
                <div className="md:flex md:flex-col md:gap-y-5">
                    <Image
                        src="/images/g1.webp"
                        alt="Gallery"
                        width={500}
                        height={500}
                        className="h-full object-cover rounded md:hover:scale-95 md:hover:transition-all"
                    />
                    <Image
                        src="/images/g2.webp"
                        alt="Gallery"
                        width={500}
                        height={500}
                        className="h-full object-cover rounded md:hover:scale-95 md:hover:transition-all"

                    />
                    <Image
                        src="/images/g3.webp"
                        alt="Gallery"
                        width={500}
                        height={500}
                        className="h-full object-cover rounded md:hover:scale-95 md:hover:transition-all"
                    />
                </div>
                <div className="md:row-span-2">
                    <Image
                        src="/images/g5.webp"
                        alt="Gallery"
                        width={500}
                        height={500}
                        className="h-full object-cover rounded md:hover:scale-95 md:hover:transition-all"
                    />
                </div>
            </div>

            <Image src="/images/splash-left.png" alt="splash" width={300} height={300} className="absolute -bottom-48 left-0 " />

        </section>
    )
}

export default Gallery
