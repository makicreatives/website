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
            title: "Social Media Asset Suite",
            mediaUrl: "https://pexels.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop",
            bgImageUrl: "https://images.pexels.com/photos/31940527/pexels-photo-31940527.jpeg",
            linkUrl: "/portfolio/social-media-asset-suite",
            tags: ["Social Media", "Content", "Branding"],
            category: "marketing"
        },
        {
            title: "Industry Report Design",
            mediaUrl: "https://pexels.com/photo-1543286386-713bdd548da4?w=800&auto=format&fit=crop",
            bgImageUrl: "https://images.pexels.com/photos/31940527/pexels-photo-31940527.jpeg",
            linkUrl: "/portfolio/industry-report-design",
            tags: ["Report", "Ebook", "Content Design"],
            category: "marketing"
        },
        {
            title: "Lead Magnet & Ebook Design",
            mediaUrl: "https://pexels.com/photo-1597244508835-605298ca838b?w=800&auto=format&fit=crop",
            bgImageUrl: "https://images.pexels.com/photos/31940527/pexels-photo-31940527.jpeg",
            linkUrl: "/portfolio/lead-magnet-ebook",
            tags: ["Lead Magnet", "Ebook", "Content Design"],
            category: "marketing"
        },
        {
            title: "Email Campaign Template Suite",
            mediaUrl: "https://pexels.com/photo-1596526131083-e8c633064c68?w=800&auto=format&fit=crop",
            bgImageUrl: "https://images.pexels.com/photos/31940527/pexels-photo-31940527.jpeg",
            linkUrl: "/portfolio/email-campaign-templates",
            tags: ["Email", "Templates", "Marketing"],
            category: "marketing"
        },
    ];

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

                <p className="">Marketing work that gets used</p>
                <p className="text-lg font-headlines leading-tight  font-medium">
                    Assets built for the platforms your customers are already on.
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