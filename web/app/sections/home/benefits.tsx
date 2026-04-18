import Image from 'next/image';


import shareKnowledgeIcon from '@/app/icons/ui/share-knowledge.svg'
import partnershipIcon from '@/app/icons/ui/partnership.svg'
import turnaroundIcon from '@/app/icons/ui/turnaround.svg'
import futureDesignsIcon from '@/app/icons/ui/future-designs.svg'
import Link from 'next/link';

type AgencyBenefit = {
title: string,
description: string,
imageUrl: string,
iconUrl: string,
}
const agencyBenefits: AgencyBenefit[] = [
    {
        title: 'Flexible Collaboration',
        description: "Work with us from anywhere, anytime. Our remote setup means we're always just a message away.",
        imageUrl: '/images/site/collaboration-abstract.png',
        iconUrl: shareKnowledgeIcon,
    },
    {
        title: 'Partnership Approach',
        description: 'We grow together. Get a dedicated design partner who understands your business goals and vision.',
        imageUrl: '/images/site/partnership-abstract.png',
        iconUrl: partnershipIcon,
    },
    {
        title: 'Quick Turnaround',
        description: 'We understand your speed. Get your designs when you need them, not weeks later.',
        imageUrl: '/images/site/turnaround-abstract.png',
        iconUrl: turnaroundIcon,
    },
    {
        title: 'Future Proof designs',
        description: 'Scalable solutions that grow with your business. No need to start from scratch as you expand.',
        imageUrl: '/images/site/future-designs-abstract.png',
        iconUrl: futureDesignsIcon,
    }
] ;

export default function BenefitsSection() {
    return <section id="benefits" className={""}>
        <div className="p-8 pb-16 bg-radial-[at_25%_25%] from-sky-200/30 via-accent3/30 to-primary1B/10 to-90% backdrop-blur-3xl">
            <h2 className="h2 font-display font-medium  text-display-medium md:text-display-large mb-4 md:mb-8 mt-12 space-y-8">
                    <span className="p-1 px-2 mb-2 flex text-xl font-headlines font-medium  text-offWhite bg-primary0">
                        Should you have us,— for your design partner ?
                    </span>
                    <p className="leading-tight">
                        Here&apos;s what you&apos;ll get

                    </p>
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                
                {
                    agencyBenefits.map((benefit, index) => {
                    return <div key={"statId-" + index} className="bg-offWhite shadow-sm mb-2 hover:shadow hover:shadow-primary-400 hover:bg-primary-50 transition-all">   
                        <div className="relative h-80 w-full">
                            <div className="bg-gray-300 bg-cover flex items-center justify-center h-full w-full" style={{ backgroundImage: `url(${benefit.imageUrl})`}}>
                                <Image src={benefit.iconUrl} width={320} alt={benefit.title + ' icon'} className={'h-24 opacity-80'} />
                            </div> 
                        </div>
                        <h2 className="h2 font-display font-medium  text-display-medium md:text-7xl space-y-8">
                            <span className="p-1 px-2 mb-2 flex text-xl font-technical uppercase font-medium  text-offWhite bg-primary0">
                                {benefit.title}
                            </span>
                        </h2>                                             
                        <p className=" leading-relaxed p-4 text-xl mb-4 md:mb-8 ">
                            {benefit.description}
                        </p>
                    </div>
                })
            }
            </div>
        </div>

        <hr className="border-black dark:border-off-white1B" />
        <div className={"bg-black flex justify-center py-8"}>
            <Link href={"/form"} className="p-3 px-20 uppercase font-headlines font-bold text-center md:text-headline-large text-off-white1B bg-primary1B border border-black hover:text-black hover:transition-all duration-300 hover:bg-linear-to-r bg-opacity-[26] hover:from-[#7fecf0] hover:via-[#ecd179]  hover:to-[#85eca6] hover:shadow-sm hover:cursor-pointer  focus:ring-4 focus:ring-primary1B leading-5 rounded-full">
                Tell us your vision
            </Link>
        </div>
        <hr className="border-black dark:border-off-white1B" />
        <div className={"flex justify-center py-12  bg-black"}>
            <div className="flex flex-wrap justify-center items-center px-8 pb-4 ">
                <span className="relative h-28 w-24 ">
                    <Image src={"/images/site/paul-rand.png"} alt={"paul rand portrait"} layout="fill" className="bg-gray-300 bg-opacity-40 object-cover rounded-[180px] "></Image>
                </span>
                <div className=" p-8 text-off-white">
                    <span className=" font-normal font-body leading-tight">&ldquo;<b>Design is the silent ambassador of your brand.</b>&rdquo;
                        <br />
                    </span>
                    <span className="text-title-medium font-medium font-title">— Paul Rand, Legendary Designer
                    </span>
                </div>
            </div>
        </div>
        <hr className="hidden border-black dark:border-off-white1B" />
    </section>;
}