import { faqs } from "@/app/about/sections/faq";
import { MegaMenu, Faq, Footer, Pill } from "@/app/components";
// import { WorkCardProps } from "@/app/components/WorkCard";
import Link from "next/link";

type Blog = {
    title: string,
    slug: string,
    imageUrl: string,
    summary: string,
    category: "design" | "branding" | "marketing" | "business" | "studio",
    readTimeMins: number,
    publishedAt: string,
    author: string,
    authorAvatarUrl?: string,
    isFeatured?: boolean,
    tags?: string[],
}

const agencyBlogs: Blog[] = [
    {
        title: "Why Solo Design Studios Are Winning B2B Clients From Big Agencies",
        slug: "solo-studios-winning-b2b-clients",
        imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop",
        summary: "Businesses are moving away from bloated agency retainers. Here's why a focused solo studio often delivers better work, faster — and what that means for you.",
        category: "business",
        readTimeMins: 5,
        publishedAt: "",        
        author: "Mc Samuel",
        isFeatured: true,
        authorAvatarUrl: "https://avatars.githubusercontent.com/u/66551316?v=4",
    },
    {
        title: "The Design Trends B2B Brands Should Actually Pay Attention to in 2025",
        slug: "b2b-design-trends-2025",
        imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop",
        summary: "Not every trend is worth chasing. Here are the ones that actually affect how B2B buyers perceive your brand — and which ones to ignore.",
        category: "design",
        readTimeMins: 6,
        publishedAt: "",
        author: "Sweet Potato"
    },
    {
        title: "What We Learned Designing a Full Brand Identity in 5 Days",
        slug: "brand-identity-in-5-days",
        imageUrl: "https://images.unsplash.com/photo-1636622433525-127afdf3662d?w=800&auto=format&fit=crop",
        summary: "Speed doesn't have to mean shortcuts. Here's how we approached a full brand identity project on a tight timeline — and what we'd do differently.",
        category: "branding",
        readTimeMins: 4,
        publishedAt: "",
        author: "Alison Burgers",
        isFeatured: true,
    },
    {
        title: "Good Design Is a Business Decision — Not Just an Aesthetic One",
        slug: "design-is-a-business-decision",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
        summary: "Every design choice affects how your customers trust, perceive, and buy from you. Here's why design belongs in the boardroom, not just the marketing team.",
        category: "design",
        readTimeMins: 3,
        publishedAt: "",
        author: "Clarkson Bro"
    },
    {
        title: "The Productized Design Model — How It Works and Why We Use It",
        slug: "productized-design-model-explained",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
        summary: "Flat monthly pricing, one request at a time, pause anytime — here's why we chose the productized model and how it benefits the businesses we work with.",
        category: "studio",
        readTimeMins: 5,
        publishedAt: "",
        author: "Van Damme"
    },
    {
        title: "5 Signs Your Brand Has Outgrown Its Current Design",
        slug: "signs-your-brand-needs-a-refresh",
        imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop",
        summary: "Brands grow. Sometimes the design doesn't keep up. Here are the clearest signs it's time for a refresh — and what to do about it.",
        category: "business",
        readTimeMins: 2,
        publishedAt: "",
        author: "Claude Jean"
    },
    {
        title: "How to Get the Most Out of a Design Retainer",
        slug: "how-to-use-a-design-retainer",
        imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop",
        summary: "A retainer is only as good as how you use it. Here's how to structure your requests, manage turnarounds, and get maximum value every month.",
        category: "studio",
        readTimeMins: 5,
        publishedAt: "",
        author: "Mc Samuel",
        isFeatured: true,
        authorAvatarUrl: "https://gitlab.com/uploads/-/system/user/avatar/26929659/avatar.png",
    },
    {
        title: "What Makes a Trade Show Booth Actually Work",
        slug: "trade-show-booth-design-that-works",
        imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop",
        summary: "Most trade show booths blend into the background. Here's what separates the ones that stop foot traffic from the ones people walk past.",
        category: "design",
        readTimeMins: 4,
        publishedAt: "",
        author: "Clarkson Bro"
    },
]


export default function BlogsPage() {

    const slugToUrl = (slug: string) => "/resources/blogs/" + slug;
    const getBlogCard = function (blog: Blog, index: number): JSX.Element {
        return <Link href={slugToUrl(blog.slug)} key={"featuredBlog" + index} id={blog.slug} className={"flex flex-col justify-between p-8 border-b md:border-r md:border-b border-black dark:border-off-white  hover:text-white bg-offWhite1B hover:bg-primary0 hover:shadow-md hover:shadow-primary0-400 transition-all duration-300 h-full"}>
            <div className='space-y-1'>
                <div className="bg-primary0">
                    {/* <hr className="border-black dark:border-off-white1B" /> */}
                    <div className="container flex space-x-4 items-center">
                        <img src={blog.authorAvatarUrl ?? "/images/site/logoicon.png"} alt={ blog.author + "avatar"} className="h-8 w-8 object-cover bg-primary0  saturate-0" />
                        <p className="uppercase font-mono text-off-white">{blog.author}</p>
                    </div>
                </div>
                <div className='relative bg-gray-300'>
                    <img src={blog.imageUrl} alt={blog.title + " banner"} className="object-cover h-64 w-full" />
                </div>


                <h4 className='font-headlines text-headline-small uppercase my-2 font-bold'>{blog.title}</h4>
                <p className="pb-1">{blog.category ? <Pill>{blog.category}</Pill> : ""}</p>
                <p className='mb-4 font-body text-body-large'>{blog.summary}
                </p>

            </div>
            <span className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between'>
                <div className='flex'>
                    <div className='pl-2 flex text-primary1B border-b border-b-primary sm:border-b-primary1B font-headlines font-medium text-headline-small uppercase  hover:text-white hover:bg-primary1B hover:shadow-sm hover:duration-150'>
                        <span>Read Full Blog</span>
                        <span>
                            <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z" /></svg>
                        </span>
                    </div>
                </div>
                <div className='flex'>
                    <p className="text-offWhite py-2">
                        <Pill>{blog.readTimeMins + "min"}</Pill>
                    </p>
                </div>
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

                        {
                            agencyBlogs.map((blog, index) => {
                                if (blog.isFeatured) {
                                    return getBlogCard(blog, index)
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
                    <div id="all-blogs" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                        {
                            agencyBlogs.map((blog, index) => getBlogCard(blog, index))
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