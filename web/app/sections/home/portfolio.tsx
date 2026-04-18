import { Pill } from "@/app/components";
import Link from "next/link";


export default function PortfolioSection() {
    type AgencyProject = {
        title: string,
        mediaUrl: string,
        isVideo?: boolean,
        bgImageUrl: string,
        linkUrl: string,
        tags: string[],
        category: string,
    };
    const portfolioProjects: AgencyProject[] = [
        {
            title: "Brand Identity Project",
            mediaUrl: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",   // or .jpg / .webp
            bgImageUrl: '/images/site/seo-abstract.png', // "/media/portfolio/brand-identity-1-bg.jpg",
            linkUrl: "/portfolio/brand-identity-1",
            tags: ["Branding", "Logo Design", "Visual Identity"],
            category: "branding"
        },
        {
            title: "Packaging Design Project",
            mediaUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            bgImageUrl: "/media/portfolio/packaging-1-bg.jpg",
            linkUrl: "/portfolio/packaging-1",
            tags: ["Packaging", "Product Design", "3D Mockup"],
            category: "design"
        },
        {
            title: "Website Design Project",
            mediaUrl: "https://images.unsplash.com/photo-1568801838106-43cc2000b704?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            bgImageUrl: "/media/portfolio/website-1-bg.jpg",
            linkUrl: "/portfolio/website-1",
            tags: ["Web Design", "UI/UX", "Responsive"],
            category: "digital"
        },
        {
            title: "Pitch Deck Design Project",
            mediaUrl: "https://media1.tenor.com/m/CCWYpCgLmykAAAAC/happy-dance.gif",
            bgImageUrl: '/images/site/seo-abstract.png', // "/media/portfolio/pitch-deck-1-bg.jpg",
            linkUrl: "/portfolio/pitch-deck-1",
            tags: ["Pitch Deck", "Presentation", "Investor"],
            category: "production"
        },
        {
            title: "Digital Advertising Campaign",
            mediaUrl: "/media/portfolio/digital-ads-1.gif",
            bgImageUrl: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
            linkUrl: "/portfolio/digital-ads-1",
            tags: ["Digital Ads", "Social Media", "Campaign"],
            category: "marketing"
        },
        {
            title: "Marketing Collateral Set",
            mediaUrl: "/media/portfolio/marketing-assets-1.jpg",
            bgImageUrl: "https://images.unsplash.com/photo-1597244508835-605298ca838b?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            linkUrl: "/portfolio/marketing-assets-1",
            tags: ["Brochures", "Social Graphics", "Collateral"],
            category: "marketing"
        },
        {
            title: "Trade Show Booth Design",
            mediaUrl: "https://www.pexels.com/download/video/36520697/",
            isVideo: true,
            bgImageUrl: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
            linkUrl: "/portfolio/trade-show-1",
            tags: ["Trade Show", "Booth Design", "Event"],
            category: "design"
        },
        {
            title: "Product UI/UX Design",
            mediaUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            bgImageUrl: "/media/portfolio/product-ui-1-bg.jpg",
            linkUrl: "/portfolio/product-ui-1",
            tags: ["UI/UX", "Product Design", "App"],
            category: "digital"
        },
        {
            title: "Lead Magnet & Ebook Design",
            mediaUrl: "/media/portfolio/lead-magnet-1.jpg",
            bgImageUrl: "https://images.unsplash.com/photo-1597244508835-605298ca838b?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            linkUrl: "/portfolio/lead-magnet-1",
            tags: ["Lead Magnet", "Ebook", "Content Design"],
            category: "marketing"
        },
        {
            title: "Social Media Asset Suite",
            mediaUrl: "https://images.unsplash.com/photo-1494625927555-6ec4433b1571?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            bgImageUrl: "/media/portfolio/social-media-1-bg.jpg",
            linkUrl: "/portfolio/social-media-1",
            tags: ["Social Media", "Content Creation", "Branding"],
            category: "marketing"
        },
        {
            title: "Infographic Series",
            mediaUrl: "https://www.pexels.com/download/video/7936181/",
            isVideo: true,
            bgImageUrl: "https://images.unsplash.com/photo-1597244508835-605298ca838b?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            linkUrl: "/portfolio/infographics-1",
            tags: ["Infographics", "Data Visualization"],
            category: "production"
        },
        {
            title: "Full Brand Refresh Project",
            mediaUrl: "https://images.unsplash.com/photo-1494625927555-6ec4433b1571?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            bgImageUrl: "/media/portfolio/brand-refresh-1-bg.jpg",
            linkUrl: "/portfolio/brand-refresh-1",
            tags: ["Rebranding", "Brand Strategy", "Identity"],
            category: "branding"
        }
    ];

    const getMediaCard = (mediaUrl:string, isVideo:boolean, category: string, tags: string[]) => {
        if(isVideo){
            return <div className="video-container relative overflow-clip  h-80 md:h-96 flex flex-col justify-between">
                            <video id="bg-video" className="absolute top-[0%] left-[0%] object-cover min-w-full min-h-full w-auto h-auto -z-0" autoPlay muted loop playsInline>
                                <source src={mediaUrl} type="video/mp4" />
                            </video>
                            <div className="flex-1 ">

                            </div>
                            <div className="opacity-80 has-hover:opacity-100 has-hover:text-white transition-all text-off-white z-10">
                                <p className="leading-tight  pt-4 px-4">
                                    
                                    <Pill color="info" >{category}</Pill>
                                </p>
                                <p className=" leading-relaxed p-4 text-sm">
                                    {tags.join(', ')}
                                </p>
                            </div>
                        </div>
        }
        return <div className="bg-cover  overflow-clip  h-80 md:h-96 flex flex-col justify-between"  style={{ backgroundImage: `url(${mediaUrl})` }}>
                            <div className="flex-1">

                            </div>
                            <div className="opacity-50 has-hover:opacity-100 has-hover:text-white transition-all text-off-white1B">
                                <p className="leading-tight  pt-4 px-4">
                                    
                                    <Pill color="info" >{category}</Pill>
                                </p>
                                <p className=" leading-relaxed p-4 text-sm">
                                    {tags.join(', ')}
                                </p>
                            </div>
                        </div>;
    }
    return <section id="portfolio">

        <div className="p-8 flex items-center">
            <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl mt-12 my-4 md:mb-8 mx-auto">

                <p className="">Our Selected Work</p>
                <p className="text-lg font-headlines leading-tight  font-medium">
                    From bold brand identities to scroll-stopping digital — here&apos;s what we&apos;ve been building.
                </p>

            </h2>
        </div>
        <div className="p-8 container mx-auto grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {
                portfolioProjects.map((project, index) => {
                    return <Link key={"statId-" + index} href={project.linkUrl} className="bg-offWhite bg-cover shadow-sm mb-2 hover:shadow-lg  hover:bg-primary-50 transition-all" style={{ backgroundImage: `url(${project.bgImageUrl})` }}>
                        <h2 className="h2 font-display font-medium  text-display-medium md:text-7xl space-y-8" >
                            <span className="p-1 px-2 flex text-xl font-technical uppercase font-medium  text-offWhite bg-primary0">
                                {project.title}
                            </span>
                        </h2>
                        {getMediaCard(
                            project.mediaUrl,
                            project.isVideo ?? false,
                            project.category,
                            project.tags,
                        )
                            }
                    </Link>
                })
            }
        </div>
        <hr className="border-black dark:border-off-white1B mb-12" />
    </section>
}