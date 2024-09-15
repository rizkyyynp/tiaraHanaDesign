import { cn } from "@/lib/utils"
import Marquee from "../magicui/marquee"

const reviews = [
    {
        name: "Pak Affan",
        body: "Rasanya saya tidak hanya berinvestasi untuk villa, tapi juga untuk momen istimewa yang tak terlupakan buat keluarga saya yang berjauhan.",
        img: "https://www.tiarahana.com/wp-content/uploads/2024/07/pak-affan-testi-desktop.webp",
    },
    {
        name: "Bu Irma",
        body: "Villa Co-ownership Tiara Hana jadi investasi yang saya cari selama ini. Dari awal, saya ingin cari asset untuk jangka panjang, dan karena lokasinya ada di Ubud saya jadi makin yakin.",
        img: "https://www.tiarahana.com/wp-content/uploads/2024/07/bu-irma-testi-desktop.webp",
    },
    {
        name: "Bu Madeline",
        body: "Saya tahu tarif kamar resort hotel selalu tinggi, makanya saya memutuskan investasi di Khastana Hadi Resort Ubud untuk liburan pribadi dan passive income yang menarik.",
        img: "https://www.tiarahana.com/wp-content/uploads/2024/07/madeline-testi-desktop.webp",
    },
    {
        name: "Pak Ora & Bu Marliana",
        body: "Kami memutuskan investasi di Grand Villa, karena bisa memberikan passive income jangka panjang!",
        img: "https://www.tiarahana.com/wp-content/uploads/2024/07/pak-ora-testi-desktoo.webp",
    },
    {
        name: "Pak Surindro",
        body: "Saya merasakan kemudahan dan kenyamanan dengan Service Tiara Hana ini. Selalu fast respons dan reponsif sehingga komunikasi mengenai masalah apapun dapat didiskusikan dengan baik dan terbuka.",
        img: "https://www.tiarahana.com/wp-content/uploads/2021/05/surindo.jpg",
    },
    {
        name: "Pak Donny Tilon",
        body: "Saya selalu menerima transfer ROI tepat waktu sejak Agustus 2018 & setiap saat saya selalu dinformasikan oleh customer service Tiara Hana secara langsung.",
        img: "https://www.tiarahana.com/wp-content/uploads/2021/04/donny-1@2x.jpg",
    },
];

// Split reviews into two rows
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

// ReviewCard component
const ReviewCard = ({ img, name, username, body }) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                "bg-[#b6a386]"
            )}
        >
            <div className="flex flex-row items-center gap-2 ">
                <img className="rounded-full" width="60" height="60" alt={name} src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm text-white">{body}</blockquote>
        </figure>
    );
};

export default function SectionFive() {
    return (
        <section className=" bg-[#E4E1D9] px-6 py-20 lg:px-8">
        <div>
        <h1 className="text-3xl font-semibold text-center text-[#b6a386] mb-4">Testimonials</h1>
        <hr className="border-[#b6a386] border-1 mb-10"/>
        </div>
        
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
        </section>
    )
}