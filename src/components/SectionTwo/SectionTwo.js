import Image from "next/image";
import atasKanan from '../../assets/atasKanan.jpg';
import atasKiri from '../../assets/atasKiri.jpg';
import photoBawah from '../../assets/photoBawah.jpg';

export default function SectionTwo() {
    return (
        <section className="min-h-screen bg-[#E4E1D9] px-6 py-20 lg:px-8">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-full md:w-1/2 space-y-4">
                    <div className="flex space-x-4">
                        {/* Gambar Pojok Kiri */}
                        <div className="w-1/2 relative h-72">
                            <Image 
                                src={atasKiri} 
                                alt="atasKiri" 
                                layout="fill" 
                                objectFit="cover" 
                                className="rounded-lg"
                            />
                        </div>

                        {/* Gambar Pojok Kanan */}
                        <div className="w-1/2 relative h-72">
                            <Image 
                                src={atasKanan} 
                                alt="atasKanan" 
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Gambar di Bawah */}
                    <div className="w-full relative h-60">
                        <Image 
                            src={photoBawah} 
                            alt="photoBawah" 
                            layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                        />
                    </div>
                </div>

                {/* Right Text Section */}
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <div className="max-w-md">
                        <h2 className="text-4xl font-bold mb-4">Invest in Indonesia’s Luxury Boutique Resort-Hotel Properties</h2>
                        <p>
                        Properti luxury resort 5-star yang didesain dan dipersiapkan untuk bersanding pada salah satu destinasi wisata terfavorit dunia. Menawarkan investor perpaduan yang sempurna dari rental return tertinggi & pengalaman menginap berkelas, semua ada dalam satu properti.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
