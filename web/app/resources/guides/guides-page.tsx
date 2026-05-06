import { faqs } from "@/app/about/sections/faq";
import { MegaMenu, Faq, Footer, Button } from "@/app/components";
import Link from "next/link";

export default function GuidesPage() {

    return <>
        <MegaMenu activeLink='resources'></MegaMenu>
        <section id="hero" className={""}>
            
            <main id="design-guides" className=" flex flex-col md:flex-row">
                <section id="leftBar" className="flex invert md:flex-col sticky top-0 z-10 bg-white dark:bg-gray3 h-14 md:h-[90vh] md:w-16 border-y md:border-y-0 md:border-r-2  border-black dark:border-off-white">
                    <div className="flex-1 flex place-content-center">
                        <div className="md:hidden w-full inline-flex flex-nowrap overflow-hidden">
                            <div className="flex items-center justify-center md:justify-start  md:animate-none">
                                <p className="font-bold text-display-large m-auto md:-rotate-90 text-nowrap capitalize"> &nbsp;Design Guides</p>
                            </div>
                        </div>
                        <p className="hidden md:block font-bold uppercase text-display-large m-auto md:-rotate-90 text-nowrap "> Design Guides</p>
                    </div>
                </section>
                <section id="rightPanel" className="flex-1 flex flex-col">

                    <div id="panelContent" className={"flex-1 "}>
                        <div className="relative h-[70vh] md:h-[90vh] w-full ">
                            <div className="bg-black md:bg-gray-300 bg-cover bg-[url(https://images.pexels.com/photos/18620006/pexels-photo-18620006.jpeg)] h-full w-full overflow-hidden">
                                <div className="w-full h-full bg-black/70  flex items-center justify-center md:justify-normal p-4 md:p-12 lg:p-[10rem]">
                                    <div className=" text-off-white1B">
                                        <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl mb-4 md:mb-8 ">

                                            <p className="">Learn about good design</p>
                                            <p className="text-lg font-headlines leading-tight  font-medium">
                                                Practical guides on branding, digital design, and marketing assets <br className="hidden md:block" />
                                                — written so you can make good decisions for your business.
                                            </p>

                                        </h2>
                                        <div className="mb-2 flex flex-wrap space-x-12 space-y-6">
                                            <Link href={'/resources/guides'}>
                                                <Button className="text-white   bg-secondary hover:bg-secondary-950 hover:cursor-pointer focus:ring-4 focus:ring-secondary-700 shadow-xs font-bold leading-5 rounded-full text-sm px-8 py-2.5 focus:outline-none uppercase">Browse Guides
                                                </Button>
                                            </Link>
                                            {/* <Link href={'/lets-work'} >
                                            <Button className="text-white hover:border-textDark  bg-primary1B box-border border border-transparent hover:bg-primary hover:cursor-pointer  focus:ring-4 focus:ring-primary1B shadow-xs font-bold leading-5 rounded-full text-sm px-8 py-2.5 focus:outline-none uppercase"><span>Start with a <i className="font-display capitalize text-secondary-200">free</i>&nbsp; brief</span>
                                            </Button>
                                        </Link> */}
                                        </div>
                                        <p className="text-body-medium">
                                            <b className="font-display font-bold text-title-medium animate-[ping_7s_infinite] ease-in">*</b>&nbsp;Free resources. No signup required.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <hr className="border-black dark:border-off-white1B" />
            <div className="overflow-clip">
                <div className="flex flex-nowrap animate-infinite-scroll-reverse  relative -left-[100%]">
                    <h1 className="h2 font-headline font-bold text-5xl my-4 md:my-8 pl-8 uppercase  mx-auto">Maki&nbsp;Creative&nbsp;Studio</h1>
                    <h1 className="h2 opacity-50 font-headline font-bold text-5xl my-4 md:my-8 pl-8 uppercase mx-auto">Maki&nbsp;Creative&nbsp;Studio</h1>
                    <h1 className="h2 font-headline font-bold text-5xl my-4 md:my-8 pl-8 uppercase mx-auto">Maki&nbsp;Creative&nbsp;Studio</h1>
                    <h1 className="h2 opacity-50 font-headline font-bold text-5xl my-4 md:my-8 pl-8 uppercase mx-auto">Maki&nbsp;Creative&nbsp;Studio</h1>
                    <h1 className="h2 font-headline font-bold text-5xl my-4 md:my-8 pl-8 uppercase mx-auto">Maki&nbsp;Creative&nbsp;Studio</h1>
                    <h1 className="h2 opacity-50 font-headline font-bold text-5xl my-4 md:my-8 pl-8 uppercase mx-auto">Maki&nbsp;Creative&nbsp;Studio</h1>

                    <h1 className="h2 font-headline font-bold text-5xl my-4 md:my-8 pl-8 uppercase  mx-auto">Maki&nbsp;Creative&nbsp;Studio</h1>
                    <h1 className="h2 opacity-50 font-headline font-bold text-5xl my-4 md:my-8 pl-8 uppercase mx-auto">Maki&nbsp;Creative&nbsp;Studio</h1>
                    <h1 className="h2 font-headline font-bold text-5xl my-4 md:my-8 pl-8 uppercase mx-auto">Maki&nbsp;Creative&nbsp;Studio</h1>
                    <h1 className="h2 opacity-50 font-headline font-bold text-5xl my-4 md:my-8 pl-8 uppercase mx-auto">Maki&nbsp;Creative&nbsp;Studio</h1>
                    <h1 className="h2 font-headline font-bold text-5xl my-4 md:my-8 pl-8 uppercase mx-auto">Maki&nbsp;Creative&nbsp;Studio</h1>
                    <h1 className="h2 opacity-50 font-headline font-bold text-5xl my-4 md:my-8 pl-8 uppercase mx-auto">Maki&nbsp;Creative&nbsp;Studio</h1>
                </div>
            </div>
            <hr className="border-black dark:border-off-white1B" />
        </section>
        <hr className="border-black dark:border-off-white1B" />
        <Faq faqs={faqs}></Faq>
        <Footer></Footer>
    </>;
}