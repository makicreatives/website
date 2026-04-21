import { Button } from "@/app/components";
import Link from "next/link";
// import Image from 'next/image';

export default function HeroSection() {
    return <section id="hero" className={""}>
        <div className="md:p-">
            <div className="relative h-[70vh] md:h-[90vh] w-full ">
                <div className="bg-black md:bg-gray-300 bg-cover bg-[url(/images/site/perfect-hero.png)] h-full w-full overflow-hidden">
                    <div className="w-full h-full bg-black/40  flex items-center justify-center md:justify-normal p-4 md:p-12 lg:p-[10rem]">
                        <div className=" text-off-white1B">

                            <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl mb-4 md:mb-8 mx-auto lg:w-[45vw]">

                                <p className="mb-2">
                                    Design that earns trust before you say a word
                                </p>
                                <p className="text-lg font-headlines leading-tight  font-medium bg-black/20 p-1 px-2 w-[80%]">

                                    Look so good, they never question you.
                                    {/* — A Design studio for designs that give you confidence with your customers. */}
                                </p>

                            </h2>
                            <div className="mb-2 flex flex-wrap space-x-12 space-y-6">
                                <Link href={'/portfolio'}>
                                    <Button className="text-white   bg-secondary hover:bg-secondary-950 hover:cursor-pointer focus:ring-4 focus:ring-secondary-700 shadow-xs font-bold leading-5 rounded-full text-sm px-8 py-2.5 focus:outline-none uppercase">See our work
                                    </Button>
                                </Link>
                                <Link href={'/lets-work'} >
                                    <Button className="text-white hover:border-textDark  bg-primary1B box-border border border-transparent hover:bg-primary hover:cursor-pointer  focus:ring-4 focus:ring-primary1B shadow-xs font-bold leading-5 rounded-full text-sm px-8 py-2.5 focus:outline-none uppercase"><span>Start with a <i className="font-display capitalize text-secondary-200">free</i>&nbsp; brief</span>
                                    </Button>
                                </Link>
                            </div>
                            <p className="text-body-medium">
                                <b className="font-display font-bold text-title-medium animate-[ping_7s_infinite] ease-in">*</b>&nbsp;We get back to every brief within 24 hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className="border-black dark:border-off-white1B" />
        <div className="overflow-clip">
            <div className="flex flex-nowrap  relative -left-[50%]">
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