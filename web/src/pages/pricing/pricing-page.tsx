import { Faq, Footer, MegaMenu } from "@/app/components";
import { faqs } from "@/app/about/sections/faq";
import { LogosSection, TestimonialsSection } from "@/app/sections/home";
import { FeaturesSection, HeroSection, ProductOfferingSection, WhyUsSection } from "@/app/sections/pricing";

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