import { Faq, Footer, MegaMenu } from "@/app/components";
import { faqs } from "@/app/about/sections/faq";
import { HeroSection } from "@/app/sections/services/design";



export default function DesignPage() {
    return <>
        <MegaMenu activeLink='services'></MegaMenu>
        <HeroSection></HeroSection>
        -- social proof
        -- why
        -- portfolio
        -- features
        -- testimonials
        -- stats
        <hr className="border-black dark:border-off-white1B" />
        <Faq faqs={faqs}></Faq>
        <Footer></Footer>
    </>
}