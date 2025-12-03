import Image from "next/image"

const Decoration = () => {
    return (
        <div className="flex justify-between items-center px-6 my-10 md:my-3 ">
            <Image src="/images/beans.png" alt="splash" width={40} height={40} /> 
            <p className="text-white font-bold md:block hidden">Cappuccino</p>
            <Image src="/images/beans.png" alt="splash" width={40} height={40} /> 
            <p className="text-white font-bold md:block hidden">Expresso</p>
            <Image src="/images/beans.png" alt="splash" width={40} height={40} /> 
            <p className="text-white font-bold md:block hidden">Moca</p>
            <Image src="/images/beans.png" alt="splash" width={40} height={40} /> 
            <p className="text-white font-bold md:block hidden">Latte</p>
            <Image src="/images/beans.png" alt="splash" width={40} height={40} /> 
            <p className="text-white font-bold md:block hidden">Americano</p>
            <Image src="/images/beans.png" alt="splash" width={40} height={40} /> 
        </div>
    )
}

export default Decoration
