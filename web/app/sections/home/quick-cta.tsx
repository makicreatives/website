import { Button, Pill } from "@/app/components";
import Link from "next/link";

export default function QuickCTASection() {
    return <section id="quick-cta">
        <div className="p-8 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="space-y-4 my-auto">
                <h2 className="h2 font-display font-medium  text-display-medium md:text-display-large mb-4 md:mb-8 space-y-8">
                    <span className="p-1 px-2 mb-2 flex text-xl font-headlines font-medium  text-offWhite bg-primary0">
                        Your design team, on demand
                    </span>
                    <p className="leading-tight">
                        Here&apos;s what working with us looks like

                    </p>
                </h2>
                <p className=" leading-relaxed">
                    <Pill>Remote-first collaboration.</Pill> Work with us from anywhere. We're available when you need us, without the overhead of an in-house team.
                    <Pill>A&nbsp;true&nbsp;partnership.</Pill> We become an extension of your team. You focus on strategy and growth—we handle the execution. 
                    <Pill>Consistent&nbsp;delivery.</Pill> Reliable turnarounds that fit your timeline. No surprises, no delays.
                    <Pill>Built&nbsp;to&nbsp;scale.</Pill> Your design system grows with your business. From early stage to enterprise, we adapt to your needs.
                </p>
                <div>
                    <Link href={'/lets-work'} >
                        <Button className="text-white hover:border-textDark  bg-primary1B box-border border border-transparent hover:bg-primary hover:cursor-pointer  focus:ring-4 focus:ring-primary1B shadow-xs font-bold leading-5 rounded-full text-sm px-8 py-2.5 focus:outline-none uppercase">
                            Tell us your vision
                        </Button>
                    </Link>
                </div>
            </div>
            <div>
                <div className="bg-primary0  h-[30vw] w-full">
                    <div>

                    </div>
                </div>
            </div>
        </div>
        <hr className="border-black dark:border-off-white1B mb-12" />
    </section>
}