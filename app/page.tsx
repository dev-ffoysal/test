import { Hero } from "@/components/sections/home/Hero";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { FeaturedWork } from "@/components/sections/home/FeaturedWork";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { TechStack } from "@/components/sections/home/TechStack";
import { Process } from "@/components/sections/home/Process";
import { Innovation } from "@/components/sections/home/Innovation";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { FAQ } from "@/components/sections/home/FAQ";
import { CTASection } from "@/components/sections/home/CTASection";

export default function Home() {
    return (
        <>
            <Hero />
            <TechStack />
            <ServicesOverview />
            <FeaturedWork />
            <WhyChooseUs />
            <Process />
            <Innovation />
            <Testimonials />
            <FAQ />
            <CTASection />
        </>
    );
}