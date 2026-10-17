import { Button, Pill } from "@/app/components";
import Link from "next/link";

export default function WhyUsSection() {
    return <section id="quick-cta">
        <div className="p-8 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="order-2 lg:order-none space-y-4 my-auto">
                <h2 className="h2 font-display font-medium  text-display-medium md:text-display-large mb-4 md:mb-8 space-y-8">
                    <span className="p-1 px-2 mb-2 flex text-xl font-headlines font-medium  text-offWhite bg-primary0">
                        Every asset we create starts with understanding your business
                    </span>
                    <p className="leading-tight">
                        Design built around your business

                    </p>
                </h2>
                <p className=" leading-relaxed">
                    By understanding what you&apos;re selling and who you&apos;re
                    selling it to as a business. Your brand identity, packaging, pitch deck — all of it stays
                    consistent with the  <Pill>brand and the business</Pill>, because one person holds the full picture. No style drift. No
                    miscommunication between teams.

                    {/* <Pill>Remote-first collaboration.</Pill> Work with us from anywhere. We&apos;re available when you need us, without the overhead of an in-house team.
                    <Pill>A&nbsp;true&nbsp;partnership.</Pill> We become an extension of your team. You focus on strategy and growth—we handle the execution.
                    <Pill>Consistent&nbsp;delivery.</Pill> Reliable turnarounds that fit your timeline. No surprises, no delays.
                    <Pill>Built&nbsp;to&nbsp;scale.</Pill> Your design system grows with your business. From early stage to enterprise, we adapt to your needs. */}
                </p>
                <div className="pb-8">
                    <Link href={'/lets-work'} >
                        <Button className="text-white hover:border-textDark  bg-primary1B box-border border border-transparent hover:bg-primary hover:cursor-pointer  focus:ring-4 focus:ring-primary1B shadow-xs font-bold leading-5 rounded-full text-sm px-8 py-2.5 focus:outline-none uppercase">
                            Get a quote
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="">
                <div className="bg-primary0  h-80 lg:h-[30vw] w-full">
                    <div className="video-container relative overflow-clip  h-full flex flex-col justify-between">
                        <video id="bg-video" className="absolute top-[0%] left-[0%] object-cover min-w-full min-h-full w-auto h-auto -z-0" autoPlay muted loop playsInline controls>
                            <source src={"https://www.pexels.com/download/video/35020790/"} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
        <hr className="border-black dark:border-off-white1B mb-12" />
    </section>
}