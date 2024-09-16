import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Navigation/Footer";
import Navbar from "@/components/Navigation/Navbar";
import ParallaxMoving from "@/components/ParallaxText/ParallaxMoving";
import SectionFive from "@/components/SectionFive/SectionFive";
import SectionFour from "@/components/SectionFour/SectionFour";
import SectionSix from "@/components/SectionSix/SectionSix";
import SectionThree from "@/components/SectionThree/SectionThree";
import SectionTwo from "@/components/SectionTwo/SectionTwo";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <SectionTwo />
        <SectionThree />
        <ParallaxMoving />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <Footer />
      </main>
    </div>
  );
}
