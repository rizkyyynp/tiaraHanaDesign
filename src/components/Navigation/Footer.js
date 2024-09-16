import Image from "next/image";
import logoTHI from "../../assets/logoTHI.jpg";
import khastana from "../../assets/khastana.png";
import sundancer from "../../assets/sundancer.png";
import outStanding from "../../assets/outstanding.png";
import bestLifestyle from "../../assets/bestLifestyle.png";
import risingCom from "../../assets/risingCom.png";
import footerBg from "../../assets/footerBg.jpg";

export default function Footer() {
    return (
        <footer
            className="bg-cover bg-center text-white px-6 py-10 lg:px-8"
            style={{
                backgroundImage: `url(${footerBg.src})`, // Menggunakan gambar sebagai background
            }}
        >
                <div className="grid md:grid-cols-3 gap-20">
                    {/* Logo Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex flex-col md:flex-row mb-4 md:mb-0">
                            <div className="flex justify-center items-center">
                                <Image src={logoTHI}
                                    alt="Tiara Hana"
                                    width={150}
                                    height={150}
                                />
                            </div>

                            <div className="flex justify-center items-center">
                                <button className="bg-[#b6a386] text-[#091927] rounded-full font-semibold shadow-lg hover:bg-[#091927] hover:text-[#b6a386] py-2 px-6  transition-all duration-300">
                                    Book Appointment
                                </button>
                            </div>
                        </div>

                        <p className="text-center md:text-left text-yellow-200">Our Resort Portfolio</p>
                        <div className="flex space-x-4 mt-2">
                            <Image src={khastana} alt="Tiara Hana"
                                className="mb-4"
                                width={100}
                                height={100}
                            />
                            <Image src={sundancer} alt="Tiara Hana"
                                className="mb-4"
                                width={90}
                                height={90}
                            />
                        </div>

                    </div>

                    {/* Address Section */}
                    <div className="text-center md:text-left space-y-8 md:items-start items-center justify-center flex flex-col">
                        <h4 className="font-semibold text-xl mb-2 text-yellow-200 ">PT. Tiara Hana Indonesia</h4>
                        <p>Luxury Property Company</p>
                        <p>Gd. Puri Begawan Lantai 1, Jl. Pajajaran No. 05-07, Kota Bogor, Jawa Barat 16143</p>
                        <p>Pondok Indah Office Tower 2, 15th Floor, Jl. Sultan Iskandar Muda, Jakarta Selatan 12310</p>
                    </div>

                    {/* Social Media and Contact */}
                    <div className="text-center  space-y-8 items-center justify-center flex flex-col">
                        <h4 className="font-semibold text-xl text-yellow-200">Opening Hours</h4>
                        <div className="space-y-1">
                            <p>Senin - Jumat | 09:00 - 17:00</p>
                            <p>WhatsApp: +62 811 1117 916</p>
                        </div>
                        <div className="flex space-x-4 mt-2">
                            <Image src={outStanding} alt="Tiara Hana"
                                width={50}
                                height={50}
                            />
                            <Image src={bestLifestyle} alt="Tiara Hana"
                                width={50}
                                height={50}
                            />
                            <Image src={risingCom} alt="Tiara Hana"
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center py-4 mt-8 border-t border-yellow-200 ">
                    <p className="text-yellow-200">&copy; 2012 - 2024 Tiara Hana. All Rights Reserved.</p>
                </div>

            {/* Back to Top Button */}
            <a href="#" className="fixed bottom-4 right-4 bg-[#b6a386] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-800 transition">
                ↑
            </a>
        </footer>
    );
}