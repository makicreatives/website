'use client'

import { Pill } from '@/app/components';
import { Blog } from '@/app/resources/blogs/blogs-page';
import Image from 'next/image';
import Link from "next/link";


type GoodBlog = Blog & {
    isComingSoon?: boolean
}

const socialGoodArticles: GoodBlog[] = [
    {
        title: "Why We Don't Design for Gambling and Sports Betting Brands",
        slug: "",
        imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop",
        summary: "Gambling design is built to keep people in — longer sessions, faster decisions, less friction to spend. We find it more beneficial to put those skills somewhere else.",
        category: "social-good",
        readTimeMins: 4,
        publishedAt: "",
        author: "Studio",
        isFeatured: false,
        isComingSoon: true,
        tags: ["Design Ethics", "Studio Values", "Social Good"]
    },
    {
        title: "The Hidden Cost of Designing Products That Exploit Compulsive Behaviour",
        slug: "",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
        summary: "Some industries are built on dependency — not loyalty. There's a difference, and design plays a bigger role in that distinction than most people admit.",
        category: "social-good",
        readTimeMins: 5,
        publishedAt: "",
        author: "Studio",
        isFeatured: false,
        isComingSoon: true,
        tags: ["Design Ethics", "Behaviour", "Responsibility"]
    },
    {
        title: "Why We Choose Clients Who Build Things That Last",
        slug: "",
        imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop",
        summary: "Not every brief is worth taking. We work with businesses building something real — and we turn down work that we wouldn't be proud to put in our portfolio.",
        category: "social-good",
        readTimeMins: 3,
        publishedAt: "",
        author: "Studio",
        isFeatured: false,
        isComingSoon: true,
        tags: ["Studio Values", "Client Selection", "Design Ethics"]
    },
    {
        title: "Design Has Side Effects — And We(People) are Responsible for Them",
        slug: "",
        imageUrl: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&auto=format&fit=crop",
        summary: "Every design decision influences how people think, feel, and behave. That influence doesn't stop at the screen — and neither does our responsibility as designers.",
        category: "social-good",
        readTimeMins: 6,
        publishedAt: "",
        author: "Studio",
        isFeatured: false,
        isComingSoon: true,
        tags: ["Design Ethics", "Social Impact", "Responsibility"]
    },
    {
        title: "What 'Do Good Design' Actually Means for a B2B Studio",
        slug: "",
        imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
        summary: "It's not about saving the world with every logo. It's about making deliberate choices — about who you work with, what you build, and what you quietly walk away from.",
        category: "social-good",
        readTimeMins: 5,
        publishedAt: "",
        author: "Studio",
        isFeatured: false,
        isComingSoon: true,
        tags: ["Studio Values", "Design Ethics", "Social Good"]
    },
]


export default function GoodSection() {


    const slugToUrl = (slug: string) => "/resources/blogs/" + slug;
    const getBlogCard = function (blog: GoodBlog, index: number): JSX.Element {
        return <Link href={blog.slug ? slugToUrl(blog.slug) : "javascript:;"} key={"featuredBlog" + index} id={blog.slug} className={"flex flex-col justify-between p-8 border-b md:border-r md:border-b border-black dark:border-off-white  hover:text-white bg-offWhite1B hover:bg-primary0 hover:shadow-md hover:shadow-primary0-400 transition-all duration-300 h-full"}>
            <div className='space-y-1'>
                <div className='relative bg-gray-300'>
                    <img src={blog.imageUrl} alt={blog.title + " banner"} className="object-cover h-64 w-full" />
                </div>

                <h4 className='font-headlines text-headline-small uppercase my-2 font-bold'>{blog.title}</h4>

                <span className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between'>
                    <div className='flex'>
                        <p className="pb-1"><Pill>{blog.category.split('-').join(' ')}</Pill></p>
                    </div>
                    <div className='flex'>
                        <p className="text-offWhite ">
                            {blog.isComingSoon ? "" : new Date(blog.publishedAt).getFullYear()}
                        </p>
                    </div>
                </span>
                <p className='mb-4 font-body text-body-large'>{blog.summary}
                </p>

            </div>
            <span className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between'>
                <div className='flex'>
                    {blog.slug ? <div className='pl-2 flex text-primary1B border-b border-b-primary sm:border-b-primary1B font-headlines font-medium text-headline-small uppercase  hover:text-white hover:bg-primary1B hover:shadow-sm hover:duration-150'>
                        <span>Read Article</span>
                        <span>
                            <svg className='h-4' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z" /></svg>
                        </span>
                    </div> : ""
                    }
                </div>
                <div className='flex'>
                    <p className="text-offWhite py-2">
                        {blog.slug ? <Pill>{blog.readTimeMins + "min"}</Pill> : ""}
                    </p>
                </div>
            </span>


        </Link>;
    }



    return <>
        <main className="pt-8">
            <div className={"flex justify-center py-12  bg-black"}>
                <div className="flex flex-wrap justify-center items-center px-8 pb-4 ">
                    <span className="relative h-28 w-24 ">
                        <Image src={"/images/site/DavidBerman.png"} alt={"paul rand portrait"} layout="fill" className="bg-gray-300 bg-opacity-40 object-cover rounded-[180px] saturate-0"></Image>
                    </span>
                    <div className=" p-8 text-off-white">
                        <span className=" font-normal font-body leading-tight">&ldquo;<b>Don&apos;t just do good design,... Do Good.</b>&rdquo;
                            <br />
                        </span>
                        <span className="text-title-medium font-medium font-title">— David Berman, Communication Designer
                        </span>
                    </div>
                </div>
            </div>
            <hr className="hidden border-black dark:border-off-white1B" />
        </main>
        <section>

        </section>
        <hr className="border-black dark:border-off-white1B" />
        <section id="all" className="pb-8 md:pb-14">
            <div className=" bg-primary0 text-off-white1B">
                <h2 className="h2 font-display font-medium  text-display-medium md:text-5xl p-4 md:p-8 ">

                    
                    <p className="text-lg font-headlines leading-snug  font-medium">
                        <p className="hidden md:inline">
                            Design shapes behaviour. We take that seriously — <br className="hidden md:block" />
                            and choose our work accordingly.<br />
                        </p>
                        {/* Fill in the form and we&apos;ll get back to you within 24 hours. */}
                    </p>
                    <p className=" mt-2 text-accent1-300">Design for good!</p>

                </h2>
            </div>
            <hr className="border-black dark:border-off-white1B" />
            <div id="all-blogs" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                {
                    socialGoodArticles.map((blog, index) => getBlogCard(blog, index))
                }
            </div>
        </section>
        <hr className="border-black dark:border-off-white1B" />
    </>
}

