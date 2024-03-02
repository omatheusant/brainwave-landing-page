import Hero from "@/components/Hero";
import ButtonGradient from "../public/assets/svg/ButtonGradient";
import Header from "@/components/Header";
import Benefits from "@/components/Benefits";
import Collaboration from "@/components/Collaboration";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden w-full">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
      </div>

      <ButtonGradient />
    </>
  );
}
