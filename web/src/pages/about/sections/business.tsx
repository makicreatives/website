'use client'

import { Faq } from "@/app/components";
import { faqs } from "@/app/about/sections/faq";

import Image from 'next/image';

import promiseIcon from '@/app/icons/ui/location-star.svg'
import missionIcon from '@/app/icons/ui/globe.svg'
import visionIcon from '@/app/icons/ui/accessibilityColor.svg'

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
        title: 'Vision',
        subtitle: 'Where we\'re headed',
        description: 'To be the go-to design studio for B2B businesses that want to look credible, communicate clearly, and grow with confidence.',
        linkUrl: '/services/design',
        imageUrl: '/images/site/seo-abstract.png',
        iconUrl: visionIcon,
    },
    {
        title: 'Mission',
        subtitle: 'Why we show up every day',
        description: 'To make design work harder for your business. Not just to look good — but speak  clearly to your customers, earn their trust, and move them to act.',
        linkUrl: '/services/design',
        imageUrl: '/images/site/uiux-design-abstract.png',
        iconUrl: missionIcon,
    },
    {
        title: 'Promise',
        subtitle: 'What you can count on',
        description: 'A smooth process. A designer who understands your business. And work that serves your customer — not only your mood board.',
        linkUrl: '/services/design',
        imageUrl: '/images/site/landing-pages-abstract.png',
        iconUrl: promiseIcon,
    },

]
export default function BusinessSection() {
    return <>
        <main className="p-8">
            {/* Vision */}

        </main>
        <section id="features" className={"border-t border-t-black dark:border-t-off-white bg-primary1B/10"}>
            <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl mt-12 mb-4 md:mb-8 p-8">

                <p className="">One studio. Every design service  —<br /> your business needs.</p>
                <p className="text-lg font-headlines leading-tight  font-medium pt-2 ps-8">
                    {/* We partner with businesses to create design systems that scale. <br /> */}
                    From brand foundations to digital products.
                </p>

            </h2>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 space-y-4 p-8">

                {
                    agencyFeatures.map((feature, index) => {
                        return <div key={"featureCardId" + index} className=' hover:text-white bg-offWhite hover:bg-primary0 hover:shadow-md hover:shadow-primary0-400 transition-all h-full  min-w-80 m-2'>
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
                        </div>;
                    })
                }

            </div>
            <hr className="border-black dark:border-off-white1B" />
        </section>
        {/* <FAQSection></FAQSection> */}
        <Faq faqs={faqs}></Faq>
    </>
}

