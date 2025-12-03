'use client'

import { useState } from 'react';
import Image from 'next/image';
import { motion } from "motion/react"

const Testimonials = () => {

  // const [prevIndex, setPrevIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [nextIndex, setNextIndex] = useState(0);

  const testimonials = [
    {
      name: "Lety González",
      role: "Profesor",
      image: "/images/people1.jpg",
      rating: 5,
      text: "I absolutely love this coffee! The rich aroma and smooth taste make every cup a delightful experience. Highly recommend to all coffee lovers!"
    },
    {
      name: "Jonh De",
      role: "Teacher",
      image: "/images/people2.jpg", // Asegúrate de tener esta imagen
      rating: 5,
      text: "I Love Spending My Downtime In A Cozy Coffee Shop, Surrounded By The Sweet Aroma Of Freshly Brewed Drinks And Pastries."
    },
    {
      name: "Kamal Hassan",
      role: "Professor",
      image: "/images/people3.jpg",
      rating: 4,
      text: "A perfect place to relax and recharge. The coffee is rich, the ambiance is warm, and the service is impeccable."
    },
    {
      name: "Rakib Khan",
      role: "Designer",
      image: "/images/people4.jpg",
      rating: 5,
      text: "My go-to spot for creative inspiration. Great vibes, great people, and even better espresso."
    }
  ];

    // Calcular índices para cada posición
  const getPrevIndex = (currentIndex) => (currentIndex - 1 + testimonials.length) % testimonials.length;
  const getNextIndex = (currentIndex) => (currentIndex + 1) % testimonials.length;

  const prev = () => {
    setCurrentIndex(prevIndex => getPrevIndex(prevIndex));
  };

  const next = () => {
    setCurrentIndex(nextIndex => getNextIndex(nextIndex));
  };

  const prevIndex = getPrevIndex(currentIndex);
  const nextIndex = getNextIndex(currentIndex);

  // const prevTestimonial = testimonials[prevIndex];
  // const currentTestimonial = testimonials[currentIndex];
  // const nextTestimonial = testimonials[nextIndex];

  return (
    <section className='mt-32 relative'>
      <div className="text-white pt-10 flex flex-col mx-14 gap-5">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} className='text-5xl font-bold text-center leading-14 md:text-7xl md:w-2/3 md:leading-18 md:mx-auto'>Explore the journey of coffe, from farm to cup.</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} className='text-center text-xl leading-8 md:w-2/3 md:mx-auto'>Explore the process -handpicked beans, expertly roasted, and brewed with passion. Witnedd the craftsmanship that brings our sig...</motion.p>
      </div>

      <div>

        <div className="flex justify-center my-10 py-10 bg-testimonials md:grid md:grid-cols-3 md:items-end md:px-20 md:gap-5">

          {/* Back Testimonials */}
          <motion.div  className="bg-[#22170b] text-white w-2/3 rounded-2xl p-7 md:flex flex-col gap-7 items-center md:w-full hidden">

            <Image
              src={testimonials[prevIndex].image}
              alt={testimonials[prevIndex].name}
              width={150}
              height={150}
              className="rounded-full"
            />

            <div className="flex flex-col gap-2 items-center">
              <h2 className='text-2xl font-bold'>{testimonials[prevIndex].name}</h2>
              <p className='text-xl'>{testimonials[prevIndex].role}</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ delay: 1 }} key={`current-${currentIndex}`} className="bg-[#22170b] text-white w-2/3 rounded-2xl p-7 flex flex-col gap-7 items-center md:w-full ">

            <Image
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              width={150}
              height={150}
              className="rounded-full"
            />

            <div className="flex flex-col gap-2 items-center">
              <h2 className='text-2xl font-bold'>{testimonials[currentIndex].name}</h2>
              <p className='text-xl'>{testimonials[currentIndex].role}</p>
            </div>
            <ul className="flex">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/images/star.svg"
                  alt="star"
                  width={20}
                  height={20}
                  className={i < testimonials[currentIndex].rating ? "opacity-100" : "opacity-50"}
                />
              ))}
            </ul>

            <p className='text-center leading-8'>"{testimonials[currentIndex].text}"</p>

          </motion.div>

          {/* Next Testimonials */}
          <motion.div  className="bg-[#22170b] text-white w-2/3 rounded-2xl p-7 md:flex flex-col gap-7 items-center md:w-full hidden">

            <Image
              src={testimonials[nextIndex].image}
              alt={testimonials[nextIndex].name}
              width={150}
              height={150}
              className="rounded-full"
            />

            <div className="flex flex-col gap-2 items-center">
              <h2 className='text-2xl font-bold'>{testimonials[nextIndex].name}</h2>
              <p className='text-xl'>{testimonials[nextIndex].role}</p>
            </div>
          </motion.div>

        </div>


        <div className="flex justify-center gap-5 mb-10">
          <button onClick={prev} className='text-white bg-[#22170b] px-5 py-3 rounded'>&larr;</button>
          <button onClick={next} className='text-white bg-[#22170b] px-5 py-3 rounded'>&rarr;</button>
        </div>

      </div>

      <Image src="/images/splash-right.png" alt="splash" width={300} height={300} className="absolute -bottom-48 right-0 " />

    </section>
  )
}

export default Testimonials
