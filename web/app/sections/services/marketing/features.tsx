import Image from 'next/image';

import devicesAppsIcon from '@/app/icons/ui/devices-apps.svg'
import emailIcon from '@/app/icons/ui/email-new.svg'
import taskAddIcon from '@/app/icons/ui/task-add.svg'
import marketingIcon from '@/app/icons/ui/location-star.svg'
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
        title: "Show up on every platform.",
        subtitle: "Consistent graphics across every channel.",
        description: "Social posts, covers, story templates, ad creatives — all on-brand and ready to post without a redesign every time.",
        linkUrl: "/services/marketing#social-media",
        imageUrl: "/images/features/social-media.png",
        iconUrl: devicesAppsIcon,
    },
    {
        title: "Emails worth opening.",
        subtitle: "Clean templates that look good everywhere.",
        description: "Email designs that render correctly in every inbox, match your brand, and make it easy for readers to take the next step.",
        linkUrl: "/services/marketing#email-templates",
        imageUrl: "/images/features/email.png",
        iconUrl: emailIcon,
    },
    {
        title: "Pull the right clients in.",
        subtitle: "Lead magnets people actually want.",
        description: "A well-designed free resource does the selling before you do. We design lead magnets that attract the right people and convert.",
        linkUrl: "/services/marketing#lead-magnets",
        imageUrl: "/images/features/lead-magnets.png",
        iconUrl: taskAddIcon,
    },
    {
        title: "Everything looking sharp.",
        subtitle: "Marketing assets for every touchpoint.",
        description: "Brochures, banners, one-pagers, digital ads — every piece of collateral your team needs to go to market looking professional.",
        linkUrl: "/services/marketing#marketing-assets",
        imageUrl: "/images/features/marketing-assets.png",
        iconUrl: marketingIcon,
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