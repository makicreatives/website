import Image from 'next/image';

import webIcon from '@/app/icons/ui/web.svg'
import devicesAppsIcon from '@/app/icons/ui/devices-apps.svg'
import docSentimentIcon from '@/app/icons/ui/doc-sentiment.svg'
import searchAdvIcon from '@/app/icons/ui/search-advanced.svg'
import taskAddIcon from '@/app/icons/ui/task-add.svg'
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
        title: 'Web design',
        subtitle: 'Websites that work as hard as you do.',
        linkUrl: '/services/design',
        description: 'From engaging homepages to conversion-focused layouts that turn visitors into customers.',
        imageUrl: '/images/site/web-design-abstract.png',
        iconUrl: webIcon,
    },
        {
        title: 'UI/UX design',
        subtitle: 'Make every interaction count.',
        description: 'User-friendly interfaces that keep your customers coming back for more.',        
        linkUrl: '/services/design',
        imageUrl: '/images/site/uiux-design-abstract.png',
        iconUrl: devicesAppsIcon,
    },
        {
        title: 'SEO',
        subtitle: 'Get found by the right people.',
        description: 'We build SEO right into your design, helping your business climb search rankings naturally.',        
        linkUrl: '/services/design',
        imageUrl: '/images/site/seo-abstract.png',
        iconUrl: searchAdvIcon,
    },
        {
        title: 'Landing Pages',
        subtitle: 'Turn clicks into customers with landing pages that convert.',
        description: 'Clear, compelling, and crafted for your specific audience.',        
        linkUrl: '/services/design',
        imageUrl: '/images/site/landing-pages-abstract.png',
        iconUrl: docSentimentIcon,
    },
        {
        title: 'Additional Services',
        subtitle: 'All your design needs under one roof, minus the complexity',
        description: `
            — Brand Identity Design <br />
            — Social Media Graphics <br />
            — Email Templates <br />
            — Digital Marketing Assets <br />
            — Print-Ready Designs <br />
        `,        
        linkUrl: '/services/design',
        imageUrl: '/images/site/extra-services-abstract.png',
        iconUrl: taskAddIcon,
    },
]

export default function FeaturesSection() {
    return <section id="features" className={"border-t border-t-black dark:border-t-off-white bg-[#228B22]/10"}>
        <h2 className="h2 font-display text-display-medium md:text-5xl text-primary mb-4 md:mb-8 p-8">It&apos;s the design services that grow —<br /> with your business</h2>
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