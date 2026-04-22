import { Button } from "@/app/components";
import Link from "next/link";
// import Image from 'next/image';

export default function HeroSection() {
    return <section id="hero" className={""}>
        <div className="md:p-">
            <div className="relative h-[70vh] md:h-[90vh] w-full ">
                <div className="bg-black md:bg-gray-300 bg-cover bg-[url(https://images.pexels.com/photos/36815599/pexels-photo-36815599.jpeg)] h-full w-full overflow-hidden">
                    <div className="w-full h-full bg-black/40  flex items-center justify-center md:justify-normal p-4 md:p-12 lg:p-[10rem]">
                        <div className=" text-off-white1B">

                            <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl mb-4 md:mb-8 mx-auto lg:w-[45vw]">

                                <p className="mb-2">
                                    Everything your brand needs. One studio.
                                </p>
                                <p className="text-lg font-headlines leading-tight  font-medium bg-primary0/50 p-1 px-2 w-[80%]">

                                    From brand identity to web design — built for B2B businesses that want to look the part and grow.
                                    {/* — A Design studio for designs that give you confidence with your customers. */}
                                </p>

                            </h2>
                            <div className="mb-2 flex flex-wrap space-x-12 space-y-6">
                                {/* <Link href={'/portfolio'}>
                                    <Button className="text-white   bg-secondary hover:bg-secondary-950 hover:cursor-pointer focus:ring-4 focus:ring-secondary-700 shadow-xs font-bold leading-5 rounded-full text-sm px-8 py-2.5 focus:outline-none uppercase">See our work
                                    </Button>
                                </Link> */}
                                <Link href={'/lets-work'} >
                                    <Button className="text-white hover:border-textDark  bg-primary1B box-border border border-transparent hover:bg-primary hover:cursor-pointer  focus:ring-4 focus:ring-primary1B shadow-xs font-bold leading-5 rounded-full text-sm px-8 py-2.5 focus:outline-none uppercase"><span>Start with a <i className="font-display capitalize text-secondary-200">free</i>&nbsp; brief</span>
                                    </Button>
                                </Link>
                            </div>
                            <p className="text-body-medium">
                                <b className="font-display font-bold text-title-medium animate-[ping_7s_infinite] ease-in">*</b>&nbsp;New client slots open monthly
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <main id="design-services" className=" flex flex-col md:flex-row">
            <section id="leftBar" className="flex invert md:flex-col sticky top-0 z-10 bg-white dark:bg-gray3 h-14 md:h-[90vh] md:w-16 border-y md:border-y-0 md:border-r-2  border-black dark:border-off-white">
                <div className="flex-1 flex place-content-center">
                    <div className="md:hidden w-full inline-flex flex-nowrap overflow-hidden">
                        <div className="flex items-center justify-center md:justify-start  md:animate-none">
                            <p className="font-bold text-display-large m-auto md:-rotate-90 text-nowrap capitalize"> &nbsp;Design Services</p>
                        </div>
                    </div>
                    <p className="hidden md:block font-bold uppercase text-display-large m-auto md:-rotate-90 text-nowrap "> Design Services</p>
                </div>
            </section>
            <section id="rightPanel" className="flex-1 flex flex-col">

                <div id="panelContent" className={"flex-1 "}>
                    <div className="relative h-[70vh] md:h-[90vh] w-full ">
                        <div className="bg-black md:bg-gray-300 bg-cover bg-[url(https://images.pexels.com/photos/29646955/pexels-photo-29646955.png)] h-full w-full overflow-hidden">
                            <div className="w-full h-full bg-black/40  flex items-center justify-center md:justify-normal p-4 md:p-12 lg:p-[10rem]">
                                <div className=" text-off-white1B">
                                    <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl mb-4 md:mb-8 ">

                                        <p className="">Design that does the work</p>
                                        <p className="text-lg font-headlines leading-tight  font-medium">
                                            Every asset your business needs to show up sharp <br className="hidden md:block" />
                                            — in print, on screen, and in the room.
                                        </p>

                                    </h2>
                                    <p className="mb-4 hidden">
                                        Connect more with your customers
                                    </p>
                                    <div className="mb-2 flex flex-wrap space-x-12 space-y-6">
                                        <Link href={'/services/design'}>
                                            <Button className="text-white   bg-secondary hover:bg-secondary-950 hover:cursor-pointer focus:ring-4 focus:ring-secondary-700 shadow-xs font-bold leading-5 rounded-full text-sm px-8 py-2.5 focus:outline-none uppercase">View Catalogue
                                            </Button>
                                        </Link>
                                        {/* <Link href={'/lets-work'} >
                                            <Button className="text-white hover:border-textDark  bg-primary1B box-border border border-transparent hover:bg-primary hover:cursor-pointer  focus:ring-4 focus:ring-primary1B shadow-xs font-bold leading-5 rounded-full text-sm px-8 py-2.5 focus:outline-none uppercase"><span>Start with a <i className="font-display capitalize text-secondary-200">free</i>&nbsp; brief</span>
                                            </Button>
                                        </Link> */}
                                    </div>
                                    <p className="text-body-medium">
                                        <b className="font-display font-bold text-title-medium animate-[ping_7s_infinite] ease-in">*</b>&nbsp;Where B2B brands come to look the part
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <main className=" flex flex-col md:flex-row">
            <section id="leftBar" className="flex invert md:flex-col sticky top-0 z-10 bg-white dark:bg-gray3 h-14 md:h-[90vh] md:w-16 border-y md:border-y-0 md:border-r-2  border-black dark:border-off-white">
                <div className="flex-1 flex place-content-center">
                    <div className="md:hidden w-full inline-flex flex-nowrap overflow-hidden">
                        <div className="flex items-center justify-center md:justify-start  md:animate-none">
                            <p className="font-bold text-display-large m-auto md:-rotate-90 text-nowrap capitalize"> &nbsp;Production Services</p>
                        </div>
                    </div>
                    <p className="hidden md:block font-bold uppercase text-display-large m-auto md:-rotate-90 text-nowrap "> Production Services</p>
                </div>
            </section>
            <section id="rightPanel" className="flex-1 flex flex-col">

                <div id="panelContent" className={"flex-1 "}>
                    <div className="relative h-[70vh] md:h-[90vh] w-full ">
                        <div className="bg-black md:bg-gray-300 bg-cover bg-[url(https://images.pexels.com/photos/3606871/pexels-photo-3606871.jpeg)] h-full w-full overflow-hidden">
                            <div className="w-full h-full bg-black/40  flex items-center justify-center md:justify-normal p-4 md:p-12 lg:p-[10rem]">
                                <div className=" text-off-white1B">
                                    <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl mb-4 md:mb-8 ">

                                        <p className="">Built to perform online</p>
                                        <p className="text-lg font-headlines leading-tight  font-medium">
                                            Websites, landing pages, and digital experiences <br className="hidden md:block" />
                                            — that turn the right visitors into customers.
                                        </p>

                                    </h2>
                                    <p className="mb-4 hidden">
                                        Connect more with your customers
                                    </p>
                                    <div className="mb-2 flex flex-wrap space-x-12 space-y-6">
                                        <Link href={'/portfolio'}>
                                                        <Button className="text-white   bg-secondary hover:bg-secondary-950 hover:cursor-pointer focus:ring-4 focus:ring-secondary-700 shadow-xs font-bold leading-5 rounded-full text-sm px-8 py-2.5 focus:outline-none uppercase">View Catalogue
                                                        </Button>
                                                    </Link>
                                        {/* <Link href={'/lets-work'} >
                                            <Button className="text-white hover:border-textDark  bg-primary1B box-border border border-transparent hover:bg-primary hover:cursor-pointer  focus:ring-4 focus:ring-primary1B shadow-xs font-bold leading-5 rounded-full text-sm px-8 py-2.5 focus:outline-none uppercase"><span>Start with a <i className="font-display capitalize text-secondary-200">free</i>&nbsp; brief</span>
                                            </Button>
                                        </Link> */}
                                    </div>
                                    <p className="text-body-medium">
                                        <b className="font-display font-bold text-title-medium animate-[ping_7s_infinite] ease-in">*</b>&nbsp;We make B2B brands look like they mean business.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <main id="marketing" className=" flex flex-col md:flex-row">
            <section id="leftBar" className="flex invert md:flex-col sticky top-0 z-10 bg-white dark:bg-gray3 h-14 md:h-[90vh] md:w-16 border-y md:border-y-0 md:border-r-2  border-black dark:border-off-white">
                <div className="flex-1 flex place-content-center">
                    <div className="md:hidden w-full inline-flex flex-nowrap overflow-hidden">
                        <div className="flex items-center justify-center md:justify-start  md:animate-none">
                            <p className="font-bold text-display-large m-auto md:-rotate-90 text-nowrap capitalize"> &nbsp;Marketing Services</p>
                        </div>
                    </div>
                    <p className="hidden md:block font-bold uppercase text-display-large m-auto md:-rotate-90 text-nowrap "> Marketing Services</p>
                </div>
            </section>
            <section id="rightPanel" className="flex-1 flex flex-col">

                <div id="panelContent" className={"flex-1 "}>
                    <div className="relative h-[70vh] md:h-[90vh] w-full ">
                        <div className="bg-black md:bg-gray-300 bg-cover bg-[url(https://images.pexels.com/photos/31940527/pexels-photo-31940527.jpeg)] h-full w-full overflow-hidden">
                            <div className="w-full h-full bg-black/40  flex items-center justify-center md:justify-normal p-4 md:p-12 lg:p-[10rem]">
                                <div className=" text-off-white1B">
                                    <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl mb-4 md:mb-8 ">

                                        <p className="">Get seen. Stay remembered.</p>
                                        <p className="text-lg font-headlines leading-tight  font-medium">
                                            Marketing assets, content, and campaigns <br className="hidden md:block" />
                                            — designed to bring the right people to your door.
                                        </p>

                                    </h2>
                                    <div className="mb-2 flex flex-wrap space-x-12 space-y-6">
                                        <Link href={'/services/marketing'}>
                                                <Button className="text-white   bg-secondary hover:bg-secondary-950 hover:cursor-pointer focus:ring-4 focus:ring-secondary-700 shadow-xs font-bold leading-5 rounded-full text-sm px-8 py-2.5 focus:outline-none uppercase">View Catalogue
                                                </Button>
                                            </Link>
                                        {/* <Link href={'/lets-work'} >
                                            <Button className="text-white hover:border-textDark  bg-primary1B box-border border border-transparent hover:bg-primary hover:cursor-pointer  focus:ring-4 focus:ring-primary1B shadow-xs font-bold leading-5 rounded-full text-sm px-8 py-2.5 focus:outline-none uppercase"><span>Start with a <i className="font-display capitalize text-secondary-200">free</i>&nbsp; brief</span>
                                            </Button>
                                        </Link> */}
                                    </div>
                                    <p className="text-body-medium">
                                        <b className="font-display font-bold text-title-medium animate-[ping_7s_infinite] ease-in">*</b>&nbsp;Built for brands that take design seriously
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
}