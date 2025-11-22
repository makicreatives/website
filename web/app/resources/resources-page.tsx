import { faqs } from "@/app/about/sections/faq";
import { MegaMenu, Faq, Footer } from "@/app/components";

export default function ResourcesPage() {

    return <>
        <MegaMenu activeLink='resources'></MegaMenu>
        <section id="design" className="p-2 md:p-8"></section>
        <hr className="border-black dark:border-off-white1B" />
        <section id="production" className="p-2 md:p-8"></section>
        <hr className="border-black dark:border-off-white1B" />
        <section id="marketing" className="p-2 md:p-8"></section>
        <hr className="border-black dark:border-off-white1B" />
        <Faq faqs={faqs}></Faq>
        <Footer></Footer>
    </>
}