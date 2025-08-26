import HeroSection from "@/components/hero/HeroSection";
import HopitalList from "@/components/hopital/HopitalList";
import SpecialiterListe from "@/components/spacialites/SpecialiterListe";
import SpecialiterSlides from "@/components/spacialites/SpecialiterSlides";
import React from "react";
import NoiseOverlay from '@repo/ui/components/design/NoiseOverlay';


export default function Home() {
  return (
    <div className="flex relative flex-col gap-16  min-h-screen bg-design-bg ">
        <HeroSection/>
        {/* <HeroSections/> */}
        <SpecialiterListe/>
        <SpecialiterSlides/>
        <HopitalList/>
        <div className="">

        </div>
        <NoiseOverlay intensity={18} blendMode="difference" />
    </div>
  );
}
