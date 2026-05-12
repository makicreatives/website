'use client'

import Link from "next/link";
import Image from 'next/image';


import mssIcon from '@/app/icons/partners/mevinsystems.svg'
import outlineIcon from '@/app/icons/tools/outline.svg'
import figmaIcon from '@/app/icons/tools/figma.svg'
import affinityIcon from '@/app/icons/tools/affinity.svg'
import capIcon from '@/app/icons/tools/cap.svg'
import unsplashIcon from '@/app/icons/tools/unsplash.svg'
import formbricksIcon from '@/app/icons/tools/formbricks.svg'
import fizzyIcon from '@/app/icons/tools/fizzy.svg'


import { Pill } from "@/app/components";


type StudioTool = {
    id: string
    title: string
    tagline: string
    description: string
    cta?: string,
    category: "design" | "productivity" | "web" | "communication" | "finance" | "marketing" | "system"
    url: string
    imageUrl: string
    iconUrl: string
    isAffiliate: boolean      // true = you have a referral/affiliate link
    isPartner?: boolean,
    affiliateUrl?: string     // only populated if isAffiliate is true
    badge?: "Used Daily" | "Client Facing" | "Recommended"
}

const studioTools: StudioTool[] = [

    //******************************************/
    //  P A R T N E R S
    //******************************************/

    {
        id: "mevinsystems",
        title: "Mevin Software Systems",
        tagline: "Software Development & Engineering agency.",
        description: "They engineer and develop our backend systems and handling other softwares for running our agency, and for the website as well.",
        cta: "Visit Partner",
        iconUrl: mssIcon,
        imageUrl: "https://images.pexels.com/photos/17363205/pexels-photo-17363205.jpeg",
        isPartner: true,
        category: "system",
        url: "https://www.mevinsystems.online/",
        isAffiliate: false
    },

    //******************************************/
    //  T O O L S
    //******************************************/

    {
        id: "figma",
        title: "Figma",
        tagline: "Where all the design happens.",
        description: "Our primary design tool for everything — brand identity, web design, UI/UX, pitch decks, and social assets. If we made it, it started in Figma.",
        category: "design",
        url: "https://figma.com",
        imageUrl: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        iconUrl: figmaIcon,
        isAffiliate: false,
        badge: "Used Daily"
    },
    {
        id: "affinity-studio",
        title: "Affinity Studio",
        tagline: "Print, illustration, and everything in between.",
        description: "Vector for vector work and print files. Pixel for image editing. Layout for ebooks, reports, and multi-page layouts. A new industry standard emerges.",
        category: "design",
        url: "https://www.affinity.studio/",
        imageUrl: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
        iconUrl: affinityIcon,
        isAffiliate: false,
        badge: "Used Daily"
    },
    {
        id: "outline",
        title: "Outline",
        tagline: "How we stay organised.",
        description: "Our team's knowledge base, client briefs, content planning, and internal docs — all in one place. Outline keeps the studio running without the chaos.",
        category: "productivity",
        url: "https://www.getoutline.com/",
        imageUrl: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
        iconUrl: outlineIcon,
        isAffiliate: false,
        badge: "Used Daily"
    },
    {
        id: "formbricks",
        title: "Formbricks",
        tagline: "How clients brief us.",
        description: "The form tool behind our client intake and brief process. Clean, flexible, and easy to embed — clients fill it in, we get everything we need to start.",
        category: "productivity",
        url: "https://formbricks.com",
        imageUrl: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
        iconUrl: formbricksIcon,
        isAffiliate: false,
        badge: "Client Facing"
    },
    {
        id: "fizzy",
        title: "Fizzy",
        tagline: "How we track project progress.",
        description: "Fast, clean issue and project tracking. We use Fizzy to manage design requests, revisions, and delivery — especially for retainer clients.",
        category: "productivity",
        url: "https://www.fizzy.do/",
        imageUrl: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
        iconUrl: fizzyIcon,
        isAffiliate: false,
        badge: "Used Daily"
    },
    // {
    //     id: "framer",
    //     title: "Framer",
    //     tagline: "For websites that need to move.",
    //     description: "When a project calls for a site with motion, interactions, and polish straight out of the box — Framer is where we build it.",
    //     category: "web",
    //     url: "https://framer.com",
    //     imageUrl: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    //     iconUrl: "/icons/tools/framer.svg",
    //     isAffiliate: false,
    //     badge: "Recommended"
    // },
    {
        id: "cap",
        title: "Cap",
        tagline: "How we present work to clients.",
        description: "Instead of long email threads, we send short Cap walkthroughs. Clients see the work in context, understand the decisions, and give better feedback.",
        category: "communication",
        url: "https://cap.so/",
        imageUrl: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
        iconUrl: capIcon,
        isAffiliate: false,
        badge: "Client Facing"
    },
    {
        id: "unsplash",
        title: "Unsplash",
        tagline: "Stock photography that doesn't look stock.",
        description: "Our go-to for high quality photography when client shoots aren't available. Clean, professional, and free to use commercially.",
        category: "design",
        url: "https://unsplash.com",
        imageUrl: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
        iconUrl: unsplashIcon,
        isAffiliate: false,
        badge: "Recommended"
    },
]


export default function AffiliateSection() {
    return <>
        <main className="pb-1">
            {/* Affiliate Section */}
        </main>
        <section>
            <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl mt-12 mb-4 md:mb-8 p-8">

                <p className="">Tools & Partners.</p>
                <p className="text-lg font-headlines leading-tight  font-medium pt-2 ps-8">
                    {/* We partner with businesses to create design systems that scale. <br /> */}
                    The tools behind the work — and the partnerships we&apos;re building as we grow.
                </p>

            </h2>
            <div className="flex justify-evenly flex-wrap gap-4 space-y-4 lg:grid-cols-2 xl:grid-cols-3  mx-auto p-1 pb-8 ">

                {
                    studioTools.map((tier, index) => {
                        return <Link key={"featureCardId" + index} href={tier.url} target="_blank" className=' hover:text-white bg-offWhite hover:bg-primary0 hover:shadow-md hover:shadow-primary0-400 transition-all h-full w-96'>
                            <div className={'border-black border-2 border-b-16  dark:border-off-white h-full'}>
                                {tier.isAffiliate ? <span className=" flex items-center bg-primary p-2 px-4 text-off-white font-technical absolute z-10 left-[10x]"><b className="font-bold 2text-xl animate-[ping_2s_infinite] ease-in">+ </b>&nbsp;Our Partner</span> : ""}
                                <div className='mb-2 h-64'>
                                    <div className="bg-gray-300 bg-cover bg-[url(/images/site/landing-pages-abstract.png)] flex items-center justify-center h-full w-full" style={{ backgroundImage: `url(${tier.imageUrl})` }}>
                                        <Image src={tier.iconUrl} width={320} className='h-24 opacity-90 text-white' alt={tier.title + " service card"} />
                                    </div>
                                </div>
                                <div className='p-8 flex flex-col'>
                                    <div className='mb-1 font-bold font-headlines text-headline-large uppercase  flex-wrap justify-between items-center'>
                                        <span className="block mb-4">{tier.title}</span>

                                        <div className="flex  align-center flex-wrap">
                                            <Pill><span className="capitalize">{tier.category}</span></Pill>
                                            {tier.isPartner ? <span className=" inline-flex items-center bg-primary p-1 px-2 text-off-white font-technical "><b className="font-bold animate-[ping_2s_infinite] ease-in">+ </b>&nbsp;Partner </span> : ""}
                                        </div>
                                    </div>
                                    <h2 className="h2 font-technical space-y-8 my-4">
                                        <span className="p-1 flex text-lg uppercase font-medium ">
                                            {tier.tagline}
                                        </span>
                                    </h2>
                                    <p className=" leading-relaxed text-xl mb-4 md:mb-8 ">
                                        {tier.description}
                                    </p>

                                    <div className='flex'>
                                        <Link href={tier.url} className='flex  pl-2 text-primary border-b-2 border-b-primary sm:border-b-primary1B font-headlines text-headline-small uppercase  hover:text-white hover:bg-primary1B hover:shadow-sm hover:duration-150'>
                                            <span>{tier.cta ?? "Get Started"}</span>
                                            <span>
                                                <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6z" /></svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Link>;
                    })

                }

            </div>
            <hr className="border-black dark:border-off-white1B" />
        </section >
    </>
}

