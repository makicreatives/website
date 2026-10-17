import Image from 'next/image';

import brandIcon from '@/app/icons/ui/badge.svg'
import presentationIcon from '@/app/icons/ui/presentation.svg'
import printIcon from '@/app/icons/ui/person-favorite.svg'
import packageIcon from '@/app/icons/ui/box.svg'
import eventIcon from '@/app/icons/ui/groupPresentation.svg'
import docSentimentIcon from '@/app/icons/ui/doc-sentiment.svg'
import Link from 'next/link';

type AgencyFeature = {
    title: string,
    subtitle: string,
    description: string,
    linkUrl: string,
    imageUrl: string,
    iconUrl: string,
}

const designFeatures: AgencyFeature[] = [
    {
        title: "A brand people remember.",
        subtitle: "Identity design that does the heavy lifting.",
        description: "Logo, color palette, typography, brand guidelines — everything your business needs to show up consistently and professionally.",
        linkUrl: "/services/design#brand-identity",
        imageUrl: "/images/features/brand-remember.png",
        iconUrl: brandIcon,
    },
    {
        title: "Packaging that sells itself.",
        subtitle: "Stand out before they even pick it up.",
        description: "Your product sits next to competitors every day. We design packaging that makes the choice obvious.",
        linkUrl: "/services/design#packaging",
        imageUrl: "/images/features/packaging.png",
        iconUrl: packageIcon,
    },
    {
        title: "Print that shows up.",
        subtitle: "Branded gear your team will actually wear.",
        description: "T-shirts, caps, stationery, merch — every piece designed to keep your brand looking sharp everywhere it appears.",
        linkUrl: "/services/design#print",
        imageUrl: "/images/features/print.png",
        iconUrl: printIcon,
    },
    {
        title: "Decks that close deals.",
        subtitle: "Slides your investors will actually read.",
        description: "Clean, structured pitch decks and presentations built to keep the room's attention and make your case clearly.",
        linkUrl: "/services/design#pitch-decks",
        imageUrl: "/images/features/pitch-decks.png",
        iconUrl: presentationIcon,
    },
    {
        title: "Events worth showing up to.",
        subtitle: "Own the floor before you say a word.",
        description: "Booth graphics, pull-up banners, handouts, signage — everything you need to stand out on the show floor.",
        linkUrl: "/services/design#trade-show",
        imageUrl: "/images/features/trade-show.png",
        iconUrl: eventIcon,
    },
    {
        title: "Content worth reading.",
        subtitle: "Turn raw knowledge into polished assets.",
        description: "Ebooks, reports, infographics — laid out, branded, and designed to be shared. Not just read once and closed.",
        linkUrl: "/services/design#ebooks-reports",
        imageUrl: "/images/features/content.png",
        iconUrl: docSentimentIcon,
    },
]
export default function FeaturesSection() {
    return <section id="features" className={"border-t border-t-black dark:border-t-off-white "}>
        <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl mt-12 mb-4 md:mb-8 p-8">

            <p className="">Every design asset your business needs</p>
            <p className="text-lg font-headlines leading-tight  font-medium pt-2 ps-8">
                {/* We partner with businesses to create design systems that scale. <br /> */}
                Built to look sharp in print, on screen, and in the room.
            </p>

        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-8">

            {
                designFeatures.map((feature, index) => {
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