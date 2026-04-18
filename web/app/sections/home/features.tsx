import Image from 'next/image';

import groupShowIcon from '@/app/icons/ui/groupPresentation.svg'
import bookIcon from '@/app/icons/ui/book.svg'
import globeIcon from '@/app/icons/ui/globe.svg'
import webIcon from '@/app/icons/ui/web.svg'
import lookIcon from '@/app/icons/ui/accessibilityColor.svg'
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
        title: 'Look the part',
        subtitle: 'First impressions are made before you speak.',
        description: 'Brand identity, stationery, print and merch — everything that makes your business instantly recognizable.',
        linkUrl: '/services/design',
        imageUrl: '/images/site/seo-abstract.png',
        iconUrl: lookIcon,
    },
    {
        title: 'Show up everywhere',
        subtitle: 'Consistent. On-brand. Hard to ignore.',
        description: 'Social media assets, email templates, digital ads, and marketing graphics — built for every platform your customers are on.',
        linkUrl: '/services/design',
        imageUrl: '/images/site/uiux-design-abstract.png',
        iconUrl: globeIcon,
    },
    {
        title: 'Win the room',
        subtitle: 'Walk in ready. Leave with the deal.',
        description: 'Pitch decks, presentations, trade show booths, and sales sheets — designed to make your case before you say a word.',
        linkUrl: '/services/design',
        imageUrl: '/images/site/landing-pages-abstract.png',
        iconUrl: groupShowIcon,
    },
    {
        title: 'Grow online',
        subtitle: 'Your website should work while you sleep.',
        description: 'Web design, landing pages, and SEO-friendly builds that turn the right visitors into paying customers.',
        linkUrl: '/services/digital',
        imageUrl: '/images/site/extra-services-abstract.png',
        iconUrl: webIcon,
    },
    {
        title: 'Share what you know',
        subtitle: 'Turn your expertise into content people trust.',
        description: 'Ebooks, reports, infographics, and lead magnets — designed to attract the right clients and keep them coming back.',
        linkUrl: '/services/marketing',
        imageUrl: '/images/site/web-design-abstract.png',
        iconUrl: bookIcon,
    },
]

export default function FeaturesSection() {
    return <section id="features" className={"border-t border-t-black dark:border-t-off-white bg-[#228B22]/10"}>
        <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl mt-12 mb-4 md:mb-8 p-8">

            <p className="">One studio. Every design service  —<br /> your business needs.</p>
            <p className="text-lg font-headlines leading-tight  font-medium pt-2 ps-8">
                {/* We partner with businesses to create design systems that scale. <br /> */}
                From brand foundations to digital products.
            </p>

        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-8">

            {
                agencyFeatures.map((feature, index) => {
                        return <Link key={"serviceCardId" + index} href={feature.linkUrl} className=' hover:text-white bg-offWhite hover:bg-primary0 hover:shadow-md hover:shadow-primary0-400 transition-all h-full'>
                            <div className={'border-black border-2 border-b-16  dark:border-off-white h-full'}>
                                <div className='mb-2 h-80'>
                                    <div className="bg-gray-300 bg-cover bg-[url(/images/site/landing-pages-abstract.png)] flex items-center justify-center h-full w-full"style={{ backgroundImage: `url(${feature.imageUrl})`}}>
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
    </section>
}