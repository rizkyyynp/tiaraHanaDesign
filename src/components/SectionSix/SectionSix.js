import Image from "next/image";
import lastImage from '../../assets/lastImage.jpg';

export default function SectionSix() {
    return (
        <section className="min-h-screen bg-[#E4E1D9] px-6 py-20 lg:px-8">
            <div className="flex flex-col-reverse lg:flex-row lg:space-x-4">
                <div className="w-full lg:w-5/12 flex flex-col space-y-8 justify-center items-center text-center">
                    <h2 className="text-4xl font-semibold">
                        Ingin Memiliki Luxury Villa di Sebuah Resort?
                    </h2>
                    <p className="text-lg">
                        Keinginan untuk memilikinya bukan lagi sekedar mimpi.
                        Hubungi tim kami untuk berdiskusi lebih lanjut
                        mengenai peluang menarik untuk Anda dan keluarga.
                    </p>
                    <div>
                        <button className="bg-[#b6a386] text-[#091927] rounded-full font-semibold shadow-lg hover:bg-[#091927] hover:text-[#b6a386] mt-4 px-16 py-2  transition-all duration-300">
                            Whatsapp Us
                        </button>
                    </div>


                </div>
                <div className=" w-full  lg:w-7/12 mb-8 lg:mb-0">
                    <Image src={lastImage} alt="secTiga"
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