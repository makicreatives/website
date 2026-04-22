import Image from 'next/image';

import devicesAppsIcon from '@/app/icons/ui/devices-apps.svg'
import webIcon from '@/app/icons/ui/web.svg'
import searchAdvIcon from '@/app/icons/ui/search-advanced.svg'
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

const productionFeatures: AgencyFeature[] = [
    {
        title: "A website that earns its keep.",
        subtitle: "More than a pretty homepage.",
        description: "Fast, clean, conversion-focused websites built to turn the right visitors into leads and customers.",
        linkUrl: "/services/digital#web",
        imageUrl: "/images/features/website.png",
        iconUrl: webIcon,
    },
    {
        title: "Interfaces people enjoy.",
        subtitle: "Good UX is good business.",
        description: "Product UI and UX design built around how your users actually think and move. Simple, smooth, and built to retain.",
        linkUrl: "/services/digital#product",
        imageUrl: "/images/features/uiux.png",
        iconUrl: devicesAppsIcon,
    },
    {
        title: "One page. One job.",
        subtitle: "Landing pages built to convert.",
        description: "Focused, distraction-free landing pages that explain your offer clearly and move visitors toward one action.",
        linkUrl: "/services/digital#landing-pages",
        imageUrl: "/images/features/landing-pages.png",
        iconUrl: docSentimentIcon,
    },
    {
        title: "Found before the competition.",
        subtitle: "SEO built in from the start.",
        description: "We design your site with search in mind. Clean structure, fast load, right signals — so the right people find you without paying for every click.",
        linkUrl: "/services/digital#seo",
        imageUrl: "/images/features/seo.png",
        iconUrl: searchAdvIcon,
    },
]

export default function FeaturesSection() {
    return <section id="features" className={"border-t border-t-black dark:border-t-off-white "}>
        <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl mt-12 mb-4 md:mb-8 p-8">

            <p className="">Digital experiences that work for your business</p>
            <p className="text-lg font-headlines leading-tight  font-medium pt-2 ps-8">
                {/* We partner with businesses to create design systems that scale. <br /> */}
                Designed to look good and built to convert.
            </p>

        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-8">

            {
                productionFeatures.map((feature, index) => {
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