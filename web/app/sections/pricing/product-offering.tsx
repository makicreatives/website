import Link from "next/link";
import Image from 'next/image';


import emailIcon from '@/app/icons/ui/email-new.svg'
import taskAddIcon from '@/app/icons/ui/task-add.svg'

export default function ProductOfferingSection() {
    type PricingTier = {
        id: string,
        title: string,
        startingFrom?: boolean,
        price: number,
        currency: string,
        period: string,
        tagline: string,
        description: string,
        turnaround: string,
        cta: string,
        ctaUrl: string,
        iconUrl: string,
        isRecommended: boolean,
        perks: string[],

    };

    const pricingTiers: PricingTier[] = [
        {
            id: "retainer",
            title: "Monthly Retainer",
            price: 2500,
            currency: "USD",
            period: "per month",
            tagline: "For businesses that always have something to design.",
            description: "One active request at a time. Submit as many requests as you need — we work through them one by one, fast and focused. Pause or cancel anytime.",
            turnaround: "2-3 business days per request",
            cta: "Get Started",
            ctaUrl: "/form",
            iconUrl: emailIcon,
            isRecommended: true,
            perks: [
                "Unlimited design requests",
                "One active request at a time",
                "2-3 business day turnaround",
                "Unlimited revisions",
                "Pause or cancel anytime",
                "Direct designer access",
                "Source files included",
                "Dedicated project board"
            ]
        },
        {
            id: "by-brief",
            title: "By Brief",
            startingFrom: true,
            price: 1500,
            currency: "USD",
            period: "per project",
            tagline: "For businesses with one clear project in mind.",
            description: "Tell us what you need. We scope it, price it, and deliver it. One project, start to finish, with a clear timeline and no surprises.",
            turnaround: "5-7 business days depending on scope",
            cta: "Send Your Brief",
            ctaUrl: "/form",
            iconUrl: taskAddIcon,
            isRecommended: false,
            perks: [
                "Fixed project scope",
                "Custom quote based on brief",
                "5-7 business day turnaround",
                "3 revision rounds included",
                "Source files included",
                "Direct designer access",
                "Print and digital ready files",
            ]
        }
    ];

    return <section id="product-offering">
        <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl mt-12 mb-4 md:mb-8 p-8">

            <p className="">One studio. Every design service  —<br /> your business needs.</p>
            <p className="text-lg font-headlines leading-tight  font-medium pt-2 ps-8">
                {/* We partner with businesses to create design systems that scale. <br /> */}
                Design, digital, and marketing — all under one roof.
            </p>

        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-8">

            {
                pricingTiers.map((tier, index) => {
                    return <Link key={"featureCardId" + index} href={tier.ctaUrl} className=' hover:text-white bg-offWhite hover:bg-primary0 hover:shadow-md hover:shadow-primary0-400 transition-all h-full'>
                        <div className={'border-black border-2 border-b-16  dark:border-off-white h-full'}>
                            <div className='mb-2 h-80'>
                                <div className="bg-gray-300 bg-cover bg-[url(/images/site/landing-pages-abstract.png)] flex items-center justify-center h-full w-full" style={{ backgroundImage: `url(${'tier.imageUrl'})` }}>
                                    <Image src={tier.iconUrl} width={320} className='h-24 opacity-50' alt={tier.title + " service card"} />
                                </div>
                            </div>
                            <div className='p-8'>
                                <p className='mb-1 font-bold font-headlines text-headline-large uppercase'>
                                    {tier.title}
                                </p>
                                <h2 className="h2 font-technical space-y-8 mb-2">
                                    <span className="p-1 flex text-xs uppercase font-medium  text-offWhite ">
                                        <ul className="">
                                            {tier.perks.map((perk, i) => {
                                                return <li key={[tier.id, i].join("-")}>{perk}</li>
                                            })}
                                        </ul>
                                    </span>
                                </h2>
                                <p className=" leading-relaxed text-xl mb-4 md:mb-8 ">
                                    {tier.description}
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