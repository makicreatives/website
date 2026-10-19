import { Faq, Footer, MegaMenu } from "@/src/components";
import { faqs } from "@/src/sections/about/faq";
import { LogosSection, TestimonialsSection } from "@/src/sections/home";
import { FeaturesSection, HeroSection, ProductOfferingSection, WhyUsSection } from "@/src/sections/pricing";

export default function PricingPage() {

    return <>
        <MegaMenu activeLink='pricing'></MegaMenu>
        <HeroSection></HeroSection> {/* -- Hero */}
        <LogosSection></LogosSection>
        <ProductOfferingSection></ProductOfferingSection>  {/* -- Product Offering */}
        <FeaturesSection></FeaturesSection>  {/* -- Features */}
        <WhyUsSection></WhyUsSection>  {/* -- Why Us */}
        <TestimonialsSection></TestimonialsSection> {/* -- Testimonials */}
        {/* <CTASection></CTASection> */}
        <hr className="border-black dark:border-off-white1B" />
        <Faq faqs={faqs}></Faq>
        <Footer></Footer>
    </>
}