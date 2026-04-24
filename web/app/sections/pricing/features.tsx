import Image from 'next/image';

import userIcon from '@/app/icons/ui/partnership.svg'
import timeIcon from '@/app/icons/ui/turnaround.svg'
import refreshIcon from '@/app/icons/ui/updateComplete.svg'
import folderIcon from '@/app/icons/ui/folderMoveTo.svg'
import documentIcon from '@/app/icons/ui/doc-sentiment.svg'
import pauseIcon from '@/app/icons/ui/pauseFeature.svg'
import Link from 'next/link';

type AgencyFeature = {
    title: string,
    subtitle: string,
    description: string,
    linkUrl: string,
    imageUrl: string,
    iconUrl: string,
}

const agencyFeatures: AgencyFeature[] = [
    {
        title: "One designer. Start to finish.",
        subtitle: "No handoffs. No lost context.",
        description: "You work directly with the same designer from brief to delivery. Your brand stays consistent and nothing gets lost in translation.",
        linkUrl: "/services",
        imageUrl: "/images/features/one-designer.png",
        iconUrl: userIcon,
    },
    {
        title: "Fast turnaround. Every time.",
        subtitle: "2-3 days on retainer. 5-7 on projects.",
        description: "Design that moves at the pace your business needs. No waiting weeks for a first draft or chasing for updates.",
        linkUrl: "/services",
        imageUrl: "/images/features/fast-turnaround.png",
        iconUrl: timeIcon,
    },
    {
        title: "Unlimited revisions.",
        subtitle: "We get it right. Full stop.",
        description: "Retainer clients get unlimited revisions. Project clients get three rounds. Either way we don't sign off until you're happy with the work.",
        linkUrl: "/services",
        imageUrl: "/images/features/revisions.png",
        iconUrl: refreshIcon,
    },
    {
        title: "Source files. Always.",
        subtitle: "Your files. Your property.",
        description: "Every project ships with full source files — Figma, Illustrator, whatever the job calls for. You own everything we make.",
        linkUrl: "/services",
        imageUrl: "/images/features/source-files.png",
        iconUrl: folderIcon,
    },
    {
        title: "Print and digital ready.",
        subtitle: "Built for every format you need.",
        description: "Every asset delivered print-ready and screen-ready. No back and forth with your printer or developer over wrong file formats.",
        linkUrl: "/services",
        imageUrl: "/images/features/file-formats.png",
        iconUrl: documentIcon,
    },
    {
        title: "Pause anytime.",
        subtitle: "No lock-in. No penalty.",
        description: "Retainer clients can pause or cancel with a week's notice. Design should flex with your business — not the other way around.",
        linkUrl: "/services",
        imageUrl: "/images/features/pause.png",
        iconUrl: pauseIcon,
    },
];

export default function FeaturesSection() {
    return <section id="features" className={"border-t border-t-black dark:border-t-off-white "}>
        <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl mt-12 mb-4 md:mb-8 p-8">

            <p className="">What&apos;s included in every engagement</p>
            <p className="text-lg font-headlines leading-tight  font-medium pt-2 ps-8">
                Retainer or project — these are the things that never change.
            </p>

        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-8">

            {
                agencyFeatures.map((feature, index) => {
                    return <Link key={"featureCardId" + index} href={feature.linkUrl} className=' hover:text-white bg-offWhite hover:bg-primary0 hover:shadow-md hover:shadow-primary0-400 transition-all h-full'>
                        <div className={'border-black border-2 border-b-16  dark:border-off-white h-full'}>
                            <div className='mb-2 h-80'>
                                <div className="bg-gray-300 bg-cover bg-[url(/images/site/landing-pages-abstract.png)] flex items-center justify-center h-full w-full" style={{ backgroundImage: `url(${feature.imageUrl})` }}>
                                    <Image src={feature.iconUrl} width={320} className='h-24 opacity-50' alt={feature.title + " service card"} />
                                </div>
                            </div>
                            <div className='p-8'>
                                <p className='mb-1 font-bold font-headlines text-headline-large uppercase'>
                                    {feature.title}
                                </p>
                                <h2 className="h2 font-technical space-y-8 mb-2">
                                    <span className="p-1 flex text-xs uppercase font-medium  text-offWhite ">
                                        {feature.subtitle}
                                    </span>
                                </h2>
                                <p className=" leading-relaxed text-xl mb-4 md:mb-8 ">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </Link>;
                })
            }

        </div>
        <hr className="border-black dark:border-off-white1B" />
    </section>
}