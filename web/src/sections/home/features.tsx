// import Image from 'next/image';

import groupShowIcon from '@/src/icons/ui/groupPresentation.svg'
import bookIcon from '@/src/icons/ui/book.svg'
import globeIcon from '@/src/icons/ui/globe.svg'
import webIcon from '@/src/icons/ui/web.svg'
import lookIcon from '@/src/icons/ui/accessibilityColor.svg'
// import Link from 'next/link';

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
        title: 'Look the part',
        subtitle: 'First impressions are made before you speak.',
        description: 'Brand identity, stationery, print and merch — everything that makes your business instantly recognizable.',
        linkUrl: '/services/design',
        imageUrl: '/images/site/seo-abstract.png',
        iconUrl: lookIcon.src,
    },
    {
        title: 'Show up everywhere',
        subtitle: 'Consistent. On-brand. Hard to ignore.',
        description: 'Social media assets, email templates, digital ads, and marketing graphics — built for every platform your customers are on.',
        linkUrl: '/services/design',
        imageUrl: '/images/site/uiux-design-abstract.png',
        iconUrl: globeIcon.src,
    },
    {
        title: 'Win the room',
        subtitle: 'Walk in ready. Leave with the deal.',
        description: 'Pitch decks, presentations, trade show booths, and sales sheets — designed to make your case before you say a word.',
        linkUrl: '/services/design',
        imageUrl: '/images/site/landing-pages-abstract.png',
        iconUrl: groupShowIcon.src,
    },
    {
        title: 'Grow online',
        subtitle: 'Your website should work while you sleep.',
        description: 'Web design, landing pages, and SEO-friendly builds that turn the right visitors into paying customers.',
        linkUrl: '/services/digital',
        imageUrl: '/images/site/extra-services-abstract.png',
        iconUrl: webIcon.src,
    },
    {
        title: 'Share what you know',
        subtitle: 'Turn your expertise into content people trust.',
        description: 'Ebooks, reports, infographics, and lead magnets — designed to attract the right clients and keep them coming back.',
        linkUrl: '/services/marketing',
        imageUrl: '/images/site/web-design-abstract.png',
        iconUrl: bookIcon.src,
    },
]

export default function FeaturesSection() {
    return <section id="features" className={"border-t border-t-black dark:border-t-off-white bg-[#228B22]/10"}>
        <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl mt-12 mb-4 md:mb-8 p-8 container mx-auto">

            <p className="">One studio. Every design service  —<br /> your business needs.</p>
            <p className="text-lg font-headlines leading-tight  font-medium pt-2 ps-8">
                {/* We partner with businesses to create design systems that scale. <br /> */}
                From brand foundations to digital products.
            </p>

        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-8 container mx-auto">

            {
                agencyFeatures.map((feature, index) => {
                        return <a key={"featureCardId" + index} href={feature.linkUrl} className=' hover:text-white dark:hover:text-primary0 bg-offWhite dark:bg-primary0 hover:bg-primary0 dark:hover:bg-offWhite hover:shadow-md hover:shadow-primary0-400 transition-all h-full'>
                            <div className={'border-black border-2 border-b-16  dark:border-off-white h-full'}>
                                <div className='mb-2 h-80'>
                                    <div className="bg-gray-300 bg-cover bg-[url(/images/site/landing-pages-abstract.png)] flex items-center justify-center h-full w-full"style={{ backgroundImage: `url(${feature.imageUrl})`}}>
                                        <img src={feature.iconUrl} width={320} className='h-24 opacity-50' alt={feature.title + " service card"} />
                                    </div>
                                </div>
                                <div className='p-8'>
                                    <p className='mb-1 font-bold font-headlines text-headline-large uppercase'>
                                        {feature.title}
                                    </p>
                                    <h2 className="h2 font-technical space-y-8 mb-2">
                                        <span className="p-1 flex text-xs uppercase font-medium  text-offWhite dark:text-primary0 ">
                                            {feature.subtitle}
                                        </span>
                                    </h2>                                             
                                    <p className=" leading-relaxed text-xl mb-4 md:mb-8 ">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </a>;
                    })
            }

        </div>
        <hr className="border-black dark:border-off-white1B" />
    </section>
}