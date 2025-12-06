import Image from "next/image"

const Footer = () => {
    return (
        <footer className="bg-footer md:px-20">

            <div className="md:flex md:items-center">
                <div className="flex flex-col gap-10 px-10 pt-20">
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <Image src="/images/coffe-header-mobil.svg" alt="Logo" width={40} height={40} /> 
                            <h1 className="text-white tracking-wider m-0 text-xl md:text-3xl font-bold">Dany Coffe</h1>
                        </div>

                        <p className="text-white leading-7 text-sm">Café Aura offers premium, expertly crafted coffee that delivers rich flavors and an unforgettable experience in every cup</p>
                    </div>

                    <div className="flex flex-col gap-5">

                        <p className="text-white text-base">Join Our Coffee Community</p>

                        <ul className="flex gap-5">
                            <Image src="/images/facebook.svg" alt="Logo" width={45} height={45} className="border border-white rounded-full p-2" /> 
                            <Image src="/images/x.svg" alt="Logo" width={45} height={45} className="border border-white rounded-full p-2" /> 
                            <Image src="/images/instagram.svg" alt="Logo" width={45} height={45} className="border border-white rounded-full p-2" />
                            <Image src="/images/pinterest.svg" alt="Logo" width={45} height={45} className="border border-white rounded-full p-2" /> 
                            <Image src="/images/youtube.svg" alt="Logo" width={45} height={45} className="border border-white rounded-full p-2" />
                        </ul>

                    </div>
                </div>


                <div className="text-white mx-14 pb-14 flex flex-col gap-5 mt-12 md:flex-row md:gap-16 md:text-center">
                    <div>
                        <h2 className="font-bold border-b pb-1 mb-3 w-20 text-base">About</h2>
                        <div className="flex flex-col gap-2 text-sm">
                            <p>Menu</p>
                            <p>Features</p>
                            <p>News & Blogs</p>
                            <p>Help & Supports</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold border-b pb-1 mb-3 w-28 text-base">Company</h2>
                        <div className="flex flex-col gap-2 text-sm">
                            <p>How we work</p>
                            <p>Terms of service</p>
                            <p>Pricing</p>
                            <p>FAQ</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold border-b pb-1 mb-3 w-34 text-base">Get in Touch</h2>
                        <div className="flex flex-col gap-2 text-sm">
                            <p>1234 Coffee Lane, Suite 100 Seatle, United States</p>
                            <p>email@gmail.com</p>
                            <p>52 222 2222 2222</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/50 md:mx-20 md:mt-10">
                <p className="text-white text-center py-8 md:py-4 text-sm">&#x2117; 2025 Dany Coffe. All rights reserved.</p>
            </div>

        </footer>
    )
}

export default Footer
