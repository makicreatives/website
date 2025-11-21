import { Faq, Footer, MegaMenu } from "@/app/components";
import { faqs } from "@/app/about/sections/faq";

export default function PricingPage() {

    return <>
        <MegaMenu activeLink='pricing'></MegaMenu>
        <section id="offers" className="p-2 md:p-8"></section>
        <hr className="border-black dark:border-off-white1B" />
        <section id="review" className="p-2 md:p-8"></section>
        <hr className="border-black dark:border-off-white1B" />
        <section id="marketing" className="p-2 md:p-8"></section>
        <hr className="border-black dark:border-off-white1B" />
        <Faq faqs={faqs}></Faq>
        <Footer></Footer>
    </>
}