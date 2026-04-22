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
            title: "B2B Website Redesign",
            mediaUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop",
            bgImageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&auto=format&fit=crop",
            linkUrl: "/portfolio/b2b-website-redesign",
            tags: ["Web Design", "UI/UX", "Conversion"],
            category: "digital"
        },
        {
            title: "SaaS Product UI Design",
            mediaUrl: "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&auto=format&fit=crop",
            bgImageUrl: "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=1200&auto=format&fit=crop",
            linkUrl: "/portfolio/saas-product-ui-design",
            tags: ["UI/UX", "Product Design", "SaaS"],
            category: "digital"
        },
        {
            title: "Campaign Landing Page",
            mediaUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
            bgImageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop",
            linkUrl: "/portfolio/campaign-landing-page",
            tags: ["Landing Page", "Conversion", "Digital"],
            category: "digital"
        },
        {
            title: "Startup Website — From Scratch",
            mediaUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop",
            bgImageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&auto=format&fit=crop",
            linkUrl: "/portfolio/startup-website-build",
            tags: ["Web Design", "Startup", "UI/UX"],
            category: "digital"
        },
    ]

    const getMediaCard = (mediaUrl: string, isVideo: boolean, category: string, tags: string[]) => {
        if (isVideo) {
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
        return <div className="bg-cover  overflow-clip  h-80 md:h-96 flex flex-col justify-between" style={{ backgroundImage: `url(${mediaUrl})` }}>
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

                <p className="">Digital builds that perform</p>
                <p className="text-lg font-headlines leading-tight  font-medium">
                    Websites, product UI, and landing pages — built to convert and easy to hand off.
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