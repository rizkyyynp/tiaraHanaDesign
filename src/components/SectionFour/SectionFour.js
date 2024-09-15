"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";

export default function SectionFour() {
    return (
        <section className="h-screen  w-full bg-[#E4E1D9]">
            <LayoutGrid cards={cards} />
        </section>
    );
}

const SkeletonOne = () => {
    return (
        <div className="space-y-4">
            <h3 className="font-bold md:text-4xl text-xl text-white">
                Grand
            </h3>
            <h3 className="font-bold md:text-4xl text-xl text-white">3 Bedroom Pool Villa</h3>
            <p className="font-normal text-base text-white">
            Dikelilingi oleh pemandangan resort dan hamparan sawah yang hijau, Grand 3 Bedroom Pool Villa menghadirkan modern rustic interior yang elegan dengan premium amenities dan services. 
            </p>
            <button className="bg-[#b6a386] text-[#091927] rounded-full font-semibold shadow-lg hover:bg-[#091927] hover:text-[#b6a386] mt-4 px-16 py-2  transition-all duration-300">View Villa</button>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div className="space-y-4">
            <h3 className="font-bold md:text-4xl text-xl text-white">
                Grand Family
            </h3>
            <h3 className="font-bold md:text-4xl text-xl text-white">3 Bedroom Pool Villa</h3>
            <p className="font-normal text-base text-white">
                Dirancang khusus sebagai luxury private di Khastana Hadi Resort Ubud, The Grand Family Villa menawarkan liburan yang eksklusif dengan layanan private chef dining dan pengalaman cinematic di tepi kolam renang dalam suasana tenang dan nyaman di Ubud.
            </p>
            <button className="bg-[#b6a386] text-[#091927] rounded-full font-semibold shadow-lg hover:bg-[#091927] hover:text-[#b6a386] mt-4 px-16 py-2  transition-all duration-300">Register Your Interest</button>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div className="space-y-4">
            <h3 className="font-bold md:text-4xl text-xl text-white">
                Royal Garden
            </h3>
            <h3 className="font-bold md:text-4xl text-xl text-white">3 Bedroom Pool Villa</h3>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Didesain sebagai the most exclusive Villa di Khastana Hadi Resort Ubud, kekayaan budaya dari Tampak Siring Tirta Empul menjadikan the majestic Jacuzzi Lounge Pool sebagai pengalaman berlibur mengesankan.
            </p>
            <button className="bg-[#b6a386] text-[#091927] rounded-full font-semibold shadow-lg hover:bg-[#091927] hover:text-[#b6a386] mt-4 px-16 py-2  transition-all duration-300">View Villa</button>
        </div>
    );
};
const SkeletonFour = () => {
    return (
        <div className="space-y-4">
            <h3 className="font-bold md:text-4xl text-xl text-white">
                Grand Royal Garden
            </h3>
            <h3 className="font-bold md:text-4xl text-xl text-white">3 Bedroom Pool Villa</h3>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Didesain sebagai the most exclusive Villa di Khastana Hadi Resort Ubud, kekayaan budaya dari Tampak Siring Tirta Empul menjadikan the majestic Jacuzzi Lounge Pool sebagai pengalaman berlibur mengesankan.
            </p>
            <button className="bg-[#b6a386] text-[#091927] rounded-full font-semibold shadow-lg hover:bg-[#091927] hover:text-[#b6a386] mt-4 px-16 py-2  transition-all duration-300">View Villa</button>
        </div>
    );
};


const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-2",
        thumbnail:
            "https://www.tiarahana.com/wp-content/uploads/2024/03/Mask-Group-1584.webp",
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail:
            "https://www.tiarahana.com/wp-content/uploads/2024/07/royal-slider-new.webp",
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail:
            "https://www.tiarahana.com/wp-content/uploads/2024/08/Screenshot-2024-08-12-at-2.53.46%E2%80%AFPM.webp",
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "md:col-span-2",
        thumbnail:
            "https://www.tiarahana.com/wp-content/uploads/2024/05/Artboard-%E2%80%93-1-3-scaled.webp",
    },
];