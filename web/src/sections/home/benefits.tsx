// import Image from 'next/image';


import shareKnowledgeIcon from '@/src/icons/ui/share-knowledge.svg'
import partnershipIcon from '@/src/icons/ui/partnership.svg'
import turnaroundIcon from '@/src/icons/ui/turnaround.svg'
import futureDesignsIcon from '@/src/icons/ui/future-designs.svg'
// import Link from 'next/link';

type AgencyBenefit = {
    title: string,
    label: string,
    description: string,
    imageUrl: string,
    iconUrl: string,
}
const agencyBenefits: AgencyBenefit[] = [
    {
        title: 'Flexible Collaboration',
        label: 'Zero Friction',
        description: "Work with us from anywhere, anytime. Our remote setup means you're always one message away from a reply.",
        imageUrl: '/images/site/collaboration-abstract.png',
        iconUrl: shareKnowledgeIcon.src,
    },
    {
        title: 'Partnership Approach',
        label: 'Dedicated Partner',
        description: 'A dedicated design partner who learns your business goals and builds toward them with you.',
        imageUrl: '/images/site/partnership-abstract.png',
        iconUrl: partnershipIcon.src,
    },
    {
        title: 'Quick Turnaround',
        label: 'Speed Guarantee',
        description: 'Get designs when you need them, not weeks later. Speed is built into our process.',
        imageUrl: '/images/site/turnaround-abstract.png',
        iconUrl: turnaroundIcon.src,
    },
    {
        title: 'Future Proof designs',
        label: 'Built to Scale',
        description: 'Scalable solutions that grow with your business. No need to start from scratch as you expand.',
        imageUrl: '/images/site/future-designs-abstract.png',
        iconUrl: futureDesignsIcon.src,
    }
];

export default function BenefitsSection() {
    return <section id="benefits" className={""}>
        <div className="p-8 container mx-auto pb-16 bg-radial-[at_25%_25%] from-sky-200/30 via-accent3/30 to-primary1B/10 to-90% backdrop-blur-3xl">
            <h2 className="h2 font-display font-medium  text-display-medium md:text-display-large mb-4 md:mb-8 mt-12 space-y-8">
                <span className="p-1 px-2 mb-2 flex text-xl font-headlines font-medium  text-offWhite bg-primary0">
                    Why Teams Choose Us as Their Design Partner
                </span>
                <p className="leading-tight">
                    Here&apos;s what you&apos;ll get

                </p>
            </h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {
                    agencyBenefits.map((benefit, index) => {
                        return <div key={"statId-" + index} className="bg-offWhite dark:bg-primary0 shadow-sm mb-2 hover:shadow hover:shadow-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/50 transition-all">
                            <h2 className="h2 font-display font-medium  text-display-medium md:text-7xl space-y-8">
                                <span className="p-1 px-2 flex text-xl font-technical uppercase font-medium  text-offWhite dark:text-primary0 bg-primary0 dark:bg-white">
                                    {benefit.label} <span className='animate-pulse 1s_infinite'>*</span>
                                </span>
                            </h2>
                            <div className="relative h-80 w-full">
                                <div className="bg-gray-300 bg-cover flex items-center justify-center h-full w-full" style={{ backgroundImage: `url(${benefit.imageUrl})` }}>
                                    <img src={benefit.iconUrl} width={320} alt={benefit.title + ' icon'} className={'h-24 opacity-80'} />
                                </div>
                            </div>
                            <h2 className="h2 font-display font-medium  text-display-medium md:text-7xl space-y-8">
                                <span className="p-1 px-2 mb-2 flex text-xl font-technical uppercase font-medium  text-offWhite dark:text-primary0 bg-primary0 dark:bg-white">
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
            <a href={"/form"} className="p-3 px-20 uppercase font-headlines font-bold text-center md:text-headline-large text-off-white1B bg-primary1B border border-black hover:text-black hover:transition-all duration-300 hover:bg-linear-to-r bg-opacity-[26] hover:from-[#7fecf0] hover:via-[#ecd179]  hover:to-[#85eca6] hover:shadow-sm hover:cursor-pointer  focus:ring-4 focus:ring-primary1B leading-5 rounded-full">
                Tell us your vision
            </a>
        </div>
        <hr className="border-black dark:border-off-white1B" />
        <div className={"flex justify-center py-12  bg-black"}>
            <div className="flex flex-wrap justify-center items-center px-8 pb-4 ">
                <span className="relative h-28 w-24 ">
                    <img src={"/images/site/paul-rand.png"} alt={"paul rand portrait"} className="bg-gray-300 bg-opacity-40 h-full object-cover rounded-[180px] " />
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