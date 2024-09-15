import Image from "next/image"
import LogoSm from "../../assets/logosm.png"
import Logomd from "../../assets/logomd.png"
import Link from "next/link"

export default function Navbar() {
    return (
        <div className="navbar-container">
            <input type="checkbox" id="menu" className="hidden" />
            <header className="flex justify-between h-16 px-6 py-4 lg:px-8 fixed w-full bg-primary lg:bg-secondary  z-50 transition-all duration-300">
                <div className="flex items-center">
                    <Image src={LogoSm} alt="logo" width={150} height={100} className="lg:hidden" />
                    <Image src={Logomd} alt="logo" width={150} height={100} className=" hidden lg:block" />
                </div>
                <nav className="flex gap-5 max-md:gap-1 max-md:absolute max-md:top-16 max-md:left-0 max-md:bg-base-100 max-md:flex-col max-md:w-full max-md:items-center max-md:h-0 max-md:transition-all max-md:duration-500 max-md:overflow-hidden">
                    <Link href="/" className="relative inline-block text-primary font-bold text-lg transition-all duration-300 max-md:mt-5 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-5px] after:left-1/2 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0  ">Home</Link>
                    <Link href="/" className="relative inline-block text-primary font-bold text-lg transition-all duration-300 max-md:mt-5 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-5px] after:left-1/2 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ">About Us</Link>
                    <Link href="/" className="relative inline-block text-primary font-bold text-lg transition-all duration-300 max-md:mt-5 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-5px] after:left-1/2 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ">Villa Co-ownership</Link>
                    <Link href="/" className="relative inline-block text-primary font-bold text-lg transition-all duration-300 max-md:mt-5 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-5px] after:left-1/2 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ">Properties Available</Link>
                    <Link href="/" className="relative inline-block text-primary font-bold text-lg transition-all duration-300 max-md:mt-5 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-5px] after:left-1/2 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ">Testimonials</Link>
                    <Link href="/" className="relative inline-block text-primary font-bold text-lg transition-all duration-300 max-md:mt-5 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-5px] after:left-1/2 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 ">Contact Us</Link>
                </nav>
                <div className="flex items-center lg:hidden">
                    <label htmlFor="menu" className="cursor-pointer max-md:w-11 max-md:h-4 max-md:relative ">
                        <div className="max-md:w-full max-md:h-1 max-md:bg-third max-md:absolute max-md:rounded-full max-md:transition-all max-md:duration-300"></div>
                        <div className="max-md:w-full max-md:h-1 max-md:bg-third max-md:absolute max-md:rounded-full max-md:transition-all max-md:duration-300 max-md:top-1/2"></div>
                        <div className="max-md:w-full max-md:h-1 max-md:bg-third max-md:absolute max-md:rounded-full max-md:transition-all max-md:duration-300 max-md:top-full"></div>
                    </label>
                </div>
            </header>
        </div>
    )
}