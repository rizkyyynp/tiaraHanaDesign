import Image from "next/image";
import secTiga from '../../assets/secTiga.jpg';

export default function SectionThree() {
    return (
        <section className="h-screen bg-[#E4E1D9] px-6 py-20 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
                <div className="w-full lg:w-5/12 flex flex-col space-y-8 max-md:items-center max-md:text-center">
                    <h2 className="text-4xl font-bold">
                        The Perfect Investment
                        Opportunity is Here
                    </h2>

                    <h4 className="text-xl font-semibold">
                        Ketika Anda memiliki villa di luxury resort,
                        Anda memiliki lebih dari sekadar villa!
                    </h4>
                    <p className="text-lg">
                        Investasi Anda memiliki benefit dan value dari
                        semua yang ditawarkan oleh resort ini. Mulai dari first-class
                        facilities hingga lokasi resort yang strategis, menawarkan
                        peluang investasi yang luar biasa untuk upgrade
                        ultimate lifestyle dan juga returns, tanpa perlu
                        repot atau budget investasi yang besar.
                    </p>
                    <div>
                        <button className="bg-[#b6a386] text-[#091927] rounded-full font-semibold shadow-lg hover:bg-[#091927] hover:text-[#b6a386] mt-4 px-16 py-2  transition-all duration-300">
                            Learn More
                        </button>
                    </div>


                </div>
                <div className="max-md:hidden w-7/12 ">
                    <Image src={secTiga} alt="secTiga"
                        layout="responsive"
                        objectFit="cover"
                        className="rounded-lg"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </section>
    )
}