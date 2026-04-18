import Link from "next/link";

export default function PortfolioSection(){
    type AgencyProject = {
        title: string,
        mediaUrl: string,
        isVideo?:boolean,
        bgImageUrl: string,
        linkUrl: string,
        tags: string[],
        category: string,
    };
    const portfolioProjects: AgencyProject[] = [
    {
        title: "Brand Identity Project",
        mediaUrl: "/media/portfolio/brand-identity-1.gif",   // or .jpg / .webp
        bgImageUrl: '/images/site/seo-abstract.png', // "/media/portfolio/brand-identity-1-bg.jpg",
        linkUrl: "/portfolio/brand-identity-1",
        tags: ["Branding", "Logo Design", "Visual Identity"],
        category: "branding"
    },
    {
        title: "Packaging Design Project",
        mediaUrl: "/media/portfolio/packaging-1.gif",
        bgImageUrl: "/media/portfolio/packaging-1-bg.jpg",
        linkUrl: "/portfolio/packaging-1",
        tags: ["Packaging", "Product Design", "3D Mockup"],
        category: "design"
    },
    {
        title: "Website Design Project",
        mediaUrl: "/media/portfolio/website-1.jpg",
        bgImageUrl: "/media/portfolio/website-1-bg.jpg",
        linkUrl: "/portfolio/website-1",
        tags: ["Web Design", "UI/UX", "Responsive"],
        category: "digital"
    },
    {
        title: "Pitch Deck Design Project",
        mediaUrl: "/media/portfolio/pitch-deck-1.gif",
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
        mediaUrl: "/media/portfolio/product-ui-1.gif",
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
        mediaUrl: "/media/portfolio/social-media-1.gif",
        bgImageUrl: "/media/portfolio/social-media-1-bg.jpg",
        linkUrl: "/portfolio/social-media-1",
        tags: ["Social Media", "Content Creation", "Branding"],
        category: "marketing"
    },
    {
        title: "Infographic Series",
        mediaUrl: "/media/portfolio/infographics-1.jpg",
        bgImageUrl: "/media/portfolio/infographics-1-bg.jpg",
        linkUrl: "/portfolio/infographics-1",
        tags: ["Infographics", "Data Visualization"],
        category: "production"
    },
    {
        title: "Full Brand Refresh Project",
        mediaUrl: "/media/portfolio/brand-refresh-1.gif",
        bgImageUrl: "/media/portfolio/brand-refresh-1-bg.jpg",
        linkUrl: "/portfolio/brand-refresh-1",
        tags: ["Rebranding", "Brand Strategy", "Identity"],
        category: "branding"
    }
];
    return <section id="portfolio">

        <div className="p-8 flex items-center">
            <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl mt-12 my-4 md:mb-8 mx-auto">
                
                <p className="">Our Selected Work</p>
                <p className="text-lg font-headlines leading-tight  font-medium">
                    We&apos;ve partnered with businesses at every stage 
                    —from early startups to established brands. <br />
                    Here&apos;s what that looks like in practice.
                </p>

            </h2>
        </div>
        <div className="p-8 container mx-auto grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {
                portfolioProjects.map((project, index) => {
                    return <Link key={"statId-" + index} href={project.linkUrl}  className="bg-offWhite bg-cover h-80 shadow-sm mb-2 hover:shadow-sm hover:shadow-primary-400 hover:bg-primary-50 transition-all" style={{ backgroundImage: `url(${project.bgImageUrl})`}}>
                        <h2 className="h2 font-display font-medium  text-display-medium md:text-7xl mb-4 md:mb-8 space-y-8" >
                            <span className="p-1 px-2 mb-2 flex text-xl font-technical uppercase font-medium  text-offWhite bg-primary0">
                                {project.title}
                            </span>
                            <p className="leading-tight px-4 text-primary">
                                {project.category}

                            </p>
                        </h2>
                        <p className=" leading-relaxed p-4 text-xl">
                            {project.tags.join(', ')}
                        </p>
                    </Link>
                })
            }
        </div>
        <hr className="border-black dark:border-off-white1B mb-12" />
    </section>
}