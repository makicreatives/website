import { Pill } from "@/app/components"
import Link from "next/link";

export interface AgencyService {
    title: string,
    imageUrl: string,
    linkUrl: string,
    tags: string[],
}

export default function OurWorkSection() {

    const agencyServices: AgencyService[] = [
        {
            title: "Presentation Design",
            imageUrl: "https://google.com/favicon.ico",
            linkUrl: "/services/design",
            tags: ["hello", "google"]
        },
        {
            title: "Presentation Design",
            imageUrl: "https://google.com/favicon.ico",
            linkUrl: "/services/design",
            tags: ["hello", "google"]
        },
        {
            title: "Presentation Design",
            imageUrl: "https://google.com/favicon.ico",
            linkUrl: "/services/design",
            tags: ["hello", "google"]
        },
        {
            title: "Presentation Design",
            imageUrl: "https://google.com/favicon.ico",
            linkUrl: "/services/design",
            tags: ["hello", "google"]
        },
        {
            title: "Presentation Design",
            imageUrl: "https://google.com/favicon.ico",
            linkUrl: "/services/design",
            tags: ["hello", "google"]
        },
        {
            title: "Presentation Design",
            imageUrl: "https://google.com/favicon.ico",
            linkUrl: "/services/design",
            tags: ["hello", "google"]
        },
        {
            title: "Presentation Design",
            imageUrl: "https://google.com/favicon.ico",
            linkUrl: "/services/design",
            tags: ["hello", "google"]
        },
        {
            title: "Presentation Design",
            imageUrl: "https://google.com/favicon.ico",
            linkUrl: "/services/design",
            tags: ["hello", "google"]
        },
        {
            title: "Presentation Design",
            imageUrl: "https://google.com/favicon.ico",
            linkUrl: "/services/design",
            tags: ["hello", "google"]
        },
    ]
    return <section id="our-work">

        <div className="p-8 container">
            <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl mb-4 md:mb-8 ">

                <p className="">Work that drives results</p>
                <p className="text-lg font-headlines leading-tight  font-medium">
                    We partner with businesses to create design systems that scale. <br />
                    From brand foundations to digital products
                    —here&apos;s what we&apos;ve built.
                </p>

            </h2>
            <div className="p-1 px-4 mb-2 flex flex-wrap gap-4 space-x-4 space-y-2 text-xl font-technical uppercase font-medium  text-offWhite bg-primary0">
                <Pill>All Work</Pill>
                <Pill>Brand Identity</Pill>
                <Pill>Web & Product</Pill>
                <Pill>Marketing Assets</Pill>
                <Pill>Print & Packaging</Pill>
            </div>

        </div>

        <div className="p-8  ">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    agencyServices.map((service, index) => {
                        return <Link key={"serviceCardId" + index} href={service.linkUrl} className=' hover:text-white bg-offWhite hover:bg-primary0 hover:shadow-md hover:shadow-primary0-400 transition-all'>
                            <div className={'border-black border-2 border-b-16  dark:border-off-white p-8 '}>
                                <div className='mb-2'>
                                    <img src={service.imageUrl} className='w-full h-64 object-cover' alt={service.title + " service card"} />
                                </div>
                                <p className='mb-1 font-medium font-headlines text-headline-large uppercase'>
                                    {service.title}
                                </p>
                                <div className=" mb-2 flex flex-wrap gap-0.5 space-x-4 space-y-2 text-xl font-technical uppercase font-medium  text-offWhite">
                                    {service.tags.map((tag, index) => {
                                        return <Pill color="primary" key={"serviceTagId-" + index}>{tag}</Pill>
                                    })}
                                </div>
                            </div>
                        </Link>;
                    })
                }
            </div>
        </div>
        <hr className="border-black dark:border-off-white1B mb-12" />
    </section>
}