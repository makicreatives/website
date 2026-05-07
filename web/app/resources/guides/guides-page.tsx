import { faqs } from "@/app/about/sections/faq";
import { MegaMenu, Faq, Footer, Pill } from "@/app/components";
import Link from "next/link";
// import Image from 'next/image';

type Guide = {
    title: string
    slug: string
    imageUrl: string
    summary: string

    category: string
    tags: string[],
    readTime: string
    publishedAt: string,
    isFeatured?: boolean
}

const agencyGuides: Guide[] = [
    {
        title: "How to Brief a Designer Without Wasting Anyone's Time",
        slug: "how-to-brief-a-designer",
        imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop",
        summary: "A clear brief is the difference between one revision and ten. Here's exactly what to include before you hand anything over to a designer.",
        category: "business",
        tags: ['design', 'business', 'team'],
        publishedAt: '11/12/2024',
        isFeatured: true,
        readTime: "5m"
    },
    {
        title: "What a Brand Identity Actually Includes — And What It Doesn't",
        slug: "what-brand-identity-includes",
        imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop",
        summary: "Most businesses think a logo is a brand. It's not. Here's what a proper brand identity covers and why each piece matters.",
        category: "Branding",
        tags: ['branding', 'identity', 'logo'],
        publishedAt: '19/4/2026',
        isFeatured: false,
        readTime: "4m"
    },
    {
        title: "Why Your Website Isn't Converting — A Design Perspective",
        slug: "why-website-not-converting",
        imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop",
        summary: "Traffic without conversions is just noise. Here's how design decisions — not just copy — affect whether visitors become customers.",
        category: "",
        tags: [],
        publishedAt: '21/8/2025',
        isFeatured: false,
        readTime: "2m"
    },
    {
        title: "The B2B Business Guide to Looking Professional on a Budget",
        slug: "b2b-professional-design-on-a-budget",
        imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop",
        summary: "You don't need a massive design budget to look credible. Here's where to invest first and what you can leave for later.",
        category: "",
        tags: [],
        publishedAt: '12/6/2025',
        isFeatured: false,
        readTime: "5m"
    },
    {
        title: "Pitch Deck Design — What Investors Actually Want to See",
        slug: "pitch-deck-design-for-investors",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
        summary: "A great idea in a bad deck still loses. Here's how to structure and design a pitch that keeps the room's attention and makes your case clearly.",
        category: "",
        tags: [],
        publishedAt: '11/10/2024',
        isFeatured: false,
        readTime: "4m"
    },
    {
        title: "Print Design 101 — What You Need Before You Send Files to the Printer",
        slug: "print-design-101",
        imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop",
        summary: "Bleed, resolution, color modes — print has rules that screen design doesn't. Here's what to check before you send anything to print.",
        category: "",
        tags: [],
        publishedAt: '1/1/2026',
        isFeatured: false,
        readTime: "3m"
    },
    {
        title: "How to Build a Lead Magnet That Actually Attracts the Right Clients",
        slug: "lead-magnet-design-guide",
        imageUrl: "https://images.unsplash.com/photo-1597244508835-605298ca838b?w=800&auto=format&fit=crop",
        summary: "Most lead magnets get downloaded once and forgotten. Here's how to design one that positions you as the expert and keeps the right people coming back.",
        category: "marketing",
        tags: ['marketing', 'design'],
        publishedAt: '16/10/2024',
        isFeatured: true,
        readTime: "4m"
    },
    {
        title: "Social Media Design — Why Consistency Matters More Than Creativity",
        slug: "social-media-design-consistency",
        imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop",
        summary: "Chasing trends on social burns time and confuses your audience. Here's why a consistent visual system beats a viral post every time.",
        category: "",
        tags: [],
        publishedAt: '24/2/2026',
        isFeatured: false,
        readTime: "5m"
    },
];


export default function GuidesPage() {
    const slugToUrl = (slug: string) => "/resources/guides/" + slug;
    const getGuideCard = function (guide: Guide, index: number): JSX.Element {
        return <Link href={slugToUrl(guide.slug)}  key={"featuredGuide" + index} id={guide.slug} className={"flex flex-col justify-between p-8 border-b md:border-r md:border-b border-black dark:border-off-white  hover:text-white bg-offWhite hover:bg-primary0 hover:shadow-md hover:shadow-primary0-400 transition-all h-full"}>
            <div className=''>
                <div className='relative bg-gray-300'>
                    <img src={guide.imageUrl} alt={guide.title + " banner"} className="object-cover h-64 w-full" />
                </div>

                <h4 className='font-headlines text-headline-small uppercase my-2 font-bold'>{guide.title}</h4>
                <p className='mb-4 font-body text-body-large'>{guide.summary}
                </p>
            </div>
            <span className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between'>
                <div className='flex'>
                    <div className='pl-2 flex text-primary border-b border-b-primary sm:border-b-primary1B font-headlines text-headline-small uppercase  hover:text-white hover:bg-primary1B hover:shadow-sm hover:duration-150'>
                        <span>Read Full Guide</span>
                        <span>
                            <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z" /></svg>
                        </span>
                    </div>
                </div>
                {/* <div className='flex'>

                </div> */}
            </span>

        </Link>;
    }

    return <>
        <MegaMenu activeLink='resources'></MegaMenu>
        <main className="min-h-screen flex flex-col md:flex-row">
            <section id="leftBar" className="flex md:flex-col sticky top-0 z-10 bg-white dark:bg-gray3 h-14 md:h-screen md:w-16 border-y md:border-y-0 md:border-r  border-black dark:border-off-white">
                <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-b-0 border-black dark:border-off-white place-content-center ">
                </div>
                <div className="flex-1 flex place-content-center">
                    <div className="md:hidden w-full inline-flex flex-nowrap overflow-hidden">
                        <div className="flex items-center justify-center md:justify-start animate-infinite-scroll md:animate-none">
                        </div>
                    </div>
                </div>

                <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-t-0 border-black dark:border-off-white place-content-center ">
                </div>
            </section>
            <section id="midPanel" className="flex-1 flex flex-col">
                <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl mb-4 p-4 py-4 md:mb-8 md:py-8 mx-auto">

                    <p className="mb-2">Learn what good design does</p>
                    <p className="text-lg font-headlines leading-snug  font-medium">
                        <p className="hidden md:inline">
                            Practical guides on branding, digital design, and marketing assets<br className="hidden md:block" />
                            — written so you can make smarter decisions for your business,<br className="hidden md:block" />
                            — meant to be loved by creatives who move the needle.
                        </p>
                    </p>

                </h2>
                <hr className="border-black dark:border-off-white1B" />

                <section id="trending">
                    <div className="mr-6 md:mr-14 bg-primary0 text-off-white1B">
                        <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl p-4 md:p-8 ">

                            <p className="italic mb-2">Most useful <span className="text-display-small bg-primary1B font-mono"> <Pill>right now</Pill> </span> </p>
                            <p className="text-lg font-headlines leading-snug  font-medium">
                                <p className="hidden md:inline">
                                    Start here if you&apos;re not sure where to begin.
                                </p>
                                — Start here
                            </p>

                        </h2>
                    </div>
                    <hr className="border-black dark:border-off-white1B" />
                    <div id="servicesContent2" className="grid grid-cols-1 md:grid-cols-2 mb-8 md:mb-14">

                        {
                            agencyGuides.map((guide, index) => {
                                if (guide.isFeatured) {
                                    return getGuideCard(guide, index)
                                }
                                else {
                                    return '';
                                }
                            }
                            )
                        }
                    </div>
                    <hr className="border-black dark:border-off-white1B" />

                </section>
                <section id="all" className="pb-8 md:pb-14">
                    <div className="mr-6 md:mr-14 bg-primary0 text-off-white1B">
                        <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl p-4 md:p-8 ">

                            <p className="italic mb-2">All Guides</p>
                            <p className="text-lg font-headlines leading-snug  font-medium">
                                <p className="hidden md:inline">
                                    Free resources for businesses that want to understand design — not just buying design.<br />
                                </p>
                                {/* Fill in the form and we&apos;ll get back to you within 24 hours. */}
                            </p>

                        </h2>
                    </div>
                    <hr className="border-black dark:border-off-white1B" />
                    <div id="servicesContent1" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                        {
                            agencyGuides.map((guide, index) => getGuideCard(guide, index))
                        }
                    </div>
                </section>
                <hr className="border-black dark:border-off-white1B" />
                <Faq faqs={faqs}></Faq>
            </section>
            <section id="rightBar" className="flex md:flex-col sticky top-0 z-10 bg-white dark:bg-gray3 h-14 md:h-screen md:w-16 border-y md:border-y-0 md:border-l-1  border-black dark:border-off-white">
                <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-b-0 border-black dark:border-off-white place-content-center ">
                    {/* <button id="triangleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-off-white hover:p-4 duration-200 hover:invert">
            <Image src={starIcon} alt="star icon" className="h-8 dark:invert m-auto "></Image></button> */}
                </div>
                <div className="flex-1 flex place-content-center">
                    <div className="md:hidden w-full inline-flex flex-nowrap overflow-hidden">
                        <div className="flex items-center justify-center md:justify-start animate-infinite-scroll md:animate-none">
                            {/* <p className="font-display text-display-large m-auto md:-rotate-90 text-nowrap capitalize">{projectData[0]?.type ?? 'Our Portfolio'}</p> */}
                        </div>
                    </div>
                    {/* <p className="hidden md:block font-display text-display-large m-auto md:rotate-90 text-nowrap capitalize">{projectData[0]?.type ?? 'Our Creative Playground'}</p> */}
                </div>

                <div className="md:h-16 w-16 md:w-auto border-x md:border-x-0 md:border-t-0 border-black dark:border-off-white place-content-center ">
                    {/* <button id="circleBtn" className="h-full w-full bg-white dark:bg-gray3 relative z-10 border-0 hover:bg-off-white hover:p-4 duration-200 hover:invert">
            <Image src={starIcon} alt="star icon" className="h-8 dark:invert m-auto "></Image></button> */}
                </div>
            </section>
        </main>
        <Footer></Footer>
    </>;
}