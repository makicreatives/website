import { faqs } from "@/app/about/sections/faq";
import { MegaMenu, Faq, Footer, WorkCard } from "@/app/components";
import { WorkCardProps } from "@/app/components/WorkCard";
// import Link from "next/link";


const availableServicesA: WorkCardProps[] = [
    {
        imageUrl: "/images/site/web-design-abstract.png",
        title: "Web design",
        description: "From engaging homepages to conversion-focused layouts that turn visitors into customers.",
        startLink: "/form?q=web",
        exploreLink: "/portfolio/design?q=web"
    },
    {
        imageUrl: "/images/site/landing-pages-abstract.png",
        title: "Landing pages",
        description: "Turn clicks into customers with landing pages that convert.Clear, compelling, and crafted for your specific audience.",
        startLink: "/form?q=landing-page",
        exploreLink: "/portfolio/design?q=landing"
    },
    {
        imageUrl: "/images/site/uiux-design-abstract.png",
        title: "UI/UX design",
        description: "User-friendly interfaces that keep your customers coming back for more.Make every interaction count.",
        startLink: "/form?q=ui_ux",
        exploreLink: "/portfolio/design?q=ui_ux"
    },
    {
        imageUrl: "/images/site/seo-abstract.png",
        title: "SEO",
        description: "We build SEO right into your website, helping your business climb search rankings the right way.Get found by the right people.",
        startLink: "/form?q=seo",
        exploreLink: "/portfolio/design?q=seo"
    },
    {
        imageUrl: "/images/site/turnaround-abstract.png",
        title: "Brand Identity design",
        description: "Let's give your business a face that truly gives to your customers",
        startLink: "/form?q=branding",
        exploreLink: "/portfolio/design?q=branding"
    },
    {
        imageUrl: "/images/site/collaboration-abstract.png",
        title: "Digital marketing assets",
        description: "Set the right assets in place for your marketing message",
        startLink: "/form?q=marketing",
        exploreLink: "/portfolio/design?q=marketing"
    },
];
const availableServicesB: WorkCardProps[] = [

    {
        imageUrl: "/images/site/extra-services-abstract.png",
        title: "Social Media Assets",
        description: "Let's give your business a presence that gains reach.",
        startLink: "/form?q=social",
        exploreLink: "/portfolio/design?q=social"
    },
    {
        imageUrl: "/images/site/landing-pages-abstract.png",
        title: "Copywriting",
        description: "our copy makes sure you get the message to the right people with the right tone.",
        startLink: "/form?q=copywriting",
        exploreLink: "/portfolio/copywriting"
    },
    // {
    //     imageUrl: "/images/site/waves-abstract.png",
    //     title: "Print Designs",
    //     description: "T-shirts, caps, merchandise, vinyl designs. Having a uniform brand makes sure everyone recognizes you",
    //     startLink: "/form?q=print",
    //     exploreLink: "/portfolio/design?q=print"
    // },
    // {
    //     imageUrl: "/images/site/future-designs-abstract.png",
    //     title: "Stationery design",
    //     description: "Calenders, office stationery, envelopes, pens etc.",
    //     startLink: "/form?q=stationery",
    //     exploreLink: "/portfolio/design?q=stationery"
    // },

];



export default function BlogsPage() {
    // type Blog = {
    //     title: string,
    //     url: string,
    //     imageUrl: string,
    //     paragraph: string,
    // }

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

                    <p className="mb-2">Design thinking. Business results.</p>
                    <p className="text-lg font-headlines leading-snug  font-medium">
                        <p className="hidden md:inline">
                            Industry insights, studio updates, and design perspectives <br className="hidden md:block" />
                            — written for businesses that take their brand seriously, <br className="hidden md:block" />
                            — read by creatives who move the needle
                        </p>
                    </p>

                </h2>
                <hr className="border-black dark:border-off-white1B" />

                <section id="trending">
                    <div className="mr-6 md:mr-14 bg-primary0 text-off-white1B">
                        <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl p-4 md:p-8 ">

                            <p className="italic mb-2">Trending</p>
                            <p className="text-lg font-headlines leading-snug  font-medium">
                                <p className="hidden md:inline">
                                    Worth reading first
                                </p>
                                — Start here
                            </p>

                        </h2>
                    </div>
                    <hr className="border-black dark:border-off-white1B" />
                    <div id="servicesContent2" className="grid grid-cols-1 md:grid-cols-2 mb-8 md:mb-14">

                        {availableServicesB.map((serve, index) => <WorkCard key={"serveA" + index} imageUrl={serve.imageUrl} title={serve.title} description={serve.description} startLink={serve.startLink} exploreLink={serve.exploreLink}></WorkCard>)}
                    </div>
                    <hr className="border-black dark:border-off-white1B" />

                </section>
                <section id="all" className="pb-8 md:pb-14">
                    <div className="mr-6 md:mr-14 bg-primary0 text-off-white1B">
                        <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl p-4 md:p-8 ">

                            <p className="italic mb-2">All Articles</p>
                            <p className="text-lg font-headlines leading-snug  font-medium">
                                <p className="hidden md:inline">
                                    Everything we&apos;ve published — browse at your own pace.<br />
                                </p>
                                {/* Fill in the form and we&apos;ll get back to you within 24 hours. */}
                            </p>

                        </h2>
                    </div>
                    <hr className="border-black dark:border-off-white1B" />
                    <div id="servicesContent1" className="grid grid-cols-1 md:grid-cols-3">

                        {availableServicesA.map((serve, index) => <WorkCard key={"serveA" + index} imageUrl={serve.imageUrl} title={serve.title} description={serve.description} startLink={serve.startLink} exploreLink={serve.exploreLink}></WorkCard>)}
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