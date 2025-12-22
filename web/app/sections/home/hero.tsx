import { Button } from "@/app/components";
import Link from "next/link";
// import Image from 'next/image';

export default function HeroSection() {
    return <section id="hero" className={""}>
        <div className="md:p-8">
            <div className="relative h-[70vh] md:h-[90vh] w-full ">
                <div className="bg-black md:bg-gray-300 bg-cover bg-[url(/images/site/perfect-hero.png)] h-full w-full overflow-hidden">
                    <div className="w-full h-full bg-black/40  flex items-center justify-center md:justify-normal p-4 md:p-12 lg:p-[10rem]">
                        <div className=" text-off-white1B">
                            <p className="text-body-medium mb-2 hidden">Trusted by brands who love what they doTrusted by brands who love what they do</p>
                            <h2 className="font-display text-display-small md:text-display-large mb-12 lg:w-[40vw]">A Design studio for designs that give you
                                confidence with your customers</h2>
                            <p className="mb-4 hidden">
                                Connect more with your customers
                            </p>
                            <div className="mb-2 flex flex-wrap space-x-12 space-y-6">
                                <Link href={'/portfolio'}>
                                    <Button className="text-white   bg-secondary hover:bg-secondary-950 hover:cursor-pointer focus:ring-4 focus:ring-secondary-700 shadow-xs font-bold leading-5 rounded-full text-sm px-8 py-2.5 focus:outline-none uppercase">See our work
                                    </Button>
                                </Link>
                                <Link href={'/lets-work'} >
                                    <Button className="text-white hover:border-textDark  bg-primary1B box-border border border-transparent hover:bg-primary hover:cursor-pointer  focus:ring-4 focus:ring-primary1B shadow-xs font-bold leading-5 rounded-full text-sm px-8 py-2.5 focus:outline-none uppercase">Tell us your vision
                                    </Button>
                                </Link>
                            </div>
                            <p className="text-body-medium">
                                <b className="font-display font-bold text-title-medium animate-[ping_7s_infinite] ease-in">*</b>&nbsp;Empowering brands worldwide
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr className="border-black dark:border-off-white1B" />
        <div className="flex flex-nowrap overflow-clip">
            <h1 className="h2 font-headline font-bold text-5xl my-4 md:my-8 pl-8 uppercase  mx-auto">Maki&nbsp;Creative&nbsp;Studio</h1>
            <h1 className="h2 opacity-50 font-headline font-bold text-5xl my-4 md:my-8 pl-8 uppercase mx-auto">Maki&nbsp;Creative&nbsp;Studio</h1>
            <h1 className="h2 font-headline font-bold text-5xl my-4 md:my-8 pl-8 uppercase mx-auto">Maki&nbsp;Creative&nbsp;Studio</h1>
            <h1 className="h2 opacity-50 font-headline font-bold text-5xl my-4 md:my-8 pl-8 uppercase mx-auto">Maki&nbsp;Creative&nbsp;Studio</h1>
            <h1 className="h2 font-headline font-bold text-5xl my-4 md:my-8 pl-8 uppercase mx-auto">Maki&nbsp;Creative&nbsp;Studio</h1>
            <h1 className="h2 opacity-50 font-headline font-bold text-5xl my-4 md:my-8 pl-8 uppercase mx-auto">Maki&nbsp;Creative&nbsp;Studio</h1>
        </div>
        {/* <hr className="border-black dark:border-off-white1B" />
        <div className={"flex justify-center my-12 "}>
            <div className="flex flex-wrap justify-center items-center px-8 ">
                <span className="relative h-28 w-24 ">
                    <Image src={"/images/site/thomas-watson-ibm.png"} alt={"thomas watson portrait"} layout="fill" className="bg-gray-300 bg-opacity-40 object-cover rounded-[180px]"></Image>
                </span>
                <div className=" p-8 ">
                    <span className=" font-normal font-body leading-tight">&ldquo;<b>Good design is good business.</b>&rdquo;
                        <br />
                    </span>
                    <span className="text-title-medium font-medium font-title">— Thomas Watson Jr., Former CEO of IBM
                    </span>
                </div>
            </div>
        </div> */}
        <hr className="border-black dark:border-off-white1B" />
    </section>
}