import ParallaxText from "./ParallaxText"

export default function ParallaxMoving() {
    return (
        <div className=" w-full overflow-hidden text-[#b6a386] bg-[#E4E1D9]">
            <ParallaxText direction={500} baseVelocity={-1}>
            Tiara Hana Indonesia • “Bukan Sekedar Investasi Biasa !” • Luxury Resort Villas Available for Investment  •
            </ParallaxText>
        </div>
    )
}