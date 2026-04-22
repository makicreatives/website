import Image from 'next/image';

import brandIcon from '@/app/icons/ui/badge.svg'
import partnershipIcon from '@/app/icons/ui/partnership.svg'
import printIcon from '@/app/icons/ui/presentation.svg'
import webIcon from '@/app/icons/ui/web.svg'
import marketingIcon from '@/app/icons/ui/ibm-consulting-advantage-assistance.svg'
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

const agencyFeatures: AgencyFeature[] = [
    {
        title: "Brand first, always",
        subtitle: "Everything starts with a strong identity",
        description: "Before anything else, your brand needs to be solid. Logo, colors, fonts, tone — we build the foundation everything else sits on.",
        linkUrl: "/services/design#brand-identity",
        imageUrl: "/images/features/brand-first.png",
        iconUrl: brandIcon,
    },
    {
        title: "Design that travels",
        subtitle: "Print, screen, stage — it all connects.",
        description: "From business cards to trade show booths, every asset we make stays on-brand no matter where it shows up.",
        linkUrl: "/services/design",
        imageUrl: "/images/features/design-travels.png",
        iconUrl: printIcon,
    },
    {
        title: "Digital that performs",
        subtitle: "Built to convert, not just impress.",
        description: "Websites and landing pages designed with your customer's next step in mind. Every layout decision has a reason.",
        linkUrl: "/services/digital",
        imageUrl: "/images/features/digital-performs.png",
        iconUrl: webIcon,
    },
    {
        title: "Marketing that sticks",
        subtitle: "Assets your team will actually use.",
        description: "Social graphics, email templates, lead magnets — designed to fit how your team works and built to stay consistent.",
        linkUrl: "/services/marketing",
        imageUrl: "/images/features/marketing-sticks.png",
        iconUrl: marketingIcon,
    },
    {
        title: "Content that builds trust",
        subtitle: "Turn your expertise into something tangible.",
        description: "Ebooks, reports, pitch decks — designed to position you as the authority in your space before the meeting even starts.",
        linkUrl: "/services/design#ebooks-reports",
        imageUrl: "/images/features/content-trust.png",
        iconUrl: docSentimentIcon,
    },
    {
        title: "One point of contact",
        subtitle: "No handoffs. No lost briefs.",
        description: "You work directly with the designer from brief to delivery. Faster decisions, sharper output, nothing gets lost in translation.",
        linkUrl: "/services",
        imageUrl: "/images/features/one-contact.png",
        iconUrl: partnershipIcon,
    },
]
export default function FeaturesSection() {
    return <section id="features" className={"border-t border-t-black dark:border-t-off-white "}>
        <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl mt-12 mb-4 md:mb-8 p-8">

            <p className="">One studio. Every design service  —<br /> your business needs.</p>
            <p className="text-lg font-headlines leading-tight  font-medium pt-2 ps-8">
                {/* We partner with businesses to create design systems that scale. <br /> */}
                Design, digital, and marketing — all under one roof.
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