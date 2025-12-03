'use client'

import Image from "next/image"
import { useState, useEffect } from "react";
import { motion } from "motion/react"

const Header = () => {

  const [showMenuMobil, setShowMenuMobil] = useState(false);
  const [menuIsAmount, setMenuIsAmount] = useState(false);

  useEffect(() => {
    if (showMenuMobil) setMenuIsAmount(true);
  }, [showMenuMobil])

  const handleCloseMenu = () => {
    setShowMenuMobil(false);
    setTimeout(() => {
      setMenuIsAmount(false);
    }, 500);
  }

  const handleClickMenuMobil = (element, offset) => {
    setShowMenuMobil(false);

    setTimeout(() => {
      setMenuIsAmount(false);
      scroller.scrollTo(element, {
        smooth: true,
        duration: 2500,
        offset: offset
      })
    }, 350);
  }

  return (
    <>

      <header>
        {/* bg-[#bba17b] */}
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}  className="bg-[#2f1d0e] md:bg-transparent flex justify-between items-center py-4 px-8 md:px-16">

          <div className="flex items-center gap-5">
            <Image src="/images/coffe-header-mobil.svg" alt="Logo" width={40} height={40} className="md:w-10" /> 
            <h1 className="text-white tracking-wider m-0 text-2xl font-bold md:text-xl">Dany Coffe</h1>
          </div>
          
          <div className="">
            <svg onClick={() => setShowMenuMobil(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor" className="size-8 text-white md:hidden">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg> 
            <div className="hidden md:flex">
              <ul className="flex gap-5">
                <li className="text-white text-sm tracking-wide">Oferta</li>
                <li className="text-white text-sm tracking-wide">Nosotros</li>
                <li className="text-white text-sm tracking-wide">Reseñas</li>
              </ul>
            </div>
          </div>


          <div className="hidden md:flex items-center gap-5">
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white ">
                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg> 
            </div>

            <div className="flex gap-3">
              <button className="text-white text-sm">Login</button>
              <button className="text-white text.sm border border-white/70 rounded py-2 px-4">Sign Up</button>
            </div>

          </div>

        </motion.div>
      </header>


      {menuIsAmount && (
        <section className={`absolute z-30 h-full w-full top-0 bg-[#2f1d0e] px-7 py-10 ${showMenuMobil ? 'menu-visible' : 'menu-hidden'}`}>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/images/coffe-header-mobil.svg"
                alt="Logo"
                width={40}
                height={40}
              />
              <h1 className="text-white tracking-wider m-0 text-2xl font-bold">Dany Coffe</h1>
            </div>
            <div>
              <svg onClick={handleCloseMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full py-10">
            <div>
              <ul className="flex flex-col gap-5">
                <li className="text-xl text-white font-bold tracking-wide border-b-2 pb-3">Oferta</li>
                <li className="text-xl text-white font-bold tracking-wide border-b-2 pb-3">Nosotros</li>
                <li className="text-xl text-white font-bold tracking-wide border-b-2 pb-3">Reseñas</li>
                <li className="text-xl text-white font-bold tracking-wide border-b-2 pb-3">Por que Café Dany</li>
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-5">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
              </div>
              <div className="flex gap-5">
                <button className="text-white tracking-wider">Login</button>
                <button className="text-white tracking-wider">Sign Up</button>
              </div>
            </div>

          </div>
        </section>
      )}

    </>
  )
}

export default Header
